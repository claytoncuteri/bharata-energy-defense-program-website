#!/usr/bin/env python3
"""
Simple image extractor from PDF - extracts all images without trying to find positions
"""

import fitz  # PyMuPDF
import os
import sys
import json
from pathlib import Path
from PIL import Image
import io

def extract_images_simple(pdf_path, output_dir="attached_assets/extracted_images"):
    """Extract all images from PDF."""
    
    doc = fitz.open(pdf_path)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    images_data = []
    image_count = 0
    
    # Also extract text for manual caption matching
    all_text = {}
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        page_text = page.get_text()
        all_text[page_num + 1] = page_text
        
        # Get images from the page
        image_list = page.get_images(full=True)
        
        print(f"Page {page_num + 1}: Found {len(image_list)} images")
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            
            try:
                # Extract the image
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Get image dimensions
                img_pil = Image.open(io.BytesIO(image_bytes))
                width, height = img_pil.size
                
                # Only save reasonably sized images (filter out tiny icons/decorations)
                if width >= 200 and height >= 200:
                    # Save the image
                    image_filename = f"image_page{page_num + 1}_{img_index + 1}.{image_ext}"
                    image_path = output_path / image_filename
                    
                    with open(image_path, "wb") as img_file:
                        img_file.write(image_bytes)
                    
                    image_data = {
                        "filename": image_filename,
                        "page": page_num + 1,
                        "index_on_page": img_index + 1,
                        "width": width,
                        "height": height,
                        "format": image_ext,
                        "caption": ""  # To be filled manually
                    }
                    
                    images_data.append(image_data)
                    image_count += 1
                    
                    print(f"  ✓ Extracted: {image_filename} ({width}x{height})")
                else:
                    print(f"  ✗ Skipped small image: {width}x{height}")
                
            except Exception as e:
                print(f"  Error extracting image {img_index + 1}: {e}")
    
    # Save metadata
    metadata_file = output_path / "images_metadata.json"
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(images_data, f, indent=2, ensure_ascii=False)
    
    # Save page text for reference
    text_file = output_path / "page_text.json"
    with open(text_file, 'w', encoding='utf-8') as f:
        json.dump(all_text, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"Extraction complete!")
    print(f"Total images extracted: {image_count}")
    print(f"Images saved to: {output_path}")
    print(f"Metadata saved to: {metadata_file}")
    print(f"Page text saved to: {text_file}")
    
    return images_data

def main():
    if len(sys.argv) < 2:
        print("Usage: python extract_images_simple.py <pdf_file>")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    extract_images_simple(pdf_path)

if __name__ == "__main__":
    main()
