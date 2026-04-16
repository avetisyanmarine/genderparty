# Full-Screen Envelope Opening Component

A React component that creates a dramatic full-screen envelope opening animation using Framer Motion and Tailwind CSS.

## Features

- Full-screen display (100vh, 100vw) with fixed positioning
- Screen split into top flap (60% height, brown) and bottom body (40% height, white) meeting diagonally in center
- Clip-path creates clean envelope-like triangular flap
- Custom image "Seal" (letterbutton.png) centered on screen as clickable element
- Smooth slide animations for flap opening
- onOpen callback triggered after animation completion
- Minimalist aesthetic with scroll prevention

## Usage

```jsx
import WeddingInvitationEnvelope from './components/wedding-invitation';

function App() {
  return (
    <WeddingInvitationEnvelope onOpen={() => console.log('Envelope opened!')} />
  );
}
```

## Animation Details

- **Sequence**: Image fade-out (0.8s) → 200ms overlap → Flaps slide apart (1.5s)
- **Image Animation**: Opacity to 0 + scale to 0.9 with "easeInOut"
- **Flaps Animation**: Top y: -50%, Bottom y: 50% simultaneously
- **Total Duration**: ~2.3 seconds for smooth, cinematic feel
- **Trigger**: Click on center image (letterbutton.png)

## Behavior

Component overlays the main app with a full-screen envelope design. **Prevents page scrolling** until the envelope is opened. Clicking the center image triggers the opening sequence: image fades out, then envelope halves slide apart to meet in the middle. This reveals the main application content in the center area while the envelope halves remain visible on top and bottom, creating an "open envelope" effect. Scrolling is re-enabled after opening.

## Assets Required

Place `letterbutton.png` in the public folder for the clickable seal image.

## Dependencies

- React
- Framer Motion
- Tailwind CSS

## Customization

You can customize the invitation content by editing the text inside the `invitation-card` div in the component.

The animations can be adjusted by modifying the `transition` properties in the `useEffect` hook.

## Troubleshooting

- Ensure Framer Motion is installed: `npm install framer-motion`
- Make sure Tailwind CSS is configured in your project
- The component uses absolute positioning, so ensure the parent container has relative positioning if needed