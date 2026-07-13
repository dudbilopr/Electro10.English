// modules/module10.js — Faraday's Law
// 📓 NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module10 = {
    "titulo": "Module 10: Faraday's Law",
    "color": "#e11d48",
    "icono": "electric_meter",
    "descripcionCorta": "Induction electromagnética, FEM inducida y Ley de Lenz",
    "subtemas": ["Flujo magnético","FEM inducida — Faraday's Law","Ley de Lenz","FEM de movimiento (conductor en campo B)","Inductancia mutua y propia","Autoinductancia","Energy almacenada en inductores","Transformadores ideales"],
    "lecciones": [
        { "id":"m10-l1","tipo":"multivideo","recurso":"Kq6MkgJQCpI|MzVfz_DdRhA|NeG0T7BKZPM|ZBn-8GOxJHY|kDPi48ynPkM|GUCFk_Py5Ps","titulo":"1. Videos — Faraday's Law","descripcion":"Induction electromagnética: FEM, Lenz, inductores y transformadores.","xp":10 },
        { "id":"m10-l2","tipo":"presentacion","recurso":"./player.html?clase=10","titulo":"2. Slides Interactivas","descripcion":"Animación del flujo magnético cambiante y generación de FEM. Ley de Lenz visualizada.","xp":15 },
        { "id":"m10-g1","tipo":"grupo","titulo":"3. Laboratorio Virtual",
          "sublecciones":[
            { "id":"m10-s1","tipo":"Simulator","recurso":"simulators/Sim_M10_Magnetic_Flux.html","titulo":"3.1 Magnetic Flux Interactivo","descripcion":"Observa cómo el cambio de flujo induce una FEM.","xp":20 },
            { "id":"m10-s2","tipo":"Simulator","recurso":"simulators/Sim_M10_Motional_EMF.html","titulo":"3.2 FEM de Movimiento","descripcion":"Conductor moviéndose en campo B: visualiza la FEM generada.","xp":20 }
          ]
        },
        { "id":"m10-j1","tipo":"Game","recurso":"games/Game_10.html","titulo":"4. Physics Quest — Faraday","descripcion":"¡Genera la Current exacta moviendo el conductor! 5 misiones de Induction.","xp":25,"logro":{"id":"logro_m10","nombre":"Maestro de la Induction","icono":"⚙️"} },
        { "id":"m10-l7","tipo":"ejercicio","recurso":"workshops/Workshop_10_Faraday_Law.html","titulo":"5. Workshop Práctico — Faraday","descripcion":"Calculation de FEM inducida, inductancia mutua, autoinductancia y Energy en inductores.","xp":30 },
        { "id":"m10-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_10.html","titulo":"6. Quiz Adaptativo — Module 10","descripcion":"Evalúa desde el concepto de flujo hasta el diseño de transformadores.","xp":40 },
        { "id":"m10-nb1","tipo":"notebooklm",
          // 📓 NOTEBOOKLM Module 10: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Faraday's Law","descripcion":"IA para Induction: explica Faraday, Lenz, inductancia y transformadores.","xp":10 },
        { "id":"m10-e1","tipo":"referencias","titulo":"8. Referencias BiblioCharts","descripcion":"Fuentes sobre Induction electromagnética y sus aplicaciones.","xp":10,
          "secciones":[
            { "tituloSeccion":"📘 Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law","titulo":"OpenStax: Faraday's Law — Cap. 13","descripcion":"Flujo, FEM inducida, Lenz y aplicaciones." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Cap. 7","descripcion":"Electrodinámica: Induction y Energy del campo." }
            ]},
            { "tituloSeccion":"🌐 Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/induccion-electromagnetica","titulo":"Fisicalab: Induction Electromagnética","descripcion":"Theory y ejercicios de Faraday y Lenz." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electromagnetic-induction","titulo":"Khan Academy: Induction EM","descripcion":"Videos y práctica completa." }
            ]},
            { "tituloSeccion":"🔬 Simulatores externos","links":[
                { "url":"https://phet.colorado.edu/es/simulations/faradays-law","titulo":"PhET: Faraday's Law","descripcion":"Mueve un imán y observa la FEM inducida en tiempo real." },
                { "url":"https://phet.colorado.edu/es/simulations/generator","titulo":"PhET: Generador Eléctrico","descripcion":"Visualiza cómo se genera Current alterna." }
            ]}
          ]
        }
    ]
};
