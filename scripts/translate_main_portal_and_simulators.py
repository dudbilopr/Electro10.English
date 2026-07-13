import os
import re

BUILD_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

REGEX_REPLACEMENTS = [
    (r"Coulomb\\'s Law Interactiva", r"Coulomb\'s Law Interactive"),
    (r"Coulomb's Law Interactiva", r"Coulomb\'s Law Interactive"),
    (r"3\.1 Coulomb\\'s Law Interactive", r"3.1 Coulomb\'s Law Interactive"),
    (r"3\.2 Análisis de Charges", r"3.2 Charge Analysis"),
    (r"3\.3 Superposition de Forces", r"3.3 Superposition of Forces"),
    (r"Force entre Electric Charges y principio de superPosition", r"Force between electric charges and superposition principle"),
    (r"Suma de Vectors \(Physics Mecánica\)", r"Vector Addition (Classical Mechanics)"),
    (r"Trigonometría Básica \(Seno/Coseno\)", r"Basic Trigonometry (Sine/Cosine)"),
    (r"Notación Científica", r"Scientific Notation"),
    (r"Balanza de Torsión de Coulomb", r"Coulomb\'s Torsion Balance"),
    (r"Examen Diagnóstico de Presaberes", r"Diagnostic Pre-Assessment"),
    (r"Examen Diagnóstico", r"Diagnostic Pre-Assessment"),
    (r"Presaberes", r"Pre-Assessment"),
    (r"Modulo 0", r"Module 0"),
    (r"Módulo 0", r"Module 0"),
    (r"Módulo ", r"Module "),
    (r"modulo ", r"module "),
    (r"lección", r"lesson"),
    (r"Lección", r"Lesson"),
    (r"descubriendo la ley de la inversa del cuadrado\.", r"discovering the inverse-square law."),
    (r"PANEL ACADÉMICO", r"ACADEMIC PANEL"),
    (r"Universo de Conocimiento", r"Knowledge Universe"),
    (r"Mi Perfil", r"My Profile"),
    (r"Centro de Simulaciones", r"Simulation Center"),
    (r"Cerebro de Conocimiento", r"Knowledge Brain"),
    (r"Panel Admin", r"Admin Panel"),
    (r"CONTENIDO DEL CURSO", r"COURSE CONTENT"),
    (r"Ruta de Aprendizaje", r"Learning Path"),
    (r"Progreso Flexible", r"Flexible Progress"),
    (r"welcome A TU VIAJE ACADÉMICO", r"WELCOME TO YOUR ACADEMIC JOURNEY"),
    (r"Índice de Finalización", r"Completion Rate"),
    (r"Sobre el autor", r"About the Author"),
    (r"Correo electrónico", r"Email Contact"),
    (r"Level Cognitivo", r"Cognitive Level"),
    (r"Autoevaluaciones por Module", r"Self-Assessments by Module"),
    (r"Asistente IA", r"AI Assistant"),
    (r"Expandir", r"Expand"),
    (r"Ingresar", r"Login"),
    (r"Usuario", r"User"),
    (r"Notificaciones", r"Notifications"),
    (r"Ayuda", r"Help")
]

def clean_all():
    count = 0
    for root, dirs, files in os.walk(BUILD_DIR):
        if any(ignored in root for ignored in [".git", "node_modules", "scripts"]):
            continue
        for f in files:
            if f.endswith((".html", ".js")):
                path = os.path.join(root, f)
                try:
                    with open(path, "r", encoding="utf-8") as file:
                        content = file.read()
                except Exception as e:
                    continue
                
                original = content
                for pattern, repl in REGEX_REPLACEMENTS:
                    content = re.sub(pattern, repl, content)
                
                if content != original:
                    with open(path, "w", encoding="utf-8") as file:
                        file.write(content)
                    count += 1
                    print(f"[REGEX CLEANED] {os.path.relpath(path, BUILD_DIR)}")
    print(f"\nTotal files regex cleaned: {count}")

if __name__ == "__main__":
    clean_all()
