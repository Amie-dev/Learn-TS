
---

# 📘 Chapter 05: Functions in TypeScript

---

## 🔹 1. Basic Function with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

👉 Breakdown:

* `a: number` → parameter type
* `b: number` → parameter type
* `: number` → return type

---

## 🔹 2. Type Inference (Auto Return Type)

```ts
function multiply(a: number, b: number) {
  return a * b; // TS automatically infers return type
}
```

👉 You can skip return type sometimes (but in big apps → define it)

---

## 🔹 3. Void Function

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

👉 `void` = no return

---

## 🔹 4. Optional Parameters (`?`)

```ts
function greet(name: string, age?: number) {
  return age ? `${name} is ${age}` : `Hello ${name}`;
}
```

```ts
greet("Aminul");        // ✅
greet("Aminul", 22);    // ✅
```

---

## 🔹 5. Default Parameters

```ts
function createUser(name: string, role: string = "user") {
  return `${name} is a ${role}`;
}
```

```ts
createUser("Aminul");         // user
createUser("Aminul", "admin") // admin
```

---

## 🔹 6. Rest Parameters (`...`)

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}
```

```ts
sum(1, 2, 3, 4); // 10
```

---

## 🔹 7. Function Type (Important 🔥)

👉 Define function shape

```ts
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;
```

---

## 🔹 8. Arrow Function with Types

```ts
const subtract = (a: number, b: number): number => {
  return a - b;
};
```

---

## 🔹 9. Callback Functions

```ts
function processUser(name: string, callback: (msg: string) => void) {
  callback(`Hello ${name}`);
}
```

```ts
processUser("Aminul", (msg) => console.log(msg));
```

---

## 🔹 10. Function with Object Parameter

```ts
type User = {
  name: string;
  age: number;
};

function printUser(user: User): void {
  console.log(user.name);
}
```

---

## 🔹 11. Function Returning Object

```ts
function createPost(title: string): { title: string; createdAt: Date } {
  return {
    title,
    createdAt: new Date(),
  };
}
```

---

## 🔹 12. Union in Function

```ts
function printId(id: number | string) {
  console.log(id);
}
```

---

## 🔹 13. Type Narrowing (Important 🔥)

```ts
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

👉 TypeScript understands type inside conditions

---

## 🔹 14. Never Function

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

👉 Used for:

* error throwing
* infinite loops

---

## 🔹 15. Function Overloading (Advanced 🔥)

```ts
function getLength(value: string): number;
function getLength(value: any[]): number;

function getLength(value: any): number {
  return value.length;
}
```

---

## 🔹 16. Generics (Intro 🔥🔥)

👉 Reusable functions

```ts
function identity<T>(value: T): T {
  return value;
}
```

```ts
identity<string>("Hello");
identity<number>(100);
```

---

# 🧠 Real Example (Your Project)

```ts
type Post = {
  title: string;
  price: number;
};

function createPost(post: Post): Post {
  return post;
}
```

---

# ⚔️ Common Mistakes

---

## ❌ Using `any`

```ts
function test(a: any) {} // ❌ avoid
```

---

## ❌ Not defining return type in large apps

```ts
function getData() {} // ❌ unclear
```

---

## ❌ Wrong optional param order

```ts
function test(a?: number, b: number) {} // ❌ error
```

👉 Optional must be last

---

# 🧠 Must Remember

* Always type parameters
* Prefer return types in big projects
* Use union + narrowing
* Use generics for reusable logic

---

# 📌 Summary

* Functions in TypeScript are strongly typed
* Supports optional, default, rest params
* Can define function shapes
* Generics make functions reusable

---
