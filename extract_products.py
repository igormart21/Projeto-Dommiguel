#!/usr/bin/env python3
# Script para extrair produtos do PDF

import sys
from pypdf import PdfReader

def extract_text_from_pdf(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        print(f"Erro ao ler PDF: {e}", file=sys.stderr)
        return None

if __name__ == "__main__":
    pdf_path = "assets/css/Catalogo.pdf"
    text = extract_text_from_pdf(pdf_path)
    if text:
        print(text)
    else:
        sys.exit(1)

