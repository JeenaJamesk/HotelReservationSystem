import React from 'react';

export interface Testimonial {
    id: string;
    name: string;
    message: string;
    date: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    onApprove?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, onApprove }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="italic">"{testimonial.message}"</p>
            <p className="text-gray-500 text-sm">{testimonial.date}</p>
            {onApprove && (
                <button className="mt-2 px-4 py-1 bg-green-500 text-white rounded" onClick={onApprove}>
                    Approve
                </button>
            )}
        </div>
    );
};

export default TestimonialCard;