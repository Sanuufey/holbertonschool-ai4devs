# Bug Descriptions

## Bug 1 – bug1.py

**Intended Behavior**:  
Calculate a discounted final price based on user membership and price value.

**Issue Type**:  
Syntax errors

**Notes**:  
Missing colons after `if` and `else` statements; unclosed parentheses in `price * (1 - discount)` and `print(...)`; assignment operator `=` used instead of `==` in the member check condition.

---

## Bug 2 – bug2.py

**Intended Behavior**:  
Compute the average of a list, check if a number is even, and calculate factorial of a number.

**Issue Type**:  
Logical errors

**Notes**:  
`get_average` divides by a hardcoded `100` instead of `len(numbers)`. `is_even` incorrectly returns `True` for odd numbers. `factorial` has wrong base case (`n == 2`) causing incorrect results.

---

## Bug 3 – bug3.js

**Intended Behavior**:  
Safely retrieve user age, print uppercase strings, divide numbers, and parse JSON configuration.

**Issue Type**:  
Runtime exceptions

**Notes**:  
Functions do not handle `null`, `undefined`, or invalid inputs. Missing safety checks for object properties, division by zero, and invalid JSON parsing.

---

## Bug 4 – bug4.py

**Intended Behavior**:  
Print first N elements of a list, sum adjacent pairs, implement a countdown, and model fence construction logic.

**Issue Type**:  
Off-by-one and loop logic errors

**Notes**:  
`print_first_n` accesses out-of-range indexes due to `n + 1`. `sum_pairs` skips valid pairs due to incorrect loop range. `count_down` has no decrement causing infinite loop. `build_fence` incorrectly calculates number of rails.

---

## Bug 5 – bug5.c

**Intended Behavior**:  
Greet users, check adult status, store labeled locations, and tag items in a list.

**Issue Type**:  
Type errors and misuse of language features

**Notes**:  
String concatenation fails in `greet_user` due to type mismatch. `is_adult` uses incorrect boundary logic. `store_location` uses mutable default argument causing shared state. `tag_items` uses mutable default list and undefined variable.