"use client";
import { useRouter } from "next/navigation";
import React from "react";

function MainComponent() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [isComplete, setIsComplete] = React.useState(false);
  const [showTransition, setShowTransition] = React.useState(false);

  const router = useRouter();
  // Rainy Blurry Butterfly Transition Component
  const RainyButterflyTransition = () => (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {/* Heavy rain drops */}
      {[...Array.from({ length: 80 })].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: "-10px",
            width: "3px",
            height: `${Math.random() * 25 + 15}px`,
            background:
              "linear-gradient(180deg, transparent, rgba(135, 206, 235, 0.7), transparent)",
            borderRadius: "50px",
            animation: `heavyRain ${2 + Math.random() * 1.5}s linear infinite ${
              Math.random() * 2
            }s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Blurry butterfly trails */}
      {[...Array.from({ length: 12 })].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `blurryButterflyTrail ${
              4 + Math.random() * 2
            }s ease-in-out infinite ${Math.random() * 2}s`,
          }}
        >
          <div
            style={{
              fontSize: "28px",
              filter: "blur(1px)",
              textShadow: "0 0 10px rgba(255, 182, 193, 0.8)",
            }}
          >
            🦋
          </div>
          {/* Long blurry trail */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "60px",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, rgba(255, 182, 193, 0.6), rgba(173, 216, 230, 0.4), transparent)",
              transform: "translate(-50%, -50%)",
              animation: `blurryTrail 3s ease-in-out infinite ${Math.random()}s`,
              filter: "blur(2px)",
            }}
          />
        </div>
      ))}

      {/* Rain mist with blur */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(135, 206, 235, 0.2) 0%, rgba(173, 216, 230, 0.1) 50%, transparent 100%)",
          animation: "mistFlow 3s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />

      {/* Water ripples with blur effect */}
      {[...Array.from({ length: 15 })].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: "25px",
            height: "25px",
            border: "2px solid rgba(135, 206, 235, 0.4)",
            borderRadius: "50%",
            animation: `blurryRipple ${2 + Math.random()}s ease-out infinite ${
              Math.random() * 3
            }s`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );

  // Sample questions - you can customize these
  const questions = [
    {
      id: 1,
      type: "choice",
      question: "What's your favorite way to spend time together?",
      options: [
        "🌅 Watching sunrise/sunset",
        "🎬 Movie nights at home",
        "🚶‍♀️ Long walks together",
        "🍽️ Cooking together",
      ],
    },
    {
      id: 2,
      type: "text",
      question: "What makes you smile the most about us?",
      placeholder: "Tell me what makes your heart happy...",
    },
    {
      id: 3,
      type: "choice",
      question: "Which season represents our love best?",
      options: [
        "🌸 Spring - Fresh and blooming",
        "☀️ Summer - Warm and bright",
        "🍂 Autumn - Cozy and golden",
        "❄️ Winter - Magical and peaceful",
      ],
    },
    {
      id: 4,
      type: "text",
      question: "What's your favorite memory of us?",
      placeholder: "Share that special moment...",
    },
    {
      id: 5,
      type: "choice",
      question: "What's our perfect date?",
      options: [
        "🌙 Stargazing under the night sky",
        "🏖️ Beach picnic at sunset",
        "🎨 Art gallery and coffee",
        "🏔️ Mountain hiking adventure",
      ],
    },
  ];

  const handleChoiceAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleTextAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleBackToLoveStory = () => {
    setShowTransition(true);
    // After 4 seconds of beautiful transition, redirect to Love Question Prompt
    setTimeout(() => {
      router.push("/");

    }, 4000);
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  // Transition screen with rainy blurry butterfly trails
  if (showTransition) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 25%, #E0F6FF 50%, #F0F8FF 75%, #E6F3FF 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          transition: "background 2s ease",
        }}
      >
        <RainyButterflyTransition />

        <div
          style={{
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: "30px",
            padding: "50px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            border: "3px solid rgba(135, 206, 235, 0.5)",
            zIndex: 10,
            animation: "transitionGlow 2s ease-in-out infinite alternate",
            filter: "blur(0.5px)",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
              animation: "bounce 1.5s ease-in-out infinite",
              filter: "blur(0.5px)",
            }}
          >
            🌧️🦋💕
          </div>
          <h1
            style={{
              fontSize: "36px",
              background: "linear-gradient(45deg, #4682B4, #87CEEB, #B0E0E6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
              fontWeight: "bold",
              filter: "blur(0.3px)",
            }}
          >
            Floating through the rain... 🌧️
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "20px",
              filter: "blur(0.2px)",
            }}
          >
            Butterflies are leading us to love... 🦋💕
          </p>
          <div style={{ fontSize: "24px", filter: "blur(0.3px)" }}>
            🌧️ 🦋 💕 🌧️ 🦋
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, #ffeef8 0%, #e8f5e8 25%, #fff0f5 50%, #f0fff0 75%, #fef7ff 100%)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Floating decorations */}
			{[
				"💕",
				"🌸",
				"💚",
				"🌿",
				"💖",
				"🌺",
				"💘",
				"🌼",
				"💗",
				"🍃",
				"💓",
				"🌷",
				"💞",
				"🍀",
				"🩷",
				"🌹",
				"💐",
				"🦋",
				"💌",
				"🌻",
				"💟",
				"🍓",
				"💝",
				"🌙",
				"🎀",
				"🌾",
				"🌤️",
				"✨",
				"🌈",
		
			].map((emoji, index) => (
				<div
					key={index}
					style={{
						position: "absolute",
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						fontSize: `${Math.random() * 20 + 15}px`,
						opacity: 0.3,
						animation: `float ${
							3 + Math.random() * 2
						}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 3}s`,
						pointerEvents: "none",
					}}
				>
					{emoji}
				</div>
			))}

			<div
				style={{
					textAlign: "center",
					background: "rgba(255, 255, 255, 0.9)",
					borderRadius: "30px",
					padding: "50px",
					boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
					border: "3px solid rgba(255, 182, 193, 0.3)",
					maxWidth: "600px",
				}}
			>
				<div style={{ fontSize: "60px", marginBottom: "20px" }}>
					💕✨
				</div>
				<h1
					style={{
						fontSize: "36px",
						background:
							"linear-gradient(45deg, #e91e63, #4caf50, #ff69b4)",
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						color: "transparent",
						marginBottom: "30px",
						fontWeight: "bold",
					}}
				>
					Thank You My Love! 💖
				</h1>
				<p
					style={{
						fontSize: "18px",
						color: "#666",
						marginBottom: "30px",
					}}
				>
					Your answers mean the world to me! 🌸
				</p>
				<button
					onClick={handleBackToLoveStory}
					style={{
						background: "linear-gradient(45deg, #e91e63, #4caf50)",
						border: "none",
						borderRadius: "25px",
						padding: "15px 30px",
						fontSize: "18px",
						fontWeight: "bold",
						color: "white",
						cursor: "pointer",
						boxShadow: "0 8px 20px rgba(233, 30, 99, 0.3)",
						transition: "all 0.3s ease",
					}}
					onMouseOver={(e) =>
						(e.target.style.transform = "scale(1.05)")
					}
					onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
				>
					💕 Back to Love Story 💕
				</button>
			</div>
		</div>
	);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ffeef8 0%, #e8f5e8 25%, #fff0f5 50%, #f0fff0 75%, #fef7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating decorations */}
      {["💕", "🌸", "💚", "🌿", "💖", "🌺", "🦋", "🌷", "💗", "🍃"].map(
        (emoji, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
              opacity: 0.2,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              pointerEvents: "none",
            }}
          >
            {emoji}
          </div>
        )
      )}

      {/* Main Quiz Card */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "25px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          border: "3px solid rgba(255, 182, 193, 0.3)",
          maxWidth: "600px",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Progress Bar */}
        <div
          style={{
            background: "rgba(255, 182, 193, 0.2)",
            borderRadius: "10px",
            height: "8px",
            marginBottom: "30px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "linear-gradient(45deg, #e91e63, #4caf50)",
              height: "100%",
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              borderRadius: "10px",
              transition: "width 0.5s ease",
            }}
          />
        </div>

        {/* Question Counter */}
        <div
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#888",
            marginBottom: "20px",
          }}
        >
          Question {currentQuestion + 1} of {questions.length}
        </div>

        {/* Question */}
        <h2
          style={{
            fontSize: "clamp(20px, 5vw, 28px)",
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "1.4",
          }}
        >
          {currentQ.question}
        </h2>

        {/* Answer Options */}
        {currentQ.type === "choice" ? (
          <div style={{ marginBottom: "30px" }}>
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleChoiceAnswer(option)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "15px 20px",
                  margin: "10px 0",
                  border:
                    currentAnswer === option
                      ? "3px solid #e91e63"
                      : "2px solid rgba(255, 182, 193, 0.3)",
                  borderRadius: "15px",
                  background:
                    currentAnswer === option
                      ? "linear-gradient(45deg, rgba(233, 30, 99, 0.1), rgba(76, 175, 80, 0.1))"
                      : "rgba(255, 255, 255, 0.8)",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "left",
                  color: "#333",
                }}
                onMouseOver={(e) => {
                  if (currentAnswer !== option) {
                    e.target.style.background = "rgba(255, 182, 193, 0.1)";
                    e.target.style.transform = "translateX(5px)";
                  }
                }}
                onMouseOut={(e) => {
                  if (currentAnswer !== option) {
                    e.target.style.background = "rgba(255, 255, 255, 0.8)";
                    e.target.style.transform = "translateX(0)";
                  }
                }}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div style={{ marginBottom: "30px" }}>
            <textarea
              value={currentAnswer || ""}
              onChange={(e) => handleTextAnswer(e.target.value)}
              placeholder={currentQ.placeholder}
              style={{
                width: "100%",
                minHeight: "120px",
                padding: "20px",
                border: "2px solid rgba(255, 182, 193, 0.3)",
                borderRadius: "15px",
                fontSize: "16px",
                resize: "vertical",
                outline: "none",
                background: "rgba(255, 255, 255, 0.9)",
                color: "#333",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.border = "3px solid #e91e63")}
              onBlur={(e) =>
                (e.target.style.border = "2px solid rgba(255, 182, 193, 0.3)")
              }
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            style={{
              background:
                currentQuestion === 0
                  ? "#ccc"
                  : "linear-gradient(45deg, #4caf50, #81c784)",
              border: "none",
              borderRadius: "20px",
              padding: "12px 25px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              cursor: currentQuestion === 0 ? "not-allowed" : "pointer",
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
            💚 Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={!currentAnswer}
            style={{
              background: !currentAnswer
                ? "#ccc"
                : "linear-gradient(45deg, #e91e63, #f06292)",
              border: "none",
              borderRadius: "20px",
              padding: "12px 25px",
              fontSize: "16px",
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
            {currentQuestion === questions.length - 1 ? "💕 Finish" : "💖 Next"}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
          }
        }
        
        @keyframes heavyRain {
          0% { 
            top: -10px;
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% { 
            top: 100vh;
            opacity: 0;
          }
        }
        
        @keyframes blurryButterflyTrail {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          25% { 
            transform: translateX(40px) translateY(-30px) rotate(15deg);
            opacity: 1;
          }
          50% { 
            transform: translateX(80px) translateY(-15px) rotate(-10deg);
            opacity: 0.8;
          }
          75% { 
            transform: translateX(120px) translateY(-40px) rotate(20deg);
            opacity: 1;
          }
        }
        
        @keyframes blurryTrail {
          0%, 100% { 
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
          }
          50% { 
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2) rotate(10deg);
          }
        }
        
        @keyframes blurryRipple {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          100% {
            transform: scale(5);
            opacity: 0;
          }
        }
        
        @keyframes mistFlow {
          0%, 100% { 
            opacity: 0.2;
          }
          50% { 
            opacity: 0.4;
          }
        }
        
        @keyframes transitionGlow {
          0% { 
            box-shadow: 0 20px 40px rgba(135, 206, 235, 0.3);
          }
          100% { 
            box-shadow: 0 20px 40px rgba(135, 206, 235, 0.6);
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            transform: scale(1.1) rotate(5deg); 
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;