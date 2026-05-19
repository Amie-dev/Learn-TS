let response: any = "42";
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3, 4];
value = 2.5;
value.toUpperCase();

let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 3, 4];
newValue = 2.5;

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "Chai";
const strDate: string = data as string;



type Role="admin" |"user"

function redirectBaseOnRole(role:Role):void{
  if(role === "admin"){
    console.log("Redirecting to admin dashboard")
    return
  }
  if(role === "user"){
    console.log("Redirecting to user")
    return
  }
  role;
}

function neverReturn():never{
  while(true){}
}