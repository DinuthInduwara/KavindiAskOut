'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useMouse } from '@react-hook/mouse-position';

export default function LakeScene() {
	const containerRef = useRef(null);
	const mouse = useMouse(containerRef, { enterDelay: 100, leaveDelay: 100 });
	const [ripple, setRipple] = useState(null);

	// Spring animations for smooth cursor tracking
	const mouseX = useSpring(0, { stiffness: 75, damping: 15 });
	const mouseY = useSpring(0, { stiffness: 75, damping: 15 });

	// Update spring values based on mouse position
	useEffect(() => {
		if (mouse.clientX && mouse.clientY) {
			mouseX.set(mouse.clientX);
			mouseY.set(mouse.clientY);
		}
	}, [mouse.clientX, mouse.clientY, mouseX, mouseY]);

	// Parallax and shimmer transforms
	const skyParallaxX = useTransform(mouseX, [0, 1920], [-50, 50]);
	const skyParallaxY = useTransform(mouseY, [0, 1080], [-20, 20]);
	const waterParallaxX = useTransform(mouseX, [0, 1920], [-30, 30]);
	const waterParallaxY = useTransform(mouseY, [0, 1080], [-10, 10]);
	const lightIntensity = useTransform(mouseY, [0, 1080], [0.3, 0.7]);

	// Handle ripple on click
	const handleClick = () => {
		if (mouse.clientX && mouse.clientY) {
			setRipple({ x: mouse.clientX, y: mouse.clientY, time: Date.now() });
			setTimeout(() => setRipple(null), 1000); // Clear ripple after animation
		}
	};

	return (
		<div
			ref={containerRef}
			className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-black"
			onClick={handleClick}
		>
			{/* Sky Gradient Layer */}
			<motion.div
				className="absolute inset-0"
				style={{
					background: 'linear-gradient(to bottom, #1e3a8a, #7c3aed, #f59e0b)',
					translateX: skyParallaxX,
					translateY: skyParallaxY,
					zIndex: 1,
				}}
				animate={{
					background: [
						'linear-gradient(to bottom, #1e3a8a, #7c3aed, #f59e0b)',
						'linear-gradient(to bottom, #2c5282, #9f7aea, #d97706)',
						'linear-gradient(to bottom, #1e3a8a, #7c3aed, #f59e0b)',
					],
					transition: { duration: 10, repeat: Infinity, ease: 'linear' },
				}}
			>
				{/* Mist/Fog Layer */}
				<motion.div
					className="absolute inset-0"
					style={{
						background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
						opacity: 0.3,
					}}
					animate={{
						translateY: [0, -20, 0],
						opacity: [0.2, 0.4, 0.2],
						transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
					}}
				/>
			</motion.div>

			{/* Ground/Edge Layer */}
			<div
				className="absolute bottom-0 w-full h-1/4"
				style={{
					background: 'linear-gradient(to top, #1c1917, transparent)',
					zIndex: 2,
				}}
			>
				<div
					className="absolute inset-0"
					style={{
						background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
						filter: 'blur(10px)',
					}}
				/>
			</div>

			{/* Water Reflection Layer */}
			<motion.div
				className="absolute bottom-0 w-full h-1/2"
				style={{
					background: 'linear-gradient(to top, #1e3a8a, #7c3aed, rgba(245,158,11,0.3))',
					opacity: 0.6,
					translateX: waterParallaxX,
					translateY: waterParallaxY,
					zIndex: 3,
				}}
				animate={{
					background: [
						'linear-gradient(to top, #1e3a8a, #7c3aed, rgba(245,158,11,0.3))',
						'linear-gradient(to top, #2c5282, #9f7aea, rgba(217,119,6,0.3))',
						'linear-gradient(to top, #1e3a8a, #7c3aed, rgba(245,158,11,0.3))',
					],
					transition: { duration: 10, repeat: Infinity, ease: 'linear' },
				}}
			>
				{/* Water Shimmer */}
				<motion.div
					className="absolute inset-0"
					style={{
						background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
						mixBlendMode: 'soft-light',
						opacity: lightIntensity,
					}}
					animate={{
						scale: [1, 1.05, 1],
						transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
					}}
				/>
			</motion.div>

			{/* Cursor Light Effect */}
			<motion.div
				className="absolute w-96 h-96"
				style={{
					background: 'radial-gradient(circle, rgba(255,245,235,0.3) 0%, rgba(255,245,235,0) 70%)',
					mixBlendMode: 'soft-light',
					x: mouseX,
					y: mouseY,
					zIndex: 4,
				}}
			/>

			{/* Ripple Effect on Click */}
			{ripple && (
				<motion.div
					className="absolute w-20 h-20 rounded-full"
					style={{
						background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
						x: ripple.x - 40,
						y: ripple.y - 40,
						zIndex: 5,
					}}
					animate={{
						scale: [0, 3],
						opacity: [0.5, 0],
						transition: { duration: 1, ease: 'easeOut' },
					}}
				/>
			)}
		</div>
	);
}