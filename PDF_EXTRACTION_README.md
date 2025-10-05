# PDF Content Extraction Guide

This guide explains how to extract text and images from PDF files for use in the Bharata Energy Defence Program website.

## Requirements

The following dependencies are already installed:
- Python 3.11
- pypdf (for text extraction)
- pdf2image (for image extraction)
- Pillow (for image processing)
- poppler-utils (system dependency for pdf2image)

## Usage

### Basic Usage

```bash
python extract_pdf.py <pdf_file_path> [output_directory]
```

### Examples

Extract content from a single PDF (output to default `extracted_content` directory):
```bash
python extract_pdf.py documents/timeline_2005.pdf
```

Extract content with custom output directory:
```bash
python extract_pdf.py documents/cosmic_analysis.pdf extracted_pdfs
```

## Output Structure

For a PDF named `example.pdf`, the script creates:

```
extracted_content/
└── example/
    ├── text_content.json      # JSON format with page numbers
    ├── text_content.txt        # Plain text format for easy reading
    ├── image_paths.json        # List of extracted image paths
    ├── page_1.png             # Page 1 as image
    ├── page_2.png             # Page 2 as image
    └── ...
```

## What Gets Extracted

### Text Content
- **JSON Format** (`text_content.json`): Structured data with page numbers
  ```json
  [
    {
      "page": 1,
      "text": "Content from page 1..."
    },
    {
      "page": 2,
      "text": "Content from page 2..."
    }
  ]
  ```

- **Plain Text** (`text_content.txt`): Human-readable format with page separators

### Images
- Each page is converted to a high-quality PNG image (200 DPI)
- Images are saved as `page_1.png`, `page_2.png`, etc.
- Paths are recorded in `image_paths.json` for easy reference

## Integration with Website

After extraction, you can:

1. **Use extracted images**: Copy images to `attached_assets/` directory and reference them in components using:
   ```tsx
   import imagePath from "@assets/page_1.png";
   ```

2. **Use extracted text**: Import the JSON file and display content dynamically in your React components

3. **Organize by section**: Place extracted content in appropriate directories based on the PDF source:
   - Timeline PDFs → Use for Past/Upcoming Timeline pages
   - Technical documents → Use for Appendix or Executive Summary
   - Images → Use across relevant sections

## Troubleshooting

### "Command not found: python"
Make sure Python 3.11 is installed:
```bash
python3 --version
```

### "Module not found" errors
Reinstall the Python dependencies:
```bash
pip install pypdf pdf2image Pillow
```

### PDF conversion fails
Ensure poppler-utils is installed (system dependency).

## Notes

- The script preserves text formatting as much as possible
- Images are extracted at 200 DPI for good quality while maintaining reasonable file sizes
- All output files use UTF-8 encoding to support multilingual content
