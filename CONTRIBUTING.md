# Contributing to Gachapon Focus 🎰

Thank you for wanting to contribute! This is a small passion project and all kinds of help are welcome — from pixel-art toys to bug fixes to new task ideas.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Adding a New Toy](#adding-a-new-toy)
- [Adding Focus Tasks](#adding-focus-tasks)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Style Guide](#style-guide)

---

## Code of Conduct

Please be kind and respectful. This is a welcoming space for all contributors regardless of background or experience level. Harassment or unkind behaviour of any kind will not be tolerated.

---

## Ways to Contribute

| Type | Examples |
|------|---------|
| 🐛 Bug fix | Timer glitch, layout issue, broken animation |
| ✨ New toy | New pixel-art character with tasks |
| 📝 New tasks | Extra focus tasks for existing toys |
| 🎨 UI improvement | Better animations, accessibility, responsiveness |
| 📖 Docs | Improve the README, add JSDoc comments |
| 🧪 Tests | Add unit or integration tests |

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/gachapon-focus.git
   cd gachapon-focus
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a `.env` file:**
   ```env
   PORT=3000
   BASE_PATH=/
   ```
5. **Start the dev server:**
   ```bash
   npm run dev
   ```
6. **Create a branch** for your change:
   ```bash
   git checkout -b feat/my-new-toy
   ```

---

## Adding a New Toy

All toys live in `src/data/toys.ts`. Each toy follows this interface:

```ts
interface Toy {
  id: string;          // Unique lowercase identifier, e.g. 'penguin'
  name: string;        // Display name, e.g. 'Penguin'
  emoji: string;       // Leave as empty string ''
  color: ToyColor;     // 'pink' | 'green' | 'purple' | 'yellow' | 'blue' | 'peach'
  pixelArt: string[][]; // 6×6 grid of pixel characters (see below)
  tasks: string[];     // 4–6 focus tasks (see guidelines below)
  description: string; // One short sentence personality blurb
}
```

### Pixel Art Format

Each toy is a **6 rows × 6 columns** grid. Each cell is a single character:

| Char | Colour |
|------|--------|
| `W` | Off-white |
| `Y` | Yellow |
| `B` | Light blue |
| `P` | Peach/skin |
| `V` | Light purple |
| `G` | Green |
| `H` | Warm tan |
| `S` | Soft yellow (star) |
| `e` | Dark eye dot |
| `n` | Nose dot |
| `m` | Mouth |
| `w` | Whisker dot |
| `s` | Smile |
| `b` | Beak (orange) |
| `o` | Orange accent |
| `*` | Gold sparkle |
| `_` | Transparent |

**Example — Bunny:**
```ts
pixelArt: [
  ['_','W','_','_','W','_'],
  ['_','W','W','W','W','_'],
  ['W','e','W','W','e','W'],
  ['W','W','n','W','W','W'],
  ['_','W','W','W','W','_'],
  ['_','W','_','_','W','_'],
],
```

Add your new toy to the `toys` array. The app will automatically include it in the random spin pool.

---

## Adding Focus Tasks

Each task should:

- Be completable in roughly **20–30 minutes**
- Be **specific and actionable**, not vague ("clean your room" ❌ vs "spend 25 minutes decluttering one drawer or shelf" ✅)
- Suit the **personality** of the toy it belongs to
- Cover a range — writing, coding, research, creativity, review, etc.
- Be encouraging in tone

Aim for **4–6 tasks per toy** so there's variety.

---

## Submitting a Pull Request

1. Make sure `npm run typecheck` passes with no errors
2. Test your changes in the browser
3. Write a clear PR description explaining what you changed and why
4. Reference any related issues with `Closes #123`
5. Keep PRs focused — one feature or fix per PR is easiest to review

### Commit Message Format

Use short, descriptive messages in the imperative mood:

```
feat: add Penguin toy with pixel art and tasks
fix: timer not resetting after dismiss
docs: add screenshot to README
style: improve mobile layout of task modal
```

---

## Style Guide

- **TypeScript** — all new files should be `.tsx` or `.ts` with proper types, no `any`
- **Inline styles** are used throughout this project for component-specific styling — follow the existing pattern rather than adding new Tailwind classes unless they're utility-only
- **Font** — use `'Mountains of Christmas', cursive` for all visible text
- **Colors** — use the `toyColors` map and CSS variables (`hsl(var(--...))`) rather than raw hex where possible
- **Component size** — keep components small and focused; extract sub-components if a file grows large

---

## Questions?

Open a [GitHub Discussion](../../discussions) or file an issue — happy to help you get unstuck!
