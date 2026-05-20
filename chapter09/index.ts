//oop 

class Chai {
  flavour:string;
  price:number;

  // constructor(flavour:string,price:number){
  //   this.flavour=flavour;
  //   this.price=price
  // }

   constructor(flavour:string){
    this.flavour=flavour;
    // this.price=price
    console.log(this)
  }
}

// const masalaChai=new Chai("Ginger",20)
const masalaChai=new Chai("Ginger")

masalaChai.flavour='masala'


// accessModifier

class Chai1{
  public flavor:string="Masala"
  private secretIngredinets="Cardamom"

  reveal(){
    return this.secretIngredinets
  }


}

const c=new Chai1()
c.reveal


class Shop{
    protected shopName="Chai Corner"
}

class Branch extends Shop{
  getName(){
    this.shopName
  }
}

new Branch().getName


class Walet{
  #blance=100
  getBlance(){
    return this.#blance
  }
}

const w=new Walet()


class Cup{
  readonly capacity:number =250

  constructor (capacity:number){
    this.capacity=capacity
  }
}

class ModernChai{
  private _suger=2

  get sugar(){
    return this._suger
  }
  set sugar(value:number){
    if (value>5) throw new Error("Too sweet")
  }
}

const newModernChai=new ModernChai()

newModernChai.sugar=3


class EkChai{
  static shopName="ChaiCOde Caffe"
  constructor (public flavour:string){}
}

console.log(EkChai.shopName)


abstract class Drink{
  abstract make():void
}

class MyChai extends Drink{
  make(): void {
    
  }
}


class Heater{
  heat(){}
}

class ChaiMaker{
  constructor(private heater:Heater){}
  make(){
    this.heater.heat
  }
}