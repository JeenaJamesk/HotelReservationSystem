import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }
  
  // Check admin credentials in the database
  const admin = await prisma.adminCredential.findFirst({
    where: {
      username,
      password,
    },
  });
  if (admin) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
