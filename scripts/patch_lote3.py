import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Modulo 11
mod11_path = os.path.join(BASE_DIR, "modulesJS", "module11.js")
with open(mod11_path, "r", encoding="utf-8") as f:
    mod11 = f.read()

# m11-s1 is Onda EM
mod11 = re.sub(r'("id":"m11-s1".*?"recurso":)"simulators/Sim_[^"]+"', r'\1"simulators/Sim_M11_EM_Wave.html"', mod11)
# m11-s2 is Equations de Maxwell
mod11 = re.sub(r'("id":"m11-s2".*?"recurso":)"simulators/Sim_[^"]+"', r'\1"simulators/Sim_M11_Maxwell_Equations.html"', mod11)

with open(mod11_path, "w", encoding="utf-8") as f:
    f.write(mod11)
print("module11.js patched")


# Modulo 12
mod12_path = os.path.join(BASE_DIR, "modulesJS", "module12.js")
with open(mod12_path, "r", encoding="utf-8") as f:
    mod12 = f.read()

# m12-s1 is Oscilador LC
mod12 = re.sub(r'("id":"m12-s1".*?"recurso":)"simulators/Sim_[^"]+"', r'\1"simulators/Sim_M12_LC_Oscillator.html"', mod12)
# m12-s2 is Resonancia RLC
mod12 = re.sub(r'("id":"m12-s2".*?"recurso":)"simulators/Sim_[^"]+"', r'\1"simulators/Sim_M12_RLC.html"', mod12)
# m12-s3 is Phasors
mod12 = re.sub(r'("id":"m12-s3".*?"recurso":)"simulators/Sim_[^"]+"', r'\1"simulators/Sim_M12_Phasors.html"', mod12)

with open(mod12_path, "w", encoding="utf-8") as f:
    f.write(mod12)
print("module12.js patched")
