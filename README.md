# Insta Lite

<p align="center">
	<img src="https://img.shields.io/badge/Status-Active-1b1f23?style=flat-square" />
	<img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-1b1f23?style=flat-square" />
	<img src="https://img.shields.io/badge/UI-Dark%20Instagram%20Style-1b1f23?style=flat-square" />
	<img src="https://img.shields.io/badge/Stack-React%20Native%20CLI-1b1f23?style=flat-square" />
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="divider" />
</p>

## What This Is

Insta Lite is a lightweight Instagram-inspired mobile app built in React Native.
It focuses on clean interaction patterns and UI polish without adding extra dependencies.

### Core Experience

- Auth entry: Login + Register
- Feed with stories and post cards
- Emoji-based interactions: ❤️ 💬 ✈️
- Like toggle and double-tap to like
- Camera mock screen with permission denied state
- Profile with stats and media grid

## Quick Visual Summary

| Area | Style | Behavior |
|---|---|---|
| Home | Dark feed cards, rounded media | Tap like and double-tap image support |
| Stories | Circular avatars with warm ring | Horizontal story strip |
| Camera | Pure black mock UI | Close button + capture button + denied message |
| Profile | Balanced stat row + grid | Uses remote placeholder images |
| Tabs | Emoji-first navigation | 🏠 🔍 ➕ 👤 |

## Interaction Map

```text
Login
	-> Register
	-> Tabs
			 -> Home
						-> Camera (from add / shortcut)
			 -> Search
			 -> Add
						-> Camera
			 -> Profile
```

## Project Layout

```text
src/
	screens/
		LoginScreen.js
		RegisterScreen.js
		HomeScreen.js
		SearchScreen.js
		AddScreen.js
		CameraScreen.js
		ProfileScreen.js
```

## Design Decisions

### Why It Feels Instagram-Like

- Strong black canvas for contrast
- Soft card radius and image rounding
- Familiar interaction rhythm (story row, action row, profile grid)
- Lightweight icon language via emojis

### Constraints Honored

- No new dependencies for UI
- No local image assets required for screens
- Remote placeholders used for feed/profile/stories
- No camera SDK integration

## Run It

### Setup

```bash
npm install
```

### Start Metro

```bash
npx react-native start
```

### Launch

```bash
npx react-native run-android
```

```bash
npx react-native run-ios
```

## Next Up

- Backend auth and persistent user sessions
- Real post upload flow
- Comments and notifications
- Save/share post interactions

---

<p align="center">
	Built with focus on visual clarity, interaction smoothness, and zero-bloat dependencies.
</p>
