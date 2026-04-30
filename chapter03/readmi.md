
---

# 📘 Chapter 03: Basic Types in TypeScript

---

## 🔹 1. `string`

```ts
let username: string = "Aminul";
```

👉 Used for text

```ts
username = "John";   // ✅
username = 123;      // ❌ ERROR
```

---

## 🔹 2. `number`

```ts
let price: number = 1999;
```

👉 Includes:

* integers
* floats

```ts
price = 2999;   // ✅
price = "cheap"; // ❌
```

---

## 🔹 3. `boolean`

```ts
let isLoggedIn: boolean = true;
```

```ts
isLoggedIn = false; // ✅
isLoggedIn = "yes"; // ❌
```

---

# 🔹 4. `any` (⚠️ Dangerous)

```ts
let data: any = "hello";
data = 123;
data = true;
```

👉 Turns OFF TypeScript safety

❌ Avoid in real projects (only use when necessary)

---

# 🔹 5. `unknown` (Better than `any`)

```ts
let value: unknown = "hello";
```

👉 You must **check type before using**

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ safe
}
```

👉 This is **safe alternative to any**

---

# 🔹 6. `void`

👉 Used for functions that return nothing

```ts
function logMessage(): void {
  console.log("Hello");
}
```

---

# 🔹 7. `null` & `undefined`

```ts
let data: null = null;
let value: undefined = undefined;
```

👉 Usually used with unions:

```ts
let user: string | null = null;
```

---

# 🔹 8. `array`

### Method 1

```ts
let numbers: number[] = [1, 2, 3];
```

### Method 2

```ts
let names: Array<string> = ["A", "B"];
```

---

# 🔹 9. `tuple` (Fixed structure array)

```ts
let user: [string, number] = ["Aminul", 22];
```

👉 Order matters

```ts
user = [22, "Aminul"]; // ❌ ERROR
```

---

# 🔹 10. `object`

```ts
let user: { name: string; age: number } = {
  name: "Aminul",
  age: 22,
};
```

---

# 🔹 11. `type` (Custom Types 🔥)

👉 Very important for your projects

```ts
type Post = {
  title: string;
  price: number;
  isAvailable: boolean;
};
```

```ts
const post: Post = {
  title: "Earbuds",
  price: 1999,
  isAvailable: true,
};
```

---

# 🔹 12. `union` (Multiple types)

```ts
let id: string | number;

id = 101;     // ✅
id = "abc";   // ✅
```

---

# 🔹 13. `literal types`

```ts
let status: "pending" | "success" | "failed";

status = "pending"; // ✅
status = "done";    // ❌
```

👉 Perfect for your TODO / Post status

---

# 🔹 14. `never`

👉 Means **this should never happen**

```ts
function throwError(): never {
  throw new Error("Error");
}
```

---

# 🔹 15. Type Inference (Auto Type)

```ts
let name = "Aminul"; 
// TS automatically: string
```

👉 You don’t always need to write types

---

# 🧠 Real Example (Your Project)

```ts
type User = {
  name: string;
  email: string;
  isPremium: boolean;
};

const user: User = {
  name: "Aminul",
  email: "test@gmail.com",
  isPremium: false,
};
```

---

# ⚔️ `any` vs `unknown`

| Feature     | any    | unknown     |
| ----------- | ------ | ----------- |
| Safety      | ❌ No   | ✅ Yes       |
| Usage       | Direct | Needs check |
| Recommended | ❌      | ✅           |

---

# 🧠 Must Remember

* Use `type` for structure
* Avoid `any`
* Use `union` for flexibility
* Use `tuple` when order matters
* Let TS infer when possible

---

# 🚀 Mini Practice

Try this:

```ts
type Product = {
  name: string;
  price: number;
  status: "available" | "outOfStock";
};

const item: Product = {
  name: "Laptop",
  price: 50000,
  status: "available",
};
```

---

# 📌 Summary

* TS gives strict types
* Helps avoid bugs
* Makes code scalable
* Essential for real apps

---
