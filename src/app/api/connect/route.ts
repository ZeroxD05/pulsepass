import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { provider, email: providerEmail } = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (provider === 'paypal') {
      if (!providerEmail || !providerEmail.includes('@')) {
        return NextResponse.json({ error: "Invalid PayPal email address" }, { status: 400 });
      }

      // Check if this PayPal email is already linked to another user
      const existingLink = await prisma.user.findFirst({
        where: { paypalEmail: providerEmail }
      });

      if (existingLink && existingLink.id !== user.id) {
        return NextResponse.json({ error: "This PayPal account is already linked to another user." }, { status: 409 });
      }

      await prisma.user.update({
        where: { id: user.id },
        data: { paypalEmail: providerEmail }
      });
    } else {
      return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, message: `Successfully connected ${provider}` });

  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession();
  
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { provider } = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (provider === 'paypal') {
      await prisma.user.update({
        where: { id: user.id },
        data: { paypalEmail: null }
      });
    } else {
      return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, message: `Successfully disconnected ${provider}` });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
