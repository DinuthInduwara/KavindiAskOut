import { useEffect, useState } from "react";

export default function LoadingPage({progress, setProgress}) {
  const [currentEmoji, setCurrentEmoji] = useState(0);

  const emojiSequence = ["🌸", "🌺", "🌻"];
  const emojiLabels = [
    "Planting love seeds...",
    "Blooming with care...",
    "Garden of love ready...",
  ];

  useEffect(() => {
    // Emoji animation cycle
    const emojiInterval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojiSequence.length);
    }, 2000);

    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 100);

    return () => {
      clearInterval(emojiInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 25%, #fef7f0 50%, #fdf2f8 75%, #ffffff 100%)",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Gentle floating garden elements background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Romantic garden emojis */}
        <div className="absolute text-4xl top-20 left-10 opacity-40 floating-1">
          🌹
        </div>
        <div className="absolute text-3xl opacity-50 top-40 right-20 floating-2">
          🦋
        </div>
        <div className="absolute text-5xl bottom-32 left-16 opacity-35 floating-3">
          🌸
        </div>
        <div className="absolute text-3xl bottom-20 right-12 opacity-45 floating-4">
          💕
        </div>
        <div className="absolute text-4xl top-60 left-1/4 opacity-40 floating-5">
          🌺
        </div>
        <div className="absolute text-3xl opacity-50 top-80 right-1/3 floating-6">
          🌿
        </div>
        <div className="absolute text-3xl top-32 left-1/2 opacity-45 floating-7">
          🍃
        </div>
        <div className="absolute text-4xl bottom-40 right-1/4 opacity-40 floating-8">
          🌷
        </div>

        {/* Soft particles */}
        <div className="absolute w-3 h-3 bg-pink-200 rounded-full top-10 left-1/3 opacity-60 particle-1"></div>
        <div className="absolute w-4 h-4 bg-green-200 rounded-full opacity-50 top-32 right-1/4 particle-2"></div>
        <div className="absolute w-2 h-2 rounded-full bottom-40 left-1/2 bg-rose-200 opacity-70 particle-3"></div>
        <div className="absolute w-3 h-3 rounded-full bottom-60 right-1/5 bg-emerald-200 opacity-60 particle-4"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Animated emoji */}
        <div className="mb-8">
          <div
            className="transition-all duration-500 ease-out text-8xl md:text-9xl"
            style={{
              transform: "translateY(0px)",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
          >
            {emojiSequence[currentEmoji]}
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <h1
            className="mb-2 text-2xl font-medium text-gray-800 md:text-3xl"
            style={{ fontWeight: 500 }}
          >
            Growing Love Garden
          </h1>
          <p
            className="text-lg text-gray-600 transition-all duration-300"
            style={{ fontWeight: 400 }}
          >
            {emojiLabels[currentEmoji]}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="w-64 mx-auto md:w-80">
          <div className="h-2 overflow-hidden bg-white bg-opacity-50 rounded-full shadow-inner">
            <div
              className="h-full transition-all duration-300 ease-out rounded-full bg-gradient-to-r from-pink-300 via-rose-400 to-green-400"
              style={{
                width: `${Math.min(progress, 100)}%`,
                boxShadow: "0 0 8px rgba(244, 114, 182, 0.3)",
              }}
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-500">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>
      </div>

      {/* Gentle floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes floatGentle1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes floatGentle2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        
        @keyframes floatGentle3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        
        @keyframes floatGentle4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-5deg); }
        }
        
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-25px) scale(1.2); 
            opacity: 0.8; 
          }
        }
        
        .text-8xl, .text-9xl {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-1 { animation: floatGentle1 4s ease-in-out infinite; }
        .floating-2 { animation: floatGentle2 5s ease-in-out infinite 0.5s; }
        .floating-3 { animation: floatGentle3 4.5s ease-in-out infinite 1s; }
        .floating-4 { animation: floatGentle4 3.8s ease-in-out infinite 1.5s; }
        .floating-5 { animation: floatGentle1 4.2s ease-in-out infinite 2s; }
        .floating-6 { animation: floatGentle2 5.2s ease-in-out infinite 0.8s; }
        .floating-7 { animation: floatGentle3 3.6s ease-in-out infinite 2.5s; }
        .floating-8 { animation: floatGentle4 4.8s ease-in-out infinite 1.2s; }
        
        .particle-1 { animation: particleFloat 6s ease-in-out infinite; }
        .particle-2 { animation: particleFloat 5s ease-in-out infinite 2s; }
        .particle-3 { animation: particleFloat 7s ease-in-out infinite 4s; }
        .particle-4 { animation: particleFloat 5.5s ease-in-out infinite 1s; }
        
        @media (prefers-reduced-motion: reduce) {
          .text-8xl, .text-9xl,
          .floating-1, .floating-2, .floating-3, .floating-4,
          .floating-5, .floating-6, .floating-7, .floating-8,
          .particle-1, .particle-2, .particle-3, .particle-4 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
