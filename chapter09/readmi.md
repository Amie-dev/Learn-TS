# 📘 Chapter 09: OOP Concepts, Interfaces & Generics in TypeScript

This chapter is VERY important for:

* scalable backend systems
* React/React Native architecture
* reusable code
* clean APIs

---

# 🔥 Part 1: OOP (Object-Oriented Programming)

---

# 🔹 What is OOP?

👉 A programming style based on:

* objects
* classes
* reusable structures

---

# 🧠 Main OOP Concepts

| Concept       | Meaning                         |
| ------------- | ------------------------------- |
| Class         | Blueprint                       |
| Object        | Real instance                   |
| Encapsulation | Hide internal data              |
| Inheritance   | Reuse properties                |
| Polymorphism  | Same method, different behavior |
| Abstraction   | Hide complexity                 |

---

# 🔹 1. Class

👉 Blueprint/template

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

# 🔹 2. Object

👉 Instance of class

```ts
const user1 = new User("Aminul", 22);
```

---

# 🔹 3. Access Modifiers

---

## ✅ public

Accessible everywhere

```ts
public name: string;
```

---

## ✅ private

Accessible only inside class

```ts
private password: string;
```

---

## ✅ protected

Accessible inside class + child class

```ts
protected token: string;
```

---

# 🔥 Example

```ts
class User {
  public name: string;
  private password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}
```

---

# 🔹 4. Encapsulation

👉 Protect internal data

```ts
class Bank {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

---

# 🔹 5. Inheritance

👉 Reuse parent class

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

---

## Child Class

```ts
class Admin extends User {
  role: string;

  constructor(name: string, role: string) {
    super(name);
    this.role = role;
  }
}
```

---

# 🔹 6. Polymorphism

👉 Same method behaves differently

```ts
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

# 🔹 7. Abstraction

👉 Hide implementation details

---

## Abstract Class

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}
```

---

## Implementation

```ts
class StripePayment extends Payment {
  pay(amount: number) {
    console.log(amount);
  }
}
```

---

# 🔥 Part 2: Interfaces

---

# 🔹 What is Interface?

👉 Defines structure/contract

---

# Basic Interface

```ts
interface User {
  name: string;
  age: number;
}
```

---

# Object Using Interface

```ts
const user: User = {
  name: "Aminul",
  age: 22,
};
```

---

# 🔹 Interface with Function

```ts
interface Add {
  (a: number, b: number): number;
}
```

---

# 🔹 Interface with Class

```ts
interface Person {
  name: string;
  greet(): void;
}
```

---

## Implementing Interface

```ts
class Admin implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello");
  }
}
```

---

# 🔹 Extending Interface

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

---

# 🔥 Why Interface Preferred with Classes

Because:

* cleaner OOP design
* contract-based architecture
* better scalability

---

# 🔥 Part 3: Generics

---

# 🔹 What are Generics?

👉 Reusable types

WITHOUT generics:

```ts
function identity(value: string): string {
  return value;
}
```

👉 only works for string

---

# 🔥 Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

# Usage

```ts
identity<string>("Hello");
identity<number>(100);
```

---

# 🔹 Multiple Generics

```ts
function pair<T, U>(a: T, b: U) {
  return { a, b };
}
```

---

# Usage

```ts
pair<string, number>("Aminul", 22);
```

---

# 🔹 Generic Interface

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

---

# Usage

```ts
const response: ApiResponse<string[]> = {
  success: true,
  data: ["A", "B"],
};
```

---

# 🔹 Generic Class

```ts
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }
}
```

---

# Usage

```ts
const numberBox = new Box<number>(100);
```

---

# 🔹 Generic Constraints

👉 Restrict types

---

## Example

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

# Valid

```ts
getLength("Hello");
getLength([1, 2, 3]);
```

---

# Invalid

```ts
getLength(100); // ❌
```

---

# 🔹 keyof with Generics

🔥 SUPER IMPORTANT

```ts
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}
```

---

# Usage

```ts
const user = {
  name: "Aminul",
  age: 22,
};

getProperty(user, "name");
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

# User Model

```ts
interface User {
  _id: string;
  name: string;
}
```

---

# Typed API

```ts
const response: ApiResponse<User[]> = {
  success: true,
  data: [],
};
```

---

# ⚠️ Common Mistakes

---

## ❌ Using `any`

```ts
function test(data: any) {}
```

---

## ❌ Overcomplicated Generics

Keep generics readable.

---

## ❌ Using Class Everywhere

Sometimes simple objects/types are enough.

---

# 🧠 Must Remember

* Class = blueprint
* Object = instance
* Interface = contract
* Generics = reusable types
* extends = constraints/inheritance
* keyof = safe property access

---

# 📌 Summary

* OOP organizes code
* Interfaces define structure
* Generics make reusable systems
* TS combines OOP + type safety beautifully

---

