import React from "react";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tags?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
}


const MenuSection: React.FC<MenuSectionProps> = ({ title, items, imageSrc, imageAlt, imageClassName }) => (
  <div>
    {imageSrc && (
      <div className="mb-8 flex justify-center">
        <img src={imageSrc} alt={imageAlt} className={imageClassName || "w-40 h-40 rounded-full border-white shadow-lg"} />
      </div>
    )}
    <h2 className="text-[2.5rem] font-extrabold mb-4 leading-tight">{title}</h2>
  <div className="space-y-6 mb-8">
      {items.map((item, idx) => (
        <div key={idx} className="mb-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          {item.description && (
            <div className="text-sm italic text-gray-200 mt-1 ml-1">{item.description}</div>
          )}
          {item.tags && (
            <div className="text-xs ml-2">{item.tags}</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MenuSection;
