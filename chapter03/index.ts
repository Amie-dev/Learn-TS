let username: string = "Aminul";



let price: number = 1999;


let isLoggedIn: boolean = true;


let data: any = "hello";
data = 123;
data = true;

let value: unknown = "hello";


if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ safe
}

function logMessage(): void {
  console.log("Hello");
}

let data1: null = null;
let value1: undefined = undefined;

let user: string | null = null;

let numbers: number[] = [1, 2, 3];


let names: Array<string> = ["A", "B"];

let user1: [string, number] = ["Aminul", 22];
// user1 = [22, "Aminul"]; // ❌ ERROR


let user2: { name: string; age: number } = {
  name: "Aminul",
  age: 22,
};


type Post = {
  title: string;
  price: number;
  isAvailable: boolean;
};


const post: Post = {
  title: "Earbuds",
  price: 1999,
  isAvailable: true,
};


let id: string | number;

id = 101;     // ✅
id = "abc";   // ✅


let status1: "pending" | "success" | "failed";

status1 = "pending"; // ✅
// status1 = "done";    // ❌