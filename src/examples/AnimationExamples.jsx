"use client";
import React, { useState } from "react";
import PageAnimation, {
  FadeAnimation,
  SlideUpAnimation,
  ScaleAnimation,
  BloomAnimation,
  BlurAnimation,
  RotateAnimation,
  BounceAnimation,
  ElasticAnimation,
  ZoomInAnimation,
  FlipXAnimation
} from "@/components/PageAnimation";
import { usePageAnimation } from "@/components/UniversalPageTransition";
import { getAllAnimations, getAnimationInfo } from "@/config/animations";

/**
 * Animation Examples Component
 * 
 * This component demonstrates how to use the new universal
 * page animation system with various examples.
 */

const AnimationExamples = () => {
  const [currentAnimation, setCurrentAnimation] = useState("fade");
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState(500);
  const [delay, setDelay] = useState(0);

  // Using the hook for animation control
  const { isVisible: hookVisible, show, hide, toggle } = usePageAnimation(true);

  const allAnimations = getAllAnimations();

  const handleAnimationChange = (animation) => {
    setCurrentAnimation(animation);
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  };

  const animationInfo = getAnimationInfo(currentAnimation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Universal Page Animation System
        </h1>

        {/* Controls */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Controls</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Animation Type
              </label>
              <select
                value={currentAnimation}
                onChange={(e) => handleAnimationChange(e.target.value)}
                className="w-full p-2 rounded-lg bg-white/80 text-gray-800"
              >
                {allAnimations.map((animation) => (
                  <option key={animation} value={animation}>
                    {getAnimationInfo(animation).name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Duration (ms)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full p-2 rounded-lg bg-white/80 text-gray-800"
                min="100"
                max="3000"
                step="100"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Delay (ms)
              </label>
              <input
                type="number"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                className="w-full p-2 rounded-lg bg-white/80 text-gray-800"
                min="0"
                max="2000"
                step="100"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                {isVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="text-white">
            <p><strong>Current Animation:</strong> {animationInfo.name}</p>
            <p><strong>Description:</strong> {animationInfo.description}</p>
            <p><strong>Duration:</strong> {animationInfo.duration}ms</p>
          </div>
        </div>

        {/* Animation Demo */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Animation Demo</h2>
          
          <PageAnimation
            type={currentAnimation}
            isVisible={isVisible}
            duration={duration}
            delay={delay}
            className="w-full"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Animated Content
              </h3>
              <p className="text-gray-600 mb-4">
                This content is animated using the {currentAnimation} animation.
              </p>
              <div className="text-6xl mb-4">✨</div>
              <p className="text-sm text-gray-500">
                Duration: {duration}ms | Delay: {delay}ms
              </p>
            </div>
          </PageAnimation>
        </div>

        {/* Hook Example */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Hook Example</h2>
          
          <div className="flex gap-4 mb-4">
            <button
              onClick={show}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              Show
            </button>
            <button
              onClick={hide}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Hide
            </button>
            <button
              onClick={toggle}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
            >
              Toggle
            </button>
          </div>

          <PageAnimation
            type="bounce"
            isVisible={hookVisible}
            duration={600}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Hook Controlled Animation
              </h3>
              <p className="text-gray-600">
                This animation is controlled using the usePageAnimation hook.
              </p>
            </div>
          </PageAnimation>
        </div>

        {/* Preset Components Example */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Preset Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeAnimation isVisible={true} duration={500}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-800">Fade Animation</h4>
                <p className="text-sm text-gray-600">Simple fade effect</p>
              </div>
            </FadeAnimation>

            <SlideUpAnimation isVisible={true} duration={600}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-800">Slide Up</h4>
                <p className="text-sm text-gray-600">Slides in from bottom</p>
              </div>
            </SlideUpAnimation>

            <ScaleAnimation isVisible={true} duration={500}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-800">Scale Animation</h4>
                <p className="text-sm text-gray-600">Scales in with bounce</p>
              </div>
            </ScaleAnimation>

            <BloomAnimation isVisible={true} duration={1500}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-800">Bloom Effect</h4>
                <p className="text-sm text-gray-600">Magical bloom with rotation</p>
              </div>
            </BloomAnimation>

            <BlurAnimation isVisible={true} duration={600}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-800">Blur Effect</h4>
                <p className="text-sm text-gray-600">Blurs in/out</p>
              </div>
            </BlurAnimation>

            <RotateAnimation isVisible={true} duration={800}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-800">Rotate Animation</h4>
                <p className="text-sm text-gray-600">Rotates with scale</p>
              </div>
            </RotateAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationExamples;
