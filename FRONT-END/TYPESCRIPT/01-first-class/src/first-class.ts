// let age: number = 23;

// if (age < 26) age += 10;

// console.log(age);

// console.log("seid");

// object
// let employee: { id: number; name: string; age: number } = {
//   id: 123,
//   name: "asdf",
//   age: 23,
// };

// type Employee = {
//  id: number;
//  name: string;
//  age?: number
//  };

// let employee: Employee = {
//   id: 123,
//   name: "asdf",
//   age: 23,
// };

// function KlToLbs(weight: number | string): number {
//   if (typeof weight === "number")
//     return weight * 2.2;
//   else
//     return parseInt(weight) * 2.2;
// }

// // 1️⃣ Create a Type Alias

// type Alias = {
//   id: number | string;
//   name: string;
//   price: number;
//   isStock?: boolean;
// };

// // 2️⃣ Union Type Function

// function formatValue(Value: number | string):number {
//   if (typeof Value === "number") return toFixed(2);
//   else return Value.toUpperCase();
// }

// formatValue("hello"); // "HELLO"
// formatValue(12.3); // "12.30"

// // 3️⃣ Literal Types

// type Theme = "light" | "dark" | "system";

// function setTheme(theme: Theme): void {
//   console.log(`Theme set to ${theme}`);
// }
