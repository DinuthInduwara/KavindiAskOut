# Overview

This is a personalized, romantic tribute website built for "Kavindi Manika" using Next.js 14, React 18, and TailwindCSS. The application features interactive elements including a custom butterfly cursor, background music player with smooth transitions, and visitor tracking capabilities. The site serves as a digital love letter with poetic elements, memories, and interactive features designed to create an immersive, magical user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework:** Next.js 14 (App Router)
- **Rationale:** Leverages React Server Components for optimal performance and built-in routing
- **Key Features:** Server-side rendering, automatic code splitting, and optimized image handling
- **Styling:** TailwindCSS with custom animations (including a custom `bounceMagical` keyframe animation)
- **TypeScript Support:** Mixed JS/TS codebase with TypeScript for type-safe API routes

## Interactive Features

**Custom Cursor System**
- **Implementation:** Context-based React provider (`ButterflyContext`) that tracks mouse position globally
- **Purpose:** Creates a custom butterfly-themed cursor that hides the default system cursor completely
- **Interaction Detection:** Automatically detects hovering over interactive elements (buttons, links, inputs)

**Music Player** (Refactored October 2025)
- **Architecture:** Modular design with separation of concerns across multiple layers
- **Configuration Layer:** `src/config/audioConfig.js` - Centralized constants for audio behavior, timeouts, and track definitions
- **Utilities Layer:** `src/utils/audioHelpers.js` - Reusable functions for fade effects, safe play/pause operations
- **Service Layer:** `src/services/audioPreloader.js` - Intelligent audio preloading with metadata-first strategy, timeout handling, and automatic next-track preloading
- **Hooks Layer:** `src/hooks/useAudioPlayer.js` - Custom hook for future extensibility and reusable playback logic
- **Context Layer:** `src/context/MusicPlayerContext.js` - Global state management with proper playback state transitions (IDLE → LOADING → PLAYING/PAUSED/ERROR)
- **Features:** Smooth volume fade transitions, intelligent preloading, graceful error handling, network timeout protection
- **Global Access:** Available across all pages through context provider in root layout

## State Management

**Context API Architecture**
- **Providers:** `MusicPlayerContext` and `ButterflyContext` wrapped in root layout
- **Rationale:** Chosen over more complex solutions (Redux, Zustand) due to simple, localized state requirements
- **Scope:** Application-wide music playback and cursor tracking

## API Routes (Next.js Route Handlers)

**Password Verification** (`/api/check-password`)
- **Purpose:** Validates user password attempts against environment variable
- **Security:** Server-side validation, case-insensitive comparison
- **Environment Dependency:** Requires `PASSWORD` environment variable

**Visitor Tracking** (`/api/track-visitor`)
- **Purpose:** Logs visitor browser information and IP geolocation data
- **External Integration:** IPInfo API for IP geolocation (optional token-based authentication)
- **Data Collected:** Browser fingerprint, IP address, location, ISP details
- **Notification:** Sends formatted data to Telegram bot

**Attempt Logging** (`/api/log-attempt`)
- **Purpose:** Logs password attempts for monitoring
- **Notification:** Sends attempt details to Telegram bot

## Component Architecture

**Global Components** (Rendered in Root Layout)
- `GlobalMusicPlayer`: Persistent music player UI
- `MessageBox`: Notification/message display system (supports title and message props)
- Custom cursor (rendered through ButterflyContext)

**Layout Pattern**
- Root layout provides global providers and persistent UI elements
- Children components inherit context without prop drilling

## Build Configuration

**Next.js Config Customization**
- **ESM Externals:** Set to 'loose' for better module compatibility
- **Webpack Externals:** Canvas externalized (prepared for PDF.js integration, though not currently implemented)
- **Purpose:** Prevents canvas-related bundling issues in client-side bundles

**Path Aliases**
- `@/*` mapped to `./src/*` for cleaner imports

# External Dependencies

## Core Framework Dependencies

**Next.js Ecosystem**
- `next` (^14.2.33): React framework with App Router
- `@next/swc-wasm-nodejs` (^16.0.0-beta.0): WebAssembly-based SWC compiler for faster builds
- `react` (^18) & `react-dom` (^18): UI library

## UI & Animation Libraries

**Framer Motion** (^12.23.0)
- **Purpose:** Advanced animation library for smooth, declarative animations
- **Use Case:** Likely used for page transitions, component animations, and interactive elements

**Lucide React** (^0.525.0)
- **Purpose:** Icon library with React components
- **Use Case:** Provides clean, consistent SVG icons throughout the application

## Styling & Tooling

**TailwindCSS** (^3.3.0)
- **Purpose:** Utility-first CSS framework
- **Customization:** Extended with custom animations in `tailwind.config.js`

**PostCSS** & **Autoprefixer**
- **Purpose:** CSS processing pipeline for browser compatibility

## External APIs

**Telegram Bot API**
- **Purpose:** Notification system for visitor tracking and password attempts
- **Environment Variables Required:**
  - `TELEGRAM_BOT_TOKEN`: Bot authentication token
  - `TELEGRAM_CHAT_ID`: Target chat for notifications
- **Endpoints Used:** `/sendMessage` with Markdown parse mode

**IPInfo API** (ipinfo.io)
- **Purpose:** IP geolocation and metadata lookup
- **Environment Variable (Optional):** `IPINFO_TOKEN` for authenticated requests
- **Fallback:** Works without token but with rate limits
- **Data Retrieved:** IP, location, ISP, organization, timezone, etc.

## Environment Variables

Required configuration:
- `PASSWORD`: Access control password for the site
- `TELEGRAM_BOT_TOKEN`: Telegram bot authentication
- `TELEGRAM_CHAT_ID`: Telegram notification destination
- `IPINFO_TOKEN`: (Optional) IPInfo API authentication for higher rate limits

## Development Tools

**TypeScript** (5.8.3)
- **Mode:** Partial TypeScript adoption (API routes only)
- **Configuration:** Non-strict mode for gradual migration

## Static Assets

**Music Files**
- Location: `/public/music-1.mp3` (and potentially others)
- Format: MP3 audio files for background music

**Favicon**
- Location: `/public/favicon.png`
- Used for both standard and Apple touch icons