// modules/module4.js — Electric Potential
// [*] NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module4 = {
    "titulo": "Module 4: Electric Potential",
    "color": "#d97706",
    "icono": "bolt",
    "descripcionCorta": "Energy Powerl eléctrica, Electric Potential y Equipotential Surfaces",
    "subtemas": ["Work y Energy en Electric Field","Energy Powerl eléctrica","Potential eléctrico — definición","Potential de una carga puntual","Equipotential Surfaces","Relación E y V (gradiente)","Potential de distribuciones continuas","Energy almacenada en un sistema de Charges"],
    "lecciones": [
        { "id":"m4-l1","tipo":"multivideo","recurso":"mR1neFcFQms|UHPetewKgvc|D4_fOFVP5bI|gTjRqI6aFx8|DkD5JxYMjvU|eVt1V7G6W-I","titulo":"1. Videos — Electric Potential","descripcion":"Del Work eléctrico al Powerl: derivación completa con examples.","xp":10 },
        { "id":"m4-l2","tipo":"presentacion","recurso":"./player.html?clase=4","titulo":"2. Slides Interactivas","descripcion":"Equipotential Surfaces animadas y relación E–V con visualizaciones 3D.","xp":15 },
        { "id":"m4-g1","tipo":"grupo","titulo":"3. Laboratorio Virtual",
          "sublecciones":[
            { "id":"m4-s1","tipo":"Simulator","recurso":"simulators/Sim_M4_Potential_3D.html","titulo":"3.1 Electric Potential 3D","descripcion":"Explora el Powerl y el campo de múltiples Charges en 3D.","xp":20 },
            { "id":"m4-s2","tipo":"Simulator","recurso":"simulators/Sim_M4_Equipotentials.html","titulo":"3.2 Superficies Equipotentials","descripcion":"Dibuja Equipotential Surfaces y mide el gradiente.","xp":20 },
            { "id":"m4-s3","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.3 Relación E–V","descripcion":"Verifica que el Electric Field es el gradiente negativo del Powerl.","xp":20 }
          ]
        },
        { "id":"m4-j1","tipo":"Game","recurso":"games/Game_4.html","titulo":"4. Physics Quest — Potential","descripcion":"Navega partículas hacia zonas de menor Powerl. ¡El Work hace la diferencia!","xp":25,"logro":{"id":"logro_m4","nombre":"Explorador de Superficies","icono":"[*]️"} },
        { "id":"m4-l7","tipo":"exercise","recurso":"workshops/Workshop_4_Potential_Electrico.html","titulo":"5. Workshop Práctico — Electric Potential","descripcion":"Problemas de Energy Powerl, Powerl de distribuciones y equiPowerles.","xp":30 },
        { "id":"m4-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_4.html","titulo":"6. Quiz Adaptativo — Module 4","descripcion":"Evalúa desde conceptos de Work hasta cálculo de Powerl en distribuciones complejas.","xp":40 },
        { "id":"m4-nb1","tipo":"notebooklm",
          // [*] NOTEBOOKLM Module 4: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Electric Potential","descripcion":"IA especializada en Electric Potential. Question sobre derivaciones, equiPowerles y más.","xp":10 },
        { "id":"m4-e1","tipo":"referencias","titulo":"8. Referencias BiblioCharts","descripcion":"Fuentes académicas sobre Electric Potential y Energy en campos eléctricos.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/7-1-electric-potential-energy","titulo":"OpenStax: Energy Potential y Potential — Cap. 7","descripcion":"Development completo del Electric Potential con examples." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Cap. 2.3","descripcion":"Potential eléctrico con rigor matemático." }
            ]},
            { "tituloSeccion":"[WEB] Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/Powerl-electrico","titulo":"Fisicalab: Electric Potential","descripcion":"Theory y exercises con Charts de equiPowerles." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-electric-charge-electric-force-and-voltage/electric-potential-voltage-ap/v/electric-potential-energy","titulo":"Khan Academy: Electric Potential","descripcion":"Videos conceptuales y practice." }
            ]},
            { "tituloSeccion":"[SCIENCE] Simulatores externos","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Charges y Potential","descripcion":"Mide el Powerl en cualquier punto del espacio." }
            ]}
          ]
        }
    ]
};
