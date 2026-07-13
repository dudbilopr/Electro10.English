"""
Phase 3: Add microteaching entries to all modules + fix remaining Spanish in JS files + fix blank space.
"""
import os, re

BUILD = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# ─── 1. Microteaching entries per module ────────────────────────────────────
MICROTEACHING_ENTRIES = {
    "module1.js":  {"id": "m1-mt",  "titulo": "0. EMI Microteaching — Coulomb's Law",   "topic": "Coulomb's Law & Electric Charges"},
    "module2.js":  {"id": "m2-mt",  "titulo": "0. EMI Microteaching — Electric Field",  "topic": "Electric Field Vectors & Field Lines"},
    "module3.js":  {"id": "m3-mt",  "titulo": "0. EMI Microteaching — Gauss's Law",     "topic": "Electric Flux & Gaussian Surfaces"},
    "module4.js":  {"id": "m4-mt",  "titulo": "0. EMI Microteaching — Electric Potential","topic": "Electric Potential & Equipotentials"},
    "module5.js":  {"id": "m5-mt",  "titulo": "0. EMI Microteaching — Capacitance",     "topic": "Capacitors, Dielectrics & Energy"},
    "module6.js":  {"id": "m6-mt",  "titulo": "0. EMI Microteaching — DC Circuits",     "topic": "Current, Resistance & Kirchhoff's Laws"},
    "module7.js":  {"id": "m7-mt",  "titulo": "0. EMI Microteaching — Lorentz Force",   "topic": "Magnetic Force on Charges & Conductors"},
    "module8.js":  {"id": "m8-mt",  "titulo": "0. EMI Microteaching — Biot-Savart",     "topic": "Magnetic Field of Current-Carrying Wires"},
    "module9.js":  {"id": "m9-mt",  "titulo": "0. EMI Microteaching — Ampere's Law",    "topic": "Magnetic Circulation & Solenoids"},
    "module10.js": {"id": "m10-mt", "titulo": "0. EMI Microteaching — Faraday's Law",   "topic": "Electromagnetic Induction & Lenz's Law"},
    "module11.js": {"id": "m11-mt", "titulo": "0. EMI Microteaching — Maxwell",          "topic": "Maxwell's Equations & EM Waves"},
    "module12.js": {"id": "m12-mt", "titulo": "0. EMI Microteaching — AC Circuits",     "topic": "Phasors, Impedance & Resonance"},
}

def make_mt_entry(info):
    return (
        f'        {{ "id":"{info["id"]}", "tipo":"microteaching", "recurso":"microteaching.html", '
        f'"titulo":"{info["titulo"]}", '
        f'"descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: {info["topic"]}.", '
        f'"xp":30 }},\n'
    )

def add_microteaching_to_modules():
    mods_dir = os.path.join(BUILD, "modules")
    for filename, info in MICROTEACHING_ENTRIES.items():
        path = os.path.join(mods_dir, filename)
        if not os.path.exists(path):
            print(f"[SKIP] {filename} not found")
            continue
        with open(path, encoding="utf-8") as f:
            content = f.read()
        
        # Already inserted?
        if info["id"] in content:
            print(f"[SKIP] {filename} already has microteaching entry")
            continue
        
        # Insert as first item in lecciones array
        mt_line = make_mt_entry(info)
        # Find "lecciones": [ and insert after it
        pattern = r'("lecciones"\s*:\s*\[)(\s*\{)'
        replacement = r'\1\n' + mt_line.rstrip('\n') + r'\2'
        new_content = re.sub(pattern, replacement, content, count=1)
        
        if new_content != content:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"[MT-ADDED] {filename}")
        else:
            print(f"[WARN] Could not inject MT into {filename}")

# ─── 2. Fix remaining Spanish strings in JS/HTML ────────────────────────────
SPANISH_FIXES = [
    # content-loader.js
    ("Recomendación de Exploración", "Exploration Recommendation"),
    ("Bibliografía Recomendada", "Recommended Bibliography"),
    ("Contexto Histórico", "Historical Context"),
    ("Equations Principales", "Key Equations"),
    ("Apuntes Guardados", "Notes Saved"),
    ("Tus notas se han sincronizado.", "Your notes have been synchronized."),
    ("Explora el recurso analítico.", "Explore this analytical resource."),
    ("El Professor aún no ha loaded enlaces.", "The instructor has not yet added links."),
    ("Diagnóstico Holístico (CHAEA + Kolb + IM)", "Holistic Diagnosis (CHAEA + Kolb + MI)"),
    ("Identifica tu perfil neuro-cognitivo para recibir recomendaciones personalizadas de estudio.", "Identify your neuro-cognitive profile to receive personalized study recommendations."),
    ("start Centro de Diagnóstico Ahora", "Start Diagnostic Center Now"),
    # app.js
    ("Recomendación de Exploración", "Exploration Recommendation"),
    ("¡Has completado todas las exploraciones disponibles!", "You have completed all available explorations!"),
    ("¡objective Alcanzado!", "Goal Reached!"),
    ("objective Alcanzado!", "Goal Reached!"),
    ("¡Dedicación Recompensada!", "Dedication Rewarded!"),
    ("Has dominado esta lesson. (+Progreso)", "You have mastered this lesson. (+Progress)"),
    ("¡Apunte Guardado!", "Note Saved!"),
    ("Tus conclusiones están seguras en Firestore.", "Your notes are securely stored in Firestore."),
    ("No puedes save un apunte vacío.", "You cannot save an empty note."),
    ("Inicia sesión para save apuntes en la nube.", "Sign in to save notes to the cloud."),
    ("Modo Visitante", "Guest Mode"),
    ("Acceso Restringido", "Access Restricted"),
    ("Ir al Diagnóstico", "Go to Diagnostic"),
    ("Datos de cognición han sido guardados", "Cognition data has been saved"),
    ("Tus datos de cognición han sido guardados.", "Your cognition data has been saved."),
    ("Feedback Científico", "Scientific Feedback"),
    # curriculum.js
    ("Module 1: Electrostática - Coulomb", "Module 1: Electrostatics - Coulomb"),
    ("Selecciona la parte en el panel derecho.", "Select the part in the right panel."),
    ("Material visual utilizado en la clase magistral.", "Visual material used in the lecture."),
    ("Slides de Apoyo", "Support Slides"),
    ("Recurso", "Resource"),
    ("Video Magistral", "Lecture Video"),
    ("Slide", "Slide"),
    # content-loader.js thumbnail cards
    ('"Recurso ${index + 1}"', '"Resource ${index + 1}"'),
    # Spanish in content descriptions
    ("sin conexión", "no connection"),
    ("Error", "Error"),
    ("No se pudo save el apunte. Revisa tu conexión.", "Could not save your note. Please check your connection."),
]

