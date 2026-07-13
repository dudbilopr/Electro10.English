// ============================================================
// modules/module1.js — Coulomb\'s Law
// [*] NotebookLLM: actualizar "llmLink" con tu link real
// ============================================================
export const module1 = {
    "titulo": "Module 1: Coulomb\'s Law",
    "color": "#2563eb",
    "icono": "electric_bolt",
    "descripcionCorta": "Force between electric charges and superposition principle",
    "subtemas": ["Electric Charge", "Conductors and Insulators", "Coulomb's Law", "Superposition Principle", "Discrete charge distributions"],
    "conceptosClave": ["Charge quantization", "Insulator vs Conductor", "Superposition", "Electrostatic induction"],
    "requisitosPrevios": ["Vector Addition (Classical Mechanics)", "Basic Trigonometry (Sine/Cosine)", "Scientific Notation"],
    "Equations": [
        "$$ F = k_e \\frac{|q_1 q_2|}{r^2} $$ (Coulomb's Law magnitude)",
        "$$ \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + ... $$ (Superposition)"
    ],
    "historia": {
        "hallazgo": "In 1785, Charles-Augustin de Coulomb used an ultra-sensitive torsion balance to measure the delicate electrostatic attraction between charged spheres, discovering the inverse-square law.",
        "experimentoClave": "Coulomb's Torsion Balance"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Ch. 23)"],
    "lecciones": [
        { "id":"m1-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Coulomb's Law", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Coulomb's Law & Electric Charges.", "xp":30 },
        {
            "id": "m1-l1", "tipo": "multivideo",
            "recurso": "xLyRPFL0GJ8|mrCyjv9lf3I|HpHVmuQb1gM|YgP-9fVA0-Y|gigeloLe1jI|ph341nhqOII|tXschFCgjrY|q1Ez2tLVy10|EhCX3JR6mHQ|8FXllt2Z9Tk|a1M2OmlwGyc|_hgOrdi7Epw",
            "titulo": "1. Videos — Coulomb\'s Law",
            "descripcion": "Select the video in the right panel. Includes theory, solved examples, and laboratory experiments.",
            "xp": 10
        },
        {
            "id": "m1-l2", "tipo": "presentacion",
            "recurso": "./player.html?clase=1",
            "titulo": "2. Interactive Slides",
            "descripcion": "Visual material with embedded simulations, animated equations, and 3D visualizations.",
            "xp": 15
        },
        {
            "id": "m1-g1", "tipo": "grupo", "titulo": "3. Virtual Laboratory",
            "sublecciones": [
                { "id": "m1-s1", "tipo": "Simulator", "recurso": "simulators/Sim_M1_Coulomb_Basic.html", "titulo": "3.1 Coulomb\'s Law Interactive", "descripcion": "Adjust charges and distances. Observe the electrostatic force in real time.", "xp": 20 },
                { "id": "m1-s2", "tipo": "Simulator", "recurso": "simulators/Sim_M1_Charges.html", "titulo": "3.2 Charge Analysis", "descripcion": "Interaction between multiple point charges.", "xp": 20 },
                { "id": "m1-s3", "tipo": "Simulator", "recurso": "simulators/Sim_M1_Coulomb_Pro.html", "titulo": "3.3 Superposition of Forces", "descripcion": "Superposition principle with 3+ point charges.", "xp": 20 }
            ]
        },
        {
            "id": "m1-j1", "tipo": "Game",
            "recurso": "games/Game_1.html",
            "titulo": "4. Physics Quest — Coulomb",
            "descripcion": "Interactive 5-round challenge. Answer questions to earn XP and unlock badges!",
            "xp": 25, "logro": { "id": "logro_m1", "nombre": "Electrostatic Master", "icono": "[POWER]" }
        },
        {
            "id": "m1-l7", "tipo": "exercise",
            "recurso": "workshops/Workshop_1_Coulomb_Law.html",
            "titulo": "5. Practical Workshop — Coulomb",
            "descripcion": "Guide with 15 problems of progressive difficulty: conceptual, numerical, and applied.",
            "xp": 30
        },
        {
            "id": "m1-q1", "tipo": "quiz",
            "recurso": "quizzes/Quiz_Adaptive_1.html",
            "titulo": "6. Adaptive Quiz — Module 1",
            "descripcion": "10 adaptive questions tailored to your level. The system adjusts difficulty dynamically based on performance.",
            "xp": 40
        },
        {
            // [*] NOTEBOOKLM: Reemplaza el '#' con el link real de tu notebook
            // example: "llmLink": "https://notebooklm.google.com/notebook/TU-ID-AQUI"
            "id": "m1-nb1", "tipo": "notebooklm",
            "llmLink": "https://notebooklm.google.com/notebook/37622815-4b54-4808-b770-37464cb05719",
            "titulo": "7. NotebookLLM — Coulomb\'s Law",
            "descripcion": "AI Assistant trained on all module material. Ask questions, request explanations, or generate practice exercises.",
            "xp": 10
        },
        {
            "id": "m1-e1", "tipo": "referencias",
            "titulo": "8. Bibliographic References",
            "descripcion": "Verified academic sources, textbooks, journal articles, and web resources.",
            "xp": 10,
            "secciones": [
                {
                    "tituloSeccion": "[*] Main Textbook References",
                    "links": [
                        { "url": "https://openstax.org/books/university-physics-volume-2/pages/1-1-electric-charge", "titulo": "OpenStax: University Physics Vol. 2 — Cap. 1", "descripcion": "Development formal de la Coulomb\'s Law con examples resueltos (acceso libre)." },
                        { "url": "https://www.amazon.com/dp/0131496824", "titulo": "Serway & Jewett — Physics for Scientists and Engineers", "descripcion": "Capítulos 23–24: electrostática clásica." },
                        { "url": "https://www.amazon.com/dp/0470469080", "titulo": "Hayt & Kemmerly — Engineering Electromagnetics", "descripcion": "Fundamentos de electrostática para ingeniería." }
                    ]
                },
                {
                    "tituloSeccion": "[WEB] Academic Web Resources",
                    "links": [
                        { "url": "https://www.fisicalab.com/apartado/ley-de-coulomb", "titulo": "Fisicalab: Coulomb\'s Law", "descripcion": "Didactic explanation with charts and solved numerical examples." },
                        { "url": "https://en.wikipedia.org/wiki/Coulomb%27s_law", "titulo": "Wikipedia: Coulomb's Law", "descripcion": "Historical context, mathematical formulation, and applications." },
                        { "url": "https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage", "titulo": "Khan Academy: Force Electric", "descripcion": "Interactive videos and exercises (free access)." }
                    ]
                },
                {
                    "tituloSeccion": "[SCIENCE] External Simulators",
                    "links": [
                        { "url": "https://phet.colorado.edu/es/simulations/coulombs-law", "titulo": "PhET: Coulomb\'s Law", "descripcion": "Interactive simulation by the University of Colorado." },
                        { "url": "https://www.educaplus.org/game/ley-de-coulomb", "titulo": "Educaplus: Simulator Coulomb", "descripcion": "Simulation web sin instalación." }
                    ]
                },
                {
                    "tituloSeccion": "[FILE] Artículos y PDFs",
                    "links": [
                        { "url": "https://www.unet.edu.ve/departamentos/fisica/electromagnetismo/coulomb.pdf", "titulo": "UNET: Apuntes Coulomb\'s Law", "descripcion": "Documento académico universitario." }
                    ]
                }
            ]
        }
    ]
};
