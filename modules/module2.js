// modules/module2.js — Electric Field
// [*] NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module2 = {
    "titulo": "Module 2: Electric Field",
    "color": "#7c3aed",
    "icono": "scatter_plot",
    "descripcionCorta": "Vector de Electric Field, Field Lines y dipolo eléctrico",
    "subtemas": ["Electric Field de una carga puntual","Principio de superPosition vectorial","Líneas de Electric Field","Dipolo eléctrico","Campo de distribuciones discretas","Movimiento de Charges en campo uniforme"],
    "lecciones": [
        { "id":"m2-l1","tipo":"multivideo","recurso":"y00efYMfQbg|-c8JxTvP9zs|CBwHsuVcXUI|hqg_89-2Lyo|c1jyhvkPqqk|3p_rM3i9IxY|tF8zfTVUAFY","titulo":"1. Videos — Electric Field","descripcion":"Theory vectorial del Electric Field, Field Lines y dipolos.","xp":10 },
        { "id":"m2-l2","tipo":"presentacion","recurso":"./player.html?clase=2","titulo":"2. Interactive Slides","descripcion":"Visualizaciones vectoriales 3D del Electric Field con Controls interactivos.","xp":15 },
        { "id":"m2-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m2-s1","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.1 Electric Field Vectorial","descripcion":"Visualiza el campo creado por múltiples Charges en tiempo real.","xp":20 },
            { "id":"m2-s2","tipo":"Simulator","recurso":"simulators/Sim_M1_Charges.html","titulo":"3.2 Field Lines","descripcion":"Traza Field Lines para configuraciones arbitrarias de carga.","xp":20 }
          ]
        },
        { "id":"m2-j1","tipo":"Game","recurso":"games/Game_2.html","titulo":"4. Physics Quest — Electric Field","descripcion":"¡Guía partículas a través de campos eléctricos! 5 rondas de desafío vectorial.","xp":25,"logro":{"id":"logro_m2","nombre":"Cartógrafo de Campos","icono":"[*]️"} },
        { "id":"m2-t","tipo":"grupo","titulo":"5. Workshops Prácticos",
          "sublecciones":[
            { "id":"m2-t1","tipo":"exercise","recurso":"workshops/Workshop_2_1_Electric_Field.html","titulo":"5.1 Practical Workshop — Electric Field","descripcion":"Problemas con configuraciones de carga y dipolos.","xp":30 },
            { "id":"m2-t2","tipo":"exercise","recurso":"workshops/Workshop_2_2_Continuous_Distributions.html","titulo":"5.2 Practical Workshop — Distribuciones Continuas","descripcion":"Integración de Electric Field de barras, anillos y discos.","xp":30 }
          ]
        },
        { "id":"m2-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_2.html","titulo":"6. Adaptive Quiz — Module 2","descripcion":"Adaptativo 3 Leveles: conceptual, cálculo vectorial y problemas de aplicación.","xp":40 },
        { "id":"m2-nb1","tipo":"notebooklm",
          // [*] NOTEBOOKLM Module 2: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Electric Field","descripcion":"IA entrenada con material de Electric Field. Pide explicaciones, derivaciones o exercises adicionales.","xp":10 },
        { "id":"m2-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Fuentes académicas verificadas sobre Electric Field y electrostática vectorial.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/5-1-electric-field","titulo":"OpenStax: Electric Field — Cap. 5","descripcion":"Definición, propiedades y campo de distribuciones." },
                { "url":"https://www.amazon.com/dp/0131496824","titulo":"Serway — Physics para Ciencias e Ingeniería Cap. 23","descripcion":"Electric Field: Theory completa con problemas." }
            ]},
            { "tituloSeccion":"[WEB] Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/campo-electrico","titulo":"Fisicalab: Electric Field","descripcion":"Explicaciones, Charts y exercises resueltos." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electric-charge-electric-force-and-voltage/electric-field-ap/a/electric-field-ap-physics-2","titulo":"Khan Academy: Electric Field","descripcion":"Videos y practice guiada." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Charges y Campos","descripcion":"Simulator interactivo con Field Lines en tiempo real." },
                { "url":"https://www.geogebra.org/m/bZcA35JW","titulo":"GeoGebra: Electric Field","descripcion":"Visualización 2D de campos vectoriales." }
            ]}
          ]
        }
    ]
};
