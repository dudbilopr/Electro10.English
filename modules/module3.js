// modules/module3.js — Gauss\'s Law para el Electric Field
// 📓 NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module3 = {
    "titulo": "Module 3: Gauss\'s Law",
    "color": "#dc2626",
    "icono": "radar",
    "descripcionCorta": "Electric Flux, superficies gaussianas y simetría en el Electric Field",
    "subtemas": ["Electric Flux","Gauss\'s Law","Superficies gaussianas","Simetría esférica, cilíndrica y plana","Campo en distribuciones continuas uniformes","Conductors en equilibrio electrostático","Blindaje electrostático"],
    "lecciones": [
        { "id":"m3-l1","tipo":"multivideo","recurso":"yFOcL5WnJLw|YoYxhEJ57jA|mYHOENflNlc|hqhNsTmfHjM|aOPIm3YFSzQ|aDemZMR20fM","titulo":"1. Videos — Gauss\'s Law","descripcion":"Electric Flux, superficies gaussianas y aplicaciones con simetría.","xp":10 },
        { "id":"m3-l2","tipo":"presentacion","recurso":"./player.html?clase=3","titulo":"2. Slides Interactivas","descripcion":"Visualización de Electric Flux a través de superficies con animaciones gaussianas.","xp":15 },
        { "id":"m3-g1","tipo":"grupo","titulo":"3. Laboratorio Virtual",
          "sublecciones":[
            { "id":"m3-s1","tipo":"Simulator","recurso":"simulators/Sim_M3_Flux.html","titulo":"3.1 Electric Flux","descripcion":"Visualiza el flujo a través de diferentes superficies en tiempo real.","xp":20 },
            { "id":"m3-s2","tipo":"Simulator","recurso":"simulators/Sim_M3_Gauss_Table.html","titulo":"3.2 Tabla de Gauss Interactiva","descripcion":"Selecciona geometría y calcula el campo con la Gauss\'s Law.","xp":20 },
            { "id":"m3-s3","tipo":"Simulator","recurso":"simulators/Sim_M2_Board_Distributions.html","titulo":"3.3 Distribuciones Simétricas","descripcion":"Campo de anillo, disco y cilindro cargados.","xp":20 }
          ]
        },
        { "id":"m3-j1","tipo":"Game","recurso":"games/Game_3.html","titulo":"4. Physics Quest — Gauss","descripcion":"Elige la superficie gaussiana correcta y calcula el campo. ¡5 rondas desafiantes!","xp":25,"logro":{"id":"logro_m3","nombre":"Guardián del Flujo","icono":"🌊"} },
        { "id":"m3-l7","tipo":"ejercicio","recurso":"workshops/Workshop_3_Gauss_Law.html","titulo":"5. Workshop Práctico — Gauss","descripcion":"Problemas de Electric Flux y aplicación de la Gauss\'s Law con geometrías reales.","xp":30 },
        { "id":"m3-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_3.html","titulo":"6. Quiz Adaptativo — Module 3","descripcion":"Evalúa tu comprensión del flujo, las superficies gaussianas y sus aplicaciones.","xp":40 },
        { "id":"m3-nb1","tipo":"notebooklm",
          // 📓 NOTEBOOKLM Module 3: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Gauss\'s Law","descripcion":"IA especializada en Gauss. Explica cómo elegir la superficie gaussiana correcta.","xp":10 },
        { "id":"m3-e1","tipo":"referencias","titulo":"8. Referencias BiblioCharts","descripcion":"Fuentes para profundizar en la Gauss\'s Law y el Electric Flux.","xp":10,
          "secciones":[
            { "tituloSeccion":"📘 Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/6-1-electric-flux","titulo":"OpenStax: Electric Flux y Gauss\'s Law","descripcion":"Cap. 6: definición de flujo y aplicaciones con simetría." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Introduction to Electrodynamics","descripcion":"Cap. 2: electrostática con derivación rigurosa de la Gauss\'s Law." }
            ]},
            { "tituloSeccion":"🌐 Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/ley-de-gauss","titulo":"Fisicalab: Gauss\'s Law","descripcion":"Aplicaciones por simetría con ejemplos numéricos." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electric-charge-electric-force-and-voltage/gauss-law-ap/v/electric-flux","titulo":"Khan Academy: Flujo y Gauss\'s Law","descripcion":"Video introductorio y ejercicios." }
            ]},
            { "tituloSeccion":"🔬 Simulatores externos","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Charges y Campos (flujo)","descripcion":"Mide el flujo a través de superficies definidas por el usuario." }
            ]}
          ]
        }
    ]
};
