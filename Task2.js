//1
console.log("Akshay - Developer");
// Prints text 

// 2
alert("Welcome to JavaScript Session");
// Displays a message

// 3
let likeCoding = confirm("Do you like coding?");
console.log(likeCoding);
// returns true or false

// 4
let food = prompt("Enter your favorite food:");
console.log(food);

// 5
document.writeln("Good Evening Team");
// Writes msg directly

//6
console.log(100);
// Prints number 

//7
console.warn("This is a warning");

//8
console.error("Something went wrong!");

//9
console.clear();

//10
let name = "Akshay";
console.log(typeof name);

//11
let age = 22;
console.log(typeof age);

//12
let isStudent = true;
console.log(isStudent);

//13
let x;
console.log(x);

//14
let y = null;
console.log(y);

//15
let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
console.log(fruits);

//16
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//17
fruits.push("Pineapple");
console.log(fruits);

//18
fruits.pop();
console.log(fruits);

//19
console.log(fruits.length);

//20
let student = {
  name: "Akshay",
  age: 22,
  course: "JavaScript",
};

//21
console.log(student.name);

//22
student.college = "MLRITM";
console.log(student);

//23
console.log(student.fruits[0]);

//24
student.age = 23;
console.log(student);

let a = 10;
let b = 5;
//25
console.log(a + b);

//26
console.log(a - b);

//27
console.log(a * b);

//28
console.log(a / b);

//29
console.log(a % b);

//30
console.log(a ** b);

//31
let x = 5;
console.log(x++); 

//32
let y = 5;
console.log(++y); 

//33
let num = 5;
console.log(num++);
console.log(num);   

//34
let z = 5;
console.log(--z);

//35
let a = 5;
let b = a++;
let c = ++a;

console.log(a); 
console.log(b); 
console.log(c); 

//36
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// 37
let name = prompt("Enter your name:");
console.log("Hello " + name);

//38
let marks = [50, 80, 90, 70];
let max = Math.max(...marks);
console.log(max);

// 39
let fruitsObj = {
  category: "Seasonal",
  items: ["Mango", "Banana", "Pineapple"]
};
console.log(fruitsObj.items[1]);

//40
let favFruits = [];
favFruits.push(prompt("Enter fruit 1"));
favFruits.push(prompt("Enter fruit 2"));
favFruits.push(prompt("Enter fruit 3"));

console.log(favFruits);