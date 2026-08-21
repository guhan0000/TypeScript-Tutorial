type ID = string | number; //union type ID can be one of the types of string and number
let id: ID = "101";
id = 101;
const _id: ID = "200";
console.log(id);
console.log(_id);

type Status = "loading" | "success" | "error";
let status: Status = "success";
console.log(status);
