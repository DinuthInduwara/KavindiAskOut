import { NextResponse } from 'next/server';
import { createTelegramService } from '@/services/telegram';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    
    if (!text) {
      return NextResponse.json(
        { error: 'Message text is required' },
        { status: 400 }
      );
    }

    const telegramService = createTelegramService();
    
    if (!telegramService) {
      return NextResponse.json(
        { error: 'Telegram service not configured' },
        { status: 500 }
      );
    }

    const success = await telegramService.sendSimpleMessage(text);

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
