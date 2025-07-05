"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ 
  isPlaying = false, 
  onTogglePlay = () => {}, 
  position = 'bottom-right',
  size = 'normal' 
}) {
  const [currentIsPlaying, setCurrentIsPlaying] = React.useState(isPlaying);
  const [showVolumeControl, setShowVolumeControl] = React.useState(false);
  const [volume, setVolume] = React.useState(0.7);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    setCurrentIsPlaying(isPlaying);
  }, [isPlaying]);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTogglePlay = () => {
    const newPlayState = !currentIsPlaying;
    setCurrentIsPlaying(newPlayState);
    
    if (audioRef.current) {
      if (newPlayState) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
    
    onTogglePlay(newPlayState);
  };

  const getPositionStyles = () => {
    const baseSize = size === 'small' ? 60 : size === 'large' ? 90 : 75;
    
    switch (position) {
      case 'top-left':
        return { top: '20px', left: '20px' };
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'bottom-right':
      default:
        return { bottom: '20px', right: '20px' };
    }
  };

  const playerSize = size === 'small' ? 60 : size === 'large' ? 90 : 75;
  const iconSize = size === 'small' ? '20px' : size === 'large' ? '32px' : '26px';

  return (
    <div
      style={{
        position: 'fixed',
        ...getPositionStyles(),
        zIndex: 1000,
        display: 'inline-block',
      }}
    >
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
      </audio>

      {/* Floating hearts animation */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      >
        {[...Array.from({length: 3})].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${i * 15 - 15}px`,
              fontSize: '16px',
              opacity: currentIsPlaying ? 0.8 : 0,
              animation: currentIsPlaying ? `floatUp 2s ease-in-out infinite ${i * 0.5}s` : 'none',
              transition: 'opacity 0.3s ease',
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Music notes animation */}
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-20px',
          pointerEvents: 'none',
        }}
      >
        {[...Array.from({length: 2})].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              right: `${i * 20}px`,
              fontSize: '14px',
              opacity: currentIsPlaying ? 0.7 : 0,
              animation: currentIsPlaying ? `musicFloat 1.5s ease-in-out infinite ${i * 0.3}s` : 'none',
              transition: 'opacity 0.3s ease',
            }}
          >
            {i % 2 === 0 ? '♪' : '♫'}
          </div>
        ))}
      </div>

      {/* Volume control */}
      {showVolumeControl && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            right: '0',
            marginBottom: '10px',
            background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.95), rgba(255, 240, 245, 0.95))',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '15px',
            boxShadow: '0 8px 25px rgba(255, 105, 180, 0.3)',
            border: '1px solid rgba(255, 182, 193, 0.3)',
            minWidth: '120px',
          }}
        >
          <div style={{ fontSize: '12px', color: '#e91e63', marginBottom: '8px', textAlign: 'center' }}>
            Volume
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            style={{
              width: '100%',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(to right, #ff69b4, #ffb6c1)',
              outline: 'none',
              cursor: 'pointer',
            }}
          />
        </div>
      )}

      {/* Main player button */}
      <div
        onClick={handleTogglePlay}
        onMouseEnter={() => setShowVolumeControl(true)}
        onMouseLeave={() => setShowVolumeControl(false)}
        style={{
          width: `${playerSize}px`,
          height: `${playerSize}px`,
          borderRadius: '50%',
          background: currentIsPlaying 
            ? 'linear-gradient(135deg, #ff69b4, #ff1493, #e91e63)'
            : 'linear-gradient(135deg, #ffb6c1, #ff69b4, #f06292)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: currentIsPlaying 
            ? '0 8px 25px rgba(255, 20, 147, 0.4), 0 0 20px rgba(255, 105, 180, 0.3)'
            : '0 6px 20px rgba(255, 105, 180, 0.3)',
          transition: 'all 0.3s ease',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          animation: currentIsPlaying ? 'pulse 2s ease-in-out infinite' : 'none',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = currentIsPlaying 
            ? '0 12px 35px rgba(255, 20, 147, 0.5), 0 0 25px rgba(255, 105, 180, 0.4)'
            : '0 10px 30px rgba(255, 105, 180, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = currentIsPlaying 
            ? '0 8px 25px rgba(255, 20, 147, 0.4), 0 0 20px rgba(255, 105, 180, 0.3)'
            : '0 6px 20px rgba(255, 105, 180, 0.3)';
        }}
      >
        <div
          style={{
            fontSize: iconSize,
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            transform: currentIsPlaying ? 'none' : 'translateX(2px)',
            transition: 'transform 0.2s ease',
          }}
        >
          {currentIsPlaying ? '⏸️' : '▶️'}
        </div>
      </div>

      {/* Ripple effect when playing */}
      {currentIsPlaying && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${playerSize + 20}px`,
            height: `${playerSize + 20}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255, 105, 180, 0.3)',
            animation: 'ripple 2s ease-out infinite',
            pointerEvents: 'none',
          }}
        />
      )}

      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px);
            opacity: 0;
          }
        }
        
        @keyframes musicFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) rotate(10deg);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 8px 25px rgba(255, 20, 147, 0.4), 0 0 20px rgba(255, 105, 180, 0.3);
          }
          50% {
            box-shadow: 0 8px 25px rgba(255, 20, 147, 0.6), 0 0 30px rgba(255, 105, 180, 0.5);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function StoryComponent() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div style={{ padding: '20px', minHeight: '100vh', position: 'relative' }}>
      <h2 style={{ color: '#e91e63', marginBottom: '30px' }}>Charm Music Player Variants</h2>
      
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#666', marginBottom: '20px' }}>Default (Bottom Right)</h3>
        <MainComponent 
          isPlaying={isPlaying}
          onTogglePlay={setIsPlaying}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#666', marginBottom: '20px' }}>Small Size (Top Left)</h3>
        <MainComponent 
          isPlaying={false}
          position="top-left"
          size="small"
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#666', marginBottom: '20px' }}>Large Size (Top Right)</h3>
        <MainComponent 
          isPlaying={true}
          position="top-right"
          size="large"
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#666', marginBottom: '20px' }}>Bottom Left Position</h3>
        <MainComponent 
          isPlaying={false}
          position="bottom-left"
        />
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #ffeef8, #fff0f5)', 
        padding: '20px', 
        borderRadius: '15px',
        marginTop: '40px'
      }}>
        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          💕 This floating music player features beautiful animations with floating hearts and music notes when playing.
          <br />
          🎵 Hover over the player to see the volume control.
          <br />
          ✨ The player remembers its state and can be positioned in any corner of the screen.
          <br />
          🌸 Perfect for adding romantic background music to your garden-themed pages!
        </p>
      </div>
    </div>
  );
});
}