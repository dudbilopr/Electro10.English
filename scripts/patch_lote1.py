import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Modulo 6
mod6_path = os.path.join(BASE_DIR, "modulesJS", "module6.js")
with open(mod6_path, "r", encoding="utf-8") as f:
    mod6 = f.read()

mod6 = mod6.replace('"recurso":"simulators/Sim_M2_Board_Lines.html"', '"recurso":"simulators/Sim_M6_Resistivity.html"')
mod6 = mod6.replace('"recurso":"simulators/Sim_M2_Vector_Field.html"', '"recurso":"simulators/Sim_M6_DC_Circuit.html"')

with open(mod6_path, "w", encoding="utf-8") as f:
    f.write(mod6)
print("module6.js patched")


# Modulo 8
mod8_path = os.path.join(BASE_DIR, "modulesJS", "module8.js")
with open(mod8_path, "r", encoding="utf-8") as f:
    mod8 = f.read()

# For M8 we replace Anillo -> Sim_M8_Biot_Savart_Ring.html
mod8 = mod8.replace('"recurso":"simulators/Sim_M2_Ring.html"', '"recurso":"simulators/Sim_M8_Biot_Savart_Ring.html"')
# Varilla -> Sim_M8_Biot_Savart_Wire.html
mod8 = mod8.replace('"recurso":"simulators/Sim_M2_Rod.html"', '"recurso":"simulators/Sim_M8_Biot_Savart_Wire.html"')
# For Arco, the teacher had Sim_M2_Arc.html. Let's point Arco to Sim_M8_Biot_Savart_Ring for now, as it's part of loop fields.
mod8 = mod8.replace('"recurso":"simulators/Sim_M2_Arc.html"', '"recurso":"simulators/Sim_M8_Biot_Savart_Ring.html"')

with open(mod8_path, "w", encoding="utf-8") as f:
    f.write(mod8)
print("module8.js patched")
