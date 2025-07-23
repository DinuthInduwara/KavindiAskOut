"use client";
import React from "react";

export default function RainText({ fullText, setClickble }) {
	const [text, setText] = React.useState("");

	React.useEffect(() => {
		let text = "";

		const delay = (ms) => new Promise((res) => setTimeout(res, ms));

		const typeText = async () => {
			for (let i = 0; i < fullText.length; i++) {
				text += fullText[i];
				setText(text);
				await delay(70);
			}
			console.log("setClickble is", typeof setClickble);
			setClickble(true);
			console.log("Clickable set to true");
		};

		typeText();
	}, []);


	return (
		<div className="kavindi-text">
			<p>{text}</p>
		</div>
	);
}
