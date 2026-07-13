// modules/module9.js — Ampere's Law
export const module9 = {
    "titulo": "Module 9: Ampere's Law",
    "color": "#0d9488",
    "icono": "loop",
    "descripcionCorta": "Circulation of the magnetic field and displacement current",
    "subtemas": ["Ampere's Law — integral formulation","Amperian paths and symmetry","Field in infinite solenoids","Field in toroids","Finite solenoids","Displacement current (Maxwell)","Generalized Ampere-Maxwell Law"],
    "conceptosClave": ["Ampere's Law", "Amperian path", "Solenoid", "Displacement current"],
    "requisitosPrevios": ["Biot-Savart Law (Module 8)", "Line integrals", "Magnetic symmetry"],
    "Equations": [
        "$$ \\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc} $$ (Ampere's Law)",
        "$$ B = \\mu_0 n I $$ (Field inside an infinite solenoid)"
    ],
    "historia": {
        "hallazgo": "André-Marie Ampère formulated his circuit law in 1826, expressing the relationship between magnetic field circulation and enclosed electric current — later generalized by Maxwell.",
        "experimentoClave": "Ampère's Force Law on Parallel Wires (1826)"
    },
    "bibliografia": ["Griffiths, D. J. (2017). Introduction to Electrodynamics (4th ed.). Cambridge University Press. (Ch. 5.3)"],
    "lecciones": [
        { "id":"m9-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Ampere's Law", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Magnetic Circulation & Solenoids.", "xp":30 },
        { "id":"m9-l1","tipo":"multivideo","recurso":"6mHK7by6WJc|mIPnkZPFAa8|aEFn-JY_h8A|4DYjxBRjYbc|K7-PiHoJ3v0","titulo":"1. Videos — Ampere's Law","descripcion":"Magnetic field circulation, solenoids, toroids, and displacement current.","xp":10 },
        { "id":"m9-l2","tipo":"presentacion","recurso":"./player.html?clase=9","titulo":"2. Interactive Slides","descripcion":"Amperian paths with cylindrical and toroidal symmetry. Animated displacement current.","xp":15 },
        { "id":"m9-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m9-s1","tipo":"Simulator","recurso":"simulators/Sim_M9_Solenoid.html","titulo":"3.1 Interactive Solenoid","descripcion":"Magnetic field inside and outside solenoids using Ampere's Law.","xp":20 },
            { "id":"m9-s2","tipo":"Simulator","recurso":"simulators/Sim_M9_Ampere_Table.html","titulo":"3.2 Interactive Ampere Table","descripcion":"Select geometry and apply Ampere's Law automatically.","xp":20 }
          ]
        },
        { "id":"m9-j1","tipo":"Game","recurso":"games/Game_9.html","titulo":"4. Physics Quest — Ampere's Law","descripcion":"Choose the correct Amperian path and calculate the field. 5 different geometries!","xp":25,"logro":{"id":"logro_m9","nombre":"Amperian Master","icono":"[LOOP]"} },
        { "id":"m9-l7","tipo":"exercise","recurso":"workshops/Workshop_9_Ampere_Law.html","titulo":"5. Practical Workshop — Ampere's Law","descripcion":"Problems on solenoids, toroids, coaxial conductors, and toroidal fields.","xp":30 },
        { "id":"m9-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_9.html","titulo":"6. Adaptive Quiz — Module 9","descripcion":"Assess from the concept of circulation to applications with displacement current.","xp":40 },
        { "id":"m9-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Ampere's Law","descripcion":"AI for Ampere: how to choose the Amperian path, comparison with Gauss, and Maxwell's generalization.","xp":10 },
        { "id":"m9-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Academic sources on Ampere's Law and its generalizations.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/13-1-the-biot-savart-law","titulo":"OpenStax: Ampere's Law — Ch. 13","descripcion":"Solenoids, toroids, and displacement current." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Ch. 5.3","descripcion":"Rigorous Ampere's Law with problems." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/ley-de-ampere","titulo":"Fisicalab: Ampere's Law","descripcion":"Symmetry, solenoids, and examples." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-magnetic-forces-and-magnetic-fields/ap-magnetic-field-from-currents/v/amperes-law","titulo":"Khan Academy: Ampere's Law","descripcion":"Conceptual introduction with practice." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/faradays-law","titulo":"PhET: Solenoid Field","descripcion":"Explore the magnetic field in solenoids." }
            ]}
          ]
        }
    ]
};
