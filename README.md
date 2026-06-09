# 🏥 OT Roster Hub
### Operation Theater Shift & Team Manager

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://ouseph444.github.io/Shift-Manager/)
[![PWA](https://img.shields.io/badge/PWA-Installable-blue?style=for-the-badge&logo=pwa)](https://ouseph444.github.io/Shift-Manager/)
[![Firebase](https://img.shields.io/badge/Firebase-FireStore-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com)
[![Mobile First](https://img.shields.io/badge/Mobile-First-FF6B6B?style=for-the-badge)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A mobile-friendly web app for hospital staff to manage shifts, view team rosters, and chat in real time — organised by hospital and department.**

👉 **[🚀 Launch App Now](https://ouseph444.github.io/Shift-Manager/)** 👈

</div>

---

## 📱 Install on Your Phone

OT Roster Hub works like a native app on both iPhone and Android. No App Store needed!

### 🍎 iPhone (Safari)

| Step | Action | Details |
| :---: | :--- | :--- |
| **1** | **Open in Safari** | Must be Safari, not Chrome. Open the app URL. |
| **2** | **Tap Share** | Tap the **Share button** at the bottom (box with an arrow ⬆️). |
| **3** | **Add to Home Screen** | Scroll down and tap **"Add to Home Screen"**. |
| **4** | **Confirm** | Edit the name if you like, then tap **Add**. |

> ⚠️ **Important:** This only works in Safari on iPhone. If you are using Chrome or another browser, switch to Safari first.

---

### 🤖 Android (Chrome)

| Step | Action | Details |
| :---: | :--- | :--- |
| **1** | **Open in Chrome** | Open the app URL in the Chrome browser. |
| **2** | **Check Banner** | Chrome may show a pop-up banner at the bottom: **"Add to Home Screen"**. |
| **3** | **Open Menu** | If no banner, tap the **three-dot menu** (⋮) in the top right corner. |
| **4** | **Install** | Tap **"Install App"** or **"Add to Home Screen"**, then tap **Install**. |

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| 📅 **My Calendar** | Add and manage your personal shifts with custom colours and names. |
| 👥 **Team Roster** | See all shifts for your department in real time. |
| 💬 **Team Chat** | Live group chat shared across all team members. |
| 🪪 **Members** | See everyone registered in your hospital and department. |
| 👤 **My Profile** | View your stats, change theme, and manage your account. |
| 🗄️ **My Data** | See exactly what data is stored against your account. |

---

## 🔒 Privacy & Security

<div align="center">
  <img src="https://img.shields.io/badge/Security-Enterprise%20Grade-brightgreen?style=for-the-badge" alt="Security">
</div>

- 🏢 **Data Isolation:** Your data is strictly isolated by hospital and department. Users from other hospitals or departments **cannot** see your data.
- ☁️ **Secure Storage:** All data is stored securely in **Google Firebase Firestore**.
- 🗑️ **Full Control:** Deleting your profile **permanently removes** all your shifts, messages, and member records.
- 🔐 **No Passwords:** Simple, secure access without complex authentication hurdles.

---

## 🌍 Supported Countries & Holidays

The app automatically loads public holidays for your country from an external API. 

| Flag | Country | Code | | Flag | Country | Code |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: |
| 🇦🇺 | Australia | `AU` | | 🇳🇿 | New Zealand | `NZ` |
| 🇺🇸 | United States | `US` | | 🇮🇪 | Ireland | `IE` |
| 🇬🇧 | United Kingdom | `GB` | | 🇮🇳 | India | `IN` |
| 🇨🇦 | Canada | `CA` | | 🇿🇦 | South Africa | `ZA` |

---

## 🛠️ Built With

<div align="center">
  <img src="https://img.shields.io/badge/Firebase-FireStore-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white" alt="FontAwesome">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github" alt="GitHub Pages">
</div>



```yaml
Frontend:
  - HTML5 & Vanilla JavaScript
  - Tailwind CSS (Styling)
  - Font Awesome (Icons)

Backend & Database:
  - Google Firebase Firestore (Real-time NoSQL Database)

External APIs:
  - Nager.Date API (Public Holidays)

Hosting:
  - GitHub Pages (Free, global CDN hosting)
graph TD
    A[User Mobile Browser] -->|HTTPS| B[GitHub Pages CDN]
    B -->|Serves| C[HTML / Tailwind / JS]
    C -->|Real-time Sync| D[(Firebase Firestore)]
    D -->|Isolated Data| E[Hospital/Dept Groups]
    C -->|Fetch Holidays| F[Nager.Date API]
