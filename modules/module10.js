// modules/module10.js — Faraday's Law
export const module10 = {
    "titulo": "Module 10: Faraday's Law",
    "color": "#e11d48",
    "icono": "electric_meter",
    "descripcionCorta": "Electromagnetic induction, induced EMF, and Lenz's Law",
    "subtemas": ["Magnetic flux","Induced EMF — Faraday's Law","Lenz's Law","Motional EMF (conductor in magnetic field B)","Mutual and self-inductance","Self-inductance","Energy stored in inductors","Ideal transformers"],
    "conceptosClave": ["Electromagnetic induction", "Faraday's Law", "Lenz's Law", "Inductance"],
    "requisitosPrevios": ["Ampere's Law (Module 9)", "Magnetic flux", "Energy concepts"],
    "Equations": [
        "$$ \\mathcal{E} = -\\frac{d\\Phi_B}{dt} $$ (Faraday's Law)",
        "$$ \\mathcal{E} = -L \\frac{dI}{dt} $$ (Self-inductance EMF)"
    ],
    "historia": {
        "hallazgo": "Michael Faraday discovered electromagnetic induction in 1831 through his famous ring experiment, showing that a changing magnetic flux induces an EMF — the principle behind modern electric generators.",
        "experimentoClave": "Faraday's Iron Ring Experiment (1831)"
    },
    "bibliografia": ["Griffiths, D. J. (2017). Introduction to Electrodynamics (4th ed.). Cambridge University Press. (Ch. 7)"],
    "lecciones": [
        { "id":"m10-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Faraday's Law", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Electromagnetic Induction & Lenz's Law.", "xp":30 },
        { "id":"m10-l1","tipo":"multivideo","recurso":"Kq6MkgJQCpI|MzVfz_DdRhA|NeG0T7BKZPM|ZBn-8GOxJHY|kDPi48ynPkM|GUCFk_Py5Ps","titulo":"1. Videos — Faraday's Law","descripcion":"Electromagnetic induction: EMF, Lenz's Law, inductors, and transformers.","xp":10 },
        { "id":"m10-l2","tipo":"presentacion","recurso":"./player.html?clase=10","titulo":"2. Interactive Slides","descripcion":"Animation of changing magnetic flux and EMF generation. Lenz's Law visualized.","xp":15 },
        { "id":"m10-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m10-s1","tipo":"Simulator","recurso":"simulators/Sim_M10_Magnetic_Flux.html","titulo":"3.1 Interactive Magnetic Flux","descripcion":"Observe how changing flux induces an EMF.","xp":20 },
            { "id":"m10-s2","tipo":"Simulator","recurso":"simulators/Sim_M10_Motional_EMF.html","titulo":"3.2 Motional EMF","descripcion":"Conductor moving in field B: visualize the generated EMF.","xp":20 }
          ]
        },
        { "id":"m10-j1","tipo":"Game","recurso":"games/Game_10.html","titulo":"4. Physics Quest — Faraday","descripcion":"Generate the exact current by moving the conductor! 5 induction missions.","xp":25,"logro":{"id":"logro_m10","nombre":"Induction Master","icono":"[SETTINGS]"} },
        { "id":"m10-l7","tipo":"exercise","recurso":"workshops/Workshop_10_Faraday_Law.html","titulo":"5. Practical Workshop — Faraday","descripcion":"Calculate induced EMF, mutual inductance, self-inductance, and inductor energy.","xp":30 },
        { "id":"m10-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_10.html","titulo":"6. Adaptive Quiz — Module 10","descripcion":"Assess from the concept of flux to the design of transformers.","xp":40 },
        { "id":"m10-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Faraday's Law","descripcion":"AI for induction: explains Faraday, Lenz, inductance, and transformers.","xp":10 },
        { "id":"m10-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Sources on electromagnetic induction and its applications.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law","titulo":"OpenStax: Faraday's Law — Ch. 13","descripcion":"Flux, induced EMF, Lenz, and applications." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Ch. 7","descripcion":"Electrodynamics: induction and field energy." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/induccion-electromagnetica","titulo":"Fisicalab: Electromagnetic Induction","descripcion":"Theory and exercises on Faraday and Lenz." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electromagnetic-induction","titulo":"Khan Academy: EM Induction","descripcion":"Complete videos and practice." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/faradays-law","titulo":"PhET: Faraday's Law","descripcion":"Move a magnet and observe the induced EMF in real time." },
                { "url":"https://phet.colorado.edu/es/simulations/generator","titulo":"PhET: Electric Generator","descripcion":"Visualize how alternating current is generated." }
            ]}
          ]
        }
    ]
};
