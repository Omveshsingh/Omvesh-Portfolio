import sys
import fitz

def extract_text(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        text = ''
        for page in doc:
            blocks = page.get_text("blocks")
            blocks.sort(key=lambda b: (b[1], b[0])) # Sort by y, then x
            for b in blocks:
                text += b[4] + "\n"
        return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print(extract_text(sys.argv[1]))
    else:
        print("Provide PDF path")
