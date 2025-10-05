#!/usr/bin/env python3
"""
PDF Content Extraction Script
Extracts text and images from PDF files for use in the Bharata Energy Defence Program website.
"""

import os
import sys
import json
from pathlib import Path
from pypdf import PdfReader
from pdf2image import convert_from_path
from PIL import Image

def extract_text_from_pdf(pdf_path):
    """Extract text content from all pages of a PDF file."""
    reader = PdfReader(pdf_path)
    text_content = []
    
    for page_num, page in enumerate(reader.pages, start=1):
        text = page.extract_text()
        if text.strip():
            text_content.append({
                "page": page_num,
                "text": text.strip()
            })
    
    return text_content

def extract_images_from_pdf(pdf_path, output_dir):
    """Convert PDF pages to images and save them."""
    images = convert_from_path(pdf_path, dpi=200)
    image_paths = []
    
    pdf_name = Path(pdf_path).stem
    images_dir = Path(output_dir) / pdf_name
    images_dir.mkdir(parents=True, exist_ok=True)
    
    for i, image in enumerate(images, start=1):
        image_path = images_dir / f"page_{i}.png"
        image.save(image_path, "PNG")
        image_paths.append(str(image_path))
        print(f"Saved: {image_path}")
    
    return image_paths

def main():
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf.py <pdf_file_path> [output_dir]")
        print("Example: python extract_pdf.py documents/sample.pdf extracted_content")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "extracted_content"
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    print(f"Extracting content from: {pdf_path}")
    print(f"Output directory: {output_dir}")
    print("-" * 50)
    
    # Extract text
    print("\nExtracting text...")
    text_content = extract_text_from_pdf(pdf_path)
    print(f"Extracted text from {len(text_content)} pages")
    
    # Save text content
    pdf_name = Path(pdf_path).stem
    text_output_dir = Path(output_dir) / pdf_name
    text_output_dir.mkdir(parents=True, exist_ok=True)
    
    text_file = text_output_dir / "text_content.json"
    with open(text_file, 'w', encoding='utf-8') as f:
        json.dump(text_content, f, indent=2, ensure_ascii=False)
    print(f"Text saved to: {text_file}")
    
    # Also save as plain text for easy reading
    text_plain_file = text_output_dir / "text_content.txt"
    with open(text_plain_file, 'w', encoding='utf-8') as f:
        for page_data in text_content:
            f.write(f"\n{'='*50}\n")
            f.write(f"PAGE {page_data['page']}\n")
            f.write(f"{'='*50}\n\n")
            f.write(page_data['text'])
            f.write("\n\n")
    print(f"Plain text saved to: {text_plain_file}")
    
    # Extract images
    print("\nExtracting images...")
    try:
        image_paths = extract_images_from_pdf(pdf_path, output_dir)
        print(f"Extracted {len(image_paths)} images")
        
        # Save image paths
        images_file = text_output_dir / "image_paths.json"
        with open(images_file, 'w', encoding='utf-8') as f:
            json.dump(image_paths, f, indent=2)
        print(f"Image paths saved to: {images_file}")
    except Exception as e:
        print(f"Warning: Could not extract images: {e}")
        print("Note: pdf2image requires poppler-utils to be installed")
    
    print("\n" + "="*50)
    print("Extraction complete!")
    print(f"All content saved to: {output_dir}/{pdf_name}/")

if __name__ == "__main__":
    main()
