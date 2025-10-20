import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { browserInfo } = await request.json();
    
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    let ipData;
    try {
      const IPINFO_TOKEN = process.env.IPINFO_TOKEN || '';
      const ipinfoUrl = IPINFO_TOKEN 
        ? `https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`
        : `https://ipinfo.io/${ip}/json`;
      const ipResponse = await fetch(ipinfoUrl);
      ipData = await ipResponse.json();
    } catch (error) {
      ipData = { ip, error: 'Failed to fetch IP info' };
    }

    const ipInfo = Object.entries(ipData)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key} - \`${value.join(', ')}\``;
        } else if (typeof value === 'object' && value !== null) {
          return `${key} - \`${JSON.stringify(value)}\``;
        } else {
          return `${key} - \`${value}\``;
        }
      })
      .join('\n');

    const browserDetails = Object.entries(browserInfo)
      .map(([key, value]) => `${key} - \`${value}\``)
      .join('\n');

    const message = `🌐 **Browser Info**\n${browserDetails}\n\n📍 **IP Info**\n${ipInfo}`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
