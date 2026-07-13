// modules/module4.js — Electric Potential
export const module4 = {
    "titulo": "Module 4: Electric Potential",
    "color": "#d97706",
    "icono": "bolt",
    "descripcionCorta": "Electric potential energy, electric potential, and equipotential surfaces",
    "subtemas": ["Work and energy in the electric field","Electric potential energy","Electric potential — definition","Potential of a point charge","Equipotential surfaces","Relationship between E and V (gradient)","Potential of continuous distributions","Energy stored in a charge system"],
    "conceptosClave": ["Electric potential", "Equipotential surface", "Gradient", "Potential energy"],
    "requisitosPrevios": ["Electric Field (Module 2)", "Work and energy (mechanics)", "Line integrals"],
    "Equations": [
        "$$ V = k_e \\frac{q}{r} $$ (Potential of a point charge)",
        "$$ \\vec{E} = -\\nabla V $$ (Field as negative gradient of potential)"
    ],
    "historia": {
        "hallazgo": "Alessandro Volta and later George Green developed the mathematical concept of electric potential in the early 19th century, providing a scalar alternative to vector field analysis.",
        "experimentoClave": "Volta's Electrophorus and Potential Mapping"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Ch. 25)"],
    "lecciones": [
        { "id":"m4-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Electric Potential", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Electric Potential & Equipotentials.", "xp":30 },
        { "id":"m4-l1","tipo":"multivideo","recurso":"mR1neFcFQms|UHPetewKgvc|D4_fOFVP5bI|gTjRqI6aFx8|DkD5JxYMjvU|eVt1V7G6W-I","titulo":"1. Videos — Electric Potential","descripcion":"From electric work to potential: complete derivation with examples.","xp":10 },
        { "id":"m4-l2","tipo":"presentacion","recurso":"./player.html?clase=4","titulo":"2. Interactive Slides","descripcion":"Animated equipotential surfaces and E–V relationship with 3D visualizations.","xp":15 },
        { "id":"m4-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m4-s1","tipo":"Simulator","recurso":"simulators/Sim_M4_Potential_3D.html","titulo":"3.1 Electric Potential 3D","descripcion":"Explore the potential and field of multiple charges in 3D.","xp":20 },
            { "id":"m4-s2","tipo":"Simulator","recurso":"simulators/Sim_M4_Equipotentials.html","titulo":"3.2 Equipotential Surfaces","descripcion":"Draw equipotential surfaces and measure the gradient.","xp":20 },
            { "id":"m4-s3","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.3 E–V Relationship","descripcion":"Verify that the electric field is the negative gradient of the potential.","xp":20 }
          ]
        },
        { "id":"m4-j1","tipo":"Game","recurso":"games/Game_4.html","titulo":"4. Physics Quest — Potential","descripcion":"Navigate particles to lower-potential zones. Work makes the difference!","xp":25,"logro":{"id":"logro_m4","nombre":"Surface Explorer","icono":"[MAP]"} },
        { "id":"m4-l7","tipo":"exercise","recurso":"workshops/Workshop_4_Potential_Electrico.html","titulo":"5. Practical Workshop — Electric Potential","descripcion":"Problems on potential energy, potential of distributions, and equipotentials.","xp":30 },
        { "id":"m4-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_4.html","titulo":"6. Adaptive Quiz — Module 4","descripcion":"Assess from work concepts to potential calculation in complex distributions.","xp":40 },
        { "id":"m4-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Electric Potential","descripcion":"AI specialized in electric potential. Ask about derivations, equipotentials, and more.","xp":10 },
        { "id":"m4-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Academic sources on electric potential and energy in electric fields.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/7-1-electric-potential-energy","titulo":"OpenStax: Potential Energy and Potential — Ch. 7","descripcion":"Complete development of electric potential with examples." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Ch. 2.3","descripcion":"Electric potential with mathematical rigor." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/potencial-electrico","titulo":"Fisicalab: Electric Potential","descripcion":"Theory and exercises with equipotential diagrams." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electric-charge-electric-force-and-voltage/electric-potential-voltage-ap/v/electric-potential-energy","titulo":"Khan Academy: Electric Potential","descripcion":"Conceptual videos and practice." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Charges and Potential","descripcion":"Measure the potential at any point in space." }
            ]}
          ]
        }
    ]
};
