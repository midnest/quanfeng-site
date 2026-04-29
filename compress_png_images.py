#!/usr/bin/env python3
"""
Compress PNG images to JPEG for faster loading
Converts all PNG files in extracted_docx_images to compressed JPEG format
"""

from PIL import Image
import os
from pathlib import Path

def compress_png_to_jpeg(input_path: Path, output_path: Path, quality: int = 85, max_width: int = 800):
    """Convert PNG to compressed JPEG"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB (remove alpha channel)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background for transparency
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                if img.mode in ('RGBA', 'LA'):
                    background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                    img = background
                else:
                    img = img.convert('RGB')
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as JPEG with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file sizes
            original_size = input_path.stat().st_size
            compressed_size = output_path.stat().st_size
            reduction = (original_size - compressed_size) / original_size * 100
            
            return original_size, compressed_size, reduction
    except Exception as e:
        print(f"  Error processing {input_path}: {e}")
        return None, None, None

def main():
    base_dir = Path("public/extracted_docx_images")
    
    if not base_dir.exists():
        print(f"Directory not found: {base_dir}")
        return
    
    total_original = 0
    total_compressed = 0
    processed = 0
    
    print("=" * 70)
    print("Compressing PNG images to JPEG")
    print("=" * 70)
    
    # Find all PNG files
    png_files = list(base_dir.rglob("*.png"))
    
    for png_path in png_files:
        # Skip if already has a JPEG version
        jpeg_path = png_path.with_suffix('.jpg')
        
        print(f"\nProcessing: {png_path.relative_to(base_dir)}")
        
        result = compress_png_to_jpeg(png_path, jpeg_path)
        
        if result[0] is not None:
            orig, comp, red = result
            total_original += orig
            total_compressed += comp
            processed += 1
            print(f"  Original: {orig/1024:.1f} KB")
            print(f"  Compressed: {comp/1024:.1f} KB")
            print(f"  Reduction: {red:.1f}%")
    
    print("\n" + "=" * 70)
    print("Compression Summary")
    print("=" * 70)
    print(f"Files processed: {processed}")
    print(f"Total original size: {total_original/1024/1024:.2f} MB")
    print(f"Total compressed size: {total_compressed/1024/1024:.2f} MB")
    print(f"Overall reduction: {(total_original - total_compressed)/total_original*100:.1f}%")
    print("=" * 70)

if __name__ == "__main__":
    main()
