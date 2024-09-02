import React from 'react';

const CardComponent = ({ title, description, imageUrl, link }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <a href={link} className="text-indigo-600 hover:underline mt-2 inline-block">Read More</a>
            </div>
        </div>
    );
};

export default CardComponent;
