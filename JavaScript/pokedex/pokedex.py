import json

with open('./pokedex.json', 'r') as file:
    data = json.load(file)

for pokemon in data:
    print(f"Nom: {pokemon['name']}")