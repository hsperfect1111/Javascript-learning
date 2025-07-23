// fetch API

// API : Application Programming interface
// fetch() method is used to fetch a resource (data). 
// let promise = fetch(URL, [options])

// const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);

// jb bhi hum promises ko use krte h, humare paas multiple tarike hote h promises se result nikalne k 
// 1. Promise chaining
// 2. async await 

// async await

// const getFacts = async () => {
//     let promise = await fetch(URL);
//     console.log(promise);
// }

// ---

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response);
// }

// >> getFacts()
// output:
// getting data... 
// Promise {<pending>}
// Response {type: 'cars', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, ...}

// NOTE : Ye Response ek obj h , iske andar prototype bhi hume dikhai de raha h 

// API ko request bhej rahe h pr Data humare paas jo return hokr aa raha h uski wajha se humara page reload nhi ho raha h
// Generally nayi jo information aati h page k upar woh page k reload hone k baad aati h 
// Jb bhi hum API's call kr rahe hote h internally to humara page bilkul bhi reload nhi ho raha and runtime pr saari ki saari information update ho rahi h 
// Response runtime pr update ho raha h 


// ---

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response.status);
// };

// output:
// status: 200

// jb bhi hum fetch method ko use krte h aur koi bhi option usse nhi bhejte to fetch method ek particular type ki request create krta h aur is request ko khte h GET request.
// Woh request jo sirf data lane ka kaam krti h unhe GET Request bolte h. 
// Yaha pr jo bheji h woh h GET Request 

// Jb hum fetch API ko use krte h to maximum time GET Request hi use kr rahe hote h 

// ---

// Understanding Terms 

// AJAX is Asynchronous JS & XML 
// JSON is JavaScript Object Notation

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response);  // JSON format
// };

// ---

// max API's JSON format m data return krti h to un API's ko AJAJ bhi kh skte h 
// AJAJ Asynchronous JavaScript and JSON 

// API ko jaise hi request bheji humare paas response aata h (JSON format m)
// Ye (JSON format) hume convert krna pdta h JS Object m 
// convert krne k liye use krta h json() method
// json() method is asynch method hota h second promise return krta h , // fetch API ka fetch method async hota h promise return krta h 
// json() method: (Input is JSON, output is JS object)

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response);  // JSON format
//     let data = await response.json();
//     console.log(data);
// };

// ---

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response);  // JSON format
//     let data = await response.json();
//     console.log(data[0]);
// };

// ---

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response);  // JSON format
//     let data = await response.json();
//     console.log(data[0].text);
// };

//---

// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL); // yaha se jo bhi return hota h use hum response kahte h 
//     console.log(response);  // JSON format
//     let data = await response.json();
//     factPara.innerText = data[0].text;
// };

// btn.addEventListener("click", getFacts);


// ==== isi ko promise chain se bhi kr skte h ====

// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// function getFacts() {
//     // isi kaam ko promise chain se krte to kya hota 
//     // sbse phele hume fetch API ko call krni hoti using URL
//     // Ab Ye fetch API hume kuch response return krke deti
//     fetch(URL).then((response) => {
//         return response.json(); // Ye jo response aata ab is response ko dobara se parse krna pdta , parse mtlb data ka formate change krna 
//     }).then((data) => { // yaha final data aayega 
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

// btn.addEventListener("click", getFacts);

// NOTE : Ye difficult h better way hota h async-await bco2 it is easy to read

// ========= Request & Response ==========

// HTTP Verbs
// Response Status Code 

// HTTP : HyperText Transfer Protocol

// HTTP request methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods

// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status


// const URL = "https://cat-fact.herokuapp.com/facts/shradha";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);  // JSON format
//     let data = await response.json();
//     factPara.innerText = data[0].text;
// };

// btn.addEventListener("click", getFacts);

// output:
// GET https://cat-fact.herokuapp.com/facts/shradha 400 (Bad Request)
// status: 400
// statusText: "Bad Request"
// Response
    // headers: Headers {}

// NOTE : HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.

// Homework Task 
// Sending POST Request :
// using this fetch method -> fetch(URL, options)


// Window: fetch() method
// https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch



// ===================== Part2 ======================

// const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/inr.json"

// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

// const dropdowns = document.querySelectorAll(".dropdown select");
// // .dropdown select : It selects all <select> elements that are inside any element with the class .dropdown.

// for(let select of dropdowns) {
//     for (currCode in countryList){
//         // console.log(code, countryList[code]);
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         select.append(newOption);
//     }
// }

// ===================== Part2.1======================

// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const BASE_URL = "https://api.exchangerate.host/convert";

const dropdowns = document.querySelectorAll(".dropdown select");
// .dropdown select : It selects all <select> elements that are inside any element with the class .dropdown.
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        // Agar ye "from" wala dropdown hai aur currency "USD" hai, to is option ko default select kar do.
        if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
        }
        // Har currency ke liye ek <option> banake current dropdown mein add kar diya ja raha hai.
        select.append(newOption);
    }

    // jb bhi humara select change ho use case m update flag ko call lagayege with evt.target, EventListener m event (evt) object hoti h
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target); // target hota h jb bhi humne kuch bhi change kiya to kaha pr change aaya woh hum update flag ko paas kr dete h 
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal); 100
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // console.log(fromCurr, toCurr);
        // output :
        // <select name="from">
        //     <option value="AED">AED</option>
        //     <option value="USD">AED</option>
        //     <option value="INR">AED</option>
        // </select>
    // console.log(fromCurr.value, toCurr.value);
        // output :
        // USD INR

    // console.log(fromCurr, toCurr);
    // isse pura ka pura element aa jayega 
    // console : 
        // <select name="from">...</select>
        // <select name="to">...</select>
    
    // Hume pura element nhi chahiye uski value chahiye 
    // console.log(fromCurr.value, toCurr.value);  // USD INR

    // Humari value capital m aa rahi h pr humari api jo h woh capital Letter m work nhi krti woh small Letter m work krti h to isiliye hume toLowerCase() krna padega
    // const URL = `${BASE_URL}/${fromCurr}/${toCurr}.json`;
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // Line:264 await use krne k liye hume func ko async banana padega
    let response = await fetch(URL);
    // console.log(response);
    // console :
        // Response {type: 'cors', url: 'https://c
        // dn.jsdelivr.net/gh/fawazahmed0/currency
        // -api@1/latest/currencies/usd/inr.json',
        // redirected: false, status: 200, ok: true, ...}

    let data = await response.json();
    console.log(data);
    // console :
        // {date: '2023-12-14', inr: 83.29318595}
        //     date: "2023-12-14"
        //     inr: 83.29318595
        //     [[Prototype]]: Object

    // Note : exchange rate is this value inr: 83.29318595
    // ab is value (inr: 83.29318595) ko kaise access kare

    let rate = data[toCurr.value.toLowerCase()];
    // console.log(rate);  // 83.29318595

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

// yaha pr element humara select h
const updateFlag = (element) => {
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// await use krne k liye hume func ko async banana padega
btn.addEventListener("click", (evt) => {
    evt.preventDefault();   // form jb submit hota h to page refresh hota h, URL m change hota h, Hum chahte h kuch bhi change na ho jo bhi kaam hoga woh hum krvayege
    updateExchangeRate();
});

// addEventListener jb first time humara document tbhi hum USD to INR conversion dikhana chahte h
// jaise hi page humara load ho hum updateExchange ko call krna chahte h 
window.addEventListener("load", () => {
    updateExchangeRate();
});

