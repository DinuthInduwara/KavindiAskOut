'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface SunMoonDecorationProps {
  mode?: 'sun' | 'moon';
}

interface ParticleConfig {
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export default function SunMoonDecoration({ mode = 'sun' }: SunMoonDecorationProps) {
  const isSun = mode === 'sun';
  
  const particleConfigs = React.useMemo<ParticleConfig[]>(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      top: 50 + Math.random() * 40,
      left: 20 + Math.random() * 50,
      duration: 3 + Math.random() * 2,
      delay: i * 0.4,
    }));
  }, []);
  
  const coreGradient = isSun
    ? 'radial-gradient(circle, #FFD966 0%, #FFF2B2 50%, #FFE082 100%)'
    : 'radial-gradient(circle, #E0E7FF 0%, #C7D2FE 50%, #A5B4FC 100%)';
  
  const glowColor = isSun
    ? 'rgba(255, 217, 102, 0.6)'
    : 'rgba(199, 210, 254, 0.5)';
  
  const beamGradient = isSun
    ? 'linear-gradient(180deg, rgba(255, 242, 178, 0.5), transparent)'
    : 'linear-gradient(180deg, rgba(224, 231, 255, 0.4), transparent)';

  return (
    <div
      style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '90px',
        height: '90px',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {/* Main sun/moon orb */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
            `0 0 40px ${glowColor}, 0 0 80px ${glowColor}`,
            `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: coreGradient,
          boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
        }}
      >
        {/* Subtle surface details for moon */}
        {!isSun && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '20%',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.15)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '30%',
                right: '25%',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.1)',
              }}
            />
          </>
        )}
      </motion.div>

      {/* Animated light beams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.15,
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '2px',
            height: '100px',
            background: beamGradient,
            transformOrigin: '50% 0%',
            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
            opacity: 0.3,
          }}
        />
      ))}

      {/* Floating particles */}
      {particleConfigs.map((config, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [-15, -35, -15],
            opacity: [0.6, 0.9, 0.6],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: config.delay,
          }}
          style={{
            position: 'absolute',
            top: `${config.top}px`,
            left: `${config.left}px`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: isSun ? '#FFD966' : '#C7D2FE',
            boxShadow: `0 0 8px ${glowColor}`,
          }}
        />
      ))}
    </div>
  );
}
