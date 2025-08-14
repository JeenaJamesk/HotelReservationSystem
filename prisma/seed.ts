// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//     // Seed menu items
//     const menuItems = [
//         { name: 'Spaghetti Bolognese', price: 12.99 },
//         { name: 'Margherita Pizza', price: 10.99 },
//         { name: 'Caesar Salad', price: 8.99 },
//         { name: 'Chocolate Cake', price: 5.99 },
//     ];

//     for (const item of menuItems) {
//         await prisma.menuItem.create({
//             data: item,
//         });
//     }

//     // Seed testimonials
//     const testimonials = [
//         { name: 'John Doe', message: 'Amazing food and great service!' },
//         { name: 'Jane Smith', message: 'A wonderful dining experience.' },
//         { name: 'Alice Johnson', message: 'Will definitely come back again!' },
//     ];

//     for (const testimonial of testimonials) {
//         await prisma.testimonial.create({
//             data: testimonial,
//         });
//     }
// }

// main()
//     .catch(e => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

export {};