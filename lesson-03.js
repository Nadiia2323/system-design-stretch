"use strict";

// Lesson 3: Promises, async, and await.
// Standalone programs and observations go in this file as code and comments.
// The loader work happens in stretch-records/script.js.
//
// Step 3, the ordering puzzle: write a program mixing plain logs, a zero
// delay timer, and a settled Promise reaction. Predict the full output order
// in comments before running, then explain in one sentence why the Promise
// beat the timer.

console.log("start");

setTimeout(() => {
  console.log("timer");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
//prediction:
//1. start
//2. end
//3.promise
//4. timer
// The Promise ran before the timer because the callback from the Promise
// goes to the microtask queue and executes first.
// Step 6: paste the final rethrown message that reached the top.
//Artist load failed for the home page. Required data is missing name
