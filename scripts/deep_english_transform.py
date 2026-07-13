#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Deep 100% English Transformation & Standardization Script (`Electro10.English`)
Handles both UTF-8 and Latin-1/Windows-1252 file encodings to eliminate all variations of Spanish keywords and standardize all paths.
"""

import os
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# 1. DIRECTORY RENAMES
DIR_MAP = {
    "simuladores": "simulators",
    "talleres": "workshops",
    "juegos": "games",
    "modulos": "modules",
    "presentaciones": "presentations",
    "recursos": "resources",
    "M3_Potencial": "M3_Potential",
    "M4_Materiales": "M4_Materials",
    "M5_Capacitancia": "M5_Capacitance",
    "M6_Resistivos": "M6_Resistive"
}

# 2. FILE NAME RENAMES
FILE_WORD_MAP = [
    ("Juego_", "Game_"),
    ("modulo1", "module1"),
    ("modulo2", "module2"),
    ("modulo3", "module3"),
    ("modulo4", "module4"),
    ("modulo5", "module5"),
    ("modulo6", "module6"),
    ("modulo7", "module7"),
    ("modulo8", "module8"),
    ("modulo9", "module9"),
    ("modulo10", "module10"),
    ("modulo11", "module11"),
    ("modulo12", "module12"),
    ("Cuestionario_1_Ley_de_Coulomb", "Quiz_1_Coulomb_Law"),
    ("Cuestionario_2_Campo_Electrico", "Quiz_2_Electric_Field"),
    ("Cuestionario_3_Trabajo_Potencial_Electrico", "Quiz_3_Work_Electric_Potential"),
    ("Cuestionario_4_Distribuciones_de_Carga_continua", "Quiz_4_Continuous_Charge_Distributions"),
    ("Cuestionario_5_Flujo_Electrico_Ley_de_Gauss", "Quiz_5_Electric_Flux_Gauss_Law"),
    ("Cuestionario_7_Circuitos_CC", "Quiz_7_DC_Circuits"),
    ("Quiz_Adaptativo_", "Quiz_Adaptive_"),
    ("Sim_M1_Cargas", "Sim_M1_Charges"),
    ("Sim_M1_Coulomb_Basico", "Sim_M1_Coulomb_Basic"),
    ("Sim_M1_Coulomb_Pro", "Sim_M1_Coulomb_Pro"),
    ("Sim_M2_Anillo", "Sim_M2_Ring"),
    ("Sim_M2_Arco", "Sim_M2_Arc"),
    ("Sim_M2_Campo_Vectorial", "Sim_M2_Vector_Field"),
    ("Sim_M2_Cilindro", "Sim_M2_Cylinder"),
    ("Sim_M2_Disco", "Sim_M2_Disk"),
    ("Sim_M2_Semicirculo", "Sim_M2_Semicircle"),
    ("Sim_M2_Tablero_Distribuciones", "Sim_M2_Board_Distributions"),
    ("Sim_M2_Tablero_Lineas", "Sim_M2_Board_Lines"),
    ("Sim_M2_Varilla", "Sim_M2_Rod"),
    ("Sim_M3_Flujo", "Sim_M3_Flux"),
    ("Sim_M3_Tabla_Gauss", "Sim_M3_Gauss_Table"),
    ("Sim_M4_Equipotenciales", "Sim_M4_Equipotentials"),
    ("Sim_M4_Potencial_3D", "Sim_M4_Potential_3D"),
    ("Sim_M5_Capacitancia", "Sim_M5_Capacitance"),
    ("Sim_M6_CircuitoDC", "Sim_M6_DC_Circuit"),
    ("Sim_M6_Resistividad", "Sim_M6_Resistivity"),
    ("Sim_M7_Lorentz", "Sim_M7_Lorentz"),
    ("Sim_M8_BiotSavart_Anillo", "Sim_M8_Biot_Savart_Ring"),
    ("Sim_M8_BiotSavart_Hilo", "Sim_M8_Biot_Savart_Wire"),
    ("Sim_M9_Solenoide", "Sim_M9_Solenoid"),
    ("Sim_M9_Tabla_Ampere", "Sim_M9_Ampere_Table"),
    ("Sim_M10_FEM_Movimiento", "Sim_M10_Motional_EMF"),
    ("Sim_M10_FlujoMagnetico", "Sim_M10_Magnetic_Flux"),
    ("Sim_M11_EcuacionesMaxwell", "Sim_M11_Maxwell_Equations"),
    ("Sim_M11_OndaEM", "Sim_M11_EM_Wave"),
    ("Sim_M12_Fasores", "Sim_M12_Phasors"),
    ("Sim_M12_OsciladorLC", "Sim_M12_LC_Oscillator"),
    ("Sim_M12_RLC", "Sim_M12_RLC"),
    ("Taller_1_Ley_de_Coulomb", "Workshop_1_Coulomb_Law"),
    ("Taller_2_1_Campo_Electrico", "Workshop_2_1_Electric_Field"),
    ("Taller_2_2_Distribuciones_Continuas", "Workshop_2_2_Continuous_Distributions"),
    ("Taller_3_Ley_de_Gauss", "Workshop_3_Gauss_Law"),
    ("Taller_4_Potencial_Electrico", "Workshop_4_Electric_Potential"),
    ("Taller_5_Capacitancia", "Workshop_5_Capacitance"),
    ("Taller_6_1_Reduccion_Circuitos", "Workshop_6_1_Circuit_Reduction"),
    ("Taller_6_2_Leyes_K", "Workshop_6_2_Kirchhoff_Laws"),
    ("Taller_7_Ley_de_Lorentz", "Workshop_7_Lorentz_Law"),
    ("Taller_8_Biot_Savart", "Workshop_8_Biot_Savart"),
    ("Taller_9_Ley_de_Ampere", "Workshop_9_Ampere_Law"),
    ("Taller_10_Ley_de_Faraday", "Workshop_10_Faraday_Law"),
    ("Taller_11_Ecuaciones_Maxwell", "Workshop_11_Maxwell_Equations"),
    ("Taller_12_Circuitos_CA", "Workshop_12_AC_Circuits"),
    ("Diapositiva_", "Slide_"),
    ("Dispositiva_", "Slide_"),
    ("Portada", "Cover"),
    ("M3_Potencial", "M3_Potential"),
    ("M4_Materiales", "M4_Materials"),
    ("M5_Capacitancia", "M5_Capacitance"),
    ("M6_Resistivos", "M6_Resistive"),
    ("generar_informe.py", "generate_report.py"),
    ("generar_juegos.py", "generate_games.py"),
    ("generar_quizzes.py", "generate_quizzes.py"),
    ("generar_talleres.py", "generate_workshops.py"),
    ("Informe_Tecnico_Electro10.docx", "Technical_Report_Electro10.docx"),
    ("3_Instrumento_Honey_Alonso_Estilos_de_Aprendizaje_PARA_BOGOTA (1).xlsx", "Honey_Alonso_Learning_Styles_Instrument.xlsx"),
    ("clase_", "class_"),
    ("_archivo", "_archive")
]

# 3. CONTENT REPLACEMENT DICTIONARY (Spanish -> English including all encoding artifacts)
CONTENT_REPLACEMENTS = [
    # Broken links and exact phrases
    ("Sim_M6_Kirchhoff.html", "Sim_M6_DC_Circuit.html"),
    ("Circuitos Resistivos y Current Continua", "Resistive Circuits and Direct Current"),
    ("Circuitos Resistivos y Corriente Continua", "Resistive Circuits and Direct Current"),
    ("Ley de Ohm, Resistivity y Leyes de Kirchhoff - Parte 2", "Ohm's Law, Resistivity and Kirchhoff's Laws - Part 2"),
    ("Ley de Ohm, Resistividad y Leyes de Kirchhoff - Parte 2", "Ohm's Law, Resistivity and Kirchhoff's Laws - Part 2"),
    ("Esta Slide interactiva permite explorar los conceptos Physicals fundamentales mediante Real-time simulation.", "This interactive slide allows you to explore fundamental physical concepts through real-time simulation."),
    ("Esta diapositiva interactiva permite explorar los conceptos físicos fundamentales mediante simulación en tiempo real.", "This interactive slide allows you to explore fundamental physical concepts through real-time simulation."),
    ("Modifica los Parameters en el panel de control.", "Modify the parameters in the control panel."),
    ("Observa la Answer visual o Chart.", "Observe the visual response or chart."),
    ("Analiza el comportamiento Physical.", "Analyze the physical behavior."),
    ("Interactúa con el Simulator", "Interact with the Simulator"),
    ("Conceptos Clave", "Key Concepts"),
    ("Equation Fundamental:", "Fundamental Equation:"),
    
    # Multi-word encoding safe strings
    ("Portal Completo de Aprendizaje Interactivo", "Full Interactive Learning Portal"),
    ("Física Interactiva: Electromagnetismo", "Interactive Physics: Electromagnetism"),
    ("Cargas Eléctricas", "Electric Charges"),
    ("Cargas El\ufffddctricas", "Electric Charges"),
    ("Cargas El&eacute;ctricas", "Electric Charges"),
    ("Campo Eléctrico", "Electric Field"),
    ("Campo El\ufffddctrico", "Electric Field"),
    ("Potencial Eléctrico", "Electric Potential"),
    ("Potencial El\ufffddctrico", "Electric Potential"),
    ("Flujo Eléctrico", "Electric Flux"),
    ("Flujo El\ufffddctrico", "Electric Flux"),
    ("Ley de Coulomb", "Coulomb's Law"),
    ("Ley de Gauss", "Gauss's Law"),
    ("Ley de Faraday", "Faraday's Law"),
    ("Ley de Ampère", "Ampère's Law"),
    ("Ley de Amp\ufffdre", "Ampère's Law"),
    ("Ley de Lorentz", "Lorentz Force Law"),
    ("Ley de Biot-Savart", "Biot-Savart Law"),
    ("Fuerza Neta", "Net Force"),
    ("Objetivos de Aprendizaje", "Learning Objectives"),
    ("Contenido Teórico", "Theoretical Content"),
    ("Todas las categorías", "All categories"),
    ("Búsqueda", "Search"),
    ("Escribe tu pregunta", "Type your question"),
    ("Simulación en tiempo real", "Real-time simulation"),
    ("Tabla de Datos", "Data Table"),
    
    # Path/Module strings in code/UI
    ("'modulos/'", "'modules/'"),
    ('"modulos/"', '"modules/"'),
    ("'juegos/'", "'games/'"),
    ('"juegos/"', '"games/"'),
    ("'simuladores/'", "'simulators/'"),
    ('"simuladores/"', '"simulators/"'),
    ("'talleres/'", "'workshops/'"),
    ('"talleres/"', '"workshops/"'),
    ("'presentaciones/'", "'presentations/'"),
    ('"presentaciones/"', '"presentations/"'),
    ("'recursos/'", "'resources/'"),
    ('"recursos/"', '"resources/"'),
    ("M3_Potencial", "M3_Potential"),
    ("M4_Materiales", "M4_Materials"),
    ("M5_Capacitancia", "M5_Capacitance"),
    ("M6_Resistivos", "M6_Resistive"),
    
    # Also unquoted exact routing terms
    ("modulos", "modules"),
    ("juegos", "games"),
    ("simuladores", "simulators"),
    ("talleres", "workshops"),
    ("presentaciones", "presentations"),
    ("recursos", "resources"),
    ("modulo1", "module1"),
    ("modulo2", "module2"),
    ("modulo3", "module3"),
    ("modulo4", "module4"),
    ("modulo5", "module5"),
    ("modulo6", "module6"),
    ("modulo7", "module7"),
    ("modulo8", "module8"),
    ("modulo9", "module9"),
    ("modulo10", "module10"),
    ("modulo11", "module11"),
    ("modulo12", "module12"),
    ("Juego_", "Game_"),
    
    # Single words and encoding variations (both capitalized and lowercase)
    ("Módulo", "Module"),
    ("módulo", "module"),
    ("M\ufffddulo", "Module"),
    ("M&oacute;dulo", "Module"),
    ("Módulos", "Modules"),
    ("módulos", "modules"),
    ("Simulador", "Simulator"),
    ("simulador", "simulator"),
    ("Simuladores", "Simulators"),
    ("simuladores", "simulators"),
    ("Cuestionario", "Quiz"),
    ("cuestionario", "quiz"),
    ("Cuestionarios", "Quizzes"),
    ("cuestionarios", "quizzes"),
    ("Taller", "Workshop"),
    ("taller", "workshop"),
    ("Talleres", "Workshops"),
    ("talleres", "workshops"),
    ("Juego", "Game"),
    ("juego", "game"),
    ("Juegos", "Games"),
    ("juegos", "games"),
    ("Diapositiva", "Slide"),
    ("diapositiva", "slide"),
    ("Diapositivas", "Slides"),
    ("diapositivas", "slides"),
    ("Pregunta", "Question"),
    ("pregunta", "question"),
    ("Preguntas", "Questions"),
    ("preguntas", "questions"),
    ("Respuesta", "Answer"),
    ("respuesta", "answer"),
    ("Respuestas", "Answers"),
    ("respuestas", "answers"),
    ("Siguiente", "Next"),
    ("siguiente", "next"),
    ("Anterior", "Previous"),
    ("anterior", "previous"),
    ("Verificar", "Verify"),
    ("verificar", "verify"),
    ("Calcular", "Calculate"),
    ("calcular", "calculate"),
    ("Reiniciar", "Reset"),
    ("reiniciar", "reset"),
    ("Mostrar", "Show"),
    ("mostrar", "show"),
    ("Ocultar", "Hide"),
    ("ocultar", "hide"),
    ("Fuerza", "Force"),
    ("fuerza", "force"),
    ("Cargas", "Charges"),
    ("cargas", "charges"),
    ("Distancia", "Distance"),
    ("distancia", "distance"),
    ("Corriente", "Current"),
    ("corriente", "current"),
    ("Resistencia", "Resistance"),
    ("resistencia", "resistance"),
    ("Capacitancia", "Capacitance"),
    ("capacitancia", "capacitance"),
    ("Voltaje", "Voltage"),
    ("voltaje", "voltage"),
    ("Ecuaciones", "Equations"),
    ("ecuaciones", "equations"),
    ("Inicio", "Home"),
    ("inicio", "home"),
    ("Volver", "Back"),
    ("volver", "back"),
    ("Atrás", "Back"),
    ("atrás", "back"),
    ("Adelante", "Forward"),
    ("adelante", "forward"),
    ("Cerrar", "Close"),
    ("cerrar", "close"),
    ("Abrir", "Open"),
    ("abrir", "open"),
    ("Opciones", "Options"),
    ("opciones", "options"),
    ("Configuración", "Configuration"),
    ("configuración", "configuration"),
    ("Herramientas", "Tools"),
    ("herramientas", "tools"),
    ("Glosario", "Glossary"),
    ("glosario", "glossary"),
    ("Nivel", "Level"),
    ("nivel", "level"),
    ("Evaluación", "Assessment"),
    ("evaluación", "assessment"),
    ("Resultado", "Result"),
    ("resultado", "result"),
    ("Resultados", "Results"),
    ("resultados", "results"),
    ("Correcto", "Correct"),
    ("correcto", "correct"),
    ("Incorrecto", "Incorrect"),
    ("incorrecto", "incorrect"),
    ("Puntuación", "Score"),
    ("puntuación", "score"),
    ("Explicación", "Explanation"),
    ("explicación", "explanation"),
    ("Ejecutar", "Execute"),
    ("ejecutar", "execute"),
    ("Pausa", "Pause"),
    ("pausa", "pause"),
    ("Continuar", "Continue"),
    ("continuar", "continue"),
    ("Añadir", "Add"),
    ("añadir", "add"),
    ("Eliminar", "Remove"),
    ("eliminar", "remove"),
    ("Limpiar", "Clear"),
    ("limpiar", "clear"),
    ("Magnitud", "Magnitude"),
    ("magnitud", "magnitude"),
    ("Ángulo", "Angle"),
    ("ángulo", "angle"),
    ("Posición", "Position"),
    ("posición", "position"),
    ("Velocidad", "Velocity"),
    ("velocidad", "velocity"),
    ("Aceleración", "Acceleration"),
    ("aceleración", "acceleration"),
    ("Trayectoria", "Trajectory"),
    ("trayectoria", "trajectory"),
    ("Dieléctrico", "Dielectric"),
    ("dieléctrico", "dielectric"),
    ("Conductores", "Conductors"),
    ("conductores", "conductors"),
    ("Aislantes", "Insulators"),
    ("aislantes", "insulators"),
    ("Inducción", "Induction"),
    ("inducción", "induction"),
    ("Fasores", "Phasors"),
    ("fasores", "phasors"),
    ("Frecuencia", "Frequency"),
    ("frecuencia", "frequency"),
    ("Amplitud", "Amplitude"),
    ("amplitud", "amplitude"),
    ("Energía", "Energy"),
    ("energía", "energy"),
    ("Potencia", "Power"),
    ("potencia", "power"),
    ("Trabajo", "Work"),
    ("trabajo", "work"),
    ("Controles", "Controls"),
    ("controles", "controls"),
    ("Parámetros", "Parameters"),
    ("parámetros", "parameters"),
    ("Gráfica", "Chart"),
    ("gráfica", "chart"),
    ("Resumen", "Summary"),
    ("resumen", "summary"),
    ("Introducción", "Introduction"),
    ("introducción", "introduction"),
    ("Desarrollo", "Development"),
    ("desarrollo", "development"),
    ("Conclusión", "Conclusion"),
    ("conclusión", "conclusion"),
    ("Créditos", "Credits"),
    ("créditos", "credits"),
    ("Fórmula", "Formula"),
    ("fórmula", "formula"),
    ("F\ufffdrmula", "Formula"),
    ("Teoría", "Theory"),
    ("teoría", "theory"),
    ("Teor\ufffda", "Theory"),
    ("Físico", "Physical"),
    ("físico", "physical"),
    ("F\ufffdsico", "Physical"),
    ("Física", "Physics"),
    ("física", "physics"),
    ("Estudiante", "Student"),
    ("estudiante", "student"),
    ("Estudiantes", "Students"),
    ("estudiantes", "students"),
    ("Profesor", "Professor"),
    ("profesor", "professor"),
    ("Profesores", "Professors"),
    ("profesores", "professors"),
    ("cargando", "loading"),
    ("Cargando", "Loading"),
    ("bienvenido", "welcome"),
    ("Bienvenido", "Welcome"),
    ("bienvenida", "welcome"),
    ("Bienvenida", "Welcome"),
    ("ejercicio", "exercise"),
    ("Ejercicio", "Exercise"),
    ("ejercicios", "exercises"),
    ("Ejercicios", "Exercises"),
    ("objetivo", "objective"),
    ("Objetivo", "Objective"),
    ("objetivos", "objectives"),
    ("Objetivos", "Objectives"),
    ("ejemplo", "example"),
    ("Ejemplo", "Example"),
    ("ejemplos", "examples"),
    ("Ejemplos", "Examples"),
    ("solución", "solution"),
    ("Solución", "Solution"),
    ("soluciones", "solutions"),
    ("Soluciones", "Solutions"),
    ("cargado", "loaded"),
    ("Cargado", "Loaded"),
    ("cargada", "loaded"),
    ("Cargada", "Loaded"),
    ("comenzar", "start"),
    ("Comenzar", "Start"),
    ("seleccionar", "select"),
    ("Seleccionar", "Select"),
    ("guardar", "save"),
    ("Guardar", "Save"),
    ("enviar", "submit"),
    ("Enviar", "Submit"),
    ("práctica", "practice"),
    ("Práctica", "Practice")
]

def rename_directories_and_files():
    print(">>> PHASE 1: Renaming directories and files to English...")

    for root, dirs, files in os.walk(BASE_DIR, topdown=False):
        if ".git" in root: continue
        for d in dirs:
            if d in DIR_MAP:
                old_dir = os.path.join(root, d)
                new_dir = os.path.join(root, DIR_MAP[d])
                if os.path.exists(old_dir) and not os.path.exists(new_dir):
                    os.rename(old_dir, new_dir)
                    print(f"Renamed directory: {d} -> {DIR_MAP[d]}")

    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root: continue
        for f in files:
            old_name = f
            new_name = f
            for span_w, eng_w in FILE_WORD_MAP:
                if span_w in new_name:
                    new_name = new_name.replace(span_w, eng_w)
            
            if new_name != old_name:
                old_path = os.path.join(root, old_name)
                new_path = os.path.join(root, new_name)
                if os.path.exists(old_path) and not os.path.exists(new_path):
                    os.rename(old_path, new_path)
                    print(f"Renamed file: {old_name} -> {new_name}")

    link_replacements = []
    for span_dir, eng_dir in DIR_MAP.items():
        link_replacements.append((f"{span_dir}/", f"{eng_dir}/"))
        link_replacements.append((f"'{span_dir}'", f"'{eng_dir}'"))
        link_replacements.append((f'"{span_dir}"', f'"{eng_dir}"'))
        link_replacements.append((f"/{span_dir}/", f"/{eng_dir}/"))

    for span_w, eng_w in FILE_WORD_MAP:
        link_replacements.append((span_w, eng_w))

    return link_replacements

def update_contents(link_replacements):
    print(">>> PHASE 2: Deep content translation across all files...")
    count_updated = 0
    
    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".json", ".md", ".py", ".txt")):
                if "verify_100_english" in f or "check_everything" in f: continue
                path = os.path.join(root, f)
                try:
                    with open(path, "r", encoding="utf-8", errors="ignore") as file:
                        original = file.read()
                    
                    content = original
                    for old_link, new_link in link_replacements:
                        content = content.replace(old_link, new_link)
                    
                    for span_text, eng_text in CONTENT_REPLACEMENTS:
                        if len(span_text) > 4 or " " in span_text or "_" in span_text or "." in span_text:
                            content = re.sub(re.escape(span_text), eng_text, content, flags=re.IGNORECASE)
                        else:
                            content = re.sub(r'\b' + re.escape(span_text) + r'\b', eng_text, content)
                    
                    content = content.replace("Modulee", "Module").replace("Simulatorss", "Simulators").replace("Quizzess", "Quizzes").replace("Gamee", "Game")
                    
                    if content != original:
                        with open(path, "w", encoding="utf-8") as file:
                            file.write(content)
                        count_updated += 1
                except Exception as e:
                    pass
    
    print(f">>> Successfully updated contents across {count_updated} files!")

if __name__ == "__main__":
    links = rename_directories_and_files()
    update_contents(links)
    print(">>> Deep 100% English transformation completed!")
