// modules/module7.js — Lorentz Force Law
// [*] NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module7 = {
    "titulo": "Module 7: Lorentz Force Law",
    "color": "#ea580c",
    "icono": "north",
    "descripcionCorta": "Force magnética sobre Charges y Conductors, movimiento en campo magnético",
    "subtemas": ["Campo magnético y sus fuentes","Lorentz Force F = qv×B","Movimiento circular de Charges","Espectrómetro de masas y ciclotrón","Force sobre Conductors con Current","Momento dipolar magnético","Efecto Hall"],
    "lecciones": [
        { "id":"m7-l1","tipo":"multivideo","recurso":"9_p7MUf8QCE|YXA_F7qHiDM|LqT1VX18kEk|hBUpBwbmBwc|OsZRKqHrOTw|sLHNkl2TYOE","titulo":"1. Videos — Lorentz Force Law","descripcion":"Force magnética sobre Charges móviles, Conductors y aplicaciones tecnológicas.","xp":10 },
        { "id":"m7-l2","tipo":"presentacion","recurso":"./player.html?clase=7","titulo":"2. Interactive Slides","descripcion":"Visualización 3D de F = qv×B con animaciones de Trajectorys circulares y helicoidales.","xp":15 },
        { "id":"m7-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m7-s1","tipo":"Simulator","recurso":"simulators/Sim_M7_Lorentz.html","titulo":"3.1 Lab Lorentz Interactivo","descripcion":"Controla Velocity, carga y B. Observa la Trajectory helicoidal en 3D.","xp":20 },
            { "id":"m7-s2","tipo":"Simulator","recurso":"simulators/Sim_M2_Vector_Field.html","titulo":"3.2 Force sobre Conductor","descripcion":"Visualiza la Force sobre segmentos de Current en campo magnético.","xp":20 }
          ]
        },
        { "id":"m7-j1","tipo":"Game","recurso":"games/Game_7.html","titulo":"4. Physics Quest — Lorentz","descripcion":"Dirige partículas loadeds a través de campos magnéticos hacia el objective. ¡5 misiones!","xp":25,"logro":{"id":"logro_m7","nombre":"Piloto Cuántico","icono":"[LAUNCH]"} },
        { "id":"m7-l7","tipo":"exercise","recurso":"workshops/Workshop_7_Lorentz_Law.html","titulo":"5. Practical Workshop — Lorentz","descripcion":"Problemas de Trajectorys en campo magnético, espectrómetros y ciclotrones.","xp":30 },
        { "id":"m7-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_7.html","titulo":"6. Adaptive Quiz — Module 7","descripcion":"Evalúa desde la dirección de la Force (regla de la mano derecha) hasta cálculos de radio de ciclotrón.","xp":40 },
        { "id":"m7-nb1","tipo":"notebooklm",
          // [*] NOTEBOOKLM Module 7: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Lorentz Force Law","descripcion":"IA para Lorentz: regla de la mano derecha, movimiento circular, aplicaciones en tecnología.","xp":10 },
        { "id":"m7-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Fuentes sobre magnetostática y Force de Lorentz.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/11-1-magnetism-and-its-historical-discoveries","titulo":"OpenStax: Magnetismo y Lorentz Force — Cap. 11","descripcion":"Force magnética, movimiento de Charges y aplicaciones." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Cap. 5.1","descripcion":"Force magnética sobre Charges y Currents." }
            ]},
            { "tituloSeccion":"[WEB] Resources web","links":[
                { "url":"https://www.fisicalab.com/apartado/Force-magnetica","titulo":"Fisicalab: Force Magnética","descripcion":"Lorentz Force Law con examples numéricos." },
                { "url":"https://www.khanacademy.org/science/ap-physics-2/ap-magnetic-forces-and-magnetic-fields","titulo":"Khan Academy: Forces Magnéticas","descripcion":"Videos interactivos sobre magnetismo y Lorentz." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/charges-and-fields","titulo":"PhET: Movimiento en Campo Magnético","descripcion":"Visualiza Trajectorys de partículas loadeds." }
            ]}
          ]
        }
    ]
};
