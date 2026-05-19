# 📘 Chapter 08: Objects, Functions, Arrays, Enums & Tuples in TypeScript

These are used everywhere in:

* React
* React Native
* Node.js
* APIs
* Database models

---

# 🔹 1. Objects in TypeScript

Objects describe structured data.

---

## Basic Object

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Aminul",
  age: 22,
};
```

---

# 🔹 Optional Properties

```ts
type User = {
  name: string;
  age?: number;
};
```

👉 `?` means optional

---

# 🔹 Readonly Properties

```ts
type User = {
  readonly id: string;
  name: string;
};
```

```ts
user.id = "123"; // ❌ ERROR
```

---

# 🔹 Nested Objects

```ts
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

---

# 🔹 Dynamic Keys

```ts
type Scores = {
  [key: string]: number;
};
```

```ts
const marks: Scores = {
  math: 90,
  english: 80,
};
```

---

# 🔹 Object Methods

```ts
type User = {
  name: string;
  greet(): void;
};

const user: User = {
  name: "Aminul",
  greet() {
    console.log("Hello");
  },
};
```

---

# 🔹 2. Functions in TypeScript

Functions define behavior.

---

# Basic Function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# Arrow Function

```ts
const subtract = (a: number, b: number): number => {
  return a - b;
};
```

---

# Optional Parameter

```ts
function greet(name: string, age?: number) {
  return age ? `${name} ${age}` : name;
}
```

---

# Default Parameter

```ts
function createUser(role: string = "user") {
  return role;
}
```

---

# Rest Parameter

```ts
function total(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

---

# Function Type

```ts
type Multiply = (a: number, b: number) => number;
```

---

# Callback Function

```ts
function process(callback: (msg: string) => void) {
  callback("Hello");
}
```

---

# Function Returning Object

```ts
function createPost(title: string): { title: string } {
  return { title };
}
```

---

# 🔹 3. Arrays in TypeScript

Arrays store multiple values.

---

# Basic Array

```ts
let numbers: number[] = [1, 2, 3];
```

---

# Generic Array Syntax

```ts
let names: Array<string> = ["A", "B"];
```

---

# Array of Objects

```ts
type User = {
  name: string;
};

const users: User[] = [
  { name: "Aminul" },
  { name: "John" },
];
```

---

# Readonly Array

```ts
const numbers: readonly number[] = [1, 2, 3];
```

```ts
numbers.push(4); // ❌ ERROR
```

---

# Mixed Array (Union)

```ts
let data: (string | number)[] = [1, "hello"];
```

---

# Array Methods Type Safety

```ts
const nums = [1, 2, 3];

nums.map((num) => num * 2);
```

👉 TS automatically infers `num` as number

---

# 🔹 4. Tuples

👉 Fixed-length arrays with fixed types/order.

---

# Basic Tuple

```ts
let user: [string, number] = ["Aminul", 22];
```

---

# Wrong Order

```ts
user = [22, "Aminul"]; // ❌ ERROR
```

---

# Tuple with Optional Value

```ts
let rgb: [number, number, number?];
```

---

# Readonly Tuple

```ts
const point: readonly [number, number] = [10, 20];
```

---

# Real Example

```ts
type ApiResponse = [boolean, string];

const response: ApiResponse = [true, "Success"];
```

---

# 🔹 5. Enums

👉 Named constant values.

---

# Numeric Enum

```ts
enum Status {
  Pending,
  Success,
  Failed,
}
```

---

# Values

```ts
Status.Pending // 0
Status.Success // 1
```

---

# String Enum (Better 🔥)

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
}
```

---

# Usage

```ts
const currentRole: Role = Role.Admin;
```

---

# 🔥 Why String Enums Better

* readable
* safer
* easier in APIs/database

---

# 🔹 Enum vs Union (IMPORTANT)

---

## Enum

```ts
enum Status {
  Pending = "PENDING",
}
```

---

## Union

```ts
type Status = "pending" | "success";
```

---

# ⚔️ Which is Better?

👉 Modern TS usually prefers unions.

Because:

* lighter
* simpler
* better with React

---

# 🔹 Real Project Example (YOUR STYLE)

---

# Todo Status

```ts
type TodoStatus =
  | "pending"
  | "inprogress"
  | "completed";
```

---

# User Role

```ts
enum UserRole {
  Admin = "ADMIN",
  Creator = "CREATOR",
  User = "USER",
}
```

---

# API Response

```ts
type ApiResponse = {
  success: boolean;
  data: string[];
};
```

---

# ⚠️ Common Mistakes

---

## ❌ Using `any[]`

```ts
let data: any[]; // ❌ avoid
```

---

## ❌ Wrong Tuple Order

```ts
let user: [string, number];

user = [22, "A"]; // ❌
```

---

## ❌ Overusing Enums

Sometimes union is cleaner.

---

# 🧠 Must Remember

* Objects describe structure
* Functions define behavior
* Arrays store collections
* Tuples = fixed arrays
* Enums = named constants
* Prefer union over enum in many React apps

---

# 📌 Summary

* Objects = structured data
* Functions = typed logic
* Arrays = collections
* Tuples = fixed positions
* Enums = constant groups

---
