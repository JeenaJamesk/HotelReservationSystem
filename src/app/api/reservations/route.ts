import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    const { name, email, date, time, guests } = await request.json();

    if (!name || !email || !date || !time || !guests) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
    // const reservation = await prisma.reservation.create({
    //     data: {
    //         name,
    //         email,
    //         date,
    //         time,
    //         guests,
    //     },
    // });
    // return NextResponse.json(reservation, { status: 201 });
    return NextResponse.json({ message: 'Prisma temporarily disabled.' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}