/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			keyframes: {
				bounceMagical: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-12px)" },
				},
			},
			animation: {
				bounceMagical: "bounceMagical 2.5s ease-in-out infinite",
			},
		},
	},
};
