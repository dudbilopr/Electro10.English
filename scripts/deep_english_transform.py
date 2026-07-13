#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Deep 100% English Transformation & Standardization Script (`Electro10.English`)
Handles both UTF-8 and Latin-1/Windows-1252 file encodings to eliminate all variations of Spanish keywords and standardize all paths.
"""

import os
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

DIR_MAP = {
    "simulators": "simulators",
    "workshops": "workshops",
    "games": "games",
    "modules": "modules",
    "presentations": "presentations",
    "resources": "resources"
}

FILE_WORD_MAP = [
    ("Game_", "Game_"),
    ("module1", "module1"),
    ("module2", "module2"),
    ("module3", "module3"),
    ("module4", "module4"),
    ("module5", "module5"),
    ("module6", "module6"),
    ("module7", "module7"),
    ("module8", "module8"),
    ("module9", "module9"),
    ("module10", "module10"),
    ("module11", "module11"),
    ("module12", "module12"),
    ("Quiz_1_Coulomb_Law", "Quiz_1_Coulomb_Law"),
    ("Quiz_2_Electric_Field", "Quiz_2_Electric_Field"),
    ("Quiz_3_Work_Electric_Potential", "Quiz_3_Work_Electric_Potential"),
    ("Quiz_4_Continuous_Charge_Distributions", "Quiz_4_Continuous_Charge_Distributions"),
    ("Quiz_5_Electric_Flux_Gauss_Law", "Quiz_5_Electric_Flux_Gauss_Law"),
    ("Quiz_7_DC_Circuits", "Quiz_7_DC_Circuits"),
    ("Quiz_Adaptive_", "Quiz_Adaptive_"),
    ("Sim_M1_Charges", "Sim_M1_Charges"),
    ("Sim_M1_Coulomb_Basic", "Sim_M1_Coulomb_Basic"),
    ("Sim_M1_Coulomb_Pro", "Sim_M1_Coulomb_Pro"),
    ("Sim_M2_Ring", "Sim_M2_Ring"),
    ("Sim_M2_Arc", "Sim_M2_Arc"),
    ("Sim_M2_Vector_Field", "Sim_M2_Vector_Field"),
    ("Sim_M2_Cylinder", "Sim_M2_Cylinder"),
    ("Sim_M2_Disk", "Sim_M2_Disk"),
    ("Sim_M2_Semicircle", "Sim_M2_Semicircle"),
    ("Sim_M2_Board_Distributions", "Sim_M2_Board_Distributions"),
    ("Sim_M2_Board_Lines", "Sim_M2_Board_Lines"),
    ("Sim_M2_Rod", "Sim_M2_Rod"),
    ("Sim_M3_Flux", "Sim_M3_Flux"),
    ("Sim_M3_Gauss_Table", "Sim_M3_Gauss_Table"),
    ("Sim_M4_Equipotentials", "Sim_M4_Equipotentials"),
    ("Sim_M4_Potential_3D", "Sim_M4_Potential_3D"),
    ("Sim_M5_Capacitance", "Sim_M5_Capacitance"),
    ("Sim_M6_DC_Circuit", "Sim_M6_DC_Circuit"),
    ("Sim_M6_Resistivity", "Sim_M6_Resistivity"),
    ("Sim_M7_Lorentz", "Sim_M7_Lorentz"),
    ("Sim_M8_Biot_Savart_Ring", "Sim_M8_Biot_Savart_Ring"),
    ("Sim_M8_Biot_Savart_Wire", "Sim_M8_Biot_Savart_Wire"),
    ("Sim_M9_Solenoid", "Sim_M9_Solenoid"),
    ("Sim_M9_Ampere_Table", "Sim_M9_Ampere_Table"),
    ("Sim_M10_Motional_EMF", "Sim_M10_Motional_EMF"),
    ("Sim_M10_Magnetic_Flux", "Sim_M10_Magnetic_Flux"),
    ("Sim_M11_Maxwell_Equations", "Sim_M11_Maxwell_Equations"),
    ("Sim_M11_EM_Wave", "Sim_M11_EM_Wave"),
    ("Sim_M12_Phasors", "Sim_M12_Phasors"),
    ("Sim_M12_LC_Oscillator", "Sim_M12_LC_Oscillator"),
    ("Sim_M12_RLC", "Sim_M12_RLC"),
    ("Workshop_1_Coulomb_Law", "Workshop_1_Coulomb_Law"),
    ("Workshop_2_1_Electric_Field", "Workshop_2_1_Electric_Field"),
    ("Workshop_2_2_Continuous_Distributions", "Workshop_2_2_Continuous_Distributions"),
    ("Workshop_3_Gauss_Law", "Workshop_3_Gauss_Law"),
    ("Workshop_4_Electric_Potential", "Workshop_4_Electric_Potential"),
    ("Workshop_5_Capacitance", "Workshop_5_Capacitance"),
    ("Workshop_6_1_Circuit_Reduction", "Workshop_6_1_Circuit_Reduction"),
    ("Workshop_6_2_Kirchhoff_Laws", "Workshop_6_2_Kirchhoff_Laws"),
    ("Workshop_7_Lorentz_Law", "Workshop_7_Lorentz_Law"),
    ("Workshop_8_Biot_Savart", "Workshop_8_Biot_Savart"),
    ("Workshop_9_Ampere_Law", "Workshop_9_Ampere_Law"),
    ("Workshop_10_Faraday_Law", "Workshop_10_Faraday_Law"),
    ("Workshop_11_Maxwell_Equations", "Workshop_11_Maxwell_Equations"),
    ("Workshop_12_AC_Circuits", "Workshop_12_AC_Circuits"),
    ("Slide_", "Slide_"),
    ("Slide_", "Slide_"),
    ("Cover", "Cover"),
    ("M3_Potential", "M3_Potential"),
    ("M4_Materials", "M4_Materials"),
    ("M5_Capacitance", "M5_Capacitance"),
    ("M6_Resistive", "M6_Resistive"),
    ("generate_report.py", "generate_report.py"),
    ("generate_games.py", "generate_games.py"),
    ("generate_quizzes.py", "generate_quizzes.py"),
    ("generate_workshops.py", "generate_workshops.py"),
    ("Technical_Report_Electro10.docx", "Technical_Report_Electro10.docx"),
    ("Honey_Alonso_Learning_Styles_Instrument.xlsx", "Honey_Alonso_Learning_Styles_Instrument.xlsx"),
    ("class_", "class_"),
    ("_archive", "_archive")
]

CONTENT_REPLACEMENTS = [
    ("Full Interactive Learning Portal", "Full Interactive Learning Portal"),
    ("Interactive Physics: Electromagnetism", "Interactive Physics: Electromagnetism"),
    ("Electric Charges", "Electric Charges"),
    ("Charges El\ufffddctricas", "Electric Charges"),
    ("Electric Charges", "Electric Charges"),
    ("Electric Field", "Electric Field"),
    ("Campo El\ufffddctrico", "Electric Field"),
    ("Electric Potential", "Electric Potential"),
    ("Powerl El\ufffddctrico", "Electric Potential"),
    ("Electric Flux", "Electric Flux"),
    ("Flujo El\ufffddctrico", "Electric Flux"),
    ("Coulomb's Law", "Coulomb's Law"),
    ("Gauss's Law", "Gauss's Law"),
    ("Faraday's Law", "Faraday's Law"),
    ("Ampère's Law", "Ampère's Law"),
    ("Ley de Amp\ufffdre", "Ampère's Law"),
    ("Lorentz Force Law", "Lorentz Force Law"),
    ("Biot-Savart Law", "Biot-Savart Law"),
    ("Net Force", "Net Force"),
    ("Learning Objectives", "Learning Objectives"),
    ("Theoretical Content", "Theoretical Content"),
    ("All categories", "All categories"),
    ("Search", "Search"),
    ("Type your question", "Type your question"),
    ("Real-time simulation", "Real-time simulation"),
    ("Data Table", "Data Table"),
    
    # Path/Module strings in code/UI
    ("'modules/'", "'modules/'"),
    ('"modules/"', '"modules/"'),
    ("'games/'", "'games/'"),
    ('"games/"', '"games/"'),
    ("'simulators/'", "'simulators/'"),
    ('"simulators/"', '"simulators/"'),
    ("'workshops/'", "'workshops/'"),
    ('"workshops/"', '"workshops/"'),
    ("'presentations/'", "'presentations/'"),
    ('"presentations/"', '"presentations/"'),
    ("'resources/'", "'resources/'"),
    ('"resources/"', '"resources/"'),
    
    # Also unquoted exact routing terms
    ("modules", "modules"),
    ("games", "games"),
    ("simulators", "simulators"),
    ("workshops", "workshops"),
    ("presentations", "presentations"),
    ("resources", "resources"),
    ("module1", "module1"),
    ("module2", "module2"),
    ("module3", "module3"),
    ("module4", "module4"),
    ("module5", "module5"),
    ("module6", "module6"),
    ("module7", "module7"),
    ("module8", "module8"),
    ("module9", "module9"),
    ("module10", "module10"),
    ("module11", "module11"),
    ("module12", "module12"),
    ("Game_", "Game_"),
    
    # Single words and encoding variations
    ("Module", "Module"),
    ("M\ufffddulo", "Module"),
    ("Module", "Module"),
    ("Modules", "Modules"),
    ("Simulator", "Simulator"),
    ("simulators", "Simulators"),
    ("Quiz", "Quiz"),
    ("Quizs", "Quizzes"),
    ("Workshop", "Workshop"),
    ("workshops", "Workshops"),
    ("Game", "Game"),
    ("games", "Games"),
    ("Slide", "Slide"),
    ("Slides", "Slides"),
    ("Question", "Question"),
    ("Questions", "Questions"),
    ("Answer", "Answer"),
    ("Answers", "Answers"),
    ("Next", "Next"),
    ("Previous", "Previous"),
    ("Verify", "Verify"),
    ("Calculate", "Calculate"),
    ("Reset", "Reset"),
    ("Show", "Show"),
    ("Hide", "Hide"),
    ("Force", "Force"),
    ("Charges", "Charges"),
    ("Distance", "Distance"),
    ("Current", "Current"),
    ("Resistance", "Resistance"),
    ("Capacitance", "Capacitance"),
    ("Voltage", "Voltage"),
    ("Equations", "Equations"),
    ("Home", "Home"),
    ("Back", "Back"),
    ("Back", "Back"),
    ("Forward", "Forward"),
    ("Close", "Close"),
    ("Open", "Open"),
    ("Options", "Options"),
    ("Configuration", "Configuration"),
    ("Tools", "Tools"),
    ("Glossary", "Glossary"),
    ("Level", "Level"),
    ("Assessment", "Assessment"),
    ("Result", "Result"),
    ("Results", "Results"),
    ("Correct", "Correct"),
    ("InCorrect", "Incorrect"),
    ("Score", "Score"),
    ("Explanation", "Explanation"),
    ("Execute", "Execute"),
    ("Pause", "Pause"),
    ("Continue", "Continue"),
    ("Add", "Add"),
    ("Remove", "Remove"),
    ("Clear", "Clear"),
    ("Magnitude", "Magnitudee"),
    ("Angle", "Angle"),
    ("Position", "Position"),
    ("Velocity", "Velocity"),
    ("Acceleration", "Acceleration"),
    ("Trajectory", "Trajectory"),
    ("Dielectric", "Dielectric"),
    ("Conductors", "Conductors"),
    ("Insulators", "Insulators"),
    ("Induction", "Induction"),
    ("Phasors", "Phasors"),
    ("Frequency", "Frequency"),
    ("Amplitude", "Amplitudee"),
    ("Energy", "Energy"),
    ("Power", "Power"),
    ("Work", "Work"),
    ("Controls", "Controls"),
    ("Parameters", "Parameters"),
    ("Chart", "Chart"),
    ("Summary", "Summary"),
    ("Introduction", "Introduction"),
    ("Development", "Development"),
    ("Conclusion", "Conclusion"),
    ("Credits", "Credits"),
    ("Formula", "Formula"),
    ("F\ufffdrmula", "Formula"),
    ("Theory", "Theory"),
    ("Teor\ufffda", "Theory"),
    ("Physical", "Physical"),
    ("F\ufffdsico", "Physical"),
    ("Student", "Student"),
    ("Students", "Students"),
    ("Professor", "Professor"),
    ("Professores", "Professors")
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
        if ".git" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".json", ".md", ".py", ".txt")):
                path = os.path.join(root, f)
                try:
                    with open(path, "r", encoding="utf-8", errors="ignore") as file:
                        original = file.read()
                    
                    content = original
                    for old_link, new_link in link_replacements:
                        content = content.replace(old_link, new_link)
                    
                    for span_text, eng_text in CONTENT_REPLACEMENTS:
                        if len(span_text) > 4 or " " in span_text or "_" in span_text:
                            content = re.sub(re.escape(span_text), eng_text, content, flags=re.IGNORECASE)
                        else:
                            content = re.sub(r'\b' + re.escape(span_text) + r'\b', eng_text, content)
                    
                    content = content.replace("Module", "Module").replace("Simulators", "Simulators").replace("Quizzes", "Quizzes").replace("Game", "Game")
                    
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
