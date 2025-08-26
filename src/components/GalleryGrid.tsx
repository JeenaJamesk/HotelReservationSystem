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
        <div className="grid grid-cols-3 gap-[2%] m-[2%]">
            {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={image.src} alt={image.alt} className="w-[500px] h-[500px]" />
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;