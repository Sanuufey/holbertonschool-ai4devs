// Filter even numbers — use .filter instead of .map
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

// Fetch with proper .then before .catch
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Date difference in days — divide by 86400000
const date1 = new Date("2024-01-01");
const date2 = new Date("2024-03-01");
const diffDays = (date2 - date1) / 86400000;
console.log(diffDays);

// Phone validation — convert number to string before regex.test()
const phone = 994501234567;
const regex = /^\d{10,12}$/;
console.log(regex.test(String(phone)));

// Numeric sort — provide comparator function
const prices = [10, 100, 25, 3, 9];
prices.sort((a, b) => a - b);
console.log(prices);
