// generics

function wrapInArray<T>(item:T):T[]{
  return [item]
}
wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavor:"Ginger"})


function pair<A,B>(a:A,b:B):[A,B]{
  return [a,b]
}

pair("Masala","Test")
pair("Masala",20)
pair("Masala",{})
pair("Masala",[])


interface Box <T>{
  content:T
}

const numberBox:Box<number>={
  content:10
}
const strBox:Box<string>={
  content:"10"
}

interface ApiPromiss<T>{
  status:number,
  data:T
}

const res:ApiPromiss<{flavor:string}>={
  status:200,
  data:{
    flavor:"Masala"
  }
}