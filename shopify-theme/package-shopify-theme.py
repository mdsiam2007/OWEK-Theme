import os
import zipfile

def package_theme():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    source_dir = current_dir
    output_zip = os.path.join(current_dir, "owek-shopify-theme.zip")

    if os.path.exists(output_zip):
        os.remove(output_zip)

    # Folders to include in Shopify theme zip
    valid_folders = {'assets', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates'}

    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            rel_root = os.path.relpath(root, source_dir)
            first_part = rel_root.split(os.path.sep)[0]
            
            # Only package core Shopify theme folders
            if first_part not in valid_folders and rel_root != '.':
                continue

            for file in files:
                if file.endswith('.zip') or file.endswith('.py') or file == 'README.md':
                    continue
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, source_dir)
                posix_path = rel_path.replace(os.path.sep, '/')
                zipf.write(file_path, posix_path)

    # Verification
    with zipfile.ZipFile(output_zip, 'r') as zipf:
        entries = zipf.namelist()
        print(f"Total entries packaged: {len(entries)}")
        has_theme_liquid = 'layout/theme.liquid' in entries
        print(f"'layout/theme.liquid' verified: {has_theme_liquid}")
        
        backslash_entries = [e for e in entries if '\\' in e]
        if backslash_entries:
            print(f"WARNING: Found backslashes in {len(backslash_entries)} entries: {backslash_entries[:3]}")
        else:
            print("SUCCESS: 100% of zip entries use UNIX forward slashes ('/')!")

    size_mb = os.path.getsize(output_zip) / (1024 * 1024)
    print(f"SUCCESS: Shopify Theme Zip Created: {output_zip} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    package_theme()
