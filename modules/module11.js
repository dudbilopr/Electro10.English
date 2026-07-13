// modules/module11.js — Maxwell's Equations
export const module11 = {
    "titulo": "Module 11: Maxwell's Equations",
    "color": "#4f46e5",
    "icono": "waves",
    "descripcionCorta": "Synthesis of classical electromagnetism and electromagnetic waves",
    "subtemas": ["Four Maxwell equations in integral form","Differential form of Maxwell","Maxwell's displacement current","Plane electromagnetic waves","Speed of light as EM constant","Electromagnetic spectrum","EM energy density","Poynting vector","Wave polarization"],
    "conceptosClave": ["Maxwell's equations", "Electromagnetic wave", "Poynting vector", "Speed of light"],
    "requisitosPrevios": ["Faraday's Law (Module 10)", "Gauss's Law (Module 3)", "Ampere's Law (Module 9)", "Partial derivatives"],
    "Equations": [
        "$$ \\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0} \\quad \\nabla \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0\\varepsilon_0 \\frac{\\partial\\vec{E}}{\\partial t} $$",
        "$$ c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s} $$ (Speed of light)"
    ],
    "historia": {
        "hallazgo": "James Clerk Maxwell unified electricity, magnetism, and optics into four equations in 1865, predicting the existence of electromagnetic waves — confirmed experimentally by Hertz in 1887.",
        "experimentoClave": "Maxwell's Treatise on Electricity and Magnetism (1865)"
    },
    "bibliografia": ["Griffiths, D. J. (2017). Introduction to Electrodynamics (4th ed.). Cambridge University Press. (Ch. 9)"],
    "lecciones": [
        { "id":"m11-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Maxwell", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Maxwell's Equations & EM Waves.", "xp":30 },
        { "id":"m11-l1","tipo":"multivideo","recurso":"F3GFTvKu7vM|LKuOc5kqPZw|F4j1N9GepPg|RIUqZ6UiHxs|UeVdq0VFtk8|Y0oN0mTiP3k","titulo":"1. Videos — Maxwell's Equations","descripcion":"The 4 equations unifying electricity, magnetism, and optics.","xp":10 },
        { "id":"m11-l2","tipo":"presentacion","recurso":"./player.html?clase=11","titulo":"2. Interactive Slides","descripcion":"Complete visualization of propagating EM waves: perpendicular E and B fields.","xp":15 },
        { "id":"m11-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m11-s1","tipo":"Simulator","recurso":"simulators/Sim_M11_EM_Wave.html","titulo":"3.1 Coupled EM Fields","descripcion":"Electric and magnetic fields varying in phase: EM wave visualization.","xp":20 },
            { "id":"m11-s2","tipo":"Simulator","recurso":"simulators/Sim_M11_Maxwell_Equations.html","titulo":"3.2 Maxwell Integral vs. Differential","descripcion":"Equivalence between the integral and differential forms of Maxwell.","xp":20 }
          ]
        },
        { "id":"m11-j1","tipo":"Game","recurso":"games/Game_11.html","titulo":"4. Physics Quest — Maxwell","descripcion":"Complete all 4 Maxwell equations and unlock the power of the EM wave. The final challenge!","xp":25,"logro":{"id":"logro_m11","nombre":"Theoretical Physicist","icono":"[WAVES]"} },
        { "id":"m11-l7","tipo":"exercise","recurso":"workshops/Workshop_11_Maxwell_Equations.html","titulo":"5. Practical Workshop — Maxwell","descripcion":"Problems on displacement current, EM waves, and Poynting vector.","xp":30 },
        { "id":"m11-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_11.html","titulo":"6. Adaptive Quiz — Module 11","descripcion":"Assess from identifying the equations to calculating wave speed.","xp":40 },
        { "id":"m11-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Maxwell's Equations","descripcion":"AI for Maxwell: explains the 4 equations, their consequences, and EM wave theory.","xp":10 },
        { "id":"m11-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Sources on Maxwell's equations and electromagnetic waves.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves","titulo":"OpenStax: Maxwell's Equations — Ch. 16","descripcion":"Synthesis of classical EM, waves, and Poynting vector." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Ch. 9","descripcion":"Rigorous electromagnetic waves." },
                { "url":"https://www.amazon.com/dp/0471213403","titulo":"Jackson — Classical Electrodynamics","descripcion":"Advanced reference on EM waves and radiation." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://maxwells-equations.com/","titulo":"Maxwell's Equations (web resource)","descripcion":"Visual and interactive guide to the 4 equations." },
                { "url":"https://www.feynmanlectures.caltech.edu/II_18.html","titulo":"Feynman Lectures: Maxwell","descripcion":"Derivation from Feynman's unique perspective." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/radio-waves-and-electromagnetic-fields","titulo":"PhET: Radio Waves and EM Fields","descripcion":"Generate EM waves with oscillating charges." }
            ]}
          ]
        }
    ]
};
