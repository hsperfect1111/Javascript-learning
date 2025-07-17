// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4,
//     printMarks: function (){
//         console.log("marks = ",marks);
//     },
// };

// console.log(student);
// console.log(student.fullName);
// console.log(student.marks);
// console.log(student.printMarks());  // printMarks is not defined


//===========================================


// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4,
//     printMarks: function (){
//         console.log("marks = ",this.marks); // this ka mtlb h whi object = student.marks // marks wali property ko this k through access kr skte h
//     },
// };

// ye console m run kiye gaye h inko vs code m run krna ho to kya likhege 
// student
// student.printMarks
// student.abc 
// student.toString

// console.log(student);   // pura object print karega
// output
// {
//   fullName: 'shradha khapra',
//   marks: 94.4,
//   printMarks: [Function: printMarks]
// }

// console.log(student.fullName); 
// output
// shradha khapra

// console.log(student.marks); 
// output
// 94.4


// student.printMarks();       // function call karega
// output
// marks =  94.4

// console.log(student.printMarks);
// output
// [Function: printMarks]



// console.log(student.abc);   // undefined (kyunki abc property exist nahi karti)
// output
// undefined


// console.log(student.toString);  // function ka reference dega (default JS ka method)
// output
// [Function: toString]

// ======================================

//                  Topic :  Prototypes in JS
// By default property comes from : Protype object
// let arr = ["apple", "mango", "banana"];
// console.log(arr);
// console.log(typeof(arr));
// console.log(arr.push("litchi"));    // 4
// console.log(arr);

// Khudka prototype banana
// In General, we write function like this in programming
// const employee = {  // employee : object
//     calcTax() {     // calcTax(): function
//         console.log("tax rate is 10%");
//     },
// };
// employee.calcTax();


// ---

// 2nd ways of writting function 
// const employee = {  // employee : object
//     // 1st way 
//     calcTax1() {     // calcTax(): function
//         console.log("tax rate is 10%");
//     },
//     // 2nd way 
//     calcTax2 : function(){
//         console.log("tax rate is 20%");
//     }
// };
// employee.calcTax1();
// employee.calcTax2();


// const employee = {  // employee : object
//     calcTax() {     // calcTax(): function
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
// };
// console.log(karanArjun);


// we can set prototype using __proto__
// we want to use employee property in karanArjun using prototype
// const employee = {  
//     calcTax() {     
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
// };
// console.log(karanArjun);

// // jis obj k function ko hum use krna chahte h, usko hum dusri obj ka prototype set kr dege 
// karanArjun.__proto__ = employee;
// karanArjun.calcTax();

// ======================================
// const employee = {  
//     calcTax() {     
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
// };

// const karanArjun2 = {
//     salary: 50000,
// };

// const karanArjun3 = {
//     salary: 50000,
// };

// const karanArjun4 = {
//     salary: 50000,
// };

// jis obj k function ko hum use krna chahte h, usko hum dusri obj ka prototype set kr dege 
// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// karanArjun3.calcTax();
// console.log(karanArjun3);
// console.log(karanArjun3.calcTax);
// console.log(karanArjun3.calcTax());

// prototype = refrence to an object 

// ======================================

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     // karanArjun k liye tax 20% h 
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };

// Question : kyuki karanArjun k prototype m employee h aur karanArjun k paas proto m calcTax naam ka function to tha hi ab khud ka bhi calcTax naam ka function h to aise m kya hota h jb kisi object k andar and uske prototype k andar dono k andar same naam hota h kisi bhi method ka ?
// karanArjun.__proto__ = employee;
// console.log(karanArjun);
// Note : If object & prototype have same method, object's method will be used 
// karanArjun.calcTax(); // is baar tax rate use hoga jo uske khud k andar define kiya hua h


// ================Classes in JS======================

// class ToyotoCar {
//     start(){     // function
//         console.log("start");
//     }

//     stop(){     // function
//         console.log("stop");
//     }
// }

// is template se obj ko create krte h : let myObj = new MyClss();

// let fortuner = new ToyotoCar();
// console.log(fortuner);  // ToyotoCar {}
// console.log(typeof fortuner);   // object
// fortuner.start();   // start
// console.log(fortuner.start());
// // start
// // undefined
// fortuner.stop();    // stop
// console.log(fortuner.stop());
// stop
// undefined

// =================================================

// class ToyotoCar {
//     start(){     // function
//         console.log("start");
//     }

//     stop(){     // function
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotoCar();
// console.log(fortuner);  // ToyotoCar {}
// console.log(typeof fortuner);   // object
// fortuner.start();   // start

// let lexus = new ToyotoCar();
// // is ToyotoCar class se jo template property h method h saare lexus k andar aakr store ho jaye aur unhe hum use kr paye 
// lexus.start(); // start // lexus k liye humne koi function nhi banaya kyuki humne lexus ko ToyotoCar class ka use krke banaya h is template ko use krke banaya h

// ================================================

// class ToyotoCar {
//     start(){     // function
//         console.log("start");
//     }

//     stop(){     // function
//         console.log("stop");
//     }

//     setBrand(brand) {
//         // this.brand: this k sath jo likha h woh obj ki property h aur jo brand h woh simple whi h jo argument m aaya h 
//         this.brand = brand; // this ka mtlb h whi object jsike liye function call kiya jaa raha h // .this means -> each individual object
//     }
// }

// let fortuner = new ToyotoCar();
// fortuner.setBrand("fortuner");
// // run inside console

// let lexus = new ToyotoCar();
// lexus.setBrand("lexus");
// run inside console


// ============Constructor in class=================

// Constructor ka kaam hota h to initialize the obj 

// isme constructor automatically create ho jayega  isme jbki humne banaya bhi nhi h 
// console m check kro fortuner

// class ToyotoCar {
//     start(){     // function
//         console.log("start");
//     }

//     stop(){     // function
//         console.log("stop");
//     }

//     setBrand(brand) {
//         // this.brand: this k sath jo likha h woh obj ki property h aur jo brand h woh simple whi h jo argument m aaya h 
//         this.brand = brand; // this ka mtlb h whi object jsike liye function call kiya jaa raha h // .this means -> each individual object
//     }
// }

// ===================================================

// Create our own custom constructor
// class ToyotoCar {
//     constructor(){
//         console.log("creating new object");
//     }

//     start(){     // function
//         console.log("start");
//     }

//     stop(){     // function
//         console.log("stop");
//     }

//     setBrand(brand) {
//         // this.brand: this k sath jo likha h woh obj ki property h aur jo brand h woh simple whi h jo argument m aaya h 
//         this.brand = brand; // this ka mtlb h whi object jsike liye function call kiya jaa raha h // .this means -> each individual object
//     }
// }

// let fortuner = new ToyotoCar(); // constructor
// let lexus = new ToyotoCar();    // constructor

// ===================================================

// argument bhi paas kr skte h 
// class ToyotoCar {
//     constructor(brand){
//         console.log("creating new object");
//         this.brand = brand;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotoCar("fortuner"); // argument bhi paas kr skte h 
// let lexus = new ToyotoCar("lexus");    // argument bhi paas kr skte h 


// ---

// class ToyotoCar {
//     constructor(brand){
//         console.log("creating new object");
//         this.brand = brand;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotoCar("fortuner"); // brand: fortuner
// let lexus = new ToyotoCar();    // brand: undefined


// ---

// class ToyotoCar {
//     constructor(brand){
//         console.log("creating new object");
//         this.brand = brand;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotoCar("fortuner"); // brand: fortuner
// let lexus = new ToyotoCar();    // brand: undefined
// // object k andar change , brand ki value update ho jayegi 
// lexus.brand  = "lexus";

// ================================================

// first time pr object create ho rahi h us time pr kuch kaam krvana h to woh kaam constructor krta h 

// class ToyotoCar {
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotoCar("fortuner", 10); // brand: fortuner
// console.log(fortuner);  // ToyotoCar { brand: 'fortuner', mileage: 10 } // object is a type of toyota car isliye o/p m ToyotoCar likha hua aa raha h // object toyotaCar k blueprint se bani h 
// let lexus = new ToyotoCar("lexus", 12);    // brand: undefined
// console.log(lexus);


// ==============Inheritance in JS==================

// class Parent {

// }

// class Child extends Parent {

// }

