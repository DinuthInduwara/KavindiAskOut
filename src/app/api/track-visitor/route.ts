import { NextResponse } from 'next/server';
import { createTelegramService } from '@/services/telegram';
import { getOptionalEnv } from '@/lib/server/env';

const formatObjectAsMarkdown = (obj: Record<string, any>): string => {
  return Object.entries(obj)
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
};

const fetchIpInfo = async (ip: string): Promise<Record<string, any>> => {
  try {
    const IPINFO_TOKEN = getOptionalEnv('IPINFO_TOKEN');
    const ipinfoUrl = IPINFO_TOKEN 
      ? `https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`
      : `https://ipinfo.io/${ip}/json`;
    
    const ipResponse = await fetch(ipinfoUrl);
    return await ipResponse.json();
  } catch (error) {
    return { ip, error: 'Failed to fetch IP info' };
  }
};

export async function POST(request: Request) {
  try {
    const { browserInfo } = await request.json();
    
    const telegramService = createTelegramService();
    
    if (!telegramService) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    const ipData = await fetchIpInfo(ip);
    const ipInfo = formatObjectAsMarkdown(ipData);
    const browserDetails = formatObjectAsMarkdown(browserInfo);

    const message = `🌐 **Browser Info**\n${browserDetails}\n\n📍 **IP Info**\n${ipInfo}`;

    await telegramService.sendMessage({ text: message, parseMode: 'Markdown' });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
