"use strict";

// Lesson 2: Asynchronous JavaScript and the Event Loop.
// Standalone programs and observations go in this file as code and comments.

// ===== Provided program (task step 2): predict before you run =====
// Write your predicted output order as a comment BELOW, before running this
// file with node. Then run it, mark each line of your prediction right or
// wrong, and correct the wrong ones with one sentence each explaining why.

console.log("doors open");
setTimeout(() => console.log("encore"), 1000);
setTimeout(() => console.log("soundcheck"), 0);
console.log("main act");
setTimeout(() => console.log("intermission"), 500);
console.log("lights down");

// Your prediction:
// 1.doors open -r
// 2.main act -r
// 3.lights down -r
// 4.soundcheck -r
// 5.intermission -r
// 6.encore -r

// ===== Provided program (task step 4): trace the call stack =====
// Trace this as a written call stack diagram in comments, listing every push
// and pop in order. Then cause an error inside the innermost function and
// confirm the stack trace in the console matches your diagram, innermost
// first. Keep it commented out while you work on step 2.
// The blocking loop occupied the main thread and kept the call stack busy.
// While it was running, the browser could not handle other JavaScript tasks
// or respond to user interactions.

function prepare(artist) {
  return "Now playing " + format(artist);
}
function format(artist) {
  return artist.name.toUpperCase();
}
console.log(prepare({ name: "Asake" }));
// stack trace result
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
//     at format (C:\Users\User\Desktop\startupistan-practice\system-design-stretch\lesson-02.js:39:22)
//     at prepare (C:\Users\User\Desktop\startupistan-practice\system-design-stretch\lesson-02.js:36:27)
//     at Object.<anonymous> (C:\Users\User\Desktop\startupistan-practice\system-design-stretch\lesson-02.js:41:13)
//     at Module._compile (node:internal/modules/cjs/loader:1521:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1623:10)
//     at Module.load (node:internal/modules/cjs/loader:1266:32)
//     at Module._load (node:internal/modules/cjs/loader:1091:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
//     at node:internal/main/run_main_module:28:49
