<div align="center">

<img src="https://img.icons8.com/color/150/000000/instagram-new.png" width="80" alt="Insta Lite Logo" />

# Insta Lite

**A lightweight, smooth, and minimalist Instagram clone.**<br/>
*Built with React Native CLI for Android & iOS.*

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" alt="iOS" />
</p>

[Explore](#-about-the-project) • [Installation](#-getting-started) • [Architecture](#️-project-layout) • [Next Steps](#-next-steps)

</div>

<br/>

<hr align="center" style="border: 1px solid #e0e0e0; width: 80%" />

## 🌟 About The Project

**Insta Lite** is a highly polished, zero-bloat mobile application inspired by Instagram. 
It strips away the noise and focuses on clean interactions, a seamless dark UI, and optimal performance without relying on heavy third-party UI libraries.

### ✨ Core Features
- 🔐 **Authentication**: Beautiful login & registration flows.
- 📱 **Dynamic Feed**: Browse stories and media cards seamlessly.
- ❤️ **Interactive Elements**: Heart animations, double-tap to like, and emoji interactions (`❤️`, `💬`, `✈️`).
- 📷 **Camera Interface**: A custom mock camera wrapper handling permissions gracefully.
- 👤 **Profile View**: Stats, bio, and sleek media grid layouts.

---

## 🎨 Visual Summary & Navigation

| Screen | Experience Highlights |
| :---: | :--- |
| **🏠 Home** | Dark feed cards with rounded immersive media, snappy scroll, double-tap support. |
| **📖 Stories** | Circular avatars with the iconic warm gradient ring, horizontal scrolling. |
| **📷 Camera** | Pure black sleek UI, close action, smooth capture button layout. |
| **👤 Profile** | Clean stats hierarchy, dynamic remote placeholders, symmetrical grids. |

---

## 🗺️ Interaction Map

```mermaid
graph TD;
    Login-->Register;
    Login-->Tabs[📱 Bottom Tabs];
    Tabs-->Home;
    Tabs-->Search;
    Tabs-->Add;
    Tabs-->Profile;
    Home-->Camera;
    Add-->Camera;
```

---

## 🏗️ Project Layout

```bash
📦 src
 ┗ 📂 screens
   ┣ 📜 LoginScreen.js      # Auth entry
   ┣ 📜 RegisterScreen.js   # User onboarding
   ┣ 📜 HomeScreen.js       # Feed & Stories
   ┣ 📜 SearchScreen.js     # Explore page mock
   ┣ 📜 AddScreen.js        # New post interceptor
   ┣ 📜 CameraScreen.js     # Custom camera UI
   ┗ 📜 ProfileScreen.js    # User grid and stats
```

---

## 🚀 Getting Started

Follow these instructions to run the application on your local machine.

### 1. Installation
Clone the repo and install dependencies:
```bash
npm install
```

### 2. Start Metro Bundler
Keep this running in the background:
```bash
npx react-native start
```

### 3. Launch App
Open a new terminal window and run:

**For Android:**
```bash
npx react-native run-android
```
**For iOS:**
```bash
npx react-native run-ios
```

---

## 🔮 Next Steps

We are constantly improving Insta Lite. Here's what's on the horizon:
- [ ] ☁️ **Backend Auth:** Real user session persistence.
- [ ] 📤 **Post Uploads:** Complete image upload pipeline.
- [ ] 💬 **Comments Engine:** Real-time commenting and tagging.
- [ ] 🔔 **Notifications:** Engagement alerts.

<br/>

<div align="center">
  <b>Built with ❤️ to celebrate visual clarity and interaction smoothness.</b>
</div>
