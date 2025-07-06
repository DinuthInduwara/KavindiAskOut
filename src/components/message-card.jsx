"use client";
import React from "react";
import { useMusicPlayer } from "../context/MusicPlayerContext";
export default function MessageBox({
	title = "You Looks Amazing Today 💕🤗!",
	message = 'Heyyy ❤️…<br><br>Just a gentle reminder: මෙතන තියන <b>කිසිම දෙයක් AI Generated දේවල් <span style="color:red">නෙවෙයි</span></b> — except a few tiny CSS styles and some English grammar quirks 🥴.<br><br>මේ හැමදේම හදන එක අමාරු වුණා,මම තනියම හැමදේම කරපු නිසා  but I poured my heart into every bit… just for you 🌸✨.<br><br>මෙතන තියන හැමදේම click කරලා බලන්න හරිද , because every little part carries a piece of me 💖.<br><br><span style="color:#ff69b4"><b>Note:</b> හැමදේම හරියටම බලන්න බැරිවෙයි phone එකෙන් 😔. Try to use a laptop or a bigger display for the full experience! 💻🌈</span><br><br><i>"I may not be cute… but I poured my heart into this little web app 💻💞 I hope it feels a little cute to Youuuu 🥺🌷"</i><br><br>Stay magical, keep shining bright<b> like you always do! ✨🌟</b>',
}) {
	const [showFlashCard, setShowFlashCard] = React.useState(true);
	const { setIsPlaying, audioRef } = useMusicPlayer();

	const handleOkClick = () => {
		setShowFlashCard(false);
		handlePlayMusic();
	};

	const handleNoClick = () => {
		setShowFlashCard(false);
		handlePlayMusic();
	};
	const handlePlayMusic = () => {
		if (audioRef.current) {
			audioRef.current
				.play()
				.then(() => {
					setIsPlaying(true);
				})
				.catch((error) => {
					console.error("Error playing audio:", error);
				});
		}
	};

	if (showFlashCard) {
		return (
			<div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen p-4 bg-black bg-opacity-50">
				<div className="w-full max-w-md p-8 mx-4 transition-all transform bg-white shadow-2xl rounded-xl max-h-[90vh] overflow-y-auto">
					<div className="text-center">
						<div className="mb-6">
							<div className="mb-4 text-6xl">💝</div>
							<h2 className="mb-3 text-2xl font-bold text-gray-800">
								{title}
							</h2>
							<p className="text-lg leading-relaxed text-gray-600">
								<span
									dangerouslySetInnerHTML={{
										__html: message,
									}}
								/>
							</p>
						</div>

						<div className="flex justify-center gap-4">
							<button
								onClick={handleOkClick}
								className="px-8 py-3 font-medium text-white transition-colors bg-green-500 rounded-lg shadow-md hover:bg-green-600"
							>
								OK
							</button>
							{/* <button
								onClick={handleNoClick}
								className="px-8 py-3 font-medium text-white transition-colors bg-red-500 rounded-lg shadow-md hover:bg-red-600"
							>
								No
							</button> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
	return null;
}