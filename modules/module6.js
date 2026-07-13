// modules/module6.js — Circuitos Resistivos DC
// [*] NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module6 = {
    "titulo": "Module 6: Circuitos Resistivos DC",
    "color": "#059669",
    "icono": "electrical_services",
    "descripcionCorta": "Current eléctrica, Resistance, Leyes de Kirchhoff y análisis de redes",
    "subtemas": ["Current eléctrica y densidad de Current","Resistance y resistividad","Ley de Ohm","Circuitos en serie y paralelo","Ley de Kirchhoff de Voltages (LKV)","Ley de Kirchhoff de Currents (LKC)","Análisis de nodos y mallas","Transformación Delta-Estrella","Teorema de Thevenin y Norton","Power eléctrica disipada"],
    "lecciones": [
        { "id":"m6-l1","tipo":"multivideo","recurso":"Z_XkDlMFXGA|8Fy4-FOgNlA|gxbA_iy4aWM|y5X2AMZVMxM|s7YUiSeMJ0g|cFPjijfVTtU|WUmxkuYVHsQ","titulo":"1. Videos — Circuitos DC","descripcion":"Current, Resistance, Kirchhoff, Thevenin y Norton. Theory completa con examples.","xp":10 },
        { "id":"m6-l2","tipo":"presentacion","recurso":"./player.html?clase=6","titulo":"2. Interactive Slides","descripcion":"Análisis de circuitos con método de mallas y nodos animado paso a paso.","xp":15 },
        { "id":"m6-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m6-s1","tipo":"Simulator","recurso":"simulators/Sim_M6_Resistivity.html","titulo":"3.1 Resistivity y Geometría","descripcion":"Cómo la geometría del conductor afecta su Resistance.","xp":20 },
            { "id":"m6-s2","tipo":"Simulator","recurso":"simulators/Sim_M6_DC_Circuit.html","titulo":"3.2 Campo en Conductors","descripcion":"Electric Field que impulsa la Current en un conductor.","xp":20 }
          ]
        },
        { "id":"m6-j1","tipo":"Game","recurso":"games/Game_6.html","titulo":"4. Physics Quest — Circuitos DC","descripcion":"Diseña circuitos para cumplir especificaciones de Voltage y Current. ¡5 retos de ingeniería!","xp":25,"logro":{"id":"logro_m6","nombre":"Arquitecto de Redes","icono":"[*]"} },
        { "id":"m6-t","tipo":"grupo","titulo":"5. Workshops Prácticos",
          "sublecciones":[
            { "id":"m6-t1","tipo":"exercise","recurso":"workshops/Workshop_6_1_Circuit_Reduction.html","titulo":"5.1 Workshop — Reducción de Circuitos","descripcion":"Simplificación de redes resistivas: serie, paralelo y delta-estrella.","xp":25 },
            { "id":"m6-t2","tipo":"exercise","recurso":"workshops/Workshop_6_2_Kirchhoff_Laws.html","titulo":"5.2 Workshop — Leyes de Kirchhoff","descripcion":"Análisis sistemático de redes usando LKV y LKC con 20 problemas.","xp":30 }
          ]
        },
        { "id":"m6-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_6.html","titulo":"6. Adaptive Quiz — Module 6","descripcion":"Desde Ley de Ohm hasta análisis de redes complejas con Kirchhoff.","xp":40 },
        { "id":"m6-nb1","tipo":"notebooklm",
          // [*] NOTEBOOKLM Module 6: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Circuitos DC","descripcion":"IA especializada en circuitos DC. Help a resolver por mallas, nodos y teoremas de Thevenin/Norton.","xp":10 },
        { "id":"m6-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Libros, tutoriales y Simulatores para circuitos resistivos DC.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/10-1-electromotive-force","titulo":"OpenStax: Circuitos DC — Cap. 10","descripcion":"FEM, Resistance interna, Kirchhoff y circuitos RC." },
                { "url":"https://www.amazon.com/dp/0073380679","titulo":"Hayt — Engineering Circuit Analysis","descripcion":"Análisis de circuitos con métodos de mallas y nodos." }
            ]},
            { "tituloSeccion":"[WEB] Resources web","links":[
                { "url":"https://www.allaboutcircuits.com/textbook/direct-current/","titulo":"All About Circuits: DC","descripcion":"Guía completa de circuitos DC con Simulatores online." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-circuits-topic","titulo":"Khan Academy: Circuitos Eléctricos","descripcion":"Videos paso a paso de Kirchhoff y circuitos." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/circuit-construction-kit-dc","titulo":"PhET: Construcción de Circuitos DC","descripcion":"Construye y mide circuitos completos online." },
                { "url":"https://www.falstad.com/circuit/","titulo":"Falstad Circuit Simulator","descripcion":"Simulator profesional de circuitos en el navegador." }
            ]}
          ]
        }
    ]
};
