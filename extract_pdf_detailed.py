#!/usr/bin/env python3
"""Extract PDF pages as images to see the layout"""

import fitz
import os

def extract_pdf_pages_as_images(pdf_path, output_dir):
    """Convert PDF pages to images"""
    os.makedirs(output_dir, exist_ok=True)
    
    doc = fitz.open(pdf_path)
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        
        # Render page to image
        mat = fitz.Matrix(2, 2)  # 2x zoom for better quality
        pix = page.get_pixmap(matrix=mat)
        
        output_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
        pix.save(output_path)
        print(f"Saved: {output_path}")
    
    doc.close()
    print(f"\nTotal pages exported: {len(doc)}")

if __name__ == "__main__":
    pdf_file = "泉风牌交流风机图册（2026更新）(1).pdf"
    output_dir = "pdf_pages"
    extract_pdf_pages_as_images(pdf_file, output_dir)
