// modules/module12.js — RL, LC, RLC Circuits & AC Current
export const module12 = {
    "titulo": "Module 12: RL, LC, RLC & AC Circuits",
    "color": "#65a30d",
    "icono": "ac_unit",
    "descripcionCorta": "Circuits with inductors and capacitors in AC: resonance and phasors",
    "subtemas": ["RL circuit: transient and steady state","LC circuit: electromagnetic oscillations","Damping in RLC circuits","Alternating current: phasor representation","Inductive and capacitive reactance","Complex impedance","Series and parallel resonance","Power factor and reactive power","AC transformers","RC and RL filters: low-pass and high-pass"],
    "conceptosClave": ["Impedance", "Resonance", "Phasor", "Reactance"],
    "requisitosPrevios": ["Faraday's Law (Module 10)", "Capacitance (Module 5)", "DC Circuits (Module 6)", "Complex numbers"],
    "Equations": [
        "$$ Z = R + j(X_L - X_C) = R + j\\left(\\omega L - \\frac{1}{\\omega C}\\right) $$ (Complex impedance)",
        "$$ \\omega_0 = \\frac{1}{\\sqrt{LC}} $$ (Resonance frequency)"
    ],
    "historia": {
        "hallazgo": "Charles Steinmetz pioneered the phasor method for AC circuit analysis in the 1890s, transforming complex differential equations into manageable algebraic operations with complex numbers.",
        "experimentoClave": "Steinmetz's Phasor Method for AC Circuits (1890s)"
    },
    "bibliografia": ["Hayt, W. H., & Kemmerly, J. E. (2018). Engineering Circuit Analysis. McGraw-Hill. (Ch. 14)"],
    "lecciones": [
        { "id":"m12-mt", "tipo":"microteaching", "recurso":"microteaching.html", "titulo":"0. EMI Microteaching — AC Circuits", "descripcion":"10-minute EMI lesson: Warm-up, Objectives, Video, Simulation Activity, Conclusion & Feedback. Topic: Phasors, Impedance & Resonance.", "xp":30 },
        { "id":"m12-l1","tipo":"multivideo","recurso":"2HxTt0Kl8KM|NHhK6RHFB4c|L4fTVV7mMBc|8p82v2_KYVQ|j-JK4GVv6BA|mFTfzQFdSJ8|SLFi1M0j2To","titulo":"1. Videos — RL, LC, RLC & AC Circuits","descripcion":"From transient RL circuits to resonance and phasors in alternating current.","xp":10 },
        { "id":"m12-l2","tipo":"presentacion","recurso":"./player.html?clase=12","titulo":"2. Interactive Slides","descripcion":"Animated phasor diagrams, resonance curves, and frequency response.","xp":15 },
        { "id":"m12-g1","tipo":"grupo","titulo":"3. Virtual Laboratory",
          "sublecciones":[
            { "id":"m12-s1","tipo":"Simulator","recurso":"simulators/Sim_M12_LC_Oscillator.html","titulo":"3.1 LC Oscillating Circuit","descripcion":"Energy oscillating between L and C: analogy with a pendulum.","xp":20 },
            { "id":"m12-s2","tipo":"Simulator","recurso":"simulators/Sim_M12_RLC.html","titulo":"3.2 RLC Frequency Response","descripcion":"Resonance curve and Q factor of the RLC circuit.","xp":20 },
            { "id":"m12-s3","tipo":"Simulator","recurso":"simulators/Sim_M12_Phasors.html","titulo":"3.3 Interactive Phasors","descripcion":"Phasor summation of voltages in AC circuits.","xp":20 }
          ]
        },
        { "id":"m12-j1","tipo":"Game","recurso":"games/Game_12.html","titulo":"4. Physics Quest — AC Circuits","descripcion":"Tune the RLC circuit to the resonance frequency! 5 AC engineering challenges.","xp":25,"logro":{"id":"logro_m12","nombre":"Resonance Master","icono":"[WAVES]"} },
        { "id":"m12-l7","tipo":"exercise","recurso":"workshops/Workshop_12_AC_Circuits.html","titulo":"5. Practical Workshop — AC Circuits","descripcion":"Impedance, resonance, phasors, and power factor. Transient analysis.","xp":30 },
        { "id":"m12-q1","tipo":"quiz","recurso":"quizzes/Quiz_Adaptive_12.html","titulo":"6. Adaptive Quiz — Module 12","descripcion":"Assess from impedance concepts to power calculations in AC circuits.","xp":40 },
        { "id":"m12-nb1","tipo":"notebooklm",
          "llmLink": "#",
          "titulo":"7. NotebookLLM — AC Circuits","descripcion":"AI for AC circuits: phasors, impedance, resonance, and filters.","xp":10 },
        { "id":"m12-e1","tipo":"referencias","titulo":"8. Bibliographic References","descripcion":"Sources on RLC circuits, alternating current, and signal analysis.","xp":10,
          "secciones":[
            { "tituloSeccion":"[*] Main Textbooks","links":[
                { "url":"https://openstax.org/books/university-physics-volume-2/pages/14-1-mutual-inductance","titulo":"OpenStax: Inductance and AC Circuits — Ch. 14–15","descripcion":"Inductors, RLC, alternating current, and transformers." },
                { "url":"https://www.amazon.com/dp/0073380679","titulo":"Hayt — Engineering Circuit Analysis Ch. 14","descripcion":"AC circuit analysis with phasors." },
                { "url":"https://www.amazon.com/dp/0132116056","titulo":"Nilsson & Riedel — Electric Circuits","descripcion":"AC chapter: impedance, resonance, and power." }
            ]},
            { "tituloSeccion":"[WEB] Web Resources","links":[
                { "url":"https://www.allaboutcircuits.com/textbook/alternating-current/","titulo":"All About Circuits: AC","descripcion":"Complete guide to AC circuits with phasors and filters." },
                { "url":"https://www.electronics-tutorials.ws/accircuits/ac-resistance.html","titulo":"Electronics Tutorials: AC Circuits","descripcion":"Impedance, resonance, and filters visually explained." }
            ]},
            { "tituloSeccion":"[SCIENCE] External Simulators","links":[
                { "url":"https://phet.colorado.edu/es/simulations/circuit-construction-kit-ac","titulo":"PhET: AC Circuits","descripcion":"Build AC circuits with inductors and capacitors." },
                { "url":"https://www.falstad.com/circuit/","titulo":"Falstad: AC Simulator","descripcion":"Simulate RLC circuits with real-time frequency response." }
            ]}
          ]
        }
    ]
};
