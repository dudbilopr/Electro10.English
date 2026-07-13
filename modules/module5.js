// modules/module5.js — Capacitance
export const module5 = {
    "titulo": "Module 5: Capacitance",
    "color": "#0891b2",
    "icono": "developer_board",
    "descripcionCorta": "Capacitors, stored energy, dielectrics, and capacitive circuits",
    "subtemas": ["Definition of capacitance","Parallel-plate capacitor","Spherical and cylindrical capacitors","Energy stored in a capacitor","Dielectrics and polarization","Relative dielectric constant","Capacitors in series and parallel","Energy of the electric field"],
    "conceptosClave": ["Capacitance", "Dielectric", "Stored energy", "Series and parallel"],
    "requisitosPrevios": ["Electric Potential (Module 4)", "Basic circuit analysis", "Energy concepts"],
    "Equations": [
        "$$ C = \\frac{Q}{V} = \\varepsilon_0 \\frac{A}{d} $$ (Parallel-plate capacitor)",
        "$$ U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} $$ (Stored energy)"
    ],
    "historia": {
        "hallazgo": "The Leyden jar, invented in 1745, was the first practical capacitor. Ewald von Kleist and Pieter van Musschenbroek independently discovered that charge could be stored on metal foil.",
        "experimentoClave": "Leyden Jar — First Capacitor"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Ch. 26)"],
    "lecciones": [
        { "id":"m5-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Capacitance", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Capacitors, Dielectrics & Energy.", "xp":30 },
        { "id":"m5-l1","tipo":"multivideo","recurso":"NNelSWJnUNc|6YdyYPfLqfA|rPBpCN_TdXk|ZCGpHvTPNlA|P3DPNxNnCqQ|Y2bQSfZ8eZE","titulo":"1. Videos — Capacitance","descripcion":"Capacitors, dielectrics, and energy: from theory to circuits.","xp":10 },
        { "id":"m5-l2","tipo":"presentacion","recurso":"./player.html?clase=5","titulo":"2. Interactive Slides","descripcion":"Animations of capacitor charging process and dielectric effects.","xp":15 },
        { "id":"m5-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m5-s1","tipo":"Simulator","recurso":"simulators/Sim_M5_Capacitance.html","titulo":"3.1 Interactive Capacitor","descripcion":"Adjust separation, area, and dielectric. Measure C, Q, V, and energy.","xp":20 },
            { "id":"m5-s2","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.2 Field Between Plates","descripcion":"Visualize the uniform electric field between parallel plates.","xp":20 }
          ]
        },
        { "id":"m5-j1","tipo":"Game","recurso":"games/Game_5.html","titulo":"4. Physics Quest — Capacitance","descripcion":"Design the perfect capacitor to store the required energy. 5 engineering challenges!","xp":25,"logro":{"id":"logro_m5","nombre":"Circuit Engineer","icono":"[BATTERY]"} },
        { "id":"m5-l7","tipo":"exercise","recurso":"workshops/Workshop_5_Capacitance.html","titulo":"5. Practical Workshop — Capacitance","descripcion":"Problems on simple capacitors, network combinations, and stored energy.","xp":30 },
        { "id":"m5-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_5.html","titulo":"6. Adaptive Quiz — Module 5","descripcion":"From the definition of capacitance to energy calculation with dielectrics.","xp":40 },
        { "id":"m5-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Capacitance","descripcion":"AI trained on capacitors. Explains dielectrics, combinations, and circuit applications.","xp":10 },
        { "id":"m5-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Academic sources on capacitors, dielectrics, and energy in electric fields.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/8-1-capacitors-and-capacitance","titulo":"OpenStax: Capacitors — Ch. 8","descripcion":"Capacitance, energy, and dielectrics with solved examples." },
                { "url":"https://www.amazon.com/dp/0131496824","titulo":"Serway — Physics Vol. 2 Ch. 26","descripcion":"Capacitors in circuits: theory and problems." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/condensadores","titulo":"Fisicalab: Capacitors","descripcion":"Capacitors, dielectrics, and combinations." },
                { "url":"https://www.electronics-tutorials.ws/capacitor/cap_1.html","titulo":"Electronics Tutorials: Capacitors","descripcion":"Electronics engineering perspective." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/capacitor-lab-basics","titulo":"PhET: Capacitor Lab","descripcion":"Experiment with plates, separation, and dielectrics." }
            ]}
          ]
        }
    ]
};
