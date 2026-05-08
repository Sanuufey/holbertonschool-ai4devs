// bug6.js — Misuse of Libraries & Built-ins
// Bug: misusing Array methods, broken Promise chain,
//      Date arithmetic error, regex on non-string

// --- Bug 1: Array.map used to filter — wrong tool ---
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.map(n => {
    if (n % 2 === 0) return n;
    // Bug: returns undefined for odd numbers instead of filtering them out
});
console.log("Evens:", evens); // [undefined, 2, undefined, 4, undefined, 6]

// --- Bug 2: Promise .catch placed before .then — won't catch later errors ---
fetch("https://api.example.com/data")
    .catch(err => console.error("Error:", err))  // Bug: catches nothing after this
    .then(res => res.json())                      // errors here go uncaught
    .then(data => console.log(data));

// --- Bug 3: Date difference calculated in ms not days ---
const start = new Date("2024-01-01");
const end   = new Date("2024-12-31");
const diff  = end - start;
// Bug: diff is milliseconds, not days
console.log("Days between:", diff);  // Expected: 365, Got: 31536000000

// --- Bug 4: regex.test() called on a number, not a string ---
const phonePattern = /^\d{10}$/;
const phoneNumber  = 1234567890;      // Bug: should be a string
const isValid = phonePattern.test(phoneNumber);
console.log("Valid phone?", isValid); // Accidentally works but is fragile / wrong type usage

// --- Bug 5: sort() without comparator sorts lexicographically ---
const prices = [10, 9, 100, 25, 3];
prices.sort();  // Bug: ["10", "100", "25", "3", "9"] order
console.log("Sorted prices:", prices); // Expected: [3,9,10,25,100], Got: [10,100,25,3,9]
