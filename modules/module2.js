// modules/module2.js — Electric Field
export const module2 = {
    "titulo": "Module 2: Electric Field",
    "color": "#7c3aed",
    "icono": "scatter_plot",
    "descripcionCorta": "Electric field vector, field lines, and the electric dipole",
    "subtemas": ["Electric field of a point charge","Vector superposition principle","Electric field lines","Electric dipole","Field of discrete charge distributions","Motion of charges in a uniform field"],
    "conceptosClave": ["Electric field vector", "Field lines", "Superposition", "Electric dipole"],
    "requisitosPrevios": ["Coulomb's Law (Module 1)", "Vector algebra", "Basic calculus"],
    "Equations": [
        "$$ \\vec{E} = k_e \\frac{q}{r^2} \\hat{r} $$ (Electric field of a point charge)",
        "$$ \\vec{E}_{total} = \\sum_i \\vec{E}_i $$ (Superposition principle)"
    ],
    "historia": {
        "hallazgo": "Michael Faraday introduced the concept of the electric field in the 19th century as a way to describe electrostatic forces through space, replacing the idea of action at a distance.",
        "experimentoClave": "Faraday's Field Line Concept"
    },
    "bibliografia": ["Serway, R. A., & Jewett, J. W. (2018). Physics for Scientists and Engineers (10th ed.). Cengage Learning. (Ch. 23)"],
    "lecciones": [
        { "id":"m2-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — Electric Field", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Electric Field Vectors & Field Lines.", "xp":30 },
        { "id":"m2-l1","tipo":"multivideo","recurso":"y00efYMfQbg|-c8JxTvP9zs|CBwHsuVcXUI|hqg_89-2Lyo|c1jyhvkPqqk|3p_rM3i9IxY|tF8zfTVUAFY","titulo":"1. Videos — Electric Field","descripcion":"Vector theory of the electric field, field lines, and electric dipoles.","xp":10 },
        { "id":"m2-l2","tipo":"presentacion","recurso":"./player.html?clase=2","titulo":"2. Interactive Slides","descripcion":"3D vector visualizations of the electric field with interactive controls.","xp":15 },
        { "id":"m2-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m2-s1","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.1 Electric Field Vector","descripcion":"Visualize the field created by multiple charges in real time.","xp":20 },
            { "id":"m2-s2","tipo":"Simulator","recurso":"simulators/Sim_M1_Charges.html","titulo":"3.2 Field Lines","descripcion":"Trace field lines for arbitrary charge configurations.","xp":20 }
          ]
        },
        { "id":"m2-j1","tipo":"Game","recurso":"games/Game_2.html","titulo":"4. Physics Quest — Electric Field","descripcion":"Guide particles through electric fields! 5 rounds of vector challenge.","xp":25,"logro":{"id":"logro_m2","nombre":"Field Cartographer","icono":"[CHART]"} },
        { "id":"m2-t","tipo":"grupo","titulo":"5. Practical Workshops",
          "sublecciones":[
            { "id":"m2-t1","tipo":"exercise","recurso":"workshops/Workshop_2_1_Electric_Field.html","titulo":"5.1 Practical Workshop — Electric Field","descripcion":"Problems with charge configurations and electric dipoles.","xp":30 },
            { "id":"m2-t2","tipo":"exercise","recurso":"workshops/Workshop_2_2_Continuous_Distributions.html","titulo":"5.2 Practical Workshop — Continuous Distributions","descripcion":"Integration of the electric field from bars, rings, and disks.","xp":30 }
          ]
        },
        { "id":"m2-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_2.html","titulo":"6. Adaptive Quiz — Module 2","descripcion":"Adaptive quiz with 3 levels: conceptual, vector calculus, and applied problems.","xp":40 },
        { "id":"m2-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Electric Field","descripcion":"AI trained on electric field material. Ask for explanations, derivations, or additional exercises.","xp":10 },
        { "id":"m2-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Verified academic sources on the electric field and vector electrostatics.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/5-1-electric-field","titulo":"OpenStax: Electric Field — Ch. 5","descripcion":"Definition, properties, and field of charge distributions." },
                { "url":"https://www.amazon.com/dp/0131496824","titulo":"Serway — Physics for Scientists and Engineers Ch. 23","descripcion":"Complete electric field theory with problems." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.fisicalab.com/apartado/field-electrico","titulo":"Fisicalab: Electric Field","descripcion":"Explanations, diagrams, and solved exercises." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electric-charge-electric-force-and-voltage/electric-field-ap/a/electric-field-ap-physics-2","titulo":"Khan Academy: Electric Field","descripcion":"Videos and guided practice." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Charges and Fields","descripcion":"Interactive simulator with real-time field lines." },
                { "url":"https://www.geogebra.org/m/bZcA35JW","titulo":"GeoGebra: Electric Field","descripcion":"2D visualization of vector fields." }
            ]}
          ]
        }
    ]
};