def fix_spanish_in_js():
    js_files = [
        os.path.join(BUILD, "js", "content-loader.js"),
        os.path.join(BUILD, "js", "app.js"),
        os.path.join(BUILD, "js", "curriculum.js"),
        os.path.join(BUILD, "js", "ui.js"),
        os.path.join(BUILD, "js", "auth.js"),
        os.path.join(BUILD, "js", "admin.js"),
        os.path.join(BUILD, "js", "profile.js"),
        os.path.join(BUILD, "js", "brain.js"),
        os.path.join(BUILD, "js", "chaea.js"),
        os.path.join(BUILD, "js", "diagnostics.js"),
        os.path.join(BUILD, "js", "quiz-engine.js"),
        os.path.join(BUILD, "js", "ai-chat.js"),
    ]
    for path in js_files:
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            content = f.read()
        original = content
        for es, en in SPANISH_FIXES:
            content = content.replace(es, en)
        if content != original:
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"[JS-FIXED] {os.path.basename(path)}")

# ─── 3. Fix blank space in index.html dashboard ─────────────────────────────
def fix_blank_space():
    """Remove extra padding/margin that causes blank space between microteaching
    banner section and the Learning Path calendar in the main dashboard view."""
    idx_path = os.path.join(BUILD, "index.html")
    with open(idx_path, encoding="utf-8") as f:
        content = f.read()
    original = content

    # Remove any explicit large padding-bottom or margin-bottom on dashboard hero wrappers
    # Common patterns that cause the gap:
    content = re.sub(r'(id=["\']hero-section["\'][^>]*style=["\'][^"\']*?)padding-bottom:\s*[\d]+px', r'\1padding-bottom:0', content)
    content = re.sub(r'(id=["\']dashboard-hero["\'][^>]*style=["\'][^"\']*?)padding-bottom:\s*[\d]+px', r'\1padding-bottom:0', content)
    content = re.sub(r'(id=["\']next-lesson-container["\'][^>]*style=["\'][^"\']*?)margin-bottom:\s*[\d]+px', r'\1margin-bottom:0', content)

    # Also fix specific CSS class margin in embedded style
    content = re.sub(r'(\.hero-dashboard\s*\{[^}]*?)margin-bottom:\s*[\d]+px', r'\1margin-bottom:0', content)
    content = re.sub(r'(\.dashboard-hero\s*\{[^}]*?)padding-bottom:\s*[\d]+px', r'\1padding-bottom:0', content)
    content = re.sub(r'(\.next-lesson-section\s*\{[^}]*?)margin-top:\s*[\d]+px', r'\1margin-top:0', content)

    if content != original:
        with open(idx_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("[BLANK-SPACE] Fixed padding/margin in index.html")
    else:
        print("[BLANK-SPACE] No regex match in index.html — will fix via app.js")

# ─── 4. Fix blank space via app.js dashboard HTML injection ─────────────────
def fix_blank_space_appjs():
    """Fix blank white space between dashboard microteaching banner and Learning Path
    by ensuring the next-lesson-container wrapper has no bottom margin/padding."""
    app_path = os.path.join(BUILD, "js", "app.js")
    with open(app_path, encoding="utf-8") as f:
        content = f.read()
    original = content

    # The dashboard container that wraps the microteaching section
    # We ensure next-lesson-container has margin-bottom: 0
    content = content.replace(
        'style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);padding:20px;border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;"',
        'style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);padding:20px;border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;margin-bottom:0;"'
    )

    if content != original:
        with open(app_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("[APP-JS] Fixed next-lesson-container margin in app.js")
    else:
        print("[APP-JS] No margin change needed in app.js")

if __name__ == "__main__":
    print("=== Phase 3: Add Microteaching Entries to All Modules ===")
    add_microteaching_to_modules()
    
    print("\n=== Phase 3b: Fix Remaining Spanish Strings in JS Files ===")
    fix_spanish_in_js()
    
    print("\n=== Phase 2: Fix Blank Space in Dashboard ===")
    fix_blank_space()
    fix_blank_space_appjs()
    
    print("\n[DONE] All phases executed.")
