Got it—you want **Chapter 04 = Setup + Compiler + Running TypeScript** (practical, no fluff). Let’s do it clean and usable for your projects.

---

# 📘 Chapter 04: Setup, Compiler & Running TypeScript

---

# 🔹 1. Install TypeScript

### Option 1 (Global)

```bash
npm install -g typescript
```

### Option 2 (Recommended – per project)

```bash
npm init -y
npm install typescript --save-dev
```

---

# 🔹 2. Check Installation

```bash
tsc -v
```

👉 You should see version like:

```
Version 5.x.x
```

---

# 🔹 3. Create TypeScript Config

```bash
npx tsc --init
```

👉 This creates:

```bash
tsconfig.json
```

---

# 🔹 4. Understand `tsconfig.json` (Important)

Basic clean config 👇

```json id="tsconfig-basic"
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 🔑 Important Options

| Option          | Meaning              |
| --------------- | -------------------- |
| target          | JS version output    |
| module          | module system        |
| rootDir         | where TS files live  |
| outDir          | where JS goes        |
| strict          | strict type checking |
| esModuleInterop | import compatibility |

---

# 🔹 5. Project Structure

```bash
project/
 ├── src/
 │    └── index.ts
 ├── dist/
 ├── tsconfig.json
 └── package.json
```

---

# 🔹 6. Write First TS Code

```ts id="first-ts"
const message: string = "Hello TypeScript";
console.log(message);
```

---

# 🔹 7. Compile TypeScript → JavaScript

```bash
npx tsc
```

👉 Output:

```bash
dist/index.js
```

---

# 🔹 8. Run Code

```bash
node dist/index.js
```

👉 Output:

```
Hello TypeScript
```

---

# 🔹 9. Watch Mode (🔥 VERY IMPORTANT)

```bash
npx tsc --watch
```

👉 Automatically compiles when you save file

---

# 🔹 10. Compile Single File

```bash
npx tsc src/index.ts
```

---

# 🔹 11. Run TS Directly (No Manual Compile)

Install:

```bash
npm install ts-node --save-dev
```

Run:

```bash
npx ts-node src/index.ts
```

👉 Saves time in development

---

# 🔹 12. Add Scripts (Best Practice)

In `package.json`:

```json id="scripts"
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc --watch"
}
```

Run:

```bash
npm run build
npm start
npm run dev
```

---

# 🔹 13. Output Files Explained

---

## 🟡 `.js`

👉 Compiled JavaScript (runs in Node)

---

## 🔵 `.d.ts`

👉 Type declaration (for libraries)

---

## 🟢 `.map`

👉 Debug mapping (TS ↔ JS)

---

# 🔹 14. Strict Mode (🔥 Must Enable)

```json id="strict-mode"
"strict": true
```

👉 Enables:

* strictNullChecks
* noImplicitAny
* strictFunctionTypes

👉 Makes your code **production-ready**

---

# 🔹 15. Common Errors (You WILL face)

---

## ❌ Error: Cannot find module

👉 Fix:

```bash
npm install @types/node --save-dev
```

---

## ❌ Error: Unknown file extension ".ts"

👉 Use:

```bash
npx ts-node file.ts
```

---

## ❌ JS not generating

👉 Check:

```json
"outDir": "./dist"
```

---

# 🔥 Real Workflow (Best Practice)

```bash
npm run dev   # watch mode
# OR
npx ts-node src/index.ts
```

---

# 🧠 Important Concepts

---

## ⚡ TypeScript is NOT executed directly

👉 It must be compiled → JavaScript

---

## ⚡ Node.js only understands JavaScript

---

## ⚡ `tsc` = TypeScript Compiler

---

## ⚡ `ts-node` = Run TS directly (dev only)

---

# 📊 Quick Flow

```bash
index.ts
   ↓
tsc (compiler)
   ↓
index.js
   ↓
node run
```

---

# 🚀 Your Project Tip (VERY IMPORTANT)

Since you are building:

* Backend (Node + Express)
* Frontend (React)

👉 Use TypeScript like this:

* Backend → strict types (models, APIs)
* Frontend → props + API response typing

---

# 📌 Summary

* Install TS
* Setup `tsconfig.json`
* Write `.ts` files
* Compile using `tsc`
* Run using Node or `ts-node`

---

