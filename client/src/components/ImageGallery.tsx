import { Card } from "@/components/ui/card";

interface GalleryImage {
  src: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden hover-elevate transition-all duration-200 hover:shadow-lg">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover"
              data-testid={`image-gallery-${index}`}
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground italic" data-testid={`caption-${index}`}>
              {image.caption}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
