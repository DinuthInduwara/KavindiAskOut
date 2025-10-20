/**
 * Telegram messaging service
 * Centralized Telegram API integration
 */

import { getRequiredEnv } from '@/lib/server/env';

export interface TelegramMessage {
  text: string;
  parseMode?: 'Markdown' | 'HTML';
}

export class TelegramService {
  private botToken: string;
  private chatId: string;

  constructor(botToken?: string, chatId?: string) {
    this.botToken = botToken || getRequiredEnv('TELEGRAM_BOT_TOKEN');
    this.chatId = chatId || getRequiredEnv('TELEGRAM_CHAT_ID');
  }

  async sendMessage(message: TelegramMessage): Promise<boolean> {
    try {
      const telegramUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          chat_id: this.chatId,
          text: message.text,
          parse_mode: message.parseMode || 'Markdown',
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Failed to send Telegram message:', error);
      return false;
    }
  }

  async sendSimpleMessage(text: string): Promise<boolean> {
    return this.sendMessage({ text });
  }
}

export const createTelegramService = (): TelegramService | null => {
  try {
    return new TelegramService();
  } catch (error) {
    console.error('Failed to initialize Telegram service:', error);
    return null;
  }
};
