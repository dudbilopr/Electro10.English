"""
Fix remaining Spanish text in game files, JS files, presentations, and index.html.
"""
import os, re

BUILD = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Broad Spanish → English replacements for game/presentation/JS files
REPLACEMENTS = [
    # Achievement names
    ("Maestro Amperiano",     "Amperian Master"),
    ("Maestro de la Induction","Induction Master"),
    ("Maestro de la Resonancia","Resonance Master"),
    ("Maestro Gauss",         "Gauss Master"),
    ("Maestro del Campo",     "Field Master"),
    ("Maestro Coulomb",       "Coulomb Master"),
    ("Maestro del Potencial", "Potential Master"),
    ("Maestro de la Capacitancia","Capacitance Master"),
    ("Maestro de los Circuits","Circuit Master"),
    ("Maestro de Lorentz",    "Lorentz Master"),
    ("Maestro Biot",          "Biot-Savart Master"),
    ("Maestro Maxwell",       "Maxwell Master"),
    ("Maestro",               "Master"),
    # Common physics terms still in Spanish
    ("flujo magnético",       "magnetic flux"),
    ("Flujo magnético",       "Magnetic flux"),
    ("flujo eléctrico",       "electric flux"),
    ("Flujo eléctrico",       "Electric Flux"),
    ("campo magnético",       "magnetic field"),
    ("Campo magnético",       "Magnetic Field"),
    ("campo eléctrico",       "electric field"),
    ("Campo eléctrico",       "Electric Field"),
    ("flujo",                 "flux"),
    ("Flujo",                 "Flux"),
    ("Ley de Ampere",         "Ampere's Law"),
    ("Ley de Gauss",          "Gauss's Law"),
    ("Ley de Faraday",        "Faraday's Law"),
    ("Ley de Ohm",            "Ohm's Law"),
    ("Ley de Lenz",           "Lenz's Law"),
    ("Ley de Coulomb",        "Coulomb's Law"),
    ("Ley de Maxwell",        "Maxwell's Law"),
    ("Ley de Biot-Savart",    "Biot-Savart Law"),
    ("ley de",                "law of"),
    ("Ley de",                "Law of"),
    ("campo",                 "field"),
    ("Campo",                 "Field"),
    ("Campos",                "Fields"),
    ("corriente alterna",     "alternating current"),
    ("Corriente alterna",     "Alternating Current"),
    ("corriente de desplazamiento","displacement current"),
    ("Corriente de desplazamiento","Displacement Current"),
    ("corriente",             "current"),
    ("Corriente",             "Current"),
    ("magnético",             "magnetic"),
    ("magnética",             "magnetic"),
    ("Magnético",             "Magnetic"),
    ("Magnética",             "Magnetic"),
    ("eléctrico",             "electric"),
    ("eléctrica",             "electric"),
    ("Eléctrico",             "Electric"),
    ("Eléctrica",             "Electric"),
    ("oscilaciones",          "oscillations"),
    ("Oscilaciones",          "Oscillations"),
    ("solenoides",            "solenoids"),
    ("Solenoides",            "Solenoids"),
    ("toroides",              "toroids"),
    ("Toroides",              "Toroids"),
    ("Estilo de aprendizaje", "Learning Style"),
    ("Estilo",                "Style"),
    ("velocidad de la luz",   "speed of light"),
    ("Velocidad de la luz",   "Speed of Light"),
    ("velocidad",             "speed"),
    ("Velocidad",             "Speed"),
    ("ecuaciones",            "equations"),
    ("Ecuaciones",            "Equations"),
    ("ecuación",              "equation"),
    ("Ecuación",              "Equation"),
    ("configuraciones",       "configurations"),
    ("Configuraciones",       "Configurations"),
    ("distribución",          "distribution"),
    ("Distribución",          "Distribution"),
    ("simetría",              "symmetry"),
    ("Simetría",              "Symmetry"),
    ("geometría",             "geometry"),
    ("Geometría",             "Geometry"),
    ("energía",               "energy"),
    ("Energía",               "Energy"),
    ("frecuencia",            "frequency"),
    ("Frecuencia",            "Frequency"),
    ("inductancia",           "inductance"),
    ("Inductancia",           "Inductance"),
    ("impedancia",            "impedance"),
    ("Impedancia",            "Impedance"),
    ("resonancia",            "resonance"),
    ("Resonancia",            "Resonance"),
    ("inducción",             "induction"),
    ("Inducción",             "Induction"),
    ("carga",                 "charge"),
    ("Carga",                 "Charge"),
    ("cargas",                "charges"),
    ("Cargas",                "Charges"),
    # index.html specific
    ("Estilo del aprendizaje","Learning Style"),
    ("mi estilo",             "my style"),
    # profile.js
    ("Campos de estudio",     "Fields of study"),
    # Presentations
    ("Ley de Faraday — ",     "Faraday's Law — "),
]

SKIP_DIRS = {'node_modules', '.git', '__pycache__', 'scripts', '.agents'}
SKIP_EXTS = {'.png', '.jpg', '.gif', '.ico', '.mp4', '.webp', '.svg', '.woff', '.ttf', '.eot', '.woff2', '.map', '.py'}
TARGET_EXTS = {'.html', '.js', '.css', '.json', '.md', '.txt'}

def fix_remaining_spanish():
    fixed_files = []
    for root, dirs, files in os.walk(BUILD):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for fn in files:
            ext = os.path.splitext(fn)[1].lower()
            if ext not in TARGET_EXTS:
                continue
            path = os.path.join(root, fn)
            try:
                with open(path, encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                original = content
                for es, en in REPLACEMENTS:
                    content = content.replace(es, en)
                if content != original:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    fixed_files.append(os.path.relpath(path, BUILD))
            except Exception as e:
                print(f"  [ERROR] {fn}: {e}")
    return fixed_files

if __name__ == "__main__":
    print("=== Fixing remaining Spanish text across all files ===")
    fixed = fix_remaining_spanish()
    print(f"Fixed {len(fixed)} files:")
    for f in fixed:
        print(f"  [FIXED] {f}")
    print("\n[DONE]")
