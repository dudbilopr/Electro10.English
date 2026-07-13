import os
import re

# Directorios
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Workshops_DIR = os.path.join(BASE_DIR, "Workshops")
TEMPLATE_PATH = os.path.join(Workshops_DIR, "Workshop_1_Coulomb_Law.html")

# Los Workshops que faltan generar
Workshops_FALTANTES = [
    {
        "filename": "Workshop_5_Capacitance.html",
        "title": "Workshop 5: Capacitance y Dielectrics",
        "tema": "Capacitance y Energy Almacenada",
        "problemas": [
            "Un capacitor de placas paralelas tiene un área de 2.0 cm² y una separación de 1.0 mm. Calcule su Capacitance en el vacío.",
            "Si se inserta un Dielectric con constante k=3.5 entre las placas del capacitor Previous, ¿cuál es la nueva Capacitance?",
            "Tres capacitores de 2µF, 3µF y 6µF se conectan en serie a una batería de 12V. Encuentre la Capacitance equivalente.",
            "Para el circuito Previous, calcule la carga y el Voltage en cada capacitor.",
            "¿Cuánta Energy Powerl eléctrica se almacena en el sistema total?"
        ]
    },
    {
        "filename": "Workshop_7_Lorentz_Law.html",
        "title": "Workshop 7: Force Magnética (Lorentz Force Law)",
        "tema": "Forces Magnéticas sobre Charges y Currents",
        "problemas": [
            "Un electrón se mueve a 5.0 x 10^6 m/s perpendicular a un campo magnético uniforme de 0.2 T. Calcule la Magnitudeee de la Force magnética.",
            "Determine el radio de la órbita circular descrita por el electrón del problema Previous.",
            "Un alambre recto de 2.5 m lleva una Current de 4.0 A en un campo magnético de 0.5 T. Si el Angle es de 30°, halle la Force sobre el alambre.",
            "Un protón entra en una región con E = 3000 V/m y B = 0.5 T perpendiculares entre sí. ¿A qué Velocity no se desvía el protón?",
            "Un espectrómetro de masas acelera iones a través de una diferencia de Powerl antes de entrar a un campo magnético. Derive la ecuación para la masa."
        ]
    },
    {
        "filename": "Workshop_8_Biot_Savart.html",
        "title": "Workshop 8: Biot-Savart Law",
        "tema": "Fuentes de Campo Magnético",
        "problemas": [
            "Calcule el campo magnético en el centro de una espira circular de radio R por la que circula una Current I.",
            "Un alambre largo y recto lleva una Current de 10 A. Halle el campo magnético a 5 cm del alambre.",
            "Dos alambres rectos paralelos están separados 10 cm y llevan Currents de 5 A y 8 A en el mismo sentido. ¿Cuál es la Force por unidad de longitud entre ellos?",
            "Encuentre la expresión del campo magnético sobre el eje de una espira circular a una Distance x del centro.",
            "Una espira cuadrada de lado L lleva una Current I. Calcule el campo magnético en su centro exacto."
        ]
    },
    {
        "filename": "Workshop_9_Ampere_Law.html",
        "title": "Workshop 9: Ley de Ampere",
        "tema": "Simetría en Campos Magnéticos",
        "problemas": [
            "Use la Ley de Ampere para derivar el campo magnético a una Distance r de un conductor cilíndrico largo (r > R).",
            "Un solenoide ideal tiene 500 vueltas por metro y lleva una Current de 2.0 A. Calcule el campo magnético en su interior.",
            "Un toroide tiene un radio interior de 10 cm y radio exterior de 15 cm con 1000 vueltas. Si I = 3A, calcule B en r = 12 cm.",
            "Un cable coaxial consta de un cilindro interior sólido y una corteza exterior hueca. Derivar B en la región intermedia.",
            "Calculate la circulación del campo magnético alrededor de una Trajectory cerrada que no encierra Current."
        ]
    },
    {
        "filename": "Workshop_10_Faraday_Law.html",
        "title": "Workshop 10: Faraday's Law y Lenz",
        "tema": "Induction Electromagnética",
        "problemas": [
            "Una espira circular de 5 cm de radio está en un campo magnético que aumenta a razón de 0.2 T/s. ¿Cuál es la fem inducida?",
            "Un generador de CA consiste en una bobina de 100 espiras cuadradas de 10 cm de lado girando a 60 Hz en un campo de 0.5 T. Halle la fem máxima.",
            "Explique conceptualmente el signo negativo en la Faraday's Law utilizando la Ley de Lenz para una espira que se acerca a un imán.",
            "Una barra conductora de longitud L se mueve con Velocity v perpendicular a un campo B constante. Derive la fem de movimiento (BLv).",
            "Un anillo de cobre y uno de madera caen a través del mismo campo magnético. Compare sus aceleraciones y justifique."
        ]
    },
    {
        "filename": "Workshop_11_Maxwell_Equations.html",
        "title": "Workshop 11: Equations de Maxwell",
        "tema": "Síntesis del Electromagnetismo",
        "problemas": [
            "Escriba las cuatro Equations de Maxwell en su forma integral y explique brevemente su significado Physical.",
            "Muestre cómo la Ley de Ampere original es inconsistente para un circuito que incluye un capacitor cargándose y cómo la Current de desplazamiento lo soluciona.",
            "Calcule la Current de desplazamiento entre las placas circulares de un capacitor de radio R si el Electric Field cambia a tasa dE/dt.",
            "Demuestre que las Equations de Maxwell implican que las ondas electromagnéticas en el vacío viajan a la Velocity c.",
            "Un rayo láser tiene una intensidad media de 5.0 mW/m². Calcule los valores máximos de los campos eléctrico y magnético."
        ]
    },
    {
        "filename": "Workshop_12_AC_Circuits.html",
        "title": "Workshop 12: Circuitos AC y RLC",
        "tema": "Current Alterna e Impedancia",
        "problemas": [
            "Un circuito RL en serie tiene R = 50 Ω y L = 0.1 H conectado a 120 V, 60 Hz. Calcule la reactancia inductiva y la impedancia.",
            "Para el circuito Previous, determine la Current rms y el Angle de fase.",
            "Un circuito RLC en serie con R=100 Ω, L=0.5 H y C=10 µF se conecta a un Voltage alterno. Calcule la Frequency de resonancia.",
            "En la Frequency de resonancia, ¿cuál es la impedancia total del circuito RLC y por qué?",
            "Calcule el factor de Power y la Power promedio disipada en el resistor fuera de resonancia."
        ]
    }
]

