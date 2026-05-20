# 📘 Chapter 10: Advanced Generics + Utility Types in TypeScript

This chapter is where TypeScript becomes REALLY powerful for:

* APIs
* React props
* database models
* scalable backend architecture

---

# 🔥 Part 1: Advanced Generics

---

# 🔹 1. Generic Constraints

👉 Restrict allowed types.

---

## Example

```ts
function getLength<T extends { length: number }>(
  item: T
): number {
  return item.length;
}
```

---

## ✅ Valid

```ts
getLength("Hello");
getLength([1, 2, 3]);
```

---

## ❌ Invalid

```ts
getLength(100);
```

Because number has no `length`.

---

# 🔹 2. Multiple Generics

```ts
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}
```

---

## Usage

```ts
const user = merge(
  { name: "Aminul" },
  { age: 22 }
);
```

---

# 🔹 3. `keyof` Generic

🔥 VERY IMPORTANT

---

## Example

```ts
function getValue<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}
```

---

## Usage

```ts
const user = {
  name: "Aminul",
  age: 22,
};

getValue(user, "name");
```

---

## ❌ Invalid

```ts
getValue(user, "email");
```

TS prevents invalid keys.

---

# 🔹 4. Generic Interface

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

---

## Usage

```ts
interface User {
  name: string;
}

const response: ApiResponse<User[]> = {
  success: true,
  data: [],
};
```

---

# 🔹 5. Generic Class

```ts
class StorageBox<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }
}
```

---

## Usage

```ts
const box = new StorageBox<string>("Hello");
```

---

# 🔥 Part 2: Utility Types

These are built into TypeScript.

---

# 🔹 1. `Partial<T>`

👉 Makes all properties optional.

---

## Example

```ts
interface User {
  name: string;
  age: number;
}
```

```ts
type PartialUser = Partial<User>;
```

---

## Result

```ts
{
  name?: string;
  age?: number;
}
```

---

# 🔥 Real Use

Update API payloads.

```ts
function updateUser(data: Partial<User>) {}
```

---

# 🔹 2. `Required<T>`

👉 Makes all properties required.

---

## Example

```ts
type FullUser = Required<PartialUser>;
```

---

# 🔹 3. `Readonly<T>`

👉 Prevent modification.

---

## Example

```ts
type ReadonlyUser = Readonly<User>;
```

---

## ❌ Invalid

```ts
user.name = "New";
```

---

# 🔹 4. `Pick<T, K>`

👉 Select specific properties.

---

## Example

```ts
type UserPreview = Pick<User, "name">;
```

---

## Result

```ts
{
  name: string;
}
```

---

# 🔹 5. `Omit<T, K>`

👉 Remove properties.

---

## Example

```ts
type SafeUser = Omit<User, "password">;
```

---

# 🔹 6. `Record<K, T>`

👉 Create object types dynamically.

---

## Example

```ts
type Roles = Record<string, boolean>;
```

---

## Usage

```ts
const roles: Roles = {
  admin: true,
  editor: false,
};
```

---

# 🔹 7. `Exclude<T, U>`

👉 Remove types from union.

---

## Example

```ts
type Status =
  | "success"
  | "error"
  | "loading";
```

```ts
type FinalStatus = Exclude<
  Status,
  "loading"
>;
```

---

## Result

```ts
"success" | "error"
```

---

# 🔹 8. `Extract<T, U>`

👉 Keep matching types only.

---

## Example

```ts
type Result = Extract<
  Status,
  "success" | "error"
>;
```

---

# 🔹 9. `NonNullable<T>`

👉 Removes `null` and `undefined`.

---

## Example

```ts
type Data =
  | string
  | null
  | undefined;
```

```ts
type SafeData = NonNullable<Data>;
```

---

## Result

```ts
string
```

---

# 🔥 Part 3: Mapped Types

👉 Transform types dynamically.

---

# Example

```ts
type Options<T> = {
  [K in keyof T]: boolean;
};
```

---

## Usage

```ts
interface Features {
  darkMode: string;
  analytics: string;
}
```

```ts
type FeatureOptions =
  Options<Features>;
```

---

## Result

```ts
{
  darkMode: boolean;
  analytics: boolean;
}
```

---

# 🔥 Part 4: Conditional Types

👉 Type logic using conditions.

---

# Example

```ts
type IsString<T> =
  T extends string ? true : false;
```

---

## Usage

```ts
type A = IsString<string>; // true
type B = IsString<number>; // false
```

---

# 🔥 Real Project Example (YOUR STYLE)

---

# API Response

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

---

# User

```ts
interface User {
  _id: string;
  name: string;
  password: string;
}
```

---

# Safe Response

```ts
type SafeUser = Omit<User, "password">;
```

---

# Update Payload

```ts
type UpdateUser =
  Partial<SafeUser>;
```

---

# 🧠 Must Remember

* Generics = reusable types
* `keyof` = safe property access
* `Partial` = optional fields
* `Pick` = select fields
* `Omit` = remove fields
* `Record` = dynamic object typing
* Conditional types = type logic

---

# ⚠️ Common Mistakes

---

## ❌ Overusing Generics

Keep them readable.

---

## ❌ Nested Utility Hell

Too many utility combinations become unreadable.

---

## ❌ Using `any`

Avoid whenever possible.

---

# 📌 Summary

* Advanced generics create reusable systems
* Utility types reduce duplication
* Mapped types transform structures
* Conditional types add smart logic

---

