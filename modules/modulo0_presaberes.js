export const modulo0_presaberes = {
    id: "m0",
    titulo: "Module 0: Diagnostic Pre-Assessment",
    descripcion: "Mandatory pre-assessment to evaluate your advanced mathematics foundations before starting the course. Minimum passing score: 65%.",
    lecciones: [
        {
            id: "m0_l0",
            titulo: "Holistic Diagnosis (CHAEA + Kolb + MI)",
            tipo: "diagnostico_hub",
            duracion: "25 min",
            descripcion: "Discover your neuro-cognitive profile with 3 dimensions: Learning Style (CHAEA), Assimilation (Kolb), and Multiple Intelligences (Gardner)."
        },
        {
            id: "m0_l1",
            titulo: "Comprehensive Math Diagnostic (University Level)",
            tipo: "quiz",
            duracion: "30 min",
            Questions: [
                {
                    Question: "Evaluate the following multivariable limit: $$\\lim_{(x,y) \\to (0,0)} \\frac{x^2y}{x^4 + y^2}$$",
                    Options: [
                        "1/2",
                        "The limit does not exist",
                        "0",
                        "$\\infty$"
                    ],
                    AnswerCorrecta: 1,
                    peso: 5,
                    tema: "Multivariable Calculus",
                    feedback_error: "Approaching along the path $y = x^2$, the limit equals $1/2$, but along the x-axis it gives $0$. Since the result depends on the path, the limit does not exist."
                },
                {
                    Question: "Given the line integral $$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$$ where $\\mathbf{F} = (P, Q)$ is a conservative field and $C$ is a simple closed curve, what is the result?",
                    Options: [
                        "Depends on the parameterization of $C$",
                        "$\\pi$",
                        "0",
                        "The area enclosed by $C$"
                    ],
                    AnswerCorrecta: 2,
                    peso: 10,
                    tema: "Vector Calculus",
                    feedback_error: "The line integral of a conservative field over any closed path is always 0 (Fundamental Theorem of Line Integrals)."
                },
                {
                    Question: "Calculate the flux of the vector field $\\mathbf{F}(x,y,z) = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$ through a sphere $S$ of radius $R$ oriented outward.",
                    Options: [
                        "$4\\pi R^3$",
                        "0",
                        "$2\\pi R^2$",
                        "$\\frac{4}{3}\\pi R^3$"
                    ],
                    AnswerCorrecta: 0,
                    peso: 10,
                    tema: "Divergence Theorem",
                    feedback_error: "By Gauss's Theorem: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) dV$. The divergence is $3$. Volume of sphere $= \\frac{4}{3}\\pi R^3$. Total: $4\\pi R^3$."
                },
                {
                    Question: "In kinematics, if a body's acceleration is $a(t) = 6t$ and it starts from rest at $x=0$, what is its position at $t=2$?",
                    Options: [
                        "12",
                        "24",
                        "8",
                        "16"
                    ],
                    AnswerCorrecta: 2,
                    peso: 10,
                    tema: "Kinematics",
                    feedback_error: "$v(t) = \\int 6t\\,dt = 3t^2$. Position $x(t) = \\int 3t^2\\,dt = t^3$. At $t=2$: $x = 2^3 = 8$."
                },
                {
                    Question: "A block of mass $m$ slides down a frictionless inclined plane at angle $\\theta$. What is its acceleration?",
                    Options: [
                        "$g \\cos(\\theta)$",
                        "$g \\sin(\\theta)$",
                        "$mg \\sin(\\theta)$",
                        "$g \\tan(\\theta)$"
                    ],
                    AnswerCorrecta: 1,
                    peso: 15,
                    tema: "Dynamics (Newton's Laws)",
                    feedback_error: "The component of weight parallel to the plane is $mg \\sin(\\theta)$. By $F=ma$: $ma = mg \\sin(\\theta) \\implies a = g \\sin(\\theta)$."
                },
                {
                    Question: "A solid cylinder of mass $M$ and radius $R$ rotates about its axis. Its moment of inertia is $I = \\frac{1}{2}MR^2$. If a net torque $\\tau$ is applied, what angular acceleration $\\alpha$ does it acquire?",
                    Options: [
                        "$\\frac{2\\tau}{MR^2}$",
                        "$\\frac{\\tau}{MR^2}$",
                        "$\\frac{\\tau M}{R^2}$",
                        "$\\tau M R^2$"
                    ],
                    AnswerCorrecta: 0,
                    peso: 15,
                    tema: "Rotation and Moment of Inertia",
                    feedback_error: "By Newton's second law for rotation: $\\tau = I\\alpha$. Solving: $\\alpha = \\frac{\\tau}{I} = \\frac{\\tau}{\\frac{1}{2}MR^2} = \\frac{2\\tau}{MR^2}$."
                },
                {
                    Question: "According to the Law of Universal Gravitation, if the distance between two masses is halved, the gravitational attraction force:",
                    Options: [
                        "Is halved",
                        "Doubles",
                        "Quadruples",
                        "Remains the same"
                    ],
                    AnswerCorrecta: 2,
                    peso: 15,
                    tema: "Gravitation",
                    feedback_error: "The gravitational force is inversely proportional to the square of the distance ($F \\propto \\frac{1}{r^2}$). If $r \\to r/2$, then $1/(r/2)^2 = 4/r^2$, so the force quadruples."
                },
                {
                    Question: "Given vectors $\\mathbf{u} = 3\\mathbf{i} + 4\\mathbf{j}$ and $\\mathbf{v} = 4\\mathbf{i} - 3\\mathbf{j}$, what is their dot product $\\mathbf{u} \\cdot \\mathbf{v}$?",
                    Options: [
                        "12",
                        "0",
                        "25",
                        "7"
                    ],
                    AnswerCorrecta: 1,
                    peso: 10,
                    tema: "Vectors",
                    feedback_error: "The dot product is $(3)(4) + (4)(-3) = 12 - 12 = 0$. This means the vectors are perpendicular (orthogonal)."
                },
                {
                    Question: "Solve the linear differential equation: $$\\frac{dy}{dx} + \\frac{2}{x}y = \\frac{\\cos(x)}{x^2}$$",
                    Options: [
                        "$y = \\frac{\\sin(x) + C}{x^2}$",
                        "$y = \\cos(x) + C x^2$",
                        "$y = \\frac{e^x}{x^2} + C$",
                        "$y = x^2\\sin(x) + C$"
                    ],
                    AnswerCorrecta: 0,
                    peso: 10,
                    tema: "Differential Equations",
                    feedback_error: "The integrating factor is $\\mu(x) = x^2$. Multiplying and integrating yields $y = \\frac{\\sin(x) + C}{x^2}$."
                }
            ]
        }
    ]
};
