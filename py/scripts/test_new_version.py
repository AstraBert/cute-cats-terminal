import toml  # type: ignore [import]
import json


def test_versions_equal(
    package_data: dict,
    toml_data: dict,
) -> None:
    llama_cloud_version = toml_data["project"]["version"]
    package_version = package_data["version"]
    try:
        assert llama_cloud_version == package_version
        print("0")
    except AssertionError:
        print("1")


with open("py/package.json", "r") as p:
    package_data = json.load(p)

with open("py/pyproject.toml", "r") as t:
    toml_data = toml.load(t)

test_versions_equal(package_data, toml_data)
