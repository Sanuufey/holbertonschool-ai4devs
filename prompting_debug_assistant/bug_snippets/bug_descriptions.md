## Bug 1 – bug1.py

**Intended Behavior**: Calculate a discounted final price and check if the user is a member.
**Issue Type**: Syntax errors
**Notes**: Missing colons after if and else statements; unclosed parentheses in price * (1 - discount) and print(...); assignment operator = used instead of == in the member check condition.
---

## Bug 2 – bug2.py
**Intended Behavior**: Compute the average of a list, check if a number is even, and calculate a factorial.  
**Issue Type**: Logical errors.  
**Notes**: get_average divides by a hardcoded value 100 instead of using len(numbers), causing incorrect averages. is_even checks n % 2 == 1, which actually detects odd numbers instead of even numbers, resulting in inverted logic. factorial uses an incorrect base case (n == 2) instead of n == 0 or n == 1, which leads to wrong factorial results (e.g., 5! returns incorrect value).
---

## Bug 3 – bug3.js
**Intended Behavior**: Safely retrieve user age, print uppercase strings, divide numbers, and parse JSON config.  
**Issue Type**: Runtime exceptions.  
**Notes**: getUserAge throws a TypeError when user is undefined or when profile property is missing. printUpperCase crashes when str is null or undefined because toUpperCase() is called on a non-string value. divide does not handle division by zero, which can lead to invalid or unsafe results. parseConfig does not use try/catch, so invalid JSON input causes an uncaught SyntaxError.

---

## Bug 4 – bug4.py
**Intended Behavior**: Print first N items of a list, sum adjacent pairs, count down, and model fence construction.  
**Issue Type**: Off-by-one and loop logic errors.  
**Notes**: print_first_n uses range(n + 1), which causes an IndexError when n equals the length of the list because it accesses an out-of-range index. sum_pairs incorrectly iterates up to len(lst) - 2, which skips the last valid adjacent pair. count_down has a missing decrement operation for n, resulting in an infinite loop. build_fence incorrectly assigns rails = posts instead of posts - 1, producing an incorrect fence model.

---



## Bug 5 – bug5.c
**Intended Behavior**: Greet a user, check if a person is an adult, store labeled locations, and tag items in a list.
**Issue Type**: Type errors, mutable default arguments, and logic/structure errors  
**Notes**: greet_user raises a TypeError because it tries to concatenate a string with an integer (age). is_adult uses a strict comparison (age > 18) which incorrectly excludes 18-year-olds from being considered adults. store_location uses a mutable default argument (locations={}), causing shared state across function calls and unexpected behavior. tag_items uses a mutable default list (tag=[]), has incorrect indentation, and references an undefined variable item, leading to runtime errors.
