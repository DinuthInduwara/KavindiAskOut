"use client";
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
} from "react";

const ButterflyContext = createContext();

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: -100, y: -100 });
	const [isHovering, setIsHovering] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const move = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });

			const tag = e.target?.tagName;
			const isInteractive =
				[
					"BUTTON",
					"A",
					"INPUT",
					"TEXTAREA",
					"SELECT",
					"LABEL",
				].includes(tag) ||
				e.target?.closest(
					'button, a, [role="button"], [data-cursor-pointer]'
				);
			setIsHovering(isInteractive);
		};

		const handleMouseEnter = () => setIsVisible(true);
		const handleMouseLeave = () => setIsVisible(false);

		window.addEventListener("mousemove", move);
		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mousemove", move);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className={`fixed z-[9999] pointer-events-none select-none transition-all duration-200 ease-out will-change-transform
        ${isHovering ? "scale-150 " : "scale-125"}`}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
				transform: "translate(-50%, -50%)",
				filter: isHovering
					? "drop-shadow(0 0 4px rgba(255, 105, 180, 0.8))"
					: "none",
			}}
		>
			<span className="block text-xl transition-transform duration-200">
				{isHovering ? "💖" : "🌸"}
			</span>
		</div>
	);
};

export function ButterflyProvider({ children }) {
	const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		const handleMouseMove = (e) => {
			setCursorPos({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<ButterflyContext.Provider value={{ cursorPos }}>
			<CustomCursor />
			{children}
			{/* Cursor Following Butterflies */}
			<div
				className="absolute text-2xl pointer-events-none butterfly-follower  z-[99999] cursor-butterfly"
				style={{
					left: `${cursorPos.x - 50}px`,
					top: `${cursorPos.y - 50}px`,
					transition: "all 2s ease-out",
				}}
			>
				🦋
			</div>

			<div
				className="absolute text-xl pointer-events-none  z-[99999] butterfly-follower cursor-butterfly"
				style={{
					left: `${cursorPos.x - 80}px`,
					top: `${cursorPos.y - 30}px`,
					transition: "all 3s ease-out",
				}}
			>
				🦋
			</div>
		</ButterflyContext.Provider>
	);
}

export function useButterfly() {
	return useContext(ButterflyContext);
}
