import os
import glob

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIM_DIR = os.path.join(BASE_DIR, "Simulatores")
MOD_DIR = os.path.join(BASE_DIR, "modulesJS")

MAPPING = {
    "Coulomb.html": "Sim_M1_Coulomb_Basic.html",
    "Simulator_Ley_de_Coulomb.html": "Sim_M1_Coulomb_Pro.html",
    "Simulator_Charges_Electricas.html": "Sim_M1_Charges.html",
    "Campo_Electrico.html": "Sim_M2_Vector_Field.html",
    "Anillo_Cargado.html": "Sim_M2_Ring.html",
    "Arco_Cargado.html": "Sim_M2_Arc.html",
    "Disco_Cargado.html": "Sim_M2_Disk.html",
    "Cilindro_Cargado.html": "Sim_M2_Cylinder.html",
    "Varilla_Cargada.html": "Sim_M2_Rod.html",
    "Superficie_Semicircular_Cargada.html": "Sim_M2_Semicircle.html",
    "Anillo_Disco_Cilindro (1).html": "Sim_M2_Board_Distributions.html",
    "Linea_Rectangulo_Paralelepipedo (1).html": "Sim_M2_Board_Lines.html",
    "Flujo_Electrico.html": "Sim_M3_Flux.html",
    "Tabla_Gauss.html": "Sim_M3_Gauss_Table.html",
    "Powerl_Electrico.html": "Sim_M4_Potential_3D.html",
    "Powerl_Electrico_2.html": "Sim_M4_Equipotentials.html",
    "Capacitance.html": "Sim_M5_Capacitance.html",
    "LorentzLab10easy.html": "Sim_M7_Lorentz.html"
}

def main():
    # 1. Update modulesJS files
    mod_files = glob.glob(os.path.join(MOD_DIR, "modulo*.js"))
    for mod_file in mod_files:
        with open(mod_file, "r", encoding="utf-8") as f:
            content = f.read()
        
        updated = False
        for old_name, new_name in MAPPING.items():
            old_path = f"simulators/{old_name}"
            new_path = f"simulators/{new_name}"
            if old_path in content:
                content = content.replace(old_path, new_path)
                updated = True
                
        if updated:
            with open(mod_file, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated references in {os.path.basename(mod_file)}")
            
    # 2. Rename files in Simulatores
    for old_name, new_name in MAPPING.items():
        old_path = os.path.join(SIM_DIR, old_name)
        new_path = os.path.join(SIM_DIR, new_name)
        
        if os.path.exists(old_path):
            os.rename(old_path, new_path)
            print(f"Renamed: {old_name} -> {new_name}")
        else:
            print(f"Skipped (not found): {old_name}")

if __name__ == "__main__":
    main()
