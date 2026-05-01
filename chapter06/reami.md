
---

# 📘 Chapter 06: Objects, Inference, Union, Any, Type Narrowing & Type Guards in TypeScript

---

# 🔹 1. Type Annotation vs Type Inference

---

## ✅ Type Annotation (you define type)

```ts
let username: string = "Aminul";
let price: number = 1000;
```

👉 You explicitly tell TypeScript the type

---

## ✅ Type Inference (TS guesses type)

```ts
let username = "Aminul"; // inferred as string
let price = 1000;        // inferred as number
```

👉 TypeScript is smart enough to infer

---

## ⚔️ Annotation vs Inference

| Feature  | Annotation      | Inference        |
| -------- | --------------- | ---------------- |
| Control  | High            | Automatic        |
| Use case | APIs, functions | simple variables |

👉 Rule:

* Small code → inference
* Large app → annotation

---

# 🔹 2. Object Types (VERY IMPORTANT 🔥)

---

## Basic Object

```ts
let user: { name: string; age: number } = {
  name: "Aminul",
  age: 22,
};
```

---

## Optional Property

```ts
type User = {
  name: string;
  age?: number;
};
```

---

## Readonly Property

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

## Nested Object

```ts
type Post = {
  title: string;
  author: {
    name: string;
    email: string;
  };
};
```

---

# 🔹 3. Union Types (🔥 IMPORTANT)

👉 Multiple possible types

```ts
let id: number | string;

id = 101;   // ✅
id = "abc"; // ✅
```

---

## Union in Object

```ts
type Status = "pending" | "success" | "failed";
```

👉 Perfect for:

* TODO status
* API response states

---

# 🔹 4. `any` (⚠️ Dangerous)

```ts
let data: any = "hello";
data = 123;
data.toUpperCase(); // ❌ no error (danger)
```

👉 It disables TypeScript

---

## ❌ Why avoid `any`

* No type checking
* Bugs come back
* Same as JavaScript

---

## ✅ Use `unknown` instead

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  value.toUpperCase(); // ✅ safe
}
```

---

# 🔹 5. Type Narrowing (🔥 VERY IMPORTANT)

👉 TypeScript reduces type based on conditions

---

## Example

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}
```

👉 This is called **type narrowing**

---

# 🔹 6. Type Guards (🔥🔥)

👉 Ways to narrow types safely

---

## ✅ 1. `typeof` Guard

```ts
if (typeof value === "string") {
  // string
}
```

---

## ✅ 2. `instanceof` Guard

```ts
if (date instanceof Date) {
  console.log(date.getFullYear());
}
```

---

## ✅ 3. `in` Operator

```ts
type User = { name: string };
type Admin = { role: string };

function check(obj: User | Admin) {
  if ("role" in obj) {
    console.log(obj.role);
  }
}
```

---

## ✅ 4. Custom Type Guard (🔥 advanced)

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

```ts
if (isString(value)) {
  value.toUpperCase(); // ✅ safe
}
```

---

# 🔹 7. Real Project Example (🔥 YOUR CASE)

---

## Post Status

```ts
type PostStatus = "pending" | "inprogress" | "completed";
```

---

## API Response

```ts
type ApiResponse = {
  success: boolean;
  data: string | number;
};
```

---

## Safe Handling

```ts
function handleResponse(res: ApiResponse) {
  if (typeof res.data === "string") {
    console.log(res.data.toUpperCase());
  }
}
```

---

# 🔹 8. Common Mistakes

---

## ❌ Overusing `any`

```ts
let data: any; // ❌ avoid
```

---

## ❌ Not narrowing unions

```ts
function test(val: string | number) {
  val.toUpperCase(); // ❌ error
}
```

---

## ❌ Ignoring optional fields

```ts
user.age.toFixed(); // ❌ may be undefined
```

---

# 🧠 Must Remember

* Prefer inference for simple values
* Use annotation for APIs & objects
* Avoid `any`
* Use union types smartly
* Always narrow before using

---

# 📌 Summary

* Annotation = manual type
* Inference = automatic type
* Union = multiple types
* `any` = unsafe
* Narrowing = refine type
* Guards = safe checks

---
