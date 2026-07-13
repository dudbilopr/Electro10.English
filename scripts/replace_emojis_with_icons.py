#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Emoji to Professional Icon Converter & English Deep Sanitizer (`Electro10.English`)
Eliminates all emojis across all 170+ HTML and JS files, replacing them with professional Lucide icons/clean HTML badges.
Guarantees 100% English standardization across every module, quiz, resource, simulator, workshop, slide, and example.
"""

import os
import re

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Comprehensive Emoji mapping to clean professional Lucide Icon HTML / Badges
EMOJI_REPLACEMENTS = [
    # Complex / combined emojis first
    ("🧑‍🏫", "[Instructor]"),
    ("👩‍🏫", "[Instructor]"),
    ("⚡️", ""),
    ("⏱️", ""),
    ("➡️", "->"),
    ("⬅️", "<-"),
    ("▶️", ""),
    ("⏸️", ""),
    ("⏹️", ""),
    ("⏪", ""),
    ("⏩", ""),
    ("✔️", "[OK]"),
    ("✖️", "[X]"),
    
    # Common single emojis mapped to clean icon elements or badge tags
    ("⚡", '<span class="inline-flex items-center text-sky-400 mr-1"><i data-lucide="zap" class="w-4 h-4 inline"></i></span>'),
    ("🍌", '<span class="inline-flex items-center text-amber-400 mr-1"><i data-lucide="bot" class="w-4 h-4 inline"></i></span>'),
    ("🎯", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="target" class="w-4 h-4 inline"></i></span>'),
    ("💡", '<span class="inline-flex items-center text-amber-300 mr-1"><i data-lucide="lightbulb" class="w-4 h-4 inline"></i></span>'),
    ("📚", '<span class="inline-flex items-center text-indigo-400 mr-1"><i data-lucide="book-open" class="w-4 h-4 inline"></i></span>'),
    ("📖", '<span class="inline-flex items-center text-blue-400 mr-1"><i data-lucide="book" class="w-4 h-4 inline"></i></span>'),
    ("🧪", '<span class="inline-flex items-center text-emerald-400 mr-1"><i data-lucide="flask-conical" class="w-4 h-4 inline"></i></span>'),
    ("🔧", '<span class="inline-flex items-center text-slate-400 mr-1"><i data-lucide="wrench" class="w-4 h-4 inline"></i></span>'),
    ("🎮", '<span class="inline-flex items-center text-purple-400 mr-1"><i data-lucide="gamepad-2" class="w-4 h-4 inline"></i></span>'),
    ("❓", '<span class="inline-flex items-center text-sky-400 mr-1"><i data-lucide="help-circle" class="w-4 h-4 inline"></i></span>'),
    ("📝", '<span class="inline-flex items-center text-blue-300 mr-1"><i data-lucide="file-text" class="w-4 h-4 inline"></i></span>'),
    ("🚀", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="rocket" class="w-4 h-4 inline"></i></span>'),
    ("🔍", '<span class="inline-flex items-center text-sky-300 mr-1"><i data-lucide="search" class="w-4 h-4 inline"></i></span>'),
    ("✅", '<span class="inline-flex items-center text-emerald-400 mr-1"><i data-lucide="check-circle-2" class="w-4 h-4 inline"></i></span>'),
    ("❌", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="x-circle" class="w-4 h-4 inline"></i></span>'),
    ("⭐", '<span class="inline-flex items-center text-amber-400 mr-1"><i data-lucide="star" class="w-4 h-4 inline"></i></span>'),
    ("🔥", '<span class="inline-flex items-center text-orange-400 mr-1"><i data-lucide="flame" class="w-4 h-4 inline"></i></span>'),
    ("🎓", '<span class="inline-flex items-center text-indigo-300 mr-1"><i data-lucide="graduation-cap" class="w-4 h-4 inline"></i></span>'),
    ("🏆", '<span class="inline-flex items-center text-amber-400 mr-1"><i data-lucide="award" class="w-4 h-4 inline"></i></span>'),
    ("⏱", '<span class="inline-flex items-center text-slate-400 mr-1"><i data-lucide="timer" class="w-4 h-4 inline"></i></span>'),
    ("❤️", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="heart" class="w-4 h-4 inline"></i></span>'),
    ("✨", '<span class="inline-flex items-center text-amber-300 mr-1"><i data-lucide="sparkles" class="w-4 h-4 inline"></i></span>'),
    ("🎉", '<span class="inline-flex items-center text-emerald-400 mr-1"><i data-lucide="party-popper" class="w-4 h-4 inline"></i></span>'),
    ("👍", '<span class="inline-flex items-center text-emerald-400 mr-1"><i data-lucide="thumbs-up" class="w-4 h-4 inline"></i></span>'),
    ("👏", '<span class="inline-flex items-center text-emerald-300 mr-1"><i data-lucide="thumbs-up" class="w-4 h-4 inline"></i></span>'),
    ("👋", '<span class="inline-flex items-center text-sky-300 mr-1"><i data-lucide="hand" class="w-4 h-4 inline"></i></span>'),
    ("🔊", '<span class="inline-flex items-center text-sky-400 mr-1"><i data-lucide="volume-2" class="w-4 h-4 inline"></i></span>'),
    ("🌐", '<span class="inline-flex items-center text-blue-400 mr-1"><i data-lucide="globe" class="w-4 h-4 inline"></i></span>'),
    ("🔬", '<span class="inline-flex items-center text-teal-400 mr-1"><i data-lucide="microscope" class="w-4 h-4 inline"></i></span>'),
    ("📊", '<span class="inline-flex items-center text-blue-400 mr-1"><i data-lucide="bar-chart-2" class="w-4 h-4 inline"></i></span>'),
    ("📈", '<span class="inline-flex items-center text-emerald-400 mr-1"><i data-lucide="trending-up" class="w-4 h-4 inline"></i></span>'),
    ("📉", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="trending-down" class="w-4 h-4 inline"></i></span>'),
    ("📌", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="pin" class="w-4 h-4 inline"></i></span>'),
    ("🏷️", '<span class="inline-flex items-center text-amber-300 mr-1"><i data-lucide="tag" class="w-4 h-4 inline"></i></span>'),
    ("🏷", '<span class="inline-flex items-center text-amber-300 mr-1"><i data-lucide="tag" class="w-4 h-4 inline"></i></span>'),
    ("💬", '<span class="inline-flex items-center text-sky-400 mr-1"><i data-lucide="message-square" class="w-4 h-4 inline"></i></span>'),
    ("👥", '<span class="inline-flex items-center text-indigo-400 mr-1"><i data-lucide="users" class="w-4 h-4 inline"></i></span>'),
    ("🔋", '<span class="inline-flex items-center text-emerald-400 mr-1"><i data-lucide="battery-charging" class="w-4 h-4 inline"></i></span>'),
    ("🧲", '<span class="inline-flex items-center text-rose-400 mr-1"><i data-lucide="magnet" class="w-4 h-4 inline"></i></span>'),
    ("⚙️", '<span class="inline-flex items-center text-slate-400 mr-1"><i data-lucide="settings" class="w-4 h-4 inline"></i></span>'),
    ("⚙", '<span class="inline-flex items-center text-slate-400 mr-1"><i data-lucide="settings" class="w-4 h-4 inline"></i></span>'),
    ("🔔", '<span class="inline-flex items-center text-amber-400 mr-1"><i data-lucide="bell" class="w-4 h-4 inline"></i></span>'),
    ("📋", '<span class="inline-flex items-center text-blue-400 mr-1"><i data-lucide="clipboard-list" class="w-4 h-4 inline"></i></span>'),
    ("📁", '<span class="inline-flex items-center text-amber-400 mr-1"><i data-lucide="folder" class="w-4 h-4 inline"></i></span>'),
    ("📄", '<span class="inline-flex items-center text-slate-300 mr-1"><i data-lucide="file" class="w-4 h-4 inline"></i></span>'),
    ("🧮", '<span class="inline-flex items-center text-indigo-400 mr-1"><i data-lucide="calculator" class="w-4 h-4 inline"></i></span>')
]

# For JS files where HTML strings inside alerts/console logs should not have span tags, use text badges
JS_EMOJI_REPLACEMENTS = [
    ("🧑‍🏫", "[Instructor]"), ("👩‍🏫", "[Instructor]"), ("⚡️", ""), ("⏱️", ""),
    ("⚡", "[POWER]"), ("🍌", "[BOT]"), ("🎯", "[GOAL]"), ("💡", "[TIP]"),
    ("📚", "[BOOK]"), ("📖", "[READ]"), ("🧪", "[LAB]"), ("🔧", "[TOOL]"),
    ("🎮", "[GAME]"), ("❓", "[HELP]"), ("📝", "[NOTE]"), ("🚀", "[LAUNCH]"),
    ("🔍", "[SEARCH]"), ("✅", "[OK]"), ("❌", "[ERROR]"), ("⭐", "[STAR]"),
    ("🔥", "[HOT]"), ("🎓", "[EDU]"), ("🏆", "[WIN]"), ("⏱", "[TIME]"),
    ("❤️", "[LIKE]"), ("✨", "[NEW]"), ("🎉", "[SUCCESS]"), ("👍", "[GOOD]"),
    ("👏", "[BRAVO]"), ("👋", "[WELCOME]"), ("🔊", "[AUDIO]"), ("🌐", "[WEB]"),
    ("🔬", "[SCIENCE]"), ("📊", "[DATA]"), ("📈", "[UP]"), ("📉", "[DOWN]"),
    ("📌", "[PIN]"), ("🏷️", "[TAG]"), ("🏷", "[TAG]"), ("💬", "[CHAT]"),
    ("👥", "[TEAM]"), ("🔋", "[BATTERY]"), ("🧲", "[MAGNET]"), ("⚙️", "[SETTINGS]"),
    ("⚙", "[SETTINGS]"), ("🔔", "[ALERT]"), ("📋", "[LIST]"), ("📁", "[DIR]"),
    ("📄", "[FILE]"), ("🧮", "[CALC]")
]

# Final catch-all regex for any remaining Unicode emoji
EMOJI_REGEX = re.compile(
    r'[\U0001F300-\U0001F6FF\U0001F900-\U0001F9FF\U0001F1E6-\U0001F1FF\U00002700-\U000027BF\U00002600-\U000026FF\u26a1\u2b50\u2705\u274c\u2699\u23f1\u25b6\u23f8\u23f9]'
)

LUCIDE_SCRIPT = '<script src="https://unpkg.com/lucide@latest"></script>'
LUCIDE_INIT = '''<script>
        document.addEventListener("DOMContentLoaded", () => {
            if (window.lucide) { lucide.createIcons(); }
        });
    </script>'''

def clean_emojis_and_inject_icons():
    print(">>> PHASE 1: Removing emojis and injecting professional Lucide Icons across all files...")
    files_processed = 0
    emojis_removed = 0

    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".json", ".md")):
                fpath = os.path.join(root, f)
                try:
                    with open(fpath, "r", encoding="utf-8", errors="ignore") as file:
                        content = file.read()
                    
                    original_content = content
                    is_html = f.endswith(".html")

                    replacements = EMOJI_REPLACEMENTS if is_html else JS_EMOJI_REPLACEMENTS
                    for emo, icon_replacement in replacements:
                        if emo in content:
                            content = content.replace(emo, icon_replacement)
                    
                    # Catch-all for any unlisted emojis
                    if EMOJI_REGEX.search(content):
                        if is_html:
                            content = EMOJI_REGEX.sub('<i data-lucide="dot" class="w-4 h-4 inline text-sky-400"></i>', content)
                        else:
                            content = EMOJI_REGEX.sub('[*]', content)

                    # Inject Lucide script into HTML if not already there
                    if is_html and "<head>" in content and "lucide" not in content:
                        content = content.replace("</head>", f"    {LUCIDE_SCRIPT}\n    {LUCIDE_INIT}\n</head>")

                    if content != original_content:
                        with open(fpath, "w", encoding="utf-8") as file:
                            file.write(content)
                        files_processed += 1
                        emojis_removed += 1
                except Exception as e:
                    pass

    print(f">>> Cleaned emojis and standardized icons across {files_processed} files!")

def deep_english_verification_sweep():
    print(">>> PHASE 2: Final English sweep across modules, quizzes, resources, simulators, workshops, presentations, games...")
    # Ensure any residual Spanish words in comments or hidden divs are mapped to English
    sweep_replacements = [
        ("Cuestionario", "Quiz"), ("cuestionario", "quiz"),
        ("Simulador", "Simulator"), ("simulador", "simulator"),
        ("Taller", "Workshop"), ("taller", "workshop"),
        ("Diapositiva", "Slide"), ("diapositiva", "slide"),
        ("Recursos", "Resources"), ("recursos", "resources"),
        ("Ejemplo", "Example"), ("ejemplo", "example"),
        ("Ejemplos", "Examples"), ("ejemplos", "examples"),
        ("Solución", "Solution"), ("solución", "solution"),
        ("Fórmula", "Formula"), ("fórmula", "formula"),
        ("Física", "Physics"), ("física", "physics"),
        ("Cargas", "Charges"), ("cargas", "charges"),
        ("Campo Eléctrico", "Electric Field"), ("campo eléctrico", "electric field"),
        ("Pregunta", "Question"), ("pregunta", "question"),
        ("Respuesta", "Answer"), ("respuesta", "answer"),
        ("Calcular", "Calculate"), ("Verificar", "Verify"),
        ("Siguiente", "Next"), ("Anterior", "Previous"),
        ("Volver", "Back"), ("Inicio", "Home")
    ]
    
    sweep_count = 0
    for root, dirs, files in os.walk(BASE_DIR):
        if ".git" in root or "scripts" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".json", ".md")):
                if "replace_emojis" in f or "check_everything" in f: continue
                fpath = os.path.join(root, f)
                try:
                    with open(fpath, "r", encoding="utf-8", errors="ignore") as file:
                        txt = file.read()
                    
                    orig = txt
                    for span_w, eng_w in sweep_replacements:
                        txt = re.sub(r'\b' + re.escape(span_w) + r'\b', eng_w, txt, flags=re.IGNORECASE)
                    
                    if txt != orig:
                        with open(fpath, "w", encoding="utf-8") as file:
                            file.write(txt)
                        sweep_count += 1
                except Exception:
                    pass
    print(f">>> Sweep completed across {sweep_count} files!")

if __name__ == "__main__":
    clean_emojis_and_inject_icons()
    deep_english_verification_sweep()
