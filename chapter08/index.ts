
const chai={
  name:"Masala Chai",
  price:20
}
let tea:{
  name:string;
  price:number;
  isHot:boolean
}

tea={
  name:"Ginger",
  price:20,
  isHot:false
}

type Tea={
  name:string;
  price:number;
  ingredients:string[]
}

const makeChai:Tea={
  name:"Adrak Chai",
  price:25,
  ingredients:["adrak","ginger"]
}

type Cup={
  size:string
}
let smallCup:Cup={
  size:"200ml"
}

let bigCup={
  size:"500ml",
  material:"Steel"
}

smallCup=bigCup

type Brew={
  brewTime:number
}
const coffee={
  brewTime:5,
  beans:"Arabica"
}

const chaiBrew:Brew=coffee


type User ={
username:string
password:string
}

const u:User={
  username:"AA",
  password:"12",
  
}

type Item={
name:string,
quentity:number
}
type Address={
  street:string,
  pin:number
}

type Order={
  id:String,
  items:Item[],
  assress:Address
}


type Chai={
  name:string,
  price:number;
  isHot:boolean
}

const updateChai=(updates:Partial<Chai>)=>{
  console.log("")
}
updateChai({
  price:30
})
updateChai({
  isHot:true
})
updateChai({

})

type ChaiOrder={
  name?:string
  quantity?:number
}

const placeOrder=(order:Required<ChaiOrder>)=>{
console.log(order)
}
placeOrder({
  name:"",
  quantity:1
})

type Chai1={
name:string,
isHot:boolean,
ingredien:string[]
}

type BasicChaiInfo=Pick<Chai1,'isHot'|"name">


