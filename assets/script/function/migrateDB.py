from __future__ import annotations

import ast
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
RAW_DIR = ROOT / "assets/data/raw"
OUT_FILE = ROOT / "assets/data/programs.json"

FIELDS = dict(pair.split(":") for pair in """
schoolNames:schoolName cities:city provinces:province countries:country
schoolPictures:schoolPicture mapPictures:mapPicture programNames:programName
lengthsOfPrograms:lengthOfProgram programDescriptions:programDescription coop:hasCoop
admissionCoursesNeeded:admissionCoursesNeeded admissionAveragesNeeded:admissionAverageNeeded
domesticTuitions:domesticTuition internationalTuitions:internationalTuition
academicCostDetails:academicCostDetails academicCosts:academicCost
livingCostDetails:livingCostDetails livingCosts:livingCost interestingFacts:interestingFacts
""".split())

SOURCES = {
    **{f"primarySources{i}": ("primarySources", i - 1) for i in range(1, 4)},
    **{f"secondarySources{i}": ("secondarySources", i - 1) for i in range(1, 3)},
}

ALIASES = dict(pair.split(":") for pair in """
schoolName:schoolNames lengthOfProgram:lengthsOfPrograms
programDescription:programDescriptions admissionAverageNeeded:admissionAveragesNeeded
livingCostsDetails:livingCostDetails livingCost:livingCosts
primarySource1:primarySources1 primarySource2:primarySources2 primarySource3:primarySources3
secondarySource1:secondarySources1 secondarySource2:secondarySources2
""".split())

ASSIGNMENT = re.compile(r"(?:globalThis\.)?([A-Za-z_$][\w$]*)\s*\[\s*(\d+)\s*\]\s*=")
STRING = re.compile(r"'(?:\\.|[^'\\])*'|\"(?:\\.|[^\"\\])*\"|`(?:\\.|[^`\\])*`", re.DOTALL)


def parse_string(token: str) -> str:
    if token.startswith("`"):
        return token[1:-1].replace("\\`", "`")

    try:
        return ast.literal_eval(token)
    except SyntaxError:
        return token[1:-1]


def parse_value(expr: str):
    strings = STRING.findall(expr)
    if strings:
        return "".join(parse_string(token) for token in strings)

    expr = expr.split(";", 1)[0].split("//", 1)[0].strip()
    if expr in {"true", "false"}:
        return expr == "true"
    if not re.fullmatch(r"[\d_+\-*/().\s]+", expr):
        raise ValueError(f"Could not parse value: {expr}")

    value = eval(expr.replace("_", ""), {"__builtins__": {}})
    return int(value) if isinstance(value, float) and value.is_integer() else value


def raw_assignments(code: str):
    matches = list(ASSIGNMENT.finditer(code))
    for i, match in enumerate(matches):
        name, index = match.group(1), int(match.group(2))
        end = matches[i + 1].start() if i + 1 < len(matches) else len(code)
        yield ALIASES.get(name, name), index, code[match.end():end]


def add_source(program: dict, name: str, value):
    property_name, source_index = SOURCES[name]
    program.setdefault(property_name, [])
    while len(program[property_name]) <= source_index:
        program[property_name].append(None)
    program[property_name][source_index] = value


def migrate_file(path: Path):
    programs = {}
    for name, index, expr in raw_assignments(path.read_text()):
        program = programs.setdefault(index, {"legacyIndex": index, "legacyFile": path.name})
        if name in FIELDS:
            program[FIELDS[name]] = parse_value(expr)
        elif name in SOURCES:
            add_source(program, name, parse_value(expr))
    return programs.values()


def main():
    programs = [program for path in sorted(RAW_DIR.glob("*.js")) for program in migrate_file(path)]
    programs.sort(key=lambda program: program["legacyIndex"])
    OUT_FILE.write_text(json.dumps(programs, indent=4) + "\n")
    print(f"Migrated {len(programs)} records to {OUT_FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
