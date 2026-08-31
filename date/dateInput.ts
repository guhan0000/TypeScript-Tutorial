const today = new Date();
const birthDay = new Date("2002-07-27");
console.log(today);
console.log(birthDay);
console.log(birthDay.getFullYear());

interface Student {
  rollNo: number;
  firstName: string;
  dateOfBirth: Date;
}

const s1: Student = {
  firstName: "Guhan",
  rollNo: 101,
  dateOfBirth: new Date("2002-07-27"),
};

console.log(s1.dateOfBirth.toString());// Sat Jul 27 2002 05:30:00 GMT+0530 (India Standard Time)
