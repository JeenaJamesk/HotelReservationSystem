import React from 'react';

interface Testimonial {
    name: string;
    message: string;
    date: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="italic">"{testimonial.message}"</p>
            <p className="text-gray-500 text-sm">{testimonial.date}</p>
        </div>
    );
};

export default TestimonialCard;