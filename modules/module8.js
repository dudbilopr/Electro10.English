// modules/module8.js — Biot-Savart Law
export const module8 = {
    "titulo": "Module 8: Biot-Savart Law",
    "color": "#9333ea",
    "icono": "radio_button_checked",
    "descripcionCorta": "Magnetic field created by electric currents",
    "subtemas": ["Biot-Savart Law — differential formulation","Field of an infinite straight conductor","Field at the center of a circular loop","Field along the axis of a loop","Solenoids and toroids (Ampere precursor)","Force between parallel conductors","Definition of the Ampere"],
    "conceptosClave": ["Biot-Savart Law", "Magnetic field", "Current loop", "Solenoid"],
    "requisitosPrevios": ["Lorentz Force (Module 7)", "Vector cross product", "Line integrals"],
    "Equations": [
        "$$ d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I d\\vec{l} \\times \\hat{r}}{r^2} $$ (Biot-Savart Law)",
        "$$ B = \\frac{\\mu_0 I}{2\\pi r} $$ (Infinite straight wire)"
    ],
    "historia": {
        "hallazgo": "Jean-Baptiste Biot and Félix Savart experimentally established the law governing the magnetic field of a current-carrying wire in 1820, just weeks after Oersted discovered that currents produce magnetic fields.",
        "experimentoClave": "Biot and Savart's Current-Wire Experiment (1820)"
    },
    "bibliografia": ["Griffiths, D. J. (2017). Introduction to Electrodynamics (4th ed.). Cambridge University Press. (Ch. 5.2)"],
    "lecciones": [
        { "id":"m8-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Biot-Savart", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Magnetic Field of Current-Carrying Wires.", "xp":30 },
        { "id":"m8-l1","tipo":"multivideo","recurso":"PPnDdEkH5rI|RiCBQJWz0Hs|J0eZkUQrRHY|V0x_kQovAUA|8kU8YyNOanE","titulo":"1. Videos — Biot-Savart","descripcion":"Step-by-step calculation of the magnetic field for wires, loops, and solenoids.","xp":10 },
        { "id":"m8-l2","tipo":"presentacion","recurso":"./player.html?clase=8","titulo":"2. Interactive Slides","descripcion":"3D visualization of the magnetic field for different conductor geometries.","xp":15 },
        { "id":"m8-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m8-s1","tipo":"Simulator","recurso":"simulators/Sim_M8_BiotSavart_Ring.html","titulo":"3.1 Current Loop Field","descripcion":"Magnetic field on the axis of a circular current loop.","xp":20 },
            { "id":"m8-s2","tipo":"Simulator","recurso":"simulators/Sim_M8_BiotSavart_Ring.html","titulo":"3.2 Current Arc Field","descripcion":"Contribution of partial arcs to the total magnetic field.","xp":20 },
            { "id":"m8-s3","tipo":"Simulator","recurso":"simulators/Sim_M8_Biot_Savart_Wire.html","titulo":"3.3 Straight Conductor Field","descripcion":"Magnetic field of a finite and infinite straight current-carrying conductor.","xp":20 }
          ]
        },
        { "id":"m8-j1","tipo":"Game","recurso":"games/Game_8.html","titulo":"4. Physics Quest — Biot-Savart","descripcion":"Build the perfect electromagnet! Choose geometry and current to reach the target field.","xp":25,"logro":{"id":"logro_m8","nombre":"Magnetic Architect","icono":"[MAGNET]"} },
        { "id":"m8-l7","tipo":"exercise","recurso":"workshops/Workshop_8_Biot_Savart.html","titulo":"5. Practical Workshop — Biot-Savart","descripcion":"Calculate the magnetic field for wires, arcs, loops, and finite solenoids.","xp":30 },
        { "id":"m8-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_8.html","titulo":"6. Adaptive Quiz — Module 8","descripcion":"Assess from the direction of B to integral calculations of Biot-Savart.","xp":40 },
        { "id":"m8-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Biot-Savart","descripcion":"AI for Biot-Savart: vector integration, geometries, and comparison with Ampere.","xp":10 },
        { "id":"m8-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Sources on Biot-Savart Law and magnetic field of currents.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/12-1-the-biot-savart-law","titulo":"OpenStax: Biot-Savart Law — Ch. 12","descripcion":"Derivation and applications to standard geometries." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Ch. 5.2","descripcion":"Biot-Savart Law with mathematical rigor." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/ley-de-biot-savart","titulo":"Fisicalab: Biot-Savart","descripcion":"Explanation with solved examples." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-magnetic-forces-and-magnetic-fields/electric-current-ap/v/magnetic-field-created-by-a-current","titulo":"Khan Academy: Field from Current","descripcion":"Videos and guided practice." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://www.geogebra.org/m/mfkHRdKy","titulo":"GeoGebra: Interactive Biot-Savart","descripcion":"Visualize the field of free-form conductors." }
            ]}
          ]
        }
    ]
};
