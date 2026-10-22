import os
import re
import json

def check_schemas():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    sections_dir = os.path.join(current_dir, "sections")
    
    if not os.path.exists(sections_dir):
        # Fallback to current working directory
        sections_dir = os.path.abspath("sections")

    schema_pattern = re.compile(r'{%\s*schema\s*%}(.*?){%\s*endschema\s*%}', re.DOTALL)

    errors = []
    checked = 0
    print(f"Scanning sections directory: {sections_dir}")
    
    for file in os.listdir(sections_dir):
        if file.endswith('.liquid'):
            path = os.path.join(sections_dir, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            match = schema_pattern.search(content)
            if match:
                checked += 1
                schema_str = match.group(1).strip()
                try:
                    data = json.loads(schema_str)
                    settings = data.get('settings', [])
                    for s in settings:
                        if s.get('type') == 'url' and 'default' in s and s['default'] not in ['', '/collections', '/collections/all']:
                            errors.append(f"{file}: url setting '{s.get('id')}' has illegal default: '{s.get('default')}'")
                    print(f"[VALID SCHEMA]: {file} -> '{data.get('name')}'")
                except Exception as e:
                    errors.append(f"{file}: Schema JSON parse error: {e}")
            else:
                print(f"[NO SCHEMA]: {file}")

    print(f"\nTotal checked: {checked}")
    if errors:
        print("ERRORS DETECTED:")
        for e in errors:
            print("  [ERROR]:", e)
        return False
    else:
        print("SUCCESS: All section schemas parsed and validated with 0 errors!")
        return True

if __name__ == '__main__':
    check_schemas()
