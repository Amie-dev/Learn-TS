function makeChai(type: string, cups: number) {
  console.log();
}
makeChai("Masala Chai", 30);

function getChaiPrice(): number {
  return 25;
}

function makeChaiOrder(order: string) {
  if (!order) {
    return null;
  }
  return order;
}

function logChai(): void {
  console.log("");
}

function orderChai(type?: string) {}

function orderChai1(type: string = "") {}

function createChai(order: {
  type: string;
  suger: number;
  size: "samll" | "large";
}) {
  console.log(order);
}