// ==============================================

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {

// }

// let obj = new Child();
// console.log(obj);   // Child {}

// obj.hello();    // hello

// obj.abc();  // TypeError: obj.abc is not a function 

// =============================================

// class Parent {
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Parent{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let shradhaObj = new Engineer();
// console.log(shradhaObj);    // Engineer {}
// shradhaObj.eat();   // eat

// =================================================

// Doctor k paas bhi Person ki sari ki sari property inherit hokr aa jayegi 
// class Person {
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let shradhaObj = new Engineer();
// console.log(shradhaObj);    // Engineer {}
// shradhaObj.eat();   // eat

// let himanshuObj = new Doctor();
// console.log(himanshuObj);   // Doctor {}
// himanshuObj.sleep();    // sleep


// ===============================================

// ek work naam ka function hum Person m bhi define krde aur childClass m bhi to us case m childClass wala function invoke hota h
// class Person {
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let shradhaObj = new Engineer();    
// // ek work naam ka function hum Person m bhi define krde aur childClass m bhi to us case m childClass wala function invoke hota h
// shradhaObj.work();   // solve problems, build something 


// Note : If Child & Parent have same method, child's method will be used. [Method Overriding]

// ===================================================

// create constructor in Parent class 

// class Person {

//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

// // person class ki koi bhi obj banti h to jo p1 aayega usme species aa jayega aur saare function aa jayege
// let p1 = new Person();
// console.log(p1);    // Person { species: 'homo sapiens' }


// // Engineer k paas bhi species wali property aayegi
// let e1 = new Engineer();
// console.log(e1);    // Engineer { species: 'homo sapiens' }


// ==================super Keyword================
// used to call parent constructor to access property and method 

// Engineer class k paas bhi apna constructor ho skta h 
// Note : Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
// child class ko drived class bolte h jo kisi parent class se kuch lekr aai h 

// class Person {

//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{  // child class ko drived class bolte h jo kisi parent class se kuch lekr aai h 
//     constructor(branch) {
//         // Note : Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
//         // Agar hum child class m constructor banate h to woh constructor super ka use krke parent class k constructor ko phele call kare 
//         super(); // to invoke parent class constructor
//         this.branch = branch;
//     }

//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");
// console.log(engObj)

// =============================================
// pata laga rahe h ki konsa constructor phele call hua 

// class Person {

//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch) {
//         console.log("enter child constructor");
//         // Note : Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
//         super(); // to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }

//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");

// // o/p :
// // enter child constructor
// // enter parent constructor
// // exit child constructor


// ===============================================

// name value ka access Engineer m to h hi pr agar is name value ko Engineer constructor se parent construct m pass krna h to same method ko super k andar paas kr skte h 

// class Person {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         // name value ka access Engineer m to h hi 
//         // pr agar is name value ko Engineer constructor se parent construct m pass krna h 
//         // to same method ko super k andar paas kr skte h 
//         super(name); // to invoke parent class constructor
//     }

//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");
// console.log(engObj);

// =================================================

// Agar hume super k andar name ko paas nhi kiya 
// class Person {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         // Agar hume super k andar name ko paas nhi kiya 
//         super(); // to invoke parent class constructor
//     }

//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");
// // name ki value hogi undefine kyuki name humne Engineer ko to de diya pr humne parent CLass ko super ki help se paas nhi kiya 
// console.log(engObj);    // Engineer { species: 'homo sapiens', name: undefined }

// ==================================================

// super class k eat method ko call krna h 

// class Person {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         // Agar hume super k andar name ko paas nhi kiya 
//         super(); // to invoke parent class constructor
//     }

//     work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");
// engObj.work();

// o/p :
// eat
// solve problems, build something

// Interview Question : Method overriding , super keyword kaise kaam krta h , inheritance kya hoti h , extend keywork kis liye use hota h 

// ==================================================

// Let's Practice 
// Qs .

// let DATA = "secret information";

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new User("shradha", "shradha@email.com");
// console.log(student1);  // User { name: 'shradha', email: 'shradha@email.com' }
// student1.viewData();    // data =  secret information
// let student2 = new User("himanshu", "himanshu@email.com");

// let teacher1 = new User();
// teacher1.viewData();    // data =  secret information

// =====================================

// Qs .

// let DATA = "secret information";

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let admin1 = new Admin("admin", "admin@college.com");
// console.log(admin1);
// console.log(DATA);

// ========================================

// Qs .
// admin data ko change kr skta h

// let DATA = "secret information";

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let admin1 = new Admin("admin", "admin@college.com");
// console.log(admin1);    // Admin { name: 'admin', email: 'admin@college.com' }
// console.log(DATA);  // secret information
// // admin data ko change kr skta h
// admin1.editData();
// console.log(DATA);  // some new value


// =========ERROR HANDLING=================

// try-catch : agar kisi line m humara erroe aata h to uske aage ka code sahi bhi ho to bhi nhi chlta to uske liye use krte h try-catch block


// let a = 5;
// let b = 6;
// console.log(a+b);
// console.log(a*b);
// console.log(a+c);
// console.log(a+b);
// console.log(a*b);

// o/p:
// 11
// 30
// console.log(a+c); ReferenceError: c is not defined

// ===================================

// ERROR HANDLING By using try catch 

// Synatx :
// try{
//     ...normal code
// } catch(err) {  // err is error object
//     ...handling error
// }

// ======================================

// catch block is use to handle our errors

let a = 5;
let b = 6;
console.log(a+b);
console.log(a*b);
try{
    console.log(a+c);
} catch(err) {
    console.log(err);
}
console.log(a+b);
console.log(a*b);

// o/p :
// 1
// 30
// ReferenceError: c is not defined
// 11
// 30

// ==========================================

// Notes : 
// object : entity having property (variable) and method

// Interview Question : Method overriding , super keyword kaise kaam krta h , inheritance kya hoti h , extend keywork kis liye use hota h 

// ChatGPT said:
// Chaliye sabhi concepts ko interview-friendly, short & clear explanation ke sath samjhte hain — with examples:

// 🔹 1. Inheritance kya hoti hai?
// Jab ek class (child) doosri class (parent) ki properties aur methods ko access ya reuse karti hai, use inheritance kehte hain.

// 🧠 Purpose: Code reusability.

// javascript
// Copy
// Edit
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.speak(); // Inherited from Animal
// d.bark();  // Dog's own method
// 🔹 2. extends keyword ka use?
// JavaScript mein extends keyword ka use ek class ko doosri class se inherit karne ke liye hota hai.

// javascript
// Copy
// Edit
// class Parent {}
// class Child extends Parent {}
// 🔹 3. Method Overriding kya hota hai?
// Jab child class parent class ke method ko same name se redefine karti hai, to use method overriding kehte hain.

// javascript
// Copy
// Edit
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");  // Overriding speak()
//   }
// }

// const d = new Dog();
// d.speak(); // Output: Dog barks
// 🔹 4. super keyword kaise kaam karta hai?
// super ka use parent class ke constructor ya method ko call karne ke liye hota hai.

// ➤ a) Call parent constructor:
// javascript
// Copy
// Edit
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);        // Call parent constructor
//     this.breed = breed;
//   }
// }
// ➤ b) Call parent method:
// javascript
// Copy
// Edit
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak();           // Call parent method
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.speak();
// // Output:
// // Animal speaks
// // Dog barks
// 💡 In Interview Style:
// 🔸 Q: What is inheritance?
// → It allows one class to inherit properties and methods from another class using the extends keyword.

// 🔸 Q: What is method overriding?
// → When a subclass redefines a method from its parent class with the same name.

// 🔸 Q: What is the use of super keyword?
// → It is used to access parent class constructor or methods from the child class.

// Not imp
// just for seeing o/p bs aise hi check kr liya dekh kr
// console.log(student.printMarks());
// // output
// 🔍 Explanation:
// student.printMarks() → function call hota hai.

// Is function ke andar:

// js
// console.log("marks = ", this.marks);
// chalti hai, jisme this ka reference student object hota hai.

// Lekin function kuch return nahi karta, isliye undefined return hota hai.

// Aur us undefined ko console.log(...) me print kiya ja raha hai.

// 🧾 Output:
// bash
// marks =  94.4
// undefined 

// 🔁 Breakdown:
// Pehla line "marks = 94.4" aata hai kyunki console.log() function ke andar likha gaya hai.

// Dusra line undefined isliye aata hai kyunki printMarks() function kuch return nahi karta, aur aap console.log() ke andar usko likh rahe ho.

// ✅ Right Way If You Don’t Want undefined:
// js
// student.printMarks(); // bas function call karo
// Ye sirf "marks = 94.4" print karega.

// 🟡 1. Function kuch return kyun nahi karta?
// JavaScript me agar aap kisi function ke andar return statement nahi likhte, to wo function undefined return karta hai by default.

// 👉 Example:
// js

// function greet() {
//     console.log("Hello!");
// }

// console.log(greet());  // Output:

// 🔍 Output:
// javascript

// Hello!
// undefined

// Hello! aaya kyunki function me console.log() tha.

// undefined aaya kyunki greet() ne kuch return nahi kiya.

// ✅ Agar aap return karwaoge:
// js

// function greet() {
//     return "Hello!";
// }

// console.log(greet());  // Output: Hello!
