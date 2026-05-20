//interface

interface Chai{
  flavor:string,
  price:number
}


const masala:Chai={
 flavor:"",
  price:30
}

interface Shop{
  readonly id:number
  name:string
}

const s:Shop={
  id:256252,
  name:'ChaiCode Shop'
}

// s.id=22

interface DiscountCalculator{
  (price:number):number
}

const apply50:DiscountCalculator=(p)=>p*0.5

interface TeaMachine{
  start():void;
  stop():void
}

const machine:TeaMachine={
  start() {
    console.log("Start")
  },
  stop() {
    console.log("Stop")
  },
}


interface ChaiRating{
  [flavor:string]:number
}

const rating:ChaiRating={
  ok:5.5,
  ginger:4.5
}

interface User{
  name:string
}
interface User{
  age:number
}

const u:User={
  name:"Aminul",
  age:20
}

interface A{
  a:string
}
interface B{
  b:string
}

interface C extends A,B{}