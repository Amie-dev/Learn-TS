

function add(a:number,b:number):number{
  return a+b
}

function noreturn(msg:string):void{
  console.log(msg)
}


function greet(name:string,age?:number){
  return age?`Name : ${name}, age : ${age}` :`Hello ${name}`
}

greet("Aminul")
greet("Aminul",20)


function createUser(userName:string,role:string="user"){
  return `userName :${userName} and Role : ${role}`
}

createUser("Amie")
createUser("Amie","creator")



function sum(...numbers:number[]):number{
  return numbers.reduce((acc,val)=>acc+val,0)
}

sum(1,2,5,9,7,6,72)

type NumFunction = (a: number, b: number) => number;

const add1: NumFunction = (a, b) => a + b;
const multiple:NumFunction=(a,b)=>a*b
const subtract:NumFunction=(a,b)=>a-b



function processUser(name: string, callback: (msg: string) => void) {
  callback(`Hello ${name}`);
}

processUser("Aminul", (msg) => console.log(msg));