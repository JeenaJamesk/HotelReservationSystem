import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const menuItems = await prisma.menuItem.findMany();
        return NextResponse.json(menuItems);
    } catch (error) {
        return NextResponse.error();
    } finally {
        await prisma.$disconnect();
    }
}