const chaiFlaours:string[]=["Masala","Adrak"]
const chaiPrice:number[]=[20,93]

const rating:Array<number>=[4.5,5.0]

type Chai={
  name:string,
  price:number
}

const menu:Chai[]=[
  {
    name:"",
    price:50
  }
]

const cities:readonly string[]=['MLD',"JP"]


const table:number[][]=[
  [
    1,2,3,
  ],
  [
    2,8
  ]
]

let chaiTuple:[string,number];
chaiTuple=["Masa",20]
// chaiTuple[20,"A"]

let userInfo:[string,number,boolean?]

userInfo=["Aminul",100]
userInfo=["Aminul",10,true]

const locations:readonly[number,number]=[28.96,69]

const chaiItems:[name:string,price:number]=["Masala",25]



enum CupSize{
  SMALL,
  MEDIUM,
  LARGE
}

const size=CupSize.LARGE

enum Status{
  PANDING=100,
  SERVED,//101
  CANCELLED//102
}

enum ChaiType{
  MASALA="masala",
  GINGER="ginger"

}

function makeChai(type:ChaiType){
  console.log(type)
}

makeChai(ChaiType.GINGER)

enum RandomEnum{
ID=1,
NAME="Am"
}


let  T:[string,number]=["L",90]
T.push("Error")