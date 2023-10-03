
// var name = prompt("Please enter your name:", "Abdullah");

// if (gender === "male") {
//     alert(`Welcome, Mr ${name}.`);
//   } else if (gender === "female") {
//     alert(`Welcome, Ms ${name}.`);
//   } else {
//     alert(`Welcome, ${name}`);
//   }
// var gender
// yourGender();
// if (gender === "male") {
//   alert(`Welcome, Mr ${name}.`);
// } else alert(`Welcome, Ms ${name}.`);

// // Ask the user if they want a hot or cold drink
// const drinkType = prompt("Do you want a hot or cold drink?");

// // Ask the user for the name of their drink
// const drinkName = prompt("Enter the name of your drink:");

// // Alert the user that their drink is getting prepared
// alert(`Your ${drinkType} ${drinkName} is getting prepared.`);

// // Print a statement on the console that shows the user's name and drink order
// console.log(`${name} ordered a ${drinkType} ${drinkName}.`);
// let array = [name , gender , drinkType , drinkName];
// for (let index = 0; index < array.length; index++) {
//   console.log( array[index]);

// }
// function yourGender() {
//   while (gender  !== "male" && gender !== "female") {
//      gender = prompt("Please enter your gender: male or female", "male");
//   }
//   // eeeee
// }
let div_1 = document.createElement("div");

document.getElementById("myDIV").appendChild(div_1);

let p_1 = document.createElement("p");
let name = document.createTextNode("name : ");
p_1.appendChild(name);

let ul_1 = document.createElement("ul");

div_1.appendChild(p_1);
div_1.appendChild(ul_1);

let li_1 = document.createElement("li");
let li_2 = document.createElement("li");
let li_3 = document.createElement("li");

ul_1.appendChild(li_1);
ul_1.appendChild(li_2);
ul_1.appendChild(li_3);

let gender = document.createTextNode("gender : ");
li_1.appendChild(gender);
let age = document.createTextNode("age : ");
li_2.appendChild(age);
let your_order = document.createTextNode("order : ");
li_3.appendChild(your_order);


var form = document.getElementById("form");
// let hotorcold ;
// Add a submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Call a function to handle the form data
  name = document.getElementById("UserName").value;
  gender= document.getElementById("Gender").value;
  age = document.getElementById("Age").value;
  your_order = document.getElementById("drink type").value;

  let checkbox = document.getElementById("hot");
  // Check if the checkbox is checked and get its value
  if (checkbox.checked) {
    var checkboxValue = checkbox.value;
    console.log("Checkbox value: " + checkboxValue);
  } else {
    checkbox = document.getElementById("cold");
    if (checkbox.checked) {
      var checkboxValue = checkbox.value;
      console.log("Checkbox value: " + checkboxValue);
    } else console.log("Checkbox is not checked.");
  }
  console.log(checkbox.value);
  p_1.textContent = `name : ${name}`;
  li_1.textContent= `gender : ${gender}`;
  li_2.textContent= ` age : ${age}`;
  li_3.textContent=`order : ${checkboxValue} ${your_order}`;
});



