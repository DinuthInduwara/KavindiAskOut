# 💌 Kavindi Ask Out

An immersive, heart-made love story built with Next.js 14, React, and Tailwind CSS. Every page unlocks another romantic surprise—rain-kissed speeches, moonlit gardens, blooming quizzes, and secret portals that whisper _“yes”_ in every corner. 💖

## ✨ Highlights

- 🌺 **Dreamy welcome flow** – password-protected garden gate with animated transitions, confetti celebrations, and mood-based emoji effects (`src/app/page.jsx`).
- 🌙 **Cinematic scenes** – star rain, night walks, winter wonderlands, and love-speech monologues filled with floating emojis and particle systems (`src/app/night`, `src/app/star-rain`, `src/app/night/love-speech`).
- 🎧 **Persistent music player** – the `MusicPlayerContext` keeps romantic soundtracks in sync as visitors wander through chapters.
- 💬 **Telegram-connected moments** – visitor tracking, password attempts, and button taps are shared through Telegram bots for real-time updates (`src/services/telegram.ts`, `src/app/api/*`).
- 📸 **Memory gallery** – curated milestone images, love letters, and progress snapshots stored in `public/` to relive every step.

## 🧰 Tech Stack

- [Next.js 14 App Router](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) + custom animations
- [Framer Motion](https://www.framer.com/motion/) for delicate transitions
- Telegram Bot API integration

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Create `.env.local`**
   ```ini
   PASSWORD=secret-you-share
   TELEGRAM_BOT_TOKEN=123456:ABCDEF
   TELEGRAM_CHAT_ID=987654321
   IPINFO_TOKEN=optional
   ```
3. **Run the dev server**
   ```bash
   npm run dev
   ```
   The site runs on [http://localhost:5000](http://localhost:5000) (custom port defined in `package.json`).

4. **Ready for production?**
   ```bash
   npm run build
   npm start   # serves the optimized build on port 5000
   ```

## 🔑 Environment Variables

| Key                   | Required | Purpose                                                                 |
|-----------------------|----------|-------------------------------------------------------------------------|
| `PASSWORD`            | ✅       | Unlocks the welcome garden + login flow                                |
| `TELEGRAM_BOT_TOKEN`  | ✅       | Bot token used by `TelegramService`                                     |
| `TELEGRAM_CHAT_ID`    | ✅       | Destination chat/channel for realtime notifications                     |
| `IPINFO_TOKEN`        | ⭕️ optional | Adds richer visitor geolocation data to the `/api/track-visitor` route |

> Store these in `.env.local`. The helper in `src/lib/server/env.ts` validates them during runtime.

## 📂 Project Peek

```
src/
├── app/
│   ├── about/             # Animated timelines + image zoom gallery
│   ├── ask-out/           # Final proposal scene with yes/no logic
│   ├── lovely-quiz/       # Interactive quiz + Telegram summaries
│   ├── night/             # Night stroll + love speech chapters
│   ├── star-rain/         # Particle rain + heartfelt monologue
│   └── welcome-garden/    # Password gate, celebration effects
├── components/
│   ├── message-card.jsx   # Floating love notes
│   ├── winter-effect.jsx  # Snow + aurora ambience
│   └── animations/*       # Bloom, slide, and fade transitions
├── context/
│   └── MusicPlayerContext.jsx
├── services/
│   └── telegram.ts        # Reusable Telegram client
└── utilities/
    └── telegram-helpers.js
```

## 🧪 Helpful Scripts

| Command        | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Local development on port 5000                   |
| `npm run build`| Production build                                 |
| `npm run start`| Serve the production build                       |
| `npm run lint` | Catch formatting + accessibility issues early    |

## 🌸 Personalizing the Experience

- **Change copy:** edit the story text inside pages (`src/app/night/page.jsx`, `src/app/about/page.jsx`, etc.).
- **Swap memories:** replace images in `public/` with your own PNG/JPG moments while keeping the same file names or updating imports accordingly.
- **Custom music:** drop new `.mp3` files into `public/` and update `MusicPlayerContext`.
- **Tune effects:** tweak emoji sets in `src/constants/emojis.ts` or gradients/animations in each scene component.

## ☁️ Deploying & Sharing

This is a standard Next.js app—deploy to Vercel, Netlify, Render, or any Node-friendly host. Remember to set environment variables in your hosting dashboard so Telegram alerts and password checks keep working.

---

Made with infinite love, glowing hearts, and starry-eyed JavaScript. If this project makes someone smile, send them a message and let them know. 💞
