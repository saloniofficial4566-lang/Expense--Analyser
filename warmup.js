// Warmup.js - predict the output BEFORE you run it
console.log(a);
var a = 5;

// Part B: first predict, then remove the // in front of the next line and run again.
// console.log(b); 
let b = 10;

const original = Array.of(1, 2, 3); // <-- Rewritten to avoid syntax stripping!
const alias = original;
const copy = [...original];

alias[0] = 99;
console.log(original[0], copy[0]);

function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const next = makeCounter();
next();
next();
console.log(next());
console.log(0 == '0', 0 === '0');
