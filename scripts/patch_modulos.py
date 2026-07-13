import os
import re

modules_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "modulesJS")

MAPPINGS = {
    "module2.js": '        { "id":"m2-t","tipo":"grupo","titulo":"5. Workshops Prácticos",\n          "sublecciones":[\n            { "id":"m2-t1","tipo":"ejercicio","recurso":"workshops/Workshop_2_1_Electric_Field.html","titulo":"5.1 Workshop Práctico — Electric Field","descripcion":"Problemas con configuraciones de carga y dipolos.","xp":30 },\n            { "id":"m2-t2","tipo":"ejercicio","recurso":"workshops/Workshop_2_2_Continuous_Distributions.html","titulo":"5.2 Workshop Práctico — Distribuciones Continuas","descripcion":"Integración de Electric Field de barras, anillos y discos.","xp":30 }\n          ]\n        },\n',
    "module3.js": '        { "id":"m3-l7","tipo":"ejercicio","recurso":"workshops/Workshop_3_Gauss_Law.html","titulo":"5. Workshop Práctico — Gauss","descripcion":"Problemas de Electric Flux y aplicación de la Gauss's Law con geometrías reales.","xp":30 },\n',
    "module4.js": '        { "id":"m4-l7","tipo":"ejercicio","recurso":"workshops/Workshop_4_Electric_Potential.html","titulo":"5. Workshop Práctico — Electric Potential","descripcion":"Problemas de Energy Powerl, Powerl de distribuciones y equiPowerles.","xp":30 },\n',
    "module5.js": '        { "id":"m5-l7","tipo":"ejercicio","recurso":"workshops/Workshop_5_Capacitance.html","titulo":"5. Workshop Práctico — Capacitance","descripcion":"Problemas de capacitores simples, combinaciones en red y Energy almacenada.","xp":30 },\n',
    "module6.js": '        { "id":"m6-t","tipo":"grupo","titulo":"5. Workshops Prácticos",\n          "sublecciones":[\n            { "id":"m6-t1","tipo":"ejercicio","recurso":"workshops/Workshop_6_1_Circuit_Reduction.html","titulo":"5.1 Workshop — Reducción de Circuitos","descripcion":"Simplificación de redes resistivas: serie, paralelo y delta-estrella.","xp":25 },\n            { "id":"m6-t2","tipo":"ejercicio","recurso":"workshops/Workshop_6_2_Kirchhoff_Laws.html","titulo":"5.2 Workshop — Leyes de Kirchhoff","descripcion":"Análisis sistemático de redes usando LKV y LKC con 20 problemas.","xp":30 }\n          ]\n        },\n',
    "module7.js": '        { "id":"m7-l7","tipo":"ejercicio","recurso":"workshops/Workshop_7_Lorentz_Law.html","titulo":"5. Workshop Práctico — Lorentz","descripcion":"Problemas de Trajectorys en campo magnético, espectrómetros y ciclotrones.","xp":30 },\n',
    "module8.js": '        { "id":"m8-l7","tipo":"ejercicio","recurso":"workshops/Workshop_8_Biot_Savart.html","titulo":"5. Workshop Práctico — Biot-Savart","descripcion":"Cálculo del campo magnético de hilos, arcos, espiras y solenoides finitos.","xp":30 },\n',
    "module9.js": '        { "id":"m9-l7","tipo":"ejercicio","recurso":"workshops/Workshop_9_Ampere_Law.html","titulo":"5. Workshop Práctico — Ley de Ampere","descripcion":"Problemas de solenoides, toroides, Conductors coaxiales y campo toroidal.","xp":30 },\n',
    "module10.js": '        { "id":"m10-l7","tipo":"ejercicio","recurso":"workshops/Workshop_10_Faraday_Law.html","titulo":"5. Workshop Práctico — Faraday","descripcion":"Cálculo de FEM inducida, inductancia mutua, autoinductancia y Energy en inductores.","xp":30 },\n',
    "module11.js": '        { "id":"m11-l7","tipo":"ejercicio","recurso":"workshops/Workshop_11_Maxwell_Equations.html","titulo":"5. Workshop Práctico — Maxwell","descripcion":"Problemas de Current de desplazamiento, ondas EM y vector de Poynting.","xp":30 },\n',
    "module12.js": '        { "id":"m12-l7","tipo":"ejercicio","recurso":"workshops/Workshop_12_AC_Circuits.html","titulo":"5. Workshop Práctico — Circuitos CA","descripcion":"Impedancia, resonancia, Phasors y factor de Power. Transitorios.","xp":30 },\n',
}

def patch():
    for filename, new_content in MAPPINGS.items():
        filepath = os.path.join(modules_DIR, filename)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
            
        # Encontrar todas las líneas que tienen "tipo":"ejercicio"
        start_idx = -1
        end_idx = -1
        for i, line in enumerate(lines):
            if '"tipo":"ejercicio"' in line:
                if start_idx == -1:
                    start_idx = i
                end_idx = i
                
        if start_idx != -1:
            # Reemplazamos ese bloque de líneas por el nuevo contenido
            new_lines = lines[:start_idx] + [new_content] + lines[end_idx+1:]
            with open(filepath, "w", encoding="utf-8") as f:
                f.writelines(new_lines)
            print(f"Patched {filename}")

if __name__ == "__main__":
    patch()
