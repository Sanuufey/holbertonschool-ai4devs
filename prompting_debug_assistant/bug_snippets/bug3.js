// bug3.js — Runtime Exceptions
// Bug: accessing property on undefined, calling method on null,
//      dividing by zero without guard, JSON parse without try/catch

function getUserAge(user) {
    // Bug: user might be undefined — crashes with TypeError
    return user.profile.age;
}

function printUpperCase(str) {
    // Bug: str could be null — TypeError: Cannot read properties of null
    console.log(str.toUpperCase());
}

function divide(a, b) {
    // Bug: no zero-check — returns Infinity or NaN silently
    return a / b;
}

function parseConfig(jsonString) {
    // Bug: no try/catch — throws SyntaxError on bad input
    const config = JSON.parse(jsonString);
    return config.timeout;
}

const users = [{ name: "Ali" }, undefined, { name: "Leyla", profile: { age: 25 } }];
users.forEach(u => console.log(getUserAge(u)));

printUpperCase(null);
console.log(divide(10, 0));
console.log(parseConfig("{ bad json }"));
