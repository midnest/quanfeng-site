#!/usr/bin/env python3
"""
Further optimize thumbnails for even faster loading
"""

from PIL import Image
import os
from pathlib import Path

def optimize_thumbnail(input_path: Path, output_path: Path, quality: int = 75, max_width: int = 120):
    """Create optimized thumbnail"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB
            if img.mode in ('RGBA', 'LA', 'P'):
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
            
            # Resize
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with lower quality for thumbnails
            img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)
            
            original_size = input_path.stat().st_size
            new_size = output_path.stat().st_size
            reduction = (original_size - new_size) / original_size * 100
            
            return original_size, new_size, reduction
    except Exception as e:
        print(f"  Error: {e}")
        return None, None, None

def main():
    base_dir = Path("public/extracted_docx_images")
    
    total_original = 0
    total_new = 0
    processed = 0
    
    print("=" * 70)
    print("Optimizing thumbnails for faster initial load")
    print("=" * 70)
    
    for folder in base_dir.iterdir():
        if folder.is_dir():
            thumb_path = folder / "thumb.jpg"
            if thumb_path.exists():
                print(f"\nProcessing: {thumb_path.relative_to(base_dir)}")
                result = optimize_thumbnail(thumb_path, thumb_path)
                
                if result[0]:
                    orig, new, red = result
                    total_original += orig
                    total_new += new
                    processed += 1
                    print(f"  Before: {orig/1024:.1f} KB → After: {new/1024:.1f} KB ({red:.1f}% reduction)")
    
    print("\n" + "=" * 70)
    print(f"Processed: {processed} thumbnails")
    print(f"Total before: {total_original/1024:.1f} KB")
    print(f"Total after: {total_new/1024:.1f} KB")
    print(f"Overall reduction: {(total_original-total_new)/total_original*100:.1f}%")
    print("=" * 70)

if __name__ == "__main__":
    main()
