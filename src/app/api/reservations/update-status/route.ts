import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: 'ID and status are required' }, { status: 400 });
    }
    const reservation = await prisma.reservation.update({
      where: { id: parseInt(id) },
      data: { status },
    });
    return NextResponse.json(reservation, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update reservation status' }, { status: 500 });
  }
}
