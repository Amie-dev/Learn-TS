//types

type Order = {
  orderID: number;
  amount: number;
  username: string;
  orderStatus: "panding" | "prepier" | "completed";
};

function order(order: Order) {
  return order;
}

function updateOrder(order: Order) {
  return order;
}

function orderStatus(order: Order) {
  order.orderStatus='completed'
  return order;
}

// class OrderStatus implements Order {
//   orderStatus: "panding" | "prepier" | "completed"='completed'
 
// }


interface taskStatus {
  status:"pandding"|"ongoing"|"completed"|"reject"
}

class Task implements taskStatus{
status: "pandding" | "ongoing" | "completed" | "reject"="reject"
}


type BaseChai={
  tealeval:number
}
type Extra={
  masala:number
}
type Chai=BaseChai & Extra

function makeChai(chai:Chai){
  chai.masala
  chai.tealeval
}

type User={
  username:string,
  bio?:string
}

type Config={
  readonly appName:string,
  version:number
}

const cfg:Config={
  appName:"Apna App",
  version:0.1
}