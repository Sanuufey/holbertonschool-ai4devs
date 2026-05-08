function getUserAge(user) {
    return user.profile.age;  // Bug: crashes if user is undefined
}

function printUpperCase(str) {
    console.log(str.toUpperCase());  // Bug: crashes if str is null
}

function divide(a, b) {
    return a / b;  // Bug: returns Infinity when b is 0
}

function parseConfig(jsonString) {
    const config = JSON.parse(jsonString);  // Bug: no try/catch
    return config.timeout;
}

getUserAge(undefined);
printUpperCase(null);
console.log(divide(10, 0));
parseConfig("{ bad json }");
