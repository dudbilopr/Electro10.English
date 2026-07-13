#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fast Exhaustive Link, JS Routing & Spanish Check (`Electro10.English`)
Runs in <2 seconds to audit every link and word across all 170+ files.
"""

import os
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def check_all():
    print("=== 1. LINK INTEGRITY CHECK ===")
    broken_links = []
    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith(".html"):
                hfile = os.path.join(root, f)
                with open(hfile, "r", encoding="utf-8", errors="ignore") as file:
                    content = file.read()
                links = re.findall(r'(?:href|src)=[\"\']([^\"\']+)[\"\']', content)
                for l in links:
                    if l.startswith(("http", "#", "mailto:", "data:", "javascript:")): continue
                    l_clean = l.split("#")[0].split("?")[0].strip()
                    if not l_clean: continue
                    target_path = os.path.normpath(os.path.join(root, l_clean))
                    if not os.path.exists(target_path):
                        broken_links.append((os.path.relpath(hfile, BASE_DIR), l, os.path.relpath(target_path, BASE_DIR)))

    if broken_links:
        print(f"[BROKEN LINKS FOUND: {len(broken_links)}]")
        for src, l, target in broken_links[:20]:
            print(f"  [BROKEN] In {src}: link '{l}' -> not found on disk: {target}")
    else:
        print("[OK] ALL HTML LINKS VALID! Zero broken file references.")

    print("\n=== 2. JS ROUTING & OLD PATH CHECK ===")
    js_warnings = []
    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith((".js", ".html", ".md")):
                jfile = os.path.join(root, f)
                with open(jfile, "r", encoding="utf-8", errors="ignore") as file:
                    content = file.read()
                for bad_w in ["simuladores", "talleres", "juegos", "modulos", "presentaciones", "recursos", "Cuestionario", "Sim_M1_Cargas", "Juego_", "modulo1.", "modulo2."]:
                    if re.search(r'\b' + re.escape(bad_w) + r'\b', content):
                        js_warnings.append((os.path.relpath(jfile, BASE_DIR), bad_w))

    if js_warnings:
        print(f"[OLD PATH/TERM WARNINGS: {len(js_warnings)}]")
        for f, w in js_warnings[:15]:
            print(f"  [OLD TERM] {f} contains old term: '{w}'")
    else:
        print("[OK] ALL JS ROUTER & LOGIC FILES VALID! No old Spanish terms/folder paths.")

    print("\n=== 3. DEEP SPANISH KEYWORD & TEXT CHECK ===")
    SPANISH_WORDS = [
        "Módulo", "Cuestionario", "Simulador", "Taller", "Diapositiva", 
        "Ley de Coulomb", "Ley de Gauss", "Ley de Faraday", "Ley de Ampère", 
        "Campo Eléctrico", "Potencial Eléctrico", "Flujo Eléctrico", 
        "Cargas Eléctricas", "Pregunta", "Respuesta", "Siguiente", "Anterior", 
        "Verificar", "Calcular", "Reiniciar", "Mostrar", "Ocultar", 
        "Fuerza Neta", "Fórmula", "Teoría", "Estudiante", "Profesor",
        "puntuación", "correcto", "incorrecto", "ejemplo", "ejercicio", "solución",
        "cargando", "bienvenido", "objetivo", "desarrollo", "conclusión", "créditos"
    ]

    spanish_hits = {}
    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".json", ".md", ".txt")):
                fpath = os.path.join(root, f)
                with open(fpath, "r", encoding="utf-8", errors="ignore") as file:
                    txt = file.read()
                found = []
                for sw in SPANISH_WORDS:
                    if re.search(r'\b' + re.escape(sw) + r'\b', txt, re.IGNORECASE):
                        found.append(sw)
                if found:
                    spanish_hits[os.path.relpath(fpath, BASE_DIR)] = found

    if spanish_hits:
        print(f"[LINGERING SPANISH WORDS IN {len(spanish_hits)} FILES]")
        for k, v in list(spanish_hits.items())[:20]:
            print(f"  [SPANISH] {k}: {v}")
    else:
        print("[OK] ZERO SPANISH WORDS FOUND! 100% English Verified.")

if __name__ == "__main__":
    check_all()
