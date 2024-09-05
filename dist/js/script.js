"use strict";

const billInput = document.querySelector(".bill");
const tipBtns = document.querySelectorAll('input[type="submit"]');
const desiredTip = document.querySelector(".custom");
const peopleBtn = document.querySelector(".people");
const amountEl = document.querySelector("#amount");
const totalEl = document.querySelector("#total");
const resetBtn = document.querySelector(".reset-btn");
const errorMessage = document.querySelector(".zero-text");

let activeBtn, globalMem, customTip;
let isValid = true;

tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (activeBtn) {
      activeBtn.classList.remove("active");
    }

    // if (!billInput.value || !tipBtns || !desiredTip || !peopleBtn) return;
    tipBtn.classList.add("active");
    activeBtn = tipBtn;
    let str = e.target.value;
    let pos = str.indexOf("%");
    let digit = +str.slice(0, pos) / 100;

    globalMem = billInput.value * digit;
    console.log(globalMem);
  });
});

desiredTip.addEventListener("change", () => {
  let tip = Number(desiredTip.value) / 100;
  console.log(tip);

  customTip = billInput.value * tip;
  globalMem = customTip;
  console.log(customTip);
});

peopleBtn.addEventListener("input", () => {
  let peopleValue = Number(peopleBtn.value);

  if (peopleValue === 0) {
    errorMessage.innerHTML = `Can't be zero`;
  } else {
    errorMessage.innerHTML = "";
  }
  let perPerson = (globalMem / peopleValue).toFixed(2);

  let totalValue = (globalMem + Number(billInput.value)) / peopleValue;
  console.log(Number(totalValue));

  amountEl.textContent = `$${perPerson}`;
  totalEl.textContent = `$${totalValue.toFixed(4)}`;

  console.log(perPerson);
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleBtn.value = "";
  activeBtn.classList.remove("active");
  desiredTip.value = "";
  amountEl.textContent = "$0.00";
  totalEl.textContent = "$0.00";
  resetBtn.classList.add("disable");
});

billInput.addEventListener("change", () => {
  resetBtn.classList.remove("disable");
});
// if (isValid === false) {
//   isValid = false;
//   console.log("what");
//   resetBtn.classList.add("disabled");
// }

// console.log(globalMem);

// tipBtns.forEach((tipBtn) => {
//   tipBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // let str = e.target.text;
//     // let pos = str.indexOf("%");
//     // let digit = +str.slice(0, pos);
//     // globalMem = digit;
//     if (activeBtn) {
//       activeBtn.classList.remove("active");
//     }

//     activeBtn = tipBtn;
//     tipBtn.classList.add("active");

//     usersBill = billInput.value;
//     if (e.target.value === "5%") {
//       usersBill = usersBill * 0.5;
//       billOutput = usersBill;
//     }

//     if (e.target.value === "10%") {
//       usersBill = usersBill * 0.1;
//       billOutput = usersBill;
//     }

//     if (e.target.value === "15%") {
//       usersBill = usersBill * 0.15;
//       billOutput = usersBill;
//     }

//     if (e.target.value === "20%") {
//       usersBill = usersBill * 0.2;
//       billOutput = usersBill;
//     }

//     if (e.target.value === "50%") {
//       usersBill = usersBill * 0.25;
//       billOutput = usersBill;
//     }

//     console.log(e.target.value);
//     console.log(usersBill);
//   });
// });
// console.log(billOutput);

// desiredTip.addEventListener("change", () => {
//   customTip = desiredTip.value;
//   customTip = billInput.value * (customTip / 100);
//   console.log(customTip);
// });
// console.log(customTip, usersBill);

// peopleBtn.addEventListener("input", () => {});
