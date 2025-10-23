# Universal Page Animation System

A comprehensive, easy-to-use animation system for React pages with multiple presets and customizable options.

## Features

- 🎨 **15+ Animation Presets** - Fade, slide, scale, rotate, blur, and more
- ⚡ **Easy Implementation** - Simple props-based API
- 🔧 **Customizable** - Duration, delay, easing, and custom styles
- 🎯 **Hook Support** - `usePageAnimation` hook for programmatic control
- 📱 **Responsive** - Works on all screen sizes
- 🚀 **Performance** - Optimized animations with proper cleanup
- 🔄 **Backward Compatible** - Works with existing PageTransition usage

## Quick Start

### Basic Usage

```jsx
import PageAnimation from "@/components/PageAnimation";

function MyPage() {
  return (
    <PageAnimation type="fade" isVisible={true}>
      <div>Your content here</div>
    </PageAnimation>
  );
}
```

### Using Preset Components

```jsx
import { FadeAnimation, SlideUpAnimation, ScaleAnimation } from "@/components/PageAnimation";

function MyPage() {
  return (
    <FadeAnimation isVisible={true}>
      <div>Fade animation</div>
    </FadeAnimation>
  );
}
```

### Using the Hook

```jsx
import { usePageAnimation } from "@/components/UniversalPageTransition";
import PageAnimation from "@/components/PageAnimation";

function MyPage() {
  const { isVisible, show, hide, toggle } = usePageAnimation(true);

  return (
    <div>
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <button onClick={toggle}>Toggle</button>
      
      <PageAnimation type="bounce" isVisible={isVisible}>
        <div>Animated content</div>
      </PageAnimation>
    </div>
  );
}
```

## Animation Types

### Basic Animations
- `fade` - Simple opacity transition
- `slideUp` - Slide in from bottom
- `slideDown` - Slide in from top
- `slideLeft` - Slide in from right
- `slideRight` - Slide in from left

### Scale Animations
- `scale` - Scale in/out with bounce
- `scaleUp` - Dramatic scale from small
- `zoomIn` - Zoom in from very small
- `zoomOut` - Zoom in from large

### Rotation Animations
- `rotate` - Rotate with scale
- `flipX` - Flip around X axis
- `flipY` - Flip around Y axis

### Effect Animations
- `blur` - Blur in/out effect
- `bounce` - Bouncy scale effect
- `elastic` - Elastic scale with translation
- `bloom` - Magical bloom with rotation and blur

## API Reference

### PageAnimation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | "fade" | Animation type |
| `isVisible` | boolean | true | Whether to show the content |
| `duration` | number | auto | Animation duration in ms |
| `delay` | number | 0 | Animation delay in ms |
| `onEnter` | function | - | Called when enter animation starts |
| `onEntered` | function | - | Called when enter animation completes |
| `onExit` | function | - | Called when exit animation starts |
| `onExited` | function | - | Called when exit animation completes |
| `className` | string | "" | Additional CSS classes |
| `style` | object | {} | Additional inline styles |

### usePageAnimation Hook

```jsx
const {
  isVisible,    // boolean - current visibility state
  isAnimating, // boolean - whether currently animating
  show,         // function - show the content
  hide,         // function - hide the content
  toggle        // function - toggle visibility
} = usePageAnimation(initialVisible);
```

## Examples

### Custom Duration and Delay

```jsx
<PageAnimation 
  type="bloom" 
  isVisible={true}
  duration={2000}
  delay={500}
>
  <div>Slow magical entrance</div>
</PageAnimation>
```

### Animation Events

```jsx
<PageAnimation 
  type="slideUp"
  isVisible={isVisible}
  onEnter={() => console.log('Animation starting')}
  onEntered={() => console.log('Animation complete')}
  onExit={() => console.log('Exit starting')}
  onExited={() => console.log('Exit complete')}
>
  <div>Content with event logging</div>
</PageAnimation>
```

### Custom Styling

```jsx
<PageAnimation 
  type="scale"
  isVisible={true}
  className="my-custom-class"
  style={{ backgroundColor: 'red' }}
>
  <div>Custom styled content</div>
</PageAnimation>
```

### Multiple Animations

```jsx
function MyPage() {
  const [step, setStep] = useState(0);
  
  return (
    <div>
      <PageAnimation type="fade" isVisible={step === 0}>
        <div>Step 1</div>
      </PageAnimation>
      
      <PageAnimation type="slideUp" isVisible={step === 1}>
        <div>Step 2</div>
      </PageAnimation>
      
      <PageAnimation type="scale" isVisible={step === 2}>
        <div>Step 3</div>
      </PageAnimation>
    </div>
  );
}
```

## Migration from Old PageTransition

The new system is backward compatible. Your existing code will work:

```jsx
// Old way (still works)
<PageTransition isTransitioning={false} type="fade">
  <div>Content</div>
</PageTransition>

// New way (recommended)
<PageAnimation type="fade" isVisible={true}>
  <div>Content</div>
</PageAnimation>
```

## Performance Tips

1. **Use appropriate durations** - Don't make animations too long (500-800ms is usually good)
2. **Avoid too many simultaneous animations** - Limit to 3-4 at once
3. **Use `will-change` CSS property** for better performance on complex animations
4. **Clean up properly** - The system handles cleanup automatically

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

### Animation not working?
- Check that `isVisible` is properly set
- Verify the animation type is valid
- Ensure the component is properly imported

### Performance issues?
- Reduce animation duration
- Use simpler animation types (fade, slide)
- Check for CSS conflicts

### Animation looks choppy?
- Use `transform` and `opacity` properties (they're GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left` properties
- Use `will-change: transform` for better performance

## Advanced Usage

### Custom Animation Preset

```jsx
import UniversalPageTransition from "@/components/UniversalPageTransition";

const customPreset = {
  enter: { opacity: 0, transform: "translateX(-100px)" },
  enterActive: { opacity: 1, transform: "translateX(0)" },
  exit: { opacity: 1, transform: "translateX(0)" },
  exitActive: { opacity: 0, transform: "translateX(100px)" },
  transition: "all 0.6s ease-out"
};

<UniversalPageTransition
  animation="custom"
  isVisible={true}
  // ... other props
>
  <div>Custom animation</div>
</UniversalPageTransition>
```

### Animation Sequences

```jsx
function AnimatedSequence() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { type: "fade", content: "Step 1" },
    { type: "slideUp", content: "Step 2" },
    { type: "scale", content: "Step 3" }
  ];
  
  return (
    <div>
      {steps.map((step, index) => (
        <PageAnimation
          key={index}
          type={step.type}
          isVisible={currentStep === index}
          onEntered={() => {
            if (index < steps.length - 1) {
              setTimeout(() => setCurrentStep(index + 1), 1000);
            }
          }}
        >
          <div>{step.content}</div>
        </PageAnimation>
      ))}
    </div>
  );
}
```

This animation system provides a powerful, flexible, and easy-to-use solution for page transitions in your React application.
