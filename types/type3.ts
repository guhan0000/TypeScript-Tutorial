const data = [
  { title: "Laptop", price: 50000 },
  { title: "Mobile Phone", price: 20000 },
  { title: "Hard Disk", price: 5000, rating: 4.5 },
  { title: "Pendrive", price: 600, capacity: 64, rating: 4 },
];
console.log(data);
const nums = [1, 3, 5, 6];
console.log(typeof nums); // object
type prodTypes = (typeof data)[number]; // gets any one of the element's type in the array
//prodTypes o/p
/*
type prodTypes = {
 title: string;
 price: number;
 rating?: never;
 capacity?: never;
} | {
 title: string;
 price: number;
 rating: number;
 capacity?: never;
} | {
 title: string;
 price: number;
 capacity: number;
 rating: number;
}
*/
// here number represents the numeric array index value
/*typeof data o/p
const data: ({
 title: string;
 price: number;
 rating?: never;
 capacity?: never;
} | {
 title: string;
 price: number;
 rating: number;
 capacity?: never;
} | {
 title: string;
 price: number;
 capacity: number;
 rating: number;
})[]
*/
const prod1: prodTypes = { title: "Headphone", price: 500 };
console.log(prod1);
const prod2: prodTypes = {
  title: "TV",
  rating: 4.6,
  price: 45000,
  capacity: 1,
};

const user = {
  firstName: "Arthur",
  lastName: "Morgan",
  age: 43,
  address: {
    city: "San Fransisco",
    state: "CA",
    country: "USA",
  },
};

console.log(typeof user); // object
console.log(Array.isArray(user));
type addressType = (typeof user)["address"];
const newAddress: addressType = {
  city: "Las Vegas",
  state: "NV",
  country: "USA",
};
console.log(newAddress);
