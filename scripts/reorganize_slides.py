import os
import shutil

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Presentations_DIR = os.path.join(BASE_DIR, "Presentations")

if not os.path.exists(Presentations_DIR):
    os.makedirs(Presentations_DIR)

mapping = {
    "Clase1": "M1_Coulomb",
    "Clase2": "M2_Gauss",
    "Clase3": "M3_Potential",
    "Clase4": "M4_Materials",
    "Clase5": "M5_Capacitance",
    "Clase7": "M7_Lorentz",
    "Clase8": "M8_BiotSavart"
}

for old_name, new_name in mapping.items():
    old_path = os.path.join(BASE_DIR, old_name)
    new_path = os.path.join(Presentations_DIR, new_name)
    if os.path.exists(old_path):
        print(f"Moving {old_path} -> {new_path}")
        shutil.move(old_path, new_path)
    else:
        print(f"Warning: {old_path} not found.")

print("Reorganization complete.")
