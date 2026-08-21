let firstName: string = "Guhan";
let age: number = 24;
let salary: number = 25535.54;
let isSingle: boolean = true;
let skills: string[] = ["react", "angualr", "react-native"]; // array of string
let ids: number[] = [1, 3, 5]; // array of numbers
let sampleBooleanArr: Array<boolean> = [true, false, true, false]; // alternate way for declaring array
ids.push(5);
console.log(ids);
console.log(sampleBooleanArr);
// objects
// const user = { userId: 123, userName: "abx123", email: "abc@rjk.com" }; // js objects
// console.log(user);

// object
const user: { userId: number; userName: string; email: string } = {
  userId: 101,
  userName: "guhan",
  email: "guhan@kfk.vo",
};
console.log(user);
