#!/usr/bin/env python3
import re
import sys

def fix_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace summary: ' with summary: `
    content = re.sub(r"summary: '", r'summary: `', content)

    # Replace ', at the end of summary (before keyPoints) with `,
    content = re.sub(r"',(\s+keyPoints:)", r'`,\1', content)

    # Escape any backticks that appear inside the summary content
    # This is tricky - we need to escape backticks that are between summary: ` and `,
    # But NOT the opening and closing backticks we just added

    # Find all summary blocks and escape backticks inside them
    def escape_backticks_in_summary(match):
        summary_content = match.group(1)
        # Escape all backticks in the summary content
        escaped_content = summary_content.replace('`', '\\`')
        return f'summary: `{escaped_content}`,'

    content = re.sub(r'summary: `(.*?)`,', escape_backticks_in_summary, content, flags=re.DOTALL)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Fixed {filename}')

if __name__ == '__main__':
    files = [
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
