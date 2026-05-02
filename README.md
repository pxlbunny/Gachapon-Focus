# 🎰 Gachapon Focus

> A cute productivity app that rewards focused work sessions with collectible pixel-art toy capsules — inspired by Japanese gachapon vending machines.

![Gachapon Focus](https://img.shields.io/badge/built%20with-React%20%2B%20TypeScript-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)

---

## ✨ What is this?

Gachapon Focus is a gamified Pomodoro-style app. You spin the virtual gachapon machine, receive a random toy companion and a focus task, work through a 25-minute timer — and if you complete the task, the toy is yours to keep in your growing collection.

Each toy has its own personality and set of creative, thoughtful focus tasks ranging from deep work and writing sprints to keyboard shortcut practice and accessibility research.

---

## 🎮 Features

- **8 collectible pixel-art toys** — Bunny, Chick, Puppy, Bear, Kitty, Froggy, Hamster, and Star Pup
- **25-minute Pomodoro timer** with pause, resume, and reset
- **Persistent in-session collection** with a gallery view
- **Confetti celebration** on task completion
- **Smooth animations** — machine shake, capsule pop, float, and celebrate effects
- **Whimsical design** using the Mountains of Christmas font and a warm pastel palette

---

## 🖼️ Screenshots

| Main Screen | Task Modal | Collection |
|---|---|---|
| Spin the gachapon machine | Work through your focus task | View your collected toys |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/gachapon-focus.git
cd gachapon-focus
npm install
```

### Environment Variables

Create a `.env` file in the root with:

```env
PORT=3000
BASE_PATH=/
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run serve
```

### Type Checking

```bash
npm run typecheck
```

---

## 🗂️ Project Structure

```
gachapon-focus/
├── src/
│   ├── components/
│   │   ├── GachaponMachine.tsx   # The interactive vending machine UI
│   │   ├── CapsuleCard.tsx       # Polaroid-style toy card
│   │   ├── PixelToy.tsx          # Pixel-art renderer
│   │   ├── TaskModal.tsx         # Focus task + Pomodoro timer modal
│   │   ├── CollectionDisplay.tsx # Gallery of collected toys
│   │   └── Confetti.tsx          # Celebration particle effect
│   ├── data/
│   │   └── toys.ts               # Toy definitions, pixel art, and tasks
│   ├── pages/
│   │   ├── Home.tsx              # Main app page
│   │   └── not-found.tsx         # 404 page
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── CONTRIBUTING.md
└── LICENSE
```

---

## 🧸 The Toys

| Toy | Color | Personality |
|-----|-------|-------------|
| 🐰 Bunny | Pink | Loves quiet focus time |
| 🐥 Chick | Yellow | Chirps encouragement |
| 🐶 Puppy | Blue | Loyal focus companion |
| 🐻 Bear | Peach | Makes every session feel cozy |
| 🐱 Kitty | Purple | Purrs you into a productivity zone |
| 🐸 Froggy | Green | Hops through tasks with you |
| 🐹 Hamster | Peach | Spinning the wheel of productivity |
| ⭐ Star Pup | Yellow | Lights up your focus sessions |

---

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast dev and builds
- **Tailwind CSS** + **tw-animate-css** for styling
- **Framer Motion** for animations
- **Wouter** for lightweight routing
- **TanStack Query** for data management
- **Radix UI** for accessible component primitives

---

## 🤝 Contributing

Contributions are welcome! Whether it's a new toy, a new task idea, a bug fix, or a UI improvement — check out [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## 📄 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">Made with ☕ and pixel-art love</p>
