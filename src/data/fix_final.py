#!/usr/bin/env python3
import re

def fix_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    result = []
    in_summary = False
    summary_lines = []
    indent = ''

    for line in lines:
        # Check if this is the start of a summary
        if re.match(r'^\s+summary:', line):
            in_summary = True
            indent = re.match(r'^(\s+)', line).group(1)
            # Extract everything after "summary: "
            content = re.sub(r'^\s+summary:\s*', '', line)
            summary_lines = [content]
            continue

        # Check if this is the end of summary (keyPoints line)
        if in_summary and re.match(r'^\s+keyPoints:', line):
            # Process and output the summary
            summary_text = ''.join(summary_lines).strip()
            # Remove any quotes or backticks at start/end
            summary_text = summary_text.strip('`"\' \n\r\t')
            summary_text = summary_text.rstrip(',')

            # No escaping needed - just output as template literal
            result.append(f'{indent}summary: `{summary_text}`,\n')
            result.append(line)
            in_summary = False
            summary_lines = []
            continue

        if in_summary:
            summary_lines.append(line)
        else:
            result.append(line)

    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(result)

    print(f'Fixed {filename}')

if __name__ == '__main__':
    files = [
        'chapter1-summaries.js',
        'chapter2-summaries.js',
        'chapter3-summaries.js',
        'chapter4-summaries.js',
        'chapter5-summaries.js',
        'chapter6-summaries.js',
        'chapter7-summaries.js'
    ]

    for file in files:
        try:
            fix_file(file)
        except Exception as e:
            print(f'Error fixing {file}: {e}')
            import traceback
            traceback.print_exc()
