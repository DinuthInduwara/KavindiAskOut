import React from "react";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";

export default function QuestionBox({ setShowTransition, setIsComplete }) {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [answers, setAnswers] = React.useState({});
	const [isTyping, setIsTyping] = React.useState(false);

	const prevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion((prev) => prev - 1);
		}
	};

	const handleChoiceAnswer = (option) => {
		setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
	};

	const handleTextAnswer = (text) => {
		setAnswers((prev) => ({ ...prev, [currentQuestion]: text }));
	};

	const nextQuestion = () => {
		if (currentQuestion === questions.length - 1) {
			const prettyJson = JSON.stringify(answers, null, 2); // 2 spaces indentation
			
			sendMessageTelegram(prettyJson);

			setShowTransition(true);
			setTimeout(() => {
				setIsComplete(true);
				setShowTransition(false);
			}, 3000);
		} else {
			setCurrentQuestion((prev) => prev + 1);
		}
	};

	const questions = [
		{
			question: "Kavindi , Was I never close to your heart? 💕",
			type: "text",
			placeholder:
				"ඇත්තම කාරනාව කියන්න🥺, ඔයා ඇරෙන්න වෙන කවුරු කියන්නද ඉතින් 🥹",
		},
		{
			question: "ඔයා ඉස්සර ඉදගෙනම මට අකමත්තෙන්ද හිටියේ ඉතින් 🥲",
			type: "choice",
			options: [
				"😊🌼 නැහැ - චුට්ටික්කක්වත් ",
				"😕💔 ඔව් - ටිකක්",
				"😶‍🌫️🤏 නැහැ - හැබැයි පොඩ්ඩක් ",
				"💔😭 ඔව් - ගොඩක්",
			],
		},
		{
			question: "චෝකොලොට් එකක් දුන්නොත්  තව යාලු වෙනවා නේ 🥹, නේ ද ,  😊",
			type: "text",
			placeholder: "ඔයාට ඕනම දෙකය් කියන්න , මම දෙනවා 🍫",
		},
		{
			question: "ඔයා කැමති වෙන කව්රුහරි ඉන්නවද මේ ලෝකේ☹️ ",
			type: "choice",
			options: [
				"🌅 ඤෑ,  ඔයා විතරයි ",
				"🌃 ඤෑ ඤෑ,  ඔයා විතරයි ",
				"🏖️ ඤෑ ඤෑ ඤෑ,  ඔයා විතරයි  ",
				"🏠 ඤෑඤෑඤෑඤෑඤෑඤෑඤෑඤෑ මයි,  ඔයා විතරමයි  ",
			],
		},
		{
			question:
				"කාව්න්දී, ඔය ඔක්කොටම ඇත්තම කිව්වා නේද, ඇත්තටම මගේ මොනවහරි අඩුපාඩුවක් තියනවනම් කියන්න  💖",
			type: "text",
			placeholder:
				"එහෙම මට පෙන දෙයක් තියනවනම් ඇත්තටම මම දැන් එක හදාගේනනේ ඉතින්🥺, මට පෙන්නේ නැති දේ කියල දාන්න plz🥹",
		},
	];

	const currentQ = questions[currentQuestion];
	const currentAnswer = answers[currentQuestion];

	return (
		<div
			style={{
				background: "rgba(255, 255, 255, 0.9)",
				borderRadius: "25px",
				padding: "35px",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
				border: "1px solid rgba(255, 255, 255, 0.3)",
				maxWidth: "500px",
				width: "90%",
				position: "relative",
				zIndex: 10,
				backdropFilter: "blur(15px)",
				margin: "0 auto",
			}}
		>
			<div
				style={{
					background: "rgba(255, 255, 255, 0.2)",
					borderRadius: "10px",
					height: "6px",
					marginBottom: "25px",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						background: "linear-gradient(45deg, #4a7c59, #6b8e23)",
						height: "100%",
						width: `${
							((currentQuestion + 1) / questions.length) * 100
						}%`,
						borderRadius: "10px",
						transition: "width 0.5s ease",
					}}
				/>
			</div>
			<div
				style={{
					textAlign: "center",
					fontSize: "12px",
					color: "#6b8e23",
					marginBottom: "20px",
				}}
			>
				Question {currentQuestion + 1} of {questions.length}
			</div>
			<h2
				style={{
					fontSize: "clamp(18px, 4vw, 22px)",
					textAlign: "center",
					marginBottom: "25px",
					color: "#2d5016",
					fontWeight: "bold",
					lineHeight: "1.4",
				}}
			>
				{currentQ.question}
			</h2>
			{currentQ.type === "choice" ? (
				<div style={{ marginBottom: "25px" }}>
					{currentQ.options.map((option, index) => (
						<button
							key={index}
							onClick={() => handleChoiceAnswer(option)}
							style={{
								display: "block",
								width: "100%",
								padding: "12px 15px",
								margin: "8px 0",
								border:
									currentAnswer === option
										? "2px solid #4a7c59"
										: "1px solid rgba(74, 124, 89, 0.3)",
								borderRadius: "12px",
								background:
									currentAnswer === option
										? "rgba(74, 124, 89, 0.1)"
										: "rgba(255, 255, 255, 0.7)",
								fontSize: "14px",
								cursor: "pointer",
								transition: "all 0.3s ease",
								textAlign: "left",
								color: "#2d5016",
							}}
							onMouseOver={(e) => {
								if (currentAnswer !== option) {
									e.target.style.background =
										"rgba(74, 124, 89, 0.05)";
									e.target.style.transform =
										"translateX(3px)";
								}
							}}
							onMouseOut={(e) => {
								if (currentAnswer !== option) {
									e.target.style.background =
										"rgba(255, 255, 255, 0.7)";
									e.target.style.transform = "translateX(0)";
								}
							}}
						>
							{option}
						</button>
					))}
				</div>
			) : (
				<div
					style={{
						marginBottom: "25px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<textarea
						value={currentAnswer || ""}
						onChange={(e) => handleTextAnswer(e.target.value)}
						onFocus={() => setIsTyping(true)}
						onBlur={() => setIsTyping(false)}
						placeholder={currentQ.placeholder}
						style={{
							width: "100%",
							maxWidth: "400px",
							minHeight: "120px",
							padding: "18px",
							border: "2px solid rgba(74, 124, 89, 0.3)",
							borderRadius: "15px",
							fontSize: "15px",
							resize: "vertical",
							outline: "none",
							background: "rgba(255, 255, 255, 0.8)",
							color: "#2d5016",
							fontFamily: "inherit",
							transition:
								"all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							textAlign: "center",
							boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
						}}
						onFocusCapture={(e) => {
							e.target.style.border = "2px solid #4a7c59";
							e.target.style.transform = "scale(1.03)";
							e.target.style.boxShadow =
								"0 8px 30px rgba(74, 124, 89, 0.2)";
						}}
						onBlurCapture={(e) => {
							e.target.style.border =
								"2px solid rgba(74, 124, 89, 0.3)";
							e.target.style.transform = "scale(1)";
							e.target.style.boxShadow =
								"0 4px 15px rgba(0, 0, 0, 0.05)";
						}}
					/>
				</div>
			)}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "12px",
				}}
			>
				<button
					onClick={prevQuestion}
					disabled={currentQuestion === 0}
					style={{
						background:
							currentQuestion === 0
								? "rgba(74, 124, 89, 0.3)"
								: "linear-gradient(45deg, #6b8e23, #8fbc8f)",
						border: "none",
						borderRadius: "15px",
						padding: "10px 20px",
						fontSize: "14px",
						fontWeight: "bold",
						color: "white",
						cursor:
							currentQuestion === 0 ? "not-allowed" : "pointer",
						transition: "all 0.3s ease",
						opacity: currentQuestion === 0 ? 0.5 : 1,
					}}
					onMouseOver={(e) => {
						if (currentQuestion !== 0) {
							e.target.style.transform = "scale(1.05)";
						}
					}}
					onMouseOut={(e) => {
						if (currentQuestion !== 0) {
							e.target.style.transform = "scale(1)";
						}
					}}
				>
					🌿 Previous
				</button>
				<button
					onClick={nextQuestion}
					disabled={!currentAnswer}
					style={{
						background: !currentAnswer
							? "rgba(74, 124, 89, 0.3)"
							: "linear-gradient(45deg, #4a7c59, #6b8e23)",
						border: "none",
						borderRadius: "15px",
						padding: "10px 20px",
						fontSize: "14px",
						fontWeight: "bold",
						color: "white",
						cursor: !currentAnswer ? "not-allowed" : "pointer",
						transition: "all 0.3s ease",
						opacity: !currentAnswer ? 0.5 : 1,
					}}
					onMouseOver={(e) => {
						if (currentAnswer) {
							e.target.style.transform = "scale(1.05)";
						}
					}}
					onMouseOut={(e) => {
						if (currentAnswer) {
							e.target.style.transform = "scale(1)";
						}
					}}
				>
					{currentQuestion === questions.length - 1
						? "🌸 Finish"
						: "💚 Next"}
				</button>
			</div>
		</div>
	);
}
