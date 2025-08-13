import React from 'react';

const AboutPage = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className="flex flex-col justify-center mx-[2%] my-auto">
                <h1 className='m-0 text-center'>AALAPPEAZ Concept & Inspiration</h1>
                <p>Welcome to Aalappeaz, where we bring the flavors of Kerala to your table. Our restaurant is inspired by the serene backwaters of Kerala, offering a unique dining experience that combines traditional recipes with a modern twist.</p>
                <p>The AALAPPEAZ restaurant logo captures the essence of Alappuzha, Kerala, by blending two iconic elements—waves (symbolizing the backwaters) and coir (representing Kerala’s traditional craftsmanship). This fusion reflects the restaurant’s deep-rooted connection to coastal flavors, local heritage, and an immersive dining experience inspired by Kerala’s waterways.
                </p>

                <h1 className='text-center'>Brand Positioning</h1>
                <p>The AALAPPEAZ restaurant brand positions itself as an authentic culinary destination, bringing Kerala’s coastal flavors, warm hospitality, and cultural richness to the table. Whether it’s fresh seafood, traditional Kerala meals, or an upscale dining experience, this logo embodies the restaurant’s promise: A taste of Kerala’s backwaters in every bite.</p>
            </div>
            <div className="h-full w-full">
                <img
                    src="/images/aboutBg.png" alt="AALAPPEAZ Logo" height='95%' width='100%' />
            </div>
        </div>
    );
};

export default AboutPage;