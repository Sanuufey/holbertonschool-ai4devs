function getUserAge(user) {
    if (!user || !user.profile) {
        return null;
    }
    return user.profile.age;
}

function printUpperCase(str) {
    if (str === null || str === undefined) {
        console.log("Invalid input");
        return;
    }
    console.log(str.toUpperCase());
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}

function parseConfig(jsonString) {
    try {
        const config = JSON.parse(jsonString);
        return config.timeout;
    } catch (e) {
        console.log("Error: Invalid JSON -", e.message);
        return null;
    }
}

getUserAge(undefined);
printUpperCase(null);
console.log(divide(10, 0));
parseConfig("{ bad json }");
