//      Array methods

//              Push() : add to end
// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// console.log(foodItems.push("chips"));
// console.log(foodItems);


// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems.push("chips", "burger", "panner"));
// console.log(foodItems);


//              Pop() : delete from end & return , change original array
// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);


// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deletedItems = ", deletedItem);


//              toString() : converts array to string
// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());  


// to check original array k andar change hua h yaa nhi
// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString()); // toString original array k andar change nhi krta
// console.log(foodItems); // nhi hua 


// let marks = [97,85,45,45,87];
// console.log(marks.toString());  // converts array to string


//              Concat() : joins multiple arrays & returns result
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman","Batman"];
// let heroes = marvelHeroes.concat(dcHeroes)
// console.log(heroes);


// Note : concat can't change the original array
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman","Batman"];
// let heroes = marvelHeroes.concat(dcHeroes)
// console.log(heroes);
// console.log(marvelHeroes);
// console.log(dcHeroes);


// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman","Batman"];
// let indianHeroes = ["shaktiman", "krish"];
// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes)
// console.log(heroes);


//              unshift() : add to start
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// Note : unshift change the original array


//              shift() : delete from start & return
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// console.log(marvelHeroes);
// marvelHeroes.shift();
// console.log(marvelHeroes);

// Note : shift change the original array


let marvelHeroes = ["thor", "spiderman", "ironman"];
let val = marvelHeroes.shift();
console.log(marvelHeroes);
console.log("deleted =", val);
