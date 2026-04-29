#!/usr/bin/env python3
"""Analyze PDF catalog structure"""

import fitz  # PyMuPDF
import os
import json

def analyze_pdf(pdf_path):
    """Analyze PDF structure and extract text"""
    doc = fitz.open(pdf_path)
    
    print("=" * 60)
    print(f"PDF分析: {pdf_path}")
    print("=" * 60)
    print(f"总页数: {len(doc)}")
    print()
    
    # Analyze first few pages
    for page_num in range(min(15, len(doc))):
        page = doc[page_num]
        text = page.get_text()
        
        print(f"\n--- 第 {page_num + 1} 页 ---")
        # Get first 500 chars of text
        text_preview = text[:500].replace('\n', ' ')
        print(f"内容预览: {text_preview}...")
        
        # Check for images
        image_list = page.get_images()
        print(f"图片数量: {len(image_list)}")
        
        # Check for tables (by looking for structured text)
        if "型号" in text or "规格" in text or "电压" in text:
            print("包含: 产品参数表")
    
    doc.close()

if __name__ == "__main__":
    pdf_file = "泉风牌交流风机图册（2026更新）(1).pdf"
    analyze_pdf(pdf_file)
