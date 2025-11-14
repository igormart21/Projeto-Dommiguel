#!/usr/bin/env python3
# Script para parsear produtos do PDF e gerar JSON

import re
import json

# Produtos extraídos do PDF com códigos
products_data = [
    {
        "code": "20241",
        "name": "CARVÃO",
        "weight": "2 KG",
        "category": "carvao"
    },
    {
        "code": "20242",
        "name": "OVOS DE CODORNA EM CONSERVA",
        "weight": "1KG",
        "category": "conservas"
    },
    {
        "code": "20243",
        "name": "OVOS DE CODORNA EM CONSERVA",
        "weight": "2,1KG",
        "category": "conservas"
    },
    {
        "code": "20244",
        "name": "ALHO DESIDRATADO FLOCOS",
        "weight": "500G",
        "category": "temperos"
    },
    {
        "code": "20245",
        "name": "ALHO DESCASCADO 100% NATURAL",
        "weight": "1KG",
        "category": "temperos"
    },
    {
        "code": "20246",
        "name": "AZEITONA EM CONSERVA",
        "weight": "3,2KG",
        "category": "conservas"
    },
    {
        "code": "20247",
        "name": "AZEITONA EM CONSERVA",
        "weight": "2,9KG",
        "category": "conservas"
    },
    {
        "code": "20248",
        "name": "AZEITONA PRETA C/ CAROÇO",
        "weight": "11KG",
        "category": "conservas"
    },
    {
        "code": "20249",
        "name": "PALMITO TOLETE",
        "weight": "CX COM 6UND",
        "category": "conservas"
    },
    {
        "code": "20250",
        "name": "PALMITO PICADO",
        "weight": "CAIXA C/ 6UND",
        "category": "conservas"
    },
    {
        "code": "20251",
        "name": "FARINHA DE TRIGO",
        "weight": "25KG",
        "category": "graos"
    }
]

# Gerar IDs únicos
for i, product in enumerate(products_data, 1):
    category_prefix = {
        "carvao": "carv",
        "conservas": "cons",
        "temperos": "temp",
        "graos": "grao"
    }[product["category"]]
    product["id"] = f"{category_prefix}-{product['code']}"
    
    # Normalizar nome
    name = product["name"].title()
    product["name"] = name
    
    # Normalizar peso
    weight = product["weight"].replace("KG", "kg").replace("G", "g")
    product["weight"] = weight
    
    # Adicionar descrição
    product["description"] = f"{name} - {weight}"

print(json.dumps(products_data, indent=2, ensure_ascii=False))

