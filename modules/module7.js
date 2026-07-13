// modules/module7.js — Lorentz Force Law
export const module7 = {
    "titulo": "Module 7: Lorentz Force Law",
    "color": "#ea580c",
    "icono": "north",
    "descripcionCorta": "Magnetic force on charges and conductors, motion in magnetic field",
    "subtemas": ["Magnetic field and its sources","Lorentz Force F = qv×B","Circular motion of charges","Mass spectrometer and cyclotron","Force on current-carrying conductors","Magnetic dipole moment","Hall effect"],
    "conceptosClave": ["Lorentz force", "Magnetic field", "Circular trajectory", "Hall effect"],
    "requisitosPrevios": ["Electric Field (Module 2)", "Kinematics", "Vector cross product"],
    "Equations": [
        "$$ \\vec{F} = q(\\vec{v} \\times \\vec{B}) $$ (Lorentz force on a charge)",
        "$$ r = \\frac{mv}{|q|B} $$ (Radius of circular trajectory)"
    ],
    "historia": {
        "hallazgo": "Hendrik Lorentz unified the electric and magnetic forces into a single formula in 1895, completing the classical electromagnetic theory of charged particle motion.",
        "experimentoClave": "Lorentz's Unified Force Equation (1895)"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Ch. 29)"],
    "lecciones": [
        { "id":"m7-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Lorentz Force", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Magnetic Force on Charges & Conductors.", "xp":30 },
        { "id":"m7-l1","tipo":"multivideo","recurso":"9_p7MUf8QCE|YXA_F7qHiDM|LqT1VX18kEk|hBUpBwbmBwc|OsZRKqHrOTw|sLHNkl2TYOE","titulo":"1. Videos — Lorentz Force Law","descripcion":"Magnetic force on moving charges, conductors, and technological applications.","xp":10 },
        { "id":"m7-l2","tipo":"presentacion","recurso":"./player.html?clase=7","titulo":"2. Interactive Slides","descripcion":"3D visualization of F = qv×B with animations of circular and helical trajectories.","xp":15 },
        { "id":"m7-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m7-s1","tipo":"Simulator","recurso":"simulators/Sim_M7_Lorentz.html","titulo":"3.1 Interactive Lorentz Lab","descripcion":"Control velocity, charge, and B. Observe the 3D helical trajectory.","xp":20 },
            { "id":"m7-s2","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.2 Force on a Conductor","descripcion":"Visualize the force on current segments in a magnetic field.","xp":20 }
          ]
        },
        { "id":"m7-j1","tipo":"Game","recurso":"games/Game_7.html","titulo":"4. Physics Quest — Lorentz","descripcion":"Guide charged particles through magnetic fields toward the target. 5 missions!","xp":25,"logro":{"id":"logro_m7","nombre":"Quantum Pilot","icono":"[LAUNCH]"} },
        { "id":"m7-l7","tipo":"exercise","recurso":"workshops/Workshop_7_Lorentz_Law.html","titulo":"5. Practical Workshop — Lorentz","descripcion":"Problems on trajectories in magnetic fields, spectrometers, and cyclotrons.","xp":30 },
        { "id":"m7-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_7.html","titulo":"6. Adaptive Quiz — Module 7","descripcion":"Assess from force direction (right-hand rule) to cyclotron radius calculations.","xp":40 },
        { "id":"m7-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Lorentz Force Law","descripcion":"AI for Lorentz: right-hand rule, circular motion, applications in technology.","xp":10 },
        { "id":"m7-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Sources on magnetostatics and Lorentz force.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/11-1-magnetism-and-its-historical-discoveries","titulo":"OpenStax: Magnetism and Lorentz Force — Ch. 11","descripcion":"Magnetic force, motion of charges, and applications." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Ch. 5.1","descripcion":"Magnetic force on charges and currents." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/fuerza-magnetica","titulo":"Fisicalab: Magnetic Force","descripcion":"Lorentz Force Law with numerical examples." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-magnetic-forces-and-magnetic-fields","titulo":"Khan Academy: Magnetic Forces","descripcion":"Interactive videos on magnetism and Lorentz." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Motion in Magnetic Field","descripcion":"Visualize trajectories of charged particles." }
            ]}
          ]
        }
    ]
};
