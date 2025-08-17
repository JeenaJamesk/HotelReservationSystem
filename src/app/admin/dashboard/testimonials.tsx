import React, { useEffect, useState } from 'react';
import TestimonialCard, { Testimonial } from '../../components/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const response = await fetch('/api/testimonials');
            const data = await response.json();
            setTestimonials(data);
        };

        fetchTestimonials();
    }, []);

    const approveTestimonial = async (id: string) => {
        await fetch(`/api/testimonials/${id}/approve`, {
            method: 'POST',
        });
        setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
    };

    return (
        <div>
            <h1>Testimonials</h1>
            <div>
                {testimonials.map(testimonial => (
                    <TestimonialCard 
                        key={testimonial.id} 
                        testimonial={testimonial} 
                        onApprove={() => approveTestimonial(testimonial.id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;