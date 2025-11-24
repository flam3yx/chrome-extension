// function saveLead() {
//     console.log("Button clicked from onclick attribute");
// }
// add onclick in the html to work

/*******************************************************************/

let myLeads = []; // array
const inputEl = document.getElementById("input-el"); // const can't be reassigned
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    ulEl.innerHTML += `
        <li>
            <a target='_blank' href='${inputEl.value}'>
                ${inputEl.value}
            </a>
        </li>
    `;
    inputEl.value = "";
})

// less efficient but working ↓
// inputBtn.addEventListener("click", function () {
//     console.log("Button clicked from addEventListener");

//     myLeads.push(inputEl.value); // add the element at the end of the array
//    // clear out the input field
//     inputEl.value = "";
//     console.log(myLeads);

//     renderLeads();
// });

// function renderLeads() {
//     let listItems = "";

//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>";

//         // Other methos ↓
//         // create element
//         // set text content
//         // append to ul
//         // const li = document.createElement("li");
//         // li.textContent = myLeads[i];
//         // ulEl.append(li);
//     }

//     ulEl.innerHTML = listItems;
// }