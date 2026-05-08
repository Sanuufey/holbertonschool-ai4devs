function getUserAge(user) {
    return user.profile.age;  

function printUpperCase(str) {
    console.log(str.toUpperCase());  
}

function divide(a, b) {
    return a / b; 

function parseConfig(jsonString) {
    const config = JSON.parse(jsonString);  
    return config.timeout;
}

getUserAge(undefined);
printUpperCase(null);
console.log(divide(10, 0));
parseConfig("{ bad json }");
