// modules/module3.js — Gauss's Law
export const module3 = {
    "titulo": "Module 3: Gauss's Law",
    "color": "#dc2626",
    "icono": "radar",
    "descripcionCorta": "Electric flux, Gaussian surfaces, and symmetry in the electric field",
    "subtemas": ["Electric flux","Gauss's Law","Gaussian surfaces","Spherical, cylindrical, and planar symmetry","Field of uniform continuous distributions","Conductors in electrostatic equilibrium","Electrostatic shielding"],
    "conceptosClave": ["Electric flux", "Gaussian surface", "Symmetry", "Electrostatic shielding"],
    "requisitosPrevios": ["Electric Field (Module 2)", "Surface integrals", "Vector calculus"],
    "Equations": [
        "$$ \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0} $$ (Gauss's Law)",
        "$$ \\Phi_E = \\int_S \\vec{E} \\cdot d\\vec{A} $$ (Electric flux)"
    ],
    "historia": {
        "hallazgo": "Carl Friedrich Gauss formulated his law in 1835 as a powerful mathematical tool to calculate electric fields for highly symmetric charge distributions.",
        "experimentoClave": "Gauss's Torsion Balance Symmetry Analysis"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Ch. 24)"],
    "lecciones": [
        { "id":"m3-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Gauss's Law", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Electric Flux & Gaussian Surfaces.", "xp":30 },
        { "id":"m3-l1","tipo":"multivideo","recurso":"yFOcL5WnJLw|YoYxhEJ57jA|mYHOENflNlc|hqhNsTmfHjM|aOPIm3YFSzQ|aDemZMR20fM","titulo":"1. Videos — Gauss's Law","descripcion":"Electric flux, Gaussian surfaces, and symmetry-based applications.","xp":10 },
        { "id":"m3-l2","tipo":"presentacion","recurso":"./player.html?clase=3","titulo":"2. Interactive Slides","descripcion":"Visualization of electric flux through surfaces with Gaussian animations.","xp":15 },
        { "id":"m3-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m3-s1","tipo":"Simulator","recurso":"simulators/Sim_M3_Flux.html","titulo":"3.1 Electric Flux","descripcion":"Visualize flux through different surfaces in real time.","xp":20 },
            { "id":"m3-s2","tipo":"Simulator","recurso":"simulators/Sim_M3_Gauss_Table.html","titulo":"3.2 Interactive Gauss Table","descripcion":"Select geometry and calculate the field using Gauss's Law.","xp":20 },
            { "id":"m3-s3","tipo":"Simulator","recurso":"simulators/Sim_M2_Board_Distributions.html","titulo":"3.3 Symmetric Distributions","descripcion":"Field of charged rings, disks, and cylinders.","xp":20 }
          ]
        },
        { "id":"m3-j1","tipo":"Game","recurso":"games/Game_3.html","titulo":"4. Physics Quest — Gauss","descripcion":"Choose the correct Gaussian surface and calculate the field. 5 challenging rounds!","xp":25,"logro":{"id":"logro_m3","nombre":"Flux Guardian","icono":"[RADAR]"} },
        { "id":"m3-l7","tipo":"exercise","recurso":"workshops/Workshop_3_Gauss_Law.html","titulo":"5. Practical Workshop — Gauss","descripcion":"Problems on electric flux and application of Gauss's Law with real geometries.","xp":30 },
        { "id":"m3-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_3.html","titulo":"6. Adaptive Quiz — Module 3","descripcion":"Assess your understanding of flux, Gaussian surfaces, and their applications.","xp":40 },
        { "id":"m3-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Gauss's Law","descripcion":"AI specialized in Gauss. Explains how to choose the correct Gaussian surface.","xp":10 },
        { "id":"m3-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Sources to deepen understanding of Gauss's Law and electric flux.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/6-1-electric-flux","titulo":"OpenStax: Electric Flux and Gauss's Law","descripcion":"Ch. 6: flux definition and symmetry applications." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Introduction to Electrodynamics","descripcion":"Ch. 2: electrostatics with rigorous derivation of Gauss's Law." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/ley-de-gauss","titulo":"Fisicalab: Gauss's Law","descripcion":"Symmetry-based applications with numerical examples." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electric-charge-electric-force-and-voltage/gauss-law-ap/v/electric-flux","titulo":"Khan Academy: Flux and Gauss's Law","descripcion":"Introductory video and exercises." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Charges and Fields (flux)","descripcion":"Measure flux through user-defined surfaces." }
            ]}
          ]
        }
    ]
};
