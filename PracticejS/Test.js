// setTimeout(() => {
//   console.log("Hello");
// }, 4000);

//call backs
// function one(call_two) {
//   console.log("step 1");
//   call_two();
// }

// function two() {}

// one(() => {
//   console.log("step 2");
// });
// let stocks = {
//   Fruits: ["BANANA", "STRAWBERRY", "GRAPES", "APPLE"],
// };

// let order = () => {
//   setTimeout(() => {
//     console.log(stocks.Fruits[0]);
//   }, 2000);
// };

// order();

//promise in js
// let iceCream = () => {
//   setTimeout(() => {
//     console.log("Order placed");
//     setTimeout(() => {
//       console.log("Order Started");
//       setTimeout(() => {
//         console.log("Order successful");
//       }, 1000);
//     }, 1000);
//   }, 2000);
// };

// let iceCream = new Promise((resolve, reject) => {
//   let makekingIce = true;
//   if (makekingIce) {
//     resolve("I have");
//   } else {
//     reject("dont have");
//   }
// });

// iceCream.then(()={

// })

// iceCream();

// promise

let fun = new Promise((resolve, reject) => {
  let isTrue = true;
  if (false) {
    resolve();
  } else {
    reject();
  }
});

fun
  .then(() => {
    console.log("MAKE TEA");
  })
  .then(() => {
    console.log("Tea is Ready.");
  })
  .catch(() => {
    console.log("Error");
  });
