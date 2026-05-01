function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order : ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving Defult masala Chai `;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size == "small") {
    return `${size} cutting Chai...`;
  }
  if (size === "medium" || size === "large") {
    return `Make Extra Chai...`;
  }

  return `Chai Order #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve;
  }
}

type ChaiOrder = {
  type: string;
  suger: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.suger === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.suger} sugar`;
  }
  return `Serving custom Chai :${item}`;
}

type MasalaChai = {
  type: "masala";
  spicelevel: number;
};
type GingerChai = {
  type: "ginger";
  amount: number;
};
type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return "masala Chai";
      break;
    case "ginger":
      return "ginger Chai";
      break;
    case "elaichi":
      return "elaichi Chai";
      break;
    default:
      break;
  }
}

function brew(order:MasalaChai | GingerChai){
  if ("spiceleve" in order) {
    //
  }
}

