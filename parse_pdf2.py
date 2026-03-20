import sys
import fitz

def extract_text(pdf_path, output_path):
    try:
        doc = fitz.open(pdf_path)
        text = ''
        for page in doc:
            blocks = page.get_text("blocks")
            blocks.sort(key=lambda b: (b[1], b[0]))
            for b in blocks:
                text += b[4] + "\n"
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print("Success")
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    extract_text(sys.argv[1], sys.argv[2])
