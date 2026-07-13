// ============================================================
// modules/module1.js — Coulomb\'s Law
// [*] NotebookLLM: actualizar "llmLink" con tu link real
// ============================================================
export const module1 = {
    "titulo": "Module 1: Coulomb\'s Law",
    "color": "#2563eb",
    "icono": "electric_bolt",
    "descripcionCorta": "Force entre Electric Charges y principio de superPosition",
    "subtemas": ["Electric Charge", "Conductors y Insulators", "Coulomb\'s Law", "Principio de superPosition", "Distribuciones de carga discreta"],
    "conceptosClave": ["Cuantización de la carga", "Aislante vs Conductor", "SuperPosition", "Induction electrostática"],
    "requisitosPrevios": ["Suma de Vectors (Physics Mecánica)", "Trigonometría Básica (Seno/Coseno)", "Notación Científica"],
    "Equations": [
        "$$ F = k_e \\frac{|q_1 q_2|}{r^2} $$ (magnitudeeeee de Coulomb)",
        "$$ \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + ... $$ (SuperPosition)"
    ],
    "historia": {
        "hallazgo": "En 1785, Charles-Augustin de Coulomb utilizó una balanza de torsión ultrasensible para medir la debilísima Force de atracción entre dos esferas loadeds, descubriendo la ley de la inversa del cuadrado.",
        "experimentoClave": "Balanza de Torsión de Coulomb"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Cap. 23)"],
    "lecciones": [
        {
            "id": "m1-l1", "tipo": "multivideo",
            "recurso": "xLyRPFL0GJ8|mrCyjv9lf3I|HpHVmuQb1gM|YgP-9fVA0-Y|gigeloLe1jI|ph341nhqOII|tXschFCgjrY|q1Ez2tLVy10|EhCX3JR6mHQ|8FXllt2Z9Tk|a1M2OmlwGyc|_hgOrdi7Epw",
            "titulo": "1. Videos — Coulomb\'s Law",
            "descripcion": "Selecciona el video en el panel derecho. Incluye Theory, examples resueltos y experimentos.",
            "xp": 10
        },
        {
            "id": "m1-l2", "tipo": "presentacion",
            "recurso": "./player.html?clase=1",
            "titulo": "2. Slides Interactivas",
            "descripcion": "Material visual con simulaciones embebidas, Equations animadas y visualizaciones 3D.",
            "xp": 15
        },
        {
            "id": "m1-g1", "tipo": "grupo", "titulo": "3. Laboratorio Virtual",
            "sublecciones": [
                { "id": "m1-s1", "tipo": "Simulator", "recurso": "simulators/Sim_M1_Coulomb_Basic.html", "titulo": "3.1 Coulomb\'s Law Interactiva", "descripcion": "Ajusta Charges y Distances. Observa la Force en tiempo real.", "xp": 20 },
                { "id": "m1-s2", "tipo": "Simulator", "recurso": "simulators/Sim_M1_Charges.html", "titulo": "3.2 Análisis de Charges", "descripcion": "Interacción entre múltiples Charges.", "xp": 20 },
                { "id": "m1-s3", "tipo": "Simulator", "recurso": "simulators/Sim_M1_Coulomb_Pro.html", "titulo": "3.3 SuperPosition de Forces", "descripcion": "Principio de superPosition con 3+ Charges.", "xp": 20 }
            ]
        },
        {
            "id": "m1-j1", "tipo": "Game",
            "recurso": "games/Game_1.html",
            "titulo": "4. Physics Quest — Coulomb",
            "descripcion": "Desafío interactivo de 5 rondas. ¡Responde para ganar XP y desbloquear logros!",
            "xp": 25, "logro": { "id": "logro_m1", "nombre": "Maestro Electrostático", "icono": "[POWER]" }
        },
        {
            "id": "m1-l7", "tipo": "exercise",
            "recurso": "workshops/Workshop_1_Coulomb_Law.html",
            "titulo": "5. Workshop Práctico — Coulomb",
            "descripcion": "Guía de 15 problemas con dificultad progresiva: conceptuales, numéricos y de aplicación.",
            "xp": 30
        },
        {
            "id": "m1-q1", "tipo": "quiz",
            "recurso": "quizzes/Quiz_Adaptive_1.html",
            "titulo": "6. Quiz Adaptativo — Module 1",
            "descripcion": "10 Questions adaptadas a tu Level. El sistema ajusta la dificultad según tu desempeño.",
            "xp": 40
        },
        {
            // [*] NOTEBOOKLM: Reemplaza el '#' con el link real de tu notebook
            // example: "llmLink": "https://notebooklm.google.com/notebook/TU-ID-AQUI"
            "id": "m1-nb1", "tipo": "notebooklm",
            "llmLink": "https://notebooklm.google.com/notebook/37622815-4b54-4808-b770-37464cb05719",
            "titulo": "7. NotebookLLM — Coulomb\'s Law",
            "descripcion": "Asistente de IA entrenado con todo el material del Module. Hazle Questions, pide explicaciones o genera exercises.",
            "xp": 10
        },
        {
            "id": "m1-e1", "tipo": "referencias",
            "titulo": "8. Referencias BiblioCharts",
            "descripcion": "Fuentes académicas, libros de texto, artículos y Resources web verificados.",
            "xp": 10,
            "secciones": [
                {
                    "tituloSeccion": "[*] Libros de texto principales",
                    "links": [
                        { "url": "https://openstax.org/books/university-physics-volume-2/pages/1-1-electric-charge", "titulo": "OpenStax: University Physics Vol. 2 — Cap. 1", "descripcion": "Development formal de la Coulomb\'s Law con examples resueltos (acceso libre)." },
                        { "url": "https://www.amazon.com/dp/0131496824", "titulo": "Serway & Jewett — Physics for Scientists and Engineers", "descripcion": "Capítulos 23–24: electrostática clásica." },
                        { "url": "https://www.amazon.com/dp/0470469080", "titulo": "Hayt & Kemmerly — Engineering Electromagnetics", "descripcion": "Fundamentos de electrostática para ingeniería." }
                    ]
                },
                {
                    "tituloSeccion": "[WEB] Resources web académicos",
                    "links": [
                        { "url": "https://www.fisicalab.com/apartado/ley-de-coulomb", "titulo": "Fisicalab: Coulomb\'s Law", "descripcion": "Explanation didáctica con Charts y examples numéricos." },
                        { "url": "https://en.wikipedia.org/wiki/Coulomb%27s_law", "titulo": "Wikipedia: Coulomb's Law", "descripcion": "Contexto histórico, formulación matemática y aplicaciones." },
                        { "url": "https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage", "titulo": "Khan Academy: Force Eléctrica", "descripcion": "Videos y exercises interactivos (gratuitos)." }
                    ]
                },
                {
                    "tituloSeccion": "[SCIENCE] Simulatores externos",
                    "links": [
                        { "url": "https://phet.colorado.edu/es/simulations/coulombs-law", "titulo": "PhET: Coulomb\'s Law", "descripcion": "Simulator interactivo de la Universidad de Colorado." },
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
