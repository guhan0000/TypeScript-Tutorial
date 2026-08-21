interface Product {
  prodId: number;
  prodName: string;
  prodPrice: number;
  isProdAvail: boolean;
}
// accessing interface
const prod: Product = {
  prodId: 101,
  prodName: "Watch",
  prodPrice: 3000,
  isProdAvail: true,
};
console.log(prod);

// normal object using ts
const user: { userId: number; userName: string } = {
  userId: 1,
  userName: "guhan",
};
