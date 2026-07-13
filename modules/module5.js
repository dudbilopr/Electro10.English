// modules/module5.js — Capacitance
// 📓 NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module5 = {
    "titulo": "Module 5: Capacitance",
    "color": "#0891b2",
    "icono": "developer_board",
    "descripcionCorta": "Capacitores, Energy almacenada, Dielectrics y circuitos capacitivos",
    "subtemas": ["Definición de Capacitance","Capacitor de placas paralelas","Capacitores esférico y cilíndrico","Energy almacenada en un capacitor","Dielectrics y polarización","Constante dieléctrica relativa","Capacitores en serie y paralelo","Energy del Electric Field"],
    "lecciones": [
        { "id":"m5-l1","tipo":"multivideo","recurso":"NNelSWJnUNc|6YdyYPfLqfA|rPBpCN_TdXk|ZCGpHvTPNlA|P3DPNxNnCqQ|Y2bQSfZ8eZE","titulo":"1. Videos — Capacitance","descripcion":"Capacitores, Dielectrics y Energy: desde la Theory hasta los circuitos.","xp":10 },
        { "id":"m5-l2","tipo":"presentacion","recurso":"./player.html?clase=5","titulo":"2. Slides Interactivas","descripcion":"Animaciones del proceso de carga de capacitores y efecto de los Dielectrics.","xp":15 },
        { "id":"m5-g1","tipo":"grupo","titulo":"3. Laboratorio Virtual",
          "sublecciones":[
            { "id":"m5-s1","tipo":"Simulator","recurso":"simulators/Sim_M5_Capacitance.html","titulo":"3.1 Capacitor Interactivo","descripcion":"Ajusta separación, área y Dielectric. Mide C, Q, V y Energy.","xp":20 },
            { "id":"m5-s2","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.2 Campo entre Placas","descripcion":"Visualiza el Electric Field uniforme entre placas paralelas.","xp":20 }
          ]
        },
        { "id":"m5-j1","tipo":"Game","recurso":"games/Game_5.html","titulo":"4. Physics Quest — Capacitance","descripcion":"Diseña el capacitor perfecto para almacenar la Energy requerida. ¡5 desafíos de ingeniería!","xp":25,"logro":{"id":"logro_m5","nombre":"Ingeniero de Circuitos","icono":"🔋"} },
        { "id":"m5-l7","tipo":"exercise","recurso":"workshops/Workshop_5_Capacitance.html","titulo":"5. Workshop Práctico — Capacitance","descripcion":"Problemas de capacitores simples, combinaciones en red y Energy almacenada.","xp":30 },
        { "id":"m5-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_5.html","titulo":"6. Quiz Adaptativo — Module 5","descripcion":"Desde definición de Capacitance hasta cálculo de Energy con Dielectrics.","xp":40 },
        { "id":"m5-nb1","tipo":"notebooklm",
          // 📓 NOTEBOOKLM Module 5: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Capacitance","descripcion":"IA entrenada en capacitores. Explica Dielectrics, combinaciones y aplicaciones en circuitos.","xp":10 },
        { "id":"m5-e1","tipo":"referencias","titulo":"8. Referencias BiblioCharts","descripcion":"Fuentes académicas sobre capacitores, Dielectrics y Energy en campos eléctricos.","xp":10,
          "secciones":[
            { "tituloSeccion":"📘 Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/8-1-capacitors-and-capacitance","titulo":"OpenStax: Capacitores — Cap. 8","descripcion":"Capacitance, Energy y Dielectrics con examples resueltos." },
                { "url":"https://www.amazon.com/dp/0131496824","titulo":"Serway — Physics Vol. 2 Cap. 26","descripcion":"Capacitores en circuitos: Theory y problemas." }
            ]},
            { "tituloSeccion":"🌐 Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/condensadores","titulo":"Fisicalab: Condensadores","descripcion":"Capacitores, Dielectrics y combinaciones." },
                { "url":"https://www.electronics-tutorials.ws/capacitor/cap_1.html","titulo":"Electronics Tutorials: Capacitors","descripcion":"Perspectiva de ingeniería electrónica." }
            ]},
            { "tituloSeccion":"🔬 Simulatores externos","links":[
                { "url":"https://phet.colorado.edu/es/simulations/capacitor-lab-basics","titulo":"PhET: Laboratorio de Capacitores","descripcion":"Experimenta con placas, separación y Dielectric." }
            ]}
          ]
        }
    ]
};
