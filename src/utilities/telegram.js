export const sendTelegramMessage = async (message) => {
  try {
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return { error: 'Failed to send message' };
  }
};