def clean_and_replace_content(template_html, config):
    # Reemplazar Título HTML
    html = re.sub(r'<title>.*?</title>', f'<title>{config["title"]}</title>', template_html, flags=re.IGNORECASE)
    
    # Reemplazar el H2 principal
    html = re.sub(r'<h2 class=".*?">.*?Workshop Completo.*?</h2>', f'<h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{config["title"]}</h2>', html, flags=re.DOTALL)
    
    # Reemplazar la Unidad / Tema
    html = re.sub(r'<p class="text-slate-500 mt-2 text-sm">.*?</p>', f'<p class="text-slate-500 mt-2 text-sm">{config["tema"]} • Física II</p>', html, flags=re.DOTALL)
    
    # Reemplazar el bloque de problemas
    # Extraemos el nav, el header, etc.
    main_start = html.find('<main')
    main_end = html.find('</main>') + 7
    
    # Vamos a construir un nuevo MAIN que tenga un layout parecido pero con nuestros problemas
    new_main = '<main class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6" id="Workshop-content">\n'
    
    for i, prob_text in enumerate(config["problemas"]):
        num = i + 1
        new_main += f"""
        <section class="problem-card bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
            <div class="flex justify-between items-start">
                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-[10px] font-bold tracking-wider">EJ {num:02d}</span>
                <span class="text-slate-400 text-[10px] uppercase font-semibold">Workshop</span>
            </div>
            <div class="problem-text compact-text text-sm">
                <strong>Problema {num}:</strong> {prob_text}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2 flex items-center justify-center min-h-[100px] text-slate-400 text-xs italic">
                Espacio de Work del Student (Añade SVGs aquí si lo requieres)
            </div>
            <button onclick="toggleHint(this)" class="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 no-print mt-auto">💡 Ver Pista Didáctica</button>
            <div class="hint-content p-3 bg-blue-50 rounded border border-blue-100 text-xs text-slate-700">
                <strong>Pista:</strong> Revisa la Theory de {config["tema"]} y aplica las Formulas correspondientes. ¡Recuerda las unidades del SI!
            </div>
        </section>
        """
        
    new_main += '</main>'
    
    # Reemplazamos el main
    html = html[:main_start] + new_main + html[main_end:]
    
    # Como quitamos los SVGs y el 3D del template (en el nuevo main), debemos Clear funciones de Three.js que crashearian por no encontrar elementos
    # Para hacerlo sencillo, envolvemos el init3D en un try catch o lo vaciamos
    html = html.replace('function init3D() {', 'function init3D() { return; ')
    
    return html

def generar_Workshops():
    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        template = f.read()

    for config in Workshops_FALTANTES:
        out_path = os.path.join(Workshops_DIR, config["filename"])
        new_html = clean_and_replace_content(template, config)
        
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(new_html)
        print(f"Creado: {config['filename']}")

if __name__ == "__main__":
    generar_Workshops()
