import React from 'react';

type GalleryImage = {
    src: string;
    alt: string;
};

type GalleryGridProps = {
    images: GalleryImage[];
};

const GalleryGrid = ({ images }: GalleryGridProps) => {
    return (
        <div className="grid grid-cols-2 gap-[2%]">
            {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={image.src} alt={image.alt} className="w-full h-full" />
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;