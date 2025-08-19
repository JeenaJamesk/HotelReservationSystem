
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
  const { name, phone, email, guests, date, time } = data;

    // Basic validation
    if (!name || !phone || !email || !guests || !date || !time) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
console.log(data, 'post adataaaaa')
    // Save booking to database
    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone: BigInt(phone),
        nofguest: Number(guests),
        date: new Date(date),
        time,
      },
    });

    return NextResponse.json(
      { message: "Booking received!", reservation },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
