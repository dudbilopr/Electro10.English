// modules/module12.js — Circuitos RL, LC, RLC y Current Alterna
// 📓 NOTEBOOKLM: Reemplaza "#" en llmLink con tu link real
export const module12 = {
    "titulo": "Module 12: Circuitos RL, LC, RLC y CA",
    "color": "#65a30d",
    "icono": "ac_unit",
    "descripcionCorta": "Circuitos con inductores y capacitores en Current alterna: resonancia y Phasors",
    "subtemas": ["Circuito RL: transitorio y estado estable","Circuito LC: oscilaciones electromagnéticas","Amortiguamiento en circuito RLC","Current alterna: rePresentation fasorial","Reactancia inductiva y capacitiva","Impedancia compleja","Resonancia en serie y paralelo","Factor de Power y Power reactiva","Transformadores en CA","Filtros RC y RL: pasa-bajas y pasa-altas"],
    "lecciones": [
        { "id":"m12-l1","tipo":"multivideo","recurso":"2HxTt0Kl8KM|NHhK6RHFB4c|L4fTVV7mMBc|8p82v2_KYVQ|j-JK4GVv6BA|mFTfzQFdSJ8|SLFi1M0j2To","titulo":"1. Videos — Circuitos RL, LC, RLC y CA","descripcion":"Desde el circuito RL transitorio hasta resonancia y Phasors en Current alterna.","xp":10 },
        { "id":"m12-l2","tipo":"presentacion","recurso":"./player.html?clase=12","titulo":"2. Slides Interactivas","descripcion":"Diagramas fasoriales animados, curvas de resonancia y Answer en Frequency.","xp":15 },
        { "id":"m12-g1","tipo":"grupo","titulo":"3. Laboratorio Virtual",
          "sublecciones":[
            { "id":"m12-s1","tipo":"Simulator","recurso":"simulators/Sim_M12_LC_Oscillator.html","titulo":"3.1 Circuito LC Oscilante","descripcion":"Energy oscilando entre L y C: analogía con péndulo.","xp":20 },
            { "id":"m12-s2","tipo":"Simulator","recurso":"simulators/Sim_M12_RLC.html","titulo":"3.2 Answer RLC en Frequency","descripcion":"Curva de resonancia y factor Q del circuito RLC.","xp":20 },
            { "id":"m12-s3","tipo":"Simulator","recurso":"simulators/Sim_M12_Phasors.html","titulo":"3.3 Phasors Interactivos","descripcion":"Suma fasorial de Voltages en circuitos AC.","xp":20 }
          ]
        },
        { "id":"m12-j1","tipo":"Game","recurso":"games/Game_12.html","titulo":"4. Physics Quest — Circuitos CA","descripcion":"¡Sintoniza el circuito RLC a la Frequency de resonancia! 5 desafíos de ingeniería AC.","xp":25,"logro":{"id":"logro_m12","nombre":"Maestro de la Resonancia","icono":"〰️"} },
        { "id":"m12-l7","tipo":"ejercicio","recurso":"workshops/Workshop_12_AC_Circuits.html","titulo":"5. Workshop Práctico — Circuitos CA","descripcion":"Impedancia, resonancia, Phasors y factor de Power. Transitorios.","xp":30 },
        { "id":"m12-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_12.html","titulo":"6. Quiz Adaptativo — Module 12","descripcion":"Evalúa desde conceptos de impedancia hasta cálculos de Power en CA.","xp":40 },
        { "id":"m12-nb1","tipo":"notebooklm",
          // 📓 NOTEBOOKLM Module 12: Reemplaza "#" con tu link
          "llmLink": "#",
          "titulo":"7. NotebookLLM — Circuitos CA","descripcion":"IA para circuitos CA: Phasors, impedancia, resonancia y filtros.","xp":10 },
        { "id":"m12-e1","tipo":"referencias","titulo":"8. Referencias BiblioCharts","descripcion":"Fuentes sobre circuitos RLC, Current alterna y análisis de señales.","xp":10,
          "secciones":[
            { "tituloSeccion":"📘 Libros de texto","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/14-1-mutual-inductance","titulo":"OpenStax: Inductancia y Circuitos AC — Cap. 14–15","descripcion":"Inductores, RLC, Current alterna y transformadores." },
                { "url":"https://www.amazon.com/dp/0073380679","titulo":"Hayt — Engineering Circuit Analysis Cap. 14","descripcion":"Análisis de circuitos en CA con Phasors." },
                { "url":"https://www.amazon.com/dp/0132116056","titulo":"Nilsson & Riedel — Electric Circuits","descripcion":"Capítulo de CA: impedancia, resonancia y Power." }
            ]},
            { "tituloSeccion":"🌐 Resources web","links":[
                { "url":"https://www.allaboutcircuits.com/textbook/alternating-current/","titulo":"All About Circuits: AC","descripcion":"Guía completa de circuitos CA con Phasors y filtros." },
                { "url":"https://www.electronics-tutorials.ws/accircuits/ac-resistance.html","titulo":"Electronics Tutorials: Circuitos AC","descripcion":"Impedancia, resonancia y filtros explicados visualmente." }
            ]},
            { "tituloSeccion":"🔬 Simulatores externos","links":[
                { "url":"https://phet.colorado.edu/es/simulations/circuit-construction-kit-ac","titulo":"PhET: Circuitos AC","descripcion":"Construye circuitos AC con inductores y capacitores." },
                { "url":"https://www.falstad.com/circuit/","titulo":"Falstad: Simulator AC","descripcion":"Simula circuitos RLC con Answer en Frequency en tiempo real." }
            ]}
          ]
        }
    ]
};
