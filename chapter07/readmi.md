# 📘 Chapter 07: Types, Interfaces, Assertion, Unknown, Never & Advanced Patterns in TypeScript

This chapter is VERY important for:

* React
* React Native
* Node.js APIs
* scalable projects

---

# 🔹 1. Type Assertion

👉 Tell TypeScript:

> “Trust me, I know the type.”

---

## Syntax

```ts
let value: unknown = "Hello";

let length = (value as string).length;
```

---

## Another Syntax

```ts
let length = (<string>value).length;
```

⚠️ Mostly avoid in React/TSX because of JSX conflict.

---

# ⚠️ Problem with Type Assertion

```ts
let value: unknown = 100;

(value as string).toUpperCase(); // ❌ runtime error
```

👉 Assertion does NOT change actual type.

It only tells TS to trust you.

---

# 🔹 2. `unknown`

👉 Safe version of `any`

---

## Example

```ts
let value: unknown = "hello";
```

❌ Cannot use directly:

```ts
value.toUpperCase(); // ❌ ERROR
```

✅ Must narrow first:

```ts
if (typeof value === "string") {
  value.toUpperCase();
}
```

---

# ⚔️ `any` vs `unknown`

| Feature                     | any | unknown |
| --------------------------- | --- | ------- |
| Safe                        | ❌   | ✅       |
| Can access methods directly | ✅   | ❌       |
| Recommended                 | ❌   | ✅       |

---

# 🔹 3. `never`

👉 Means:

> “This value should NEVER exist.”

---

## Function that throws error

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## Infinite Loop

```ts
function loopForever(): never {
  while (true) {}
}
```

---

# 🔥 Real Use of `never`

## Exhaustive Checking

```ts
type Status = "success" | "error";

function handle(status: Status) {
  if (status === "success") return;
  if (status === "error") return;

  const neverValue: never = status;
}
```

👉 Helps catch missing cases.

---

# 🔹 4. `type`

👉 Used to create custom types.

---

## Example

```ts
type User = {
  name: string;
  age: number;
};
```

---

## Union with Type

```ts
type Status = "pending" | "completed";
```

---

## Function Type

```ts
type Add = (a: number, b: number) => number;
```

---

# 🔹 5. `interface`

👉 Mainly used for object/class structure.

---

## Example

```ts
interface User {
  name: string;
  age: number;
}
```

---

# ⚔️ Interface vs Type

| Feature              | interface | type     |
| -------------------- | --------- | -------- |
| Objects              | ✅         | ✅        |
| Union                | ❌         | ✅        |
| Intersection         | Limited   | ✅        |
| Class implementation | ✅ Best    | Possible |
| Declaration merging  | ✅         | ❌        |

---

# 🔥 Main Rule

---

## 👉 Use `interface` for:

* classes
* object structures
* OOP style

---

## 👉 Use `type` for:

* unions
* primitives
* advanced types
* utility combinations

---

# 🔹 6. Why Interface Preferred with Classes

Because interfaces are designed for OOP contracts.

---

## Example

```ts
interface User {
  name: string;
  age: number;
}

class Admin implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

👉 `implements` works naturally with interfaces.

---

# 🔹 7. `extends`

👉 Reuse existing structure.

---

## Interface Extends

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

---

## Usage

```ts
const admin: Admin = {
  name: "Aminul",
  role: "super-admin",
};
```

---

# 🔹 8. Intersection Types (`&`)

👉 Combine multiple types.

---

## Example

```ts
type User = {
  name: string;
};

type Admin = {
  role: string;
};

type SuperAdmin = User & Admin;
```

---

## Result

```ts
const data: SuperAdmin = {
  name: "Aminul",
  role: "admin",
};
```

---

# 🔹 9. Interface Declaration Merging (🔥 Special Feature)

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

👉 Automatically merges:

```ts
{
  name: string;
  age: number;
}
```

---

# 🔹 10. Real Project Example (YOUR STYLE)

---

## API User Model

```ts
interface User {
  _id: string;
  name: string;
  email: string;
}
```

---

## Subscription Extension

```ts
interface PremiumUser extends User {
  plan: string;
}
```

---

## Status Type

```ts
type Status = "pending" | "approved" | "rejected";
```

---

# 🔹 11. Best Practice (IMPORTANT)

---

## ✅ Use Interface

```ts
interface Props {
  title: string;
}
```

Especially in:

* React props
* classes
* APIs

---

## ✅ Use Type

```ts
type Status = "loading" | "success";
```

Especially for:

* unions
* utility types
* advanced combinations

---

# ⚠️ Common Mistakes

---

## ❌ Using `any`

```ts
let data: any;
```

---

## ❌ Asserting blindly

```ts
(value as string).toUpperCase();
```

---

## ❌ Using type everywhere

Sometimes interface is cleaner.

---

# 🧠 Must Remember

* `unknown` > `any`
* `never` = impossible value
* `type` = flexible
* `interface` = object/class contracts
* `extends` = inheritance
* `&` = intersection

---

# 📌 Summary

* Assertion = force TS to trust you
* unknown = safe dynamic value
* never = impossible state
* interface = object/class design
* type = advanced flexibility
* extends = reuse
* intersection = combine types

---
