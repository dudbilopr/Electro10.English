// modules/module9.js — Ley de Ampere
// 📓 NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module9 = {
    "titulo": "Module 9: Ley de Ampere",
    "color": "#0d9488",
    "icono": "loop",
    "descripcionCorta": "Circulación del campo magnético y Current de desplazamiento",
    "subtemas": ["Ley de Ampere — formulación integral","Caminos amperianos y simetría","Campo en solenoides infinitos","Campo en toroides","Solenoids finitos","Current de desplazamiento (Maxwell)","Ley de Ampere-Maxwell generalizada"],
    "lecciones": [
        { "id":"m9-l1","tipo":"multivideo","recurso":"6mHK7by6WJc|mIPnkZPFAa8|aEFn-JY_h8A|4DYjxBRjYbc|K7-PiHoJ3v0","titulo":"1. Videos — Ley de Ampere","descripcion":"Circulación del campo magnético, solenoides, toroides y Current de desplazamiento.","xp":10 },
        { "id":"m9-l2","tipo":"presentacion","recurso":"./player.html?clase=9","titulo":"2. Slides Interactivas","descripcion":"Caminos amperianos con simetría cilíndrica y toroidal. Current de desplazamiento animada.","xp":15 },
        { "id":"m9-g1","tipo":"grupo","titulo":"3. Laboratorio Virtual",
          "sublecciones":[
            { "id":"m9-s1","tipo":"Simulator","recurso":"simulators/Sim_M9_Solenoid.html","titulo":"3.1 Solenoid Interactivo","descripcion":"Campo magnético dentro y fuera de solenoides con Ampere.","xp":20 },
            { "id":"m9-s2","tipo":"Simulator","recurso":"simulators/Sim_M9_Ampere_Table.html","titulo":"3.2 Tabla Ampere Interactiva","descripcion":"Selecciona la geometría y aplica la Ley de Ampere automáticamente.","xp":20 }
          ]
        },
        { "id":"m9-j1","tipo":"Game","recurso":"games/Game_9.html","titulo":"4. Physics Quest — Ley de Ampere","descripcion":"Elige el camino amperiano Correct y calcula el campo. ¡5 geometrías distintas!","xp":25,"logro":{"id":"logro_m9","nombre":"Maestro Amperiano","icono":"🔄"} },
        { "id":"m9-l7","tipo":"exercise","recurso":"workshops/Workshop_9_Ampere_Law.html","titulo":"5. Workshop Práctico — Ley de Ampere","descripcion":"Problemas de solenoides, toroides, Conductors coaxiales y campo toroidal.","xp":30 },
        { "id":"m9-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_9.html","titulo":"6. Quiz Adaptativo — Module 9","descripcion":"Evalúa desde el concepto de circulación hasta aplicaciones con Current de desplazamiento.","xp":40 },
        { "id":"m9-nb1","tipo":"notebooklm",
          // 📓 NOTEBOOKLM Module 9: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Ley de Ampere","descripcion":"IA para Ampere: cómo elegir el camino amperiano, comparación con Gauss y generalización de Maxwell.","xp":10 },
        { "id":"m9-e1","tipo":"referencias","titulo":"8. Referencias BiblioCharts","descripcion":"Fuentes académicas sobre la Ley de Ampere y sus generalizaciones.","xp":10,
          "secciones":[
            { "tituloSeccion":"📘 Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/13-1-the-biot-savart-law","titulo":"OpenStax: Ley de Ampere — Cap. 13","descripcion":"Solenoids, toroides y Current de desplazamiento." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Cap. 5.3","descripcion":"Ley de Ampere rigurosa con problemas." }
            ]},
            { "tituloSeccion":"🌐 Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/ley-de-ampere","titulo":"Fisicalab: Ley de Ampere","descripcion":"Simetría, solenoides y examples." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-magnetic-forces-and-magnetic-fields/ap-magnetic-field-from-currents/v/amperes-law","titulo":"Khan Academy: Ley de Ampere","descripcion":"Introduction conceptual con practice." }
            ]},
            { "tituloSeccion":"🔬 Simulatores externos","links":[
                { "url":"https://phet.colorado.edu/es/simulations/faradays-law","titulo":"PhET: Campo de Solenoids","descripcion":"Explora el campo magnético en solenoides." }
            ]}
          ]
        }
    ]
};
