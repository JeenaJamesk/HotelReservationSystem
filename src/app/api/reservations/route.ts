import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// Mock reservation data for testing
const mockReservations: Array<{
    id: number;
    name: string;
    email: string;
    phone?: number | null;
    nofguest: number;
    comment?: string;
    date: Date;
    time: string;
    status: string;
    created_at: Date;
}> = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: 1234567890,
        nofguest: 4,
        comment: 'Birthday celebration',
        date: new Date('2024-08-25'),
        time: '7:00 PM',
        status: 'pending',
        created_at: new Date('2024-08-20')
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: 9876543210,
        nofguest: 2,
        comment: 'Anniversary dinner',
        date: new Date('2024-08-24'),
        time: '6:30 PM',
        status: 'approved',
        created_at: new Date('2024-08-18')
    },
    {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        phone: 5551234567,
        nofguest: 6,
        comment: 'Business meeting',
        date: new Date('2024-08-15'),
        time: '1:00 PM',
        status: 'approved',
        created_at: new Date('2024-08-12')
    },
    {
        id: 4,
        name: 'Sarah Williams',
        email: 'sarah.williams@example.com',
        phone: 7778889999,
        nofguest: 3,
        comment: 'Family lunch',
        date: new Date('2024-08-10'),
        time: '12:30 PM',
        status: 'approved',
        created_at: new Date('2024-08-08')
    },
    {
        id: 5,
        name: 'Robert Davis',
        email: 'robert.davis@example.com',
        phone: 3332221111,
        nofguest: 5,
        comment: 'Team dinner',
        date: new Date('2024-08-26'),
        time: '8:00 PM',
        status: 'pending',
        created_at: new Date('2024-08-21')
    },
    {
        id: 6,
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        phone: 5559998888,
        nofguest: 2,
        comment: 'Romantic dinner',
        date: new Date(), // Today's reservation
        time: '7:30 PM',
        status: 'approved',
        created_at: new Date()
    }
];

export async function GET(request: Request) {
    try {
        // In a real implementation, you would fetch from database
        // const reservations = await prisma.reservation.findMany({
        //     orderBy: { created_at: 'desc' }
        // });
        
        return NextResponse.json(mockReservations, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const { name, email, date, time, guests, phone, comment } = await request.json();

    if (!name || !email || !date || !time || !guests) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        // In a real implementation, you would save to database
        // const reservation = await prisma.reservation.create({
        //     data: {
        //         name,
        //         email,
        //         date: new Date(date),
        //         time,
        //         nofguest: parseInt(guests),
        //         phone: phone ? parseInt(phone) : null,
        //         comment: comment || '',
        //         status: 'pending'
        //     },
        // });
        
        const newReservation = {
            id: mockReservations.length + 1,
            name,
            email,
            phone: phone ? parseInt(phone) : null,
            nofguest: parseInt(guests),
            comment: comment || '',
            date: new Date(date),
            time,
            status: 'pending',
            created_at: new Date()
        };
        
        mockReservations.push(newReservation);
        
        return NextResponse.json(newReservation, { status: 201 });
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
        // In a real implementation, you would update in database
        // const reservation = await prisma.reservation.update({
        //     where: { id: parseInt(id) },
        //     data: { status }
        // });
        
        const reservationIndex = mockReservations.findIndex(r => r.id === parseInt(id));
        if (reservationIndex === -1) {
            return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
        }
        
        mockReservations[reservationIndex].status = status;
        
        return NextResponse.json(mockReservations[reservationIndex], { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update reservation' }, { status: 500 });
    }
}