// modules/module6.js — DC Resistive Circuits
export const module6 = {
    "titulo": "Module 6: DC Resistive Circuits",
    "color": "#059669",
    "icono": "electrical_services",
    "descripcionCorta": "Electric current, resistance, Kirchhoff's laws, and network analysis",
    "subtemas": ["Electric current and current density","Resistance and resistivity","Ohm's Law","Series and parallel circuits","Kirchhoff's Voltage Law (KVL)","Kirchhoff's Current Law (KCL)","Node and mesh analysis","Delta-Star transformation","Thevenin and Norton theorems","Dissipated electric power"],
    "conceptosClave": ["Electric current", "Resistance", "Kirchhoff's Laws", "Thevenin theorem"],
    "requisitosPrevios": ["Electric Potential (Module 4)", "Basic algebra and linear equations"],
    "Equations": [
        "$$ V = IR $$ (Ohm's Law)",
        "$$ \\sum V = 0 $$ (KVL), $$ \\sum I = 0 $$ (KCL)"
    ],
    "historia": {
        "hallazgo": "Georg Simon Ohm published his law in 1827, establishing the proportional relationship between voltage and current. Kirchhoff extended this with his two circuit laws in 1845.",
        "experimentoClave": "Ohm's Galvanometer Experiment (1827)"
    },
    "bibliografia": ["Hayt, W. H., & Kemmerly, J. E. (2018). Engineering Circuit Analysis. McGraw-Hill. (Ch. 3–5)"],
    "lecciones": [
        { "id":"m6-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — DC Circuits", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Current, Resistance & Kirchhoff's Laws.", "xp":30 },
        { "id":"m6-l1","tipo":"multivideo","recurso":"Z_XkDlMFXGA|8Fy4-FOgNlA|gxbA_iy4aWM|y5X2AMZVMxM|s7YUiSeMJ0g|cFPjijfVTtU|WUmxkuYVHsQ","titulo":"1. Videos — DC Circuits","descripcion":"Current, resistance, Kirchhoff, Thevenin, and Norton. Complete theory with examples.","xp":10 },
        { "id":"m6-l2","tipo":"presentacion","recurso":"./player.html?clase=6","titulo":"2. Interactive Slides","descripcion":"Circuit analysis using the mesh and node method, animated step-by-step.","xp":15 },
        { "id":"m6-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m6-s1","tipo":"Simulator","recurso":"simulators/Sim_M6_Resistivity.html","titulo":"3.1 Resistivity and Geometry","descripcion":"How conductor geometry affects its resistance.","xp":20 },
            { "id":"m6-s2","tipo":"Simulator","recurso":"simulators/Sim_M6_DC_Circuit.html","titulo":"3.2 Field in Conductors","descripcion":"Electric field driving current in a conductor.","xp":20 }
          ]
        },
        { "id":"m6-j1","tipo":"Game","recurso":"games/Game_6.html","titulo":"4. Physics Quest — DC Circuits","descripcion":"Design circuits to meet voltage and current specifications. 5 engineering challenges!","xp":25,"logro":{"id":"logro_m6","nombre":"Network Architect","icono":"[CIRCUIT]"} },
        { "id":"m6-t","tipo":"grupo","titulo":"5. Practical Workshops",
          "sublecciones":[
            { "id":"m6-t1","tipo":"exercise","recurso":"workshops/Workshop_6_1_Circuit_Reduction.html","titulo":"5.1 Workshop — Circuit Reduction","descripcion":"Simplification of resistive networks: series, parallel, and delta-star.","xp":25 },
            { "id":"m6-t2","tipo":"exercise","recurso":"workshops/Workshop_6_2_Kirchhoff_Laws.html","titulo":"5.2 Workshop — Kirchhoff's Laws","descripcion":"Systematic network analysis using KVL and KCL with 20 problems.","xp":30 }
          ]
        },
        { "id":"m6-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_6.html","titulo":"6. Adaptive Quiz — Module 6","descripcion":"From Ohm's Law to complex network analysis with Kirchhoff's Laws.","xp":40 },
        { "id":"m6-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — DC Circuits","descripcion":"AI specialized in DC circuits. Helps solve by mesh, node, and Thevenin/Norton theorems.","xp":10 },
        { "id":"m6-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Books, tutorials, and simulators for DC resistive circuits.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/10-1-electromotive-force","titulo":"OpenStax: DC Circuits — Ch. 10","descripcion":"EMF, internal resistance, Kirchhoff, and RC circuits." },
                { "url":"https://www.amazon.com/dp/0073380679","titulo":"Hayt — Engineering Circuit Analysis","descripcion":"Circuit analysis with mesh and node methods." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.allaboutcircuits.com/textbook/direct-current/","titulo":"All About Circuits: DC","descripcion":"Complete guide to DC circuits with online simulators." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-circuits-topic","titulo":"Khan Academy: Electric Circuits","descripcion":"Step-by-step videos on Kirchhoff and circuits." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/circuit-construction-kit-dc","titulo":"PhET: DC Circuit Construction Kit","descripcion":"Build and measure complete circuits online." },
                { "url":"https://www.falstad.com/circuit/","titulo":"Falstad Circuit Simulator","descripcion":"Professional browser-based circuit simulator." }
            ]}
          ]
        }
    ]
};
