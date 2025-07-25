export const sendMessageTelegram = (message) => {
	const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
	const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

	return fetch(`https://api.telegram.org/bot${API_TOKEN}/sendMessage`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			chat_id: CHAT_ID,
			text: message,
			parse_mode: "Markdown",
		}),
	})
		.then((response) => response.json())
		.then((data) => data); // Return the parsed JSON data
};
