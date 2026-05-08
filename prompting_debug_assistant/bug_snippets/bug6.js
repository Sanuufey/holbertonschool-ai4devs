const evens = [1, 2, 3, 4, 5, 6].map(n => {
    if (n % 2 === 0) return n;  
});

fetch("https://api.example.com/data")
    .catch(err => console.error(err))  
    .then(res => res.json())
    .then(data => console.log(data));

const diff = new Date("2024-12-31") - new Date("2024-01-01");
console.log("Days:", diff);  

const isValid = /^\d{10}$/.test(1234567890);  
console.log("Valid?", isValid);

const prices = [10, 9, 100, 25, 3];
prices.sort();  
console.log(prices);  
