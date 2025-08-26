
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { sendAdminBookingEmail } from "../../../utils/email";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
  const { name, phone, email, guests, date, time, message } = data;

    // Basic validation
    if (!name || !phone || !email || !guests || !date || !time) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    // Save booking to database
    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone: BigInt(phone),
        nofguest: Number(guests),
        date: new Date(date),
        time,
        comment: message || '',
      },
    });

    // Send email to admin
    try {
      await sendAdminBookingEmail({
        name,
        phone,
        email,
        guests: Number(guests),
        date,
        time,
        message,
      });
    } catch (e) {
      console.error('Failed to send admin email:', e);
    }

    // Convert BigInt fields to string for JSON serialization
    const safeReservation = {
      ...reservation,
      phone: reservation.phone ? reservation.phone.toString() : null,
    };
    return NextResponse.json(
      { message: "Booking received!", reservation: safeReservation },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
