import { Inter } from "next/font/google";
import "./globals.css";
import { MusicPlayerProvider } from "../context/MusicPlayerContext";
import GlobalMusicPlayer from "../components/global-music-player";
import MessageBox from "../components/message-card";
import { ButterflyProvider } from "../context/ButterflyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "For Kavindi Manika ❤️",
	icons: {
		icon: "/favicon.png",
		apple: "/favicon.png",
	},
	description:
		"A beautifully crafted tribute to Kavindi – a girl whose smile lights up the skies. This heartfelt website is filled with memories, poetic moments, and dreams written in pixels. Explore the magic woven just for her",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MusicPlayerProvider>
					<ButterflyProvider>
						<MessageBox title="I have something to say 🤗" />
						<MessageBox message="HI, Im Going TO Play Some Music, Is That Ok ?" />
						<GlobalMusicPlayer />
						{children}
					</ButterflyProvider>
				</MusicPlayerProvider>
			</body>
		</html>
	);
}
