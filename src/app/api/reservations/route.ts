import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';


export async function GET(request: Request) {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: { created_at: 'desc' }
        });
        // Convert BigInt fields to string for JSON serialization
        const safeReservations = reservations.map(r => ({
            ...r,
            phone: r.phone ? r.phone.toString() : null
        }));
        return NextResponse.json(safeReservations, { status: 200 });
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return NextResponse.json({ error: 'Failed to fetch reservations', details: error?.message || error }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const { name, email, date, time, guests, phone, comment } = await request.json();

    if (!name || !email || !date || !time || !guests) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        const reservation = await prisma.reservation.create({
            data: {
                name,
                email,
                date: new Date(date),
                time,
                nofguest: parseInt(guests),
                phone: phone ? BigInt(phone) : null,
                comment: comment || '',
                status: 'pending',
            },
        });
        return NextResponse.json(reservation, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    const { id, status } = await request.json();

    if (!id || !status) {
        return NextResponse.json({ error: 'ID and status are required' }, { status: 400 });
    }

    try {
        const reservation = await prisma.reservation.update({
            where: { id: parseInt(id) },
            data: { status },
        });
        return NextResponse.json(reservation, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update reservation' }, { status: 500 });
    }
}