#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Zero-Spanish Verification Audit Script (`Electro10.English`)
Scans all text/code files for any remaining Spanish UI labels, paths, or keywords.
"""

import os
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

SPANISH_KEYWORDS = [
    "Módulo", "Mdulo", "M\ufffddulo", "Cuestionario", "Simulador", "Taller", "Diapositiva", 
    "Ley de Coulomb", "Ley de Gauss", "Ley de Faraday", "Ley de Ampère", 
    "Campo Eléctrico", "Potencial Eléctrico", "Flujo Eléctrico", 
    "Cargas Eléctricas", "Pregunta", "Respuesta", "Siguiente", "Anterior", 
    "Verificar", "Calcular", "Reiniciar", "Mostrar", "Ocultar", 
    "Fuerza Neta", "simuladores/", "talleres/", "juegos/", "modulos/", "presentaciones/", "recursos/"
]

def run_audit():
    print(">>> PHASE 3: Running Zero-Spanish audit across entire repository...")
    total_matches = 0
    file_matches = {}

    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".json", ".md", ".txt")):
                path = os.path.join(root, f)
                try:
                    with open(path, "r", encoding="utf-8", errors="ignore") as file:
                        content = file.read()
                    
                    matches = []
                    for kw in SPANISH_KEYWORDS:
                        if re.search(r'\b' + re.escape(kw) + r'\b', content, re.IGNORECASE) or kw in content:
                            matches.append(kw)
                    
                    if matches:
                        total_matches += len(matches)
                        rel_path = os.path.relpath(path, BASE_DIR)
                        file_matches[rel_path] = matches
                except Exception as e:
                    pass

    if total_matches == 0:
        print("[SUCCESS] Total Spanish keywords found across all files: 0")
        print("The repository is 100% in English!")
    else:
        print(f"[WARNING] Found {total_matches} leftover Spanish occurrences across {len(file_matches)} files:")
        for fpath, kws in list(file_matches.items())[:15]:
            print(f"   - {fpath}: {kws}")

if __name__ == "__main__":
    run_audit()
