#!/usr/bin/env python3
import re

def fix_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strategy: Find each summary value and process it
    # summary: X,
    # where X is the string we need to fix

    def fix_summary_value(match):
        indent = match.group(1)
        value = match.group(2)

        # If it starts with a backtick or quote, it's already quoted
        if value.startswith('`') or value.startswith('"') or value.startswith("'"):
            # Remove opening quote/backtick
            value = value[1:]
            # Find and remove closing quote/backtick before the comma
            if value.endswith('`,'):
                value = value[:-2]
            elif value.endswith('",'):
                value = value[:-2]
            elif value.endswith("',"):
                value = value[:-2]
            elif value.endswith(','):
                value = value[:-1]

        # Now value is the raw content
        # Escape any backticks in the content
        value = value.replace('`', '\\`')
        value = value.replace('${', '\\${')  # Escape template literal expressions

        # Return with template literal syntax
        return f'{indent}summary: `{value}`,'

    # Match summary: VALUE, where VALUE can be multiline
    content = re.sub(
        r'^(\s+)summary: (.+?),\s*$',
        fix_summary_value,
        content,
        flags=re.MULTILINE | re.DOTALL
    )

    # Actually, let's use a different approach - match from summary: to keyPoints:
    def fix_summary_block(match):
        indent = match.group(1)
        value = match.group(2).strip()

        # Remove any quotes or backticks at start/end
        value = value.strip('`"' + "'")
        value = value.rstrip(',')

        # Escape backticks and template literal expressions
        value = value.replace('`', '\\`')
        value = value.replace('${', '\\${')

        return f'{indent}summary: `{value}`,\n{indent}keyPoints:'

    content = re.sub(
        r'^(\s+)summary: (.+?)\s+keyPoints:',
        fix_summary_block,
        content,
        flags=re.MULTILINE | re.DOTALL
    )

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
            import traceback
            traceback.print_exc()
