const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

const date1 = new Date("2024-01-01");
const date2 = new Date("2024-03-01");
const diffDays = (date2 - date1) / 86400000;
console.log(diffDays);

const phone = 994501234567;
const regex = /^\d{10,12}$/;
console.log(regex.test(String(phone)));

const prices = [10, 100, 25, 3, 9];
prices.sort((a, b) => a - b);
console.log(prices);
