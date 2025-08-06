import toml  # type: ignore [import]
import json

with open("py/package.json", "r") as p:
    package_data = json.load(p)

with open("py/pyproject.toml", "r") as t:
    toml_data = toml.load(t)

toml_data["project"]["version"] = package_data["version"]

with open("py/pyproject.toml", "w") as w:
    toml.dump(toml_data, w)
