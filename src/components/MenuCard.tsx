import React from 'react';

interface MenuCardProps {
    title: string;
    description: string;
    price: string;
    imageUrl: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-700">{description}</p>
                <p className="text-lg font-semibold">{price}</p>
            </div>
        </div>
    );
};

export default MenuCard;