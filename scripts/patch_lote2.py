import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Modulo 9
mod9_path = os.path.join(BASE_DIR, "modulesJS", "module9.js")
with open(mod9_path, "r", encoding="utf-8") as f:
    mod9 = f.read()

mod9 = mod9.replace('"recurso":"simulators/Sim_M2_Cylinder.html"', '"recurso":"simulators/Sim_M9_Solenoid.html"')
mod9 = mod9.replace('"recurso":"simulators/Sim_M3_Gauss_Table.html"', '"recurso":"simulators/Sim_M9_Ampere_Table.html"')

with open(mod9_path, "w", encoding="utf-8") as f:
    f.write(mod9)
print("module9.js patched")


# Modulo 10
mod10_path = os.path.join(BASE_DIR, "modulesJS", "module10.js")
with open(mod10_path, "r", encoding="utf-8") as f:
    mod10 = f.read()

mod10 = mod10.replace('"recurso":"simulators/Sim_M3_Flux.html"', '"recurso":"simulators/Sim_M10_Magnetic_Flux.html"')
mod10 = mod10.replace('"recurso":"simulators/Sim_M7_Lorentz.html"', '"recurso":"simulators/Sim_M10_Motional_EMF.html"')

with open(mod10_path, "w", encoding="utf-8") as f:
    f.write(mod10)
print("module10.js patched")
