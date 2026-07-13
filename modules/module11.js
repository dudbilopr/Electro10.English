// modules/module11.js — Maxwell\'s Equations
// [*] NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module11 = {
    "titulo": "Module 11: Maxwell\'s Equations",
    "color": "#4f46e5",
    "icono": "waves",
    "descripcionCorta": "Síntesis del electromagnetismo clásico y ondas electromagnéticas",
    "subtemas": ["Cuatro Equations de Maxwell en forma integral","Forma diferencial de Maxwell","Current de desplazamiento de Maxwell","Ondas electromagnéticas planas","Velocity de la luz como constante EM","Espectro electromagnético","Densidad de Energy EM","Vector de Poynting","Polarización de ondas"],
    "lecciones": [
        { "id":"m11-l1","tipo":"multivideo","recurso":"F3GFTvKu7vM|LKuOc5kqPZw|F4j1N9GepPg|RIUqZ6UiHxs|UeVdq0VFtk8|Y0oN0mTiP3k","titulo":"1. Videos — Maxwell\'s Equations","descripcion":"Las 4 Equations que unifican la electricidad, el magnetismo y la óptica.","xp":10 },
        { "id":"m11-l2","tipo":"presentacion","recurso":"./player.html?clase=11","titulo":"2. Interactive Slides","descripcion":"Visualización completa de las ondas EM propagándose: campos E y B perpendiculares.","xp":15 },
        { "id":"m11-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m11-s1","tipo":"Simulator","recurso":"simulators/Sim_M11_EM_Wave.html","titulo":"3.1 Campos EM Acoplados","descripcion":"Electric Field y magnético variando en fase: visualización de onda EM.","xp":20 },
            { "id":"m11-s2","tipo":"Simulator","recurso":"simulators/Sim_M11_Maxwell_Equations.html","titulo":"3.2 Maxwell Integral vs. Diferencial","descripcion":"Equivalencia entre las formas integral y diferencial de Maxwell.","xp":20 }
          ]
        },
        { "id":"m11-j1","tipo":"Game","recurso":"games/Game_11.html","titulo":"4. Physics Quest — Maxwell","descripcion":"Completa las 4 Equations de Maxwell y desbloquea el poder de la onda EM. ¡El desafío final!","xp":25,"logro":{"id":"logro_m11","nombre":"Physical Teórico","icono":"[*]"} },
        { "id":"m11-l7","tipo":"exercise","recurso":"workshops/Workshop_11_Maxwell_Equations.html","titulo":"5. Practical Workshop — Maxwell","descripcion":"Problemas de Current de desplazamiento, ondas EM y vector de Poynting.","xp":30 },
        { "id":"m11-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_11.html","titulo":"6. Adaptive Quiz — Module 11","descripcion":"Evalúa desde la identificación de las Equations hasta el cálculo de Velocity de onda.","xp":40 },
        { "id":"m11-nb1","tipo":"notebooklm",
          // [*] NOTEBOOKLM Module 11: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Maxwell\'s Equations","descripcion":"IA para Maxwell: explica las 4 Equations, sus consecuencias y la Theory de ondas EM.","xp":10 },
        { "id":"m11-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Fuentes sobre las Equations de Maxwell y ondas electromagnéticas.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves","titulo":"OpenStax: Maxwell\'s Equations — Cap. 16","descripcion":"Síntesis del EM clásico, ondas y vector de Poynting." },
                { "url":"https://www.amazon.com/dp/0321971174","titulo":"Griffiths — Electrodynamics Cap. 9","descripcion":"Ondas electromagnéticas rigurosas." },
                { "url":"https://www.amazon.com/dp/0471213403","titulo":"Jackson — Classical Electrodynamics","descripcion":"Referencia avanzada sobre ondas EM y radiación." }
            ]},
            { "tituloSeccion":"[WEB] Resources web","links":[
                { "url":"https://maxwells-equations.com/","titulo":"Maxwell's Equations (recurso web)","descripcion":"Guía visual e interactiva de las 4 Equations." },
                { "url":"https://www.feynmanlectures.caltech.edu/II_18.html","titulo":"Feynman Lectures: Maxwell","descripcion":"Derivación con la perspectiva única de Feynman." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/radio-waves-and-electromagnetic-fields","titulo":"PhET: Ondas de Radius y EM","descripcion":"Genera ondas EM con Charges oscilantes." }
            ]}
          ]
        }
    ]
};
