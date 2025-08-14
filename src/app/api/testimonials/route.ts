import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    const { name, message } = await request.json();

    if (!name || !message) {
        return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
    }

    // const testimonial = await prisma.testimonial.create({
    //     data: {
    //         name,
    //         message,
    //     },
    // });

    // return NextResponse.json(testimonial, { status: 201 });
    return NextResponse.json({ message: 'Prisma temporarily disabled.' }, { status: 201 });
}