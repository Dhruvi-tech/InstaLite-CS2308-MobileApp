<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=Insta%20Lite&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=A%20lightweight%20%E2%80%A2%20smooth%20%E2%80%A2%20minimalist%20Instagram%20clone&descAlignY=58&descSize=18&animation=fadeIn)

</div>

<div align="center">

<img src="https://img.icons8.com/color/96/000000/instagram-new.png" width="72" alt="Insta Lite Logo" />

<br/>

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com)
[![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white)](https://developer.apple.com)

<br/>

[![Stars](https://img.shields.io/github/stars/yourusername/insta-lite?style=flat-square&color=dc2743&labelColor=1a1a1a&logo=github&logoColor=white)](.)
[![License MIT](https://img.shields.io/badge/License-MIT-bc1888?style=flat-square&labelColor=1a1a1a)](.)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-61dafb?style=flat-square&labelColor=1a1a1a)](.)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-dc2743?style=flat-square&labelColor=1a1a1a)](.)

<br/>

**[`🌟 About`](#-about-the-project)** &nbsp;•&nbsp;
**[`🎨 Screens`](#-visual-summary--navigation)** &nbsp;•&nbsp;
**[`🗺️ Map`](#️-interaction-map)** &nbsp;•&nbsp;
**[`🏗️ Layout`](#️-project-layout)** &nbsp;•&nbsp;
**[`🚀 Setup`](#-getting-started)**

</div>

<br/>

---

<br/>

## 🌟 About The Project

> **Insta Lite** is a highly polished, zero-bloat mobile application inspired by Instagram.
> It strips away the noise and focuses on clean interactions, a seamless dark UI, and optimal performance — without relying on heavy third-party UI libraries.

<br/>

<div align="center">

| &nbsp; | Feature | Description |
|:---:|:---|:---|
| 🔐 | **Authentication** | Beautiful login & registration flows with graceful state handling |
| 📱 | **Dynamic Feed** | Browse stories and media cards with snappy, immersive scrolling |
| ❤️ | **Interactions** | Heart animations, double-tap to like, and emoji reactions (`❤️` `💬` `✈️`) |
| 📷 | **Camera UI** | Custom mock camera wrapper handling permissions gracefully |
| 👤 | **Profile View** | Stats, bio, and sleek symmetric media grid layouts |

</div>

<br/>

---

<br/>

## 🎨 Visual Summary & Navigation

<div align="center">

| Screen | Experience Highlights |
| :---: | :--- |
| **🏠 Home** | Dark feed cards with rounded immersive media, snappy scroll, double-tap support |
| **📖 Stories** | Circular avatars with the iconic warm gradient ring, horizontal scrolling |
| **📷 Camera** | Pure black sleek UI, close action, smooth capture button layout |
| **👤 Profile** | Clean stats hierarchy, dynamic remote placeholders, symmetrical grids |

</div>

<br/>

---

<br/>

## 🗺️ Interaction Map

```mermaid
graph TD
    A([🔑 Login]) --> B([📝 Register])
    A --> C([📱 Bottom Tabs])
    C --> D([🏠 Home])
    C --> E([🔍 Search])
    C --> F([➕ Add])
    C --> G([👤 Profile])
    D --> H([📷 Camera])
    F --> H

    style A fill:#1a0505,stroke:#dc2743,stroke-width:2px,color:#ffffff
    style B fill:#1a0505,stroke:#dc2743,stroke-width:1px,color:#cccccc
    style C fill:#050d1a,stroke:#61dafb,stroke-width:2px,color:#ffffff
    style D fill:#051a0d,stroke:#3ddc84,stroke-width:1px,color:#cccccc
    style E fill:#1a1a05,stroke:#f7df1e,stroke-width:1px,color:#cccccc
    style F fill:#051a0d,stroke:#3ddc84,stroke-width:1px,color:#cccccc
    style G fill:#150518,stroke:#bc1888,stroke-width:1px,color:#cccccc
    style H fill:#111111,stroke:#555555,stroke-width:1px,color:#aaaaaa
```

<br/>

---

<br/>

## 🏗️ Project Layout

```
📦 src
 └── 📂 screens
      ├── 🔐 LoginScreen.js       ←  Auth entry
      ├── 📝 RegisterScreen.js    ←  User onboarding
      ├── 🏠 HomeScreen.js        ←  Feed & Stories
      ├── 🔍 SearchScreen.js      ←  Explore page mock
      ├── ➕ AddScreen.js          ←  New post interceptor
      ├── 📷 CameraScreen.js      ←  Custom camera UI
      └── 👤 ProfileScreen.js     ←  User grid and stats
```

<br/>

---

<br/>

## 🚀 Getting Started

Follow these instructions to run the application on your local machine.

<br/>

### `01` &nbsp; Installation

> Clone the repo and install all dependencies.

```bash
npm install
```

<br/>

### `02` &nbsp; Start Metro Bundler

> Keep this terminal running in the background.

```bash
npx react-native start
```

<br/>

### `03` &nbsp; Launch the App

> Open a **new** terminal window and run for your target platform.

**▶ &nbsp; Android**

```bash
npx react-native run-android
```

**▶ &nbsp; iOS**

```bash
npx react-native run-ios
```

<br/>

---

<br/>

<div align="center">

*✦ &nbsp; Built with* ❤️ *to celebrate visual clarity and interaction smoothness &nbsp; ✦*

<br/>

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer)

</div>
