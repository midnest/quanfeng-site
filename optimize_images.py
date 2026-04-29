#!/usr/bin/env python3
"""
Optimize product images for web use
- Create thumbnails for table view (200px width, JPEG, quality 85)
- Convert PNG to JPEG for better compression
"""

import os
from PIL import Image
from pathlib import Path

# Configuration
SOURCE_DIR = "public/extracted_docx_images"
THUMB_WIDTH = 200
JPEG_QUALITY = 85

def optimize_image(source_path, output_path, max_width=THUMB_WIDTH, quality=JPEG_QUALITY):
    """Optimize a single image"""
    try:
        with Image.open(source_path) as img:
            # Convert to RGB if necessary (for PNG with transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Calculate new height maintaining aspect ratio
            width, height = img.size
            if width > max_width:
                ratio = max_width / width
                new_width = max_width
                new_height = int(height * ratio)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as JPEG with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Return file sizes for comparison
            original_size = os.path.getsize(source_path)
            optimized_size = os.path.getsize(output_path)
            return original_size, optimized_size
    except Exception as e:
        print(f"Error processing {source_path}: {e}")
        return None, None

def main():
    total_original = 0
    total_optimized = 0
    count = 0
    
    # Process each product folder
    for folder_name in os.listdir(SOURCE_DIR):
        folder_path = os.path.join(SOURCE_DIR, folder_name)
        if not os.path.isdir(folder_path):
            continue
        
        # Find the main product image (1.png or 1.jpeg)
        source_file = None
        for ext in ['1.png', '1.jpeg', '1.jpg']:
            test_path = os.path.join(folder_path, ext)
            if os.path.exists(test_path):
                source_file = test_path
                break
        
        if not source_file:
            print(f"No main image found in {folder_name}")
            continue
        
        # Create thumbnail path
        thumb_path = os.path.join(folder_path, "thumb.jpg")
        
        # Optimize image
        result = optimize_image(source_file, thumb_path)
        if result:
            original_size, optimized_size = result
            total_original += original_size
            total_optimized += optimized_size
            count += 1
            
            orig_kb = original_size / 1024
            opt_kb = optimized_size / 1024
            savings = ((original_size - optimized_size) / original_size) * 100
            
            print(f"{folder_name}: {orig_kb:.1f}KB -> {opt_kb:.1f}KB ({savings:.1f}% saved)")
    
    # Print summary
    if count > 0:
        total_orig_mb = total_original / (1024 * 1024)
        total_opt_mb = total_optimized / (1024 * 1024)
        total_savings = ((total_original - total_optimized) / total_original) * 100
        
        print(f"\n{'='*50}")
        print(f"Processed {count} images")
        print(f"Total original: {total_orig_mb:.2f} MB")
        print(f"Total optimized: {total_opt_mb:.2f} MB")
        print(f"Space saved: {total_savings:.1f}%")
        print(f"{'='*50}")

if __name__ == "__main__":
    main()
