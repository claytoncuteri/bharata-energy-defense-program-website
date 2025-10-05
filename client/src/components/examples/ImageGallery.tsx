import ImageGallery from '../ImageGallery';

export default function ImageGalleryExample() {
  const mockImages = [
    {
      src: "/placeholder-installation1.jpg",
      caption: "Chitradurga Fort Installation - Ancient spiritual energy center"
    },
    {
      src: "/placeholder-installation2.jpg",
      caption: "Pancha Pativrata Shiromanis Temple - Sacred site of devotion"
    },
    {
      src: "/placeholder-installation3.jpg",
      caption: "Hebbya Temple Complex - Spiritual epicenter of the program"
    }
  ];

  return (
    <div className="p-8 bg-background">
      <ImageGallery images={mockImages} />
    </div>
  );
}
