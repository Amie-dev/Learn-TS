
---

# 📘 Chapter 02: Behind TypeScript (Compiler Flow)

---

## 🧠 Big Picture Flow

```
TS Code
  ↓
Lexer (Scanner)
  ↓
Parser
  ↓
AST (Abstract Syntax Tree)
  ↓
Binder
  ↓
Symbol Table + Flow Nodes
  ↓
Type Checker
  ↓
Emitter
  ↓
Output (.js, .d.ts, .map)
```

---

# 🔹 1. TS Code (Input)

```ts
let price: number = 100;
```

👉 This is what you write

---

# 🔍 2. Lexer (Scanner)

👉 Breaks code into **tokens**

Example:

```
let | price | : | number | = | 100
```

👉 Like splitting sentence into words

---

# 🌳 3. Parser

👉 Takes tokens → builds structure

---

## 🔹 AST (Abstract Syntax Tree)

```ts
VariableDeclaration
 ├── name: price
 ├── type: number
 └── value: 100
```

👉 This tree is how TS understands code

---

# 🔗 4. Binder

👉 Connects identifiers → creates relationships

Example:

```ts
let price = 100;
console.log(price);
```

👉 Binder links:

* `price` (declared)
* `price` (used)

---

## 📦 Symbol Table

👉 Stores all variables, functions, types

```
price → number
```

👉 Think: **global memory map**

---

# 🔄 5. Flow Nodes (Control Flow Analysis)

👉 Tracks how values change

```ts
let x: string | number;

if (typeof x === "string") {
  x.toUpperCase(); // ✅ allowed
}
```

👉 TS understands flow → **smart type narrowing**

---

# 🧠 6. Type Checker (MOST IMPORTANT)

👉 Validates types

```ts
let price: number = "100"; 
// ❌ ERROR
```

---

## ⚡ Short-Circuit Checking

👉 Stops unnecessary checks early

```ts
if (false && someFunction()) {
  // TS knows this won't run
}
```

👉 Saves performance

---

# 🧾 7. Emitter

👉 Converts TS → JavaScript

---

## Example

### Input (TS)

```ts
let price: number = 100;
```

### Output (JS)

```js
let price = 100;
```

👉 Types are removed (they exist only at compile time)

---

# 📦 8. Output Files

---

## 🟡 `.js` file

👉 Actual runnable code

---

## 🔵 `.d.ts` (Declaration File)

```ts
declare let price: number;
```

👉 Used for:

* Libraries
* IntelliSense
* Type sharing

---

## 🟢 `.map` (Source Map)

👉 Connects:

* TS code ↔ JS code

👉 Helps debugging in browser DevTools

---

# 🔥 Full Flow Example

```ts
function add(a: number, b: number) {
  return a + b;
}
```

---

### Step-by-step:

1. **Lexer**

```
function | add | ( | a | : | number ...
```

2. **Parser → AST**

```
FunctionDeclaration
```

3. **Binder**

* Registers `add`, `a`, `b`

4. **Symbol Table**

```
add → function
a → number
b → number
```

5. **Checker**

* Ensures correct types

6. **Emitter**

```js
function add(a, b) {
  return a + b;
}
```

---

# 🧠 Important Concepts (Must Remember)

---

## ⚡ TypeScript is NOT interpreted

👉 It is **compiled**

---

## ⚡ Types are erased

👉 No types in final JS

---

## ⚡ Checker is the brain

👉 Most heavy logic happens here

---

## ⚡ Binder + Symbol Table = Memory system

---

# 📊 Simple Analogy

| Stage   | Real Life Example  |
| ------- | ------------------ |
| Lexer   | Reading words      |
| Parser  | Making sentence    |
| AST     | Sentence structure |
| Binder  | Linking references |
| Checker | Grammar check      |
| Emitter | Final clean output |

---

# 🚀 Why This Matters (For YOU)

You are building:

* Backend (Node + Express)
* Frontend (React / RN)
* APIs + Types

👉 Understanding this helps:

* Debug TS errors faster
* Write better types
* Avoid “any hell”
* Build scalable apps

---

# 📌 Final Summary

* TS → tokens → AST → symbols → type check → JS
* Binder creates relationships
* Checker validates logic
* Emitter generates JS

---
