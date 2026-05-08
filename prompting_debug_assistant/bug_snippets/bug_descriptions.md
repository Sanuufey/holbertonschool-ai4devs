## Bug 1 – bug1.py
**Intended Behavior**: Calculate a discounted final price and check if the user is a member.  
**Issue Type**: Syntax errors.  
**Notes**: Missing colons after `if` and `else` statements; unclosed parentheses in `price * (1 - discount` and `print(...`; assignment operator `=` used instead of `==` in the member check condition.

---

## Bug 2 – bug2.py
**Intended Behavior**: Compute the average of a list, check if a number is even, and calculate a factorial.  
**Issue Type**: Logical errors.  
**Notes**: `get_average` divides by hardcoded `100` instead of `len(numbers)`; `is_even` returns `True` when `n % 2 == 1` (odd), producing the opposite result; `factorial` base case is `n == 2` instead of `n == 0` or `n == 1`, causing incorrect results (e.g., `5!` returns `60` instead of `120`).

---

## Bug 3 – bug3.js
**Intended Behavior**: Safely retrieve user age, print uppercase strings, divide numbers, and parse JSON config.  
**Issue Type**: Runtime exceptions.  
**Notes**: `getUserAge` crashes with `TypeError` when `user` is `undefined` or lacks a `profile`; `printUpperCase` throws when `str` is `null`; `divide` returns `Infinity` silently when `b` is `0` with no guard; `parseConfig` has no `try/catch`, so malformed JSON raises an uncaught `SyntaxError`.

---

## Bug 4 – bug4.py
**Intended Behavior**: Print first N items of a list, sum adjacent pairs, count down, and model fence construction.  
**Issue Type**: Off-by-one and loop logic errors.  
**Notes**: `print_first_n` uses `range(n + 1)`, causing an `IndexError` when `n == len(lst)`; `sum_pairs` iterates `range(len(lst) - 2)`, skipping the last pair; `count_down` never decrements `n`, causing an infinite loop; `build_fence` sets `rails = posts` instead of `rails = posts - 1`.

---

## Bug 5 – bug5.py
**Intended Behavior**: Greet a user with their name and age, check if a user is an adult, and store location labels.  
**Issue Type**: Misuse of data types.  
**Notes**: `greet_user` concatenates `int` directly to `str` without conversion, raising a `TypeError`; `is_adult` compares a raw `input()` string to an integer (`str > int` raises `TypeError` in Python 3); `store_location` and `tag_items` use mutable default arguments (`{}` and `[]`), causing state to persist and accumulate across separate function calls.

---

## Bug 6 – bug6.js
**Intended Behavior**: Filter even numbers, fetch and handle API data, calculate date differences, validate phone numbers, and sort prices numerically.  
**Issue Type**: Misuse of built-in methods and libraries.  
**Notes**: `Array.map` is used instead of `Array.filter`, leaving `undefined` entries for odd numbers; `.catch` is placed before `.then`, so errors thrown in `.then` go uncaught; date subtraction yields milliseconds instead of days (missing division by `86400000`); `regex.test()` is called on a `number` instead of a `string`; `Array.sort()` is called without a comparator, causing lexicographic ordering (e.g., `[10, 100, 25, 3, 9]` instead of `[3, 9, 10, 25, 100]`).
