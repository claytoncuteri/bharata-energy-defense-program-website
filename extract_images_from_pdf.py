#!/usr/bin/env python3
"""
Extract images from PDF with captions using PyMuPDF
"""

import fitz  # PyMuPDF
import os
import sys
import json
from pathlib import Path
from PIL import Image
import io

def extract_images_with_context(pdf_path, output_dir="attached_assets/extracted_images"):
    """Extract images from PDF and try to find associated captions."""
    
    doc = fitz.open(pdf_path)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    images_data = []
    image_count = 0
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        
        # Get all text on the page for caption matching
        page_text = page.get_text()
        
        # Get images from the page
        image_list = page.get_images(full=True)
        
        print(f"\nPage {page_num + 1}: Found {len(image_list)} images")
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            
            try:
                # Extract the image
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Save the image
                image_filename = f"image_page{page_num + 1}_{img_index + 1}.{image_ext}"
                image_path = output_path / image_filename
                
                with open(image_path, "wb") as img_file:
                    img_file.write(image_bytes)
                
                # Get image dimensions
                img_pil = Image.open(io.BytesIO(image_bytes))
                width, height = img_pil.size
                
                # Try to find caption near the image
                # Get image rectangle
                img_rect = page.get_image_bbox(img)
                
                # Look for text below the image (likely caption)
                caption_rect = fitz.Rect(
                    img_rect.x0,
                    img_rect.y1,
                    img_rect.x1,
                    img_rect.y1 + 100  # Look 100 points below image
                )
                
                caption_text = page.get_textbox(caption_rect).strip()
                
                # If no caption found below, try looking above
                if not caption_text or len(caption_text) < 10:
                    caption_rect_above = fitz.Rect(
                        img_rect.x0,
                        max(0, img_rect.y0 - 100),
                        img_rect.x1,
                        img_rect.y0
                    )
                    caption_above = page.get_textbox(caption_rect_above).strip()
                    if caption_above and len(caption_above) > len(caption_text):
                        caption_text = caption_above
                
                image_data = {
                    "filename": image_filename,
                    "path": str(image_path),
                    "page": page_num + 1,
                    "index_on_page": img_index + 1,
                    "width": width,
                    "height": height,
                    "format": image_ext,
                    "caption": caption_text if caption_text else f"Image from page {page_num + 1}",
                    "page_text_snippet": page_text[:200] if page_text else ""
                }
                
                images_data.append(image_data)
                image_count += 1
                
                print(f"  Extracted: {image_filename}")
                print(f"    Size: {width}x{height}")
                print(f"    Caption: {caption_text[:80] if caption_text else 'None found'}...")
                
            except Exception as e:
                print(f"  Error extracting image {img_index + 1}: {e}")
    
    # Save metadata
    metadata_file = output_path / "images_metadata.json"
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(images_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"Extraction complete!")
    print(f"Total images extracted: {image_count}")
    print(f"Images saved to: {output_path}")
    print(f"Metadata saved to: {metadata_file}")
    
    return images_data

def main():
    if len(sys.argv) < 2:
        print("Usage: python extract_images_from_pdf.py <pdf_file>")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    extract_images_with_context(pdf_path)

if __name__ == "__main__":
    main()
