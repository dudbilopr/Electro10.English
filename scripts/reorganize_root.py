import os
import shutil
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Map of old dir names to new dir names
RENAMES = {
    "Examen": "quizzes",
    "Games": "games",
    "modulesJS": "modules",
    "Presentations": "presentations",
    "Simulatores": "simulators",
    "Workshops": "workshops"
}

# Directories to move to 'resources'
Resources = ["Logo", "Mathematics", "_archive"]

def move_dirs():
    print("Moving and renaming directories...")
    
    # Create Resources if it doesn't exist
    Resources_path = os.path.join(BASE_DIR, "resources")
    if not os.path.exists(Resources_path):
        os.makedirs(Resources_path)
    
    # 1. Rename standard folders
    for old, new in RENAMES.items():
        old_path = os.path.join(BASE_DIR, old)
        new_path = os.path.join(BASE_DIR, new)
        if os.path.exists(old_path):
            print(f"Renaming {old} -> {new}")
            shutil.move(old_path, new_path)
            
    # 2. Move to Resources
    for item in Resources:
        item_path = os.path.join(BASE_DIR, item)
        if os.path.exists(item_path):
            print(f"Moving {item} -> resources/{item}")
            shutil.move(item_path, os.path.join(Resources_path, item))
            
def update_references():
    print("Updating references in code...")
    
    # Files to process
    exts = ('.html', '.js', '.css', '.py')
    
    # Mapping for string replacements
    # Need to be careful with word boundaries or paths
    # It's safest to replace specifically formatted paths to avoid false positives.
    # We will replace occurrences like "modulesJS/" -> "modules/"
    # or "Games/" -> "games/"
    replacements = {
        "Examen/": "quizzes/",
        "Games/": "games/",
        "modulesJS/": "modules/",
        "Presentations/": "presentations/",
        "Simulatores/": "simulators/",
        "Workshops/": "workshops/",
        "Logo/": "resources/Logo/",
        "Mathematics/": "resources/Mathematics/",
        "_archive/": "resources/_archive/"
    }
    
    count = 0
    for root, dirs, files in os.walk(BASE_DIR):
        # Skip hidden dirs or node_modules if any
        if '.git' in root or '.gemini' in root:
            continue
            
        for file in files:
            if file.endswith(exts):
                filepath = os.path.join(root, file)
                
                # Do not modify this script itself to avoid breaking during execution
                if filepath == os.path.abspath(__file__):
                    continue
                    
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    
                new_content = content
                
                for old_val, new_val in replacements.items():
                    # Replace things like href="Games/..." or src="./modulesJS/..."
                    # We can simply replace the substring safely because they are very specific folder names followed by /
                    new_content = new_content.replace(old_val, new_val)
                
                # Special cases where the word might not have a trailing slash
                # e.g., if there's code dynamically appending to "modulesJS" 
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
                    count += 1
                    
    print(f"Finished updating {count} files.")

if __name__ == "__main__":
    move_dirs()
    update_references()
    print("Reorganization complete.")
