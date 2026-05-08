## Bug 1 – bug1.py
**Intended Behavior**: Calculate a discounted final price based on price value and membership.  
**Issue Type**: Syntax errors.  
**Notes**: The function fails due to multiple syntax issues in conditional statements, arithmetic operations, and function calls.

---

## Bug 2
**Intended Behavior**: get_average(numbers) -> return arithmetic mean of the list  
is_even(n) -> True if even, False otherwise  
factorial(n) -> recursive factorial computation  

**Issue Type**: Logical errors  

**Notes**:
[1] Hardcoded divisor
WRONG: return total / 100
WHY: Only correct for lists of size 100
EXPECT: return total / len(numbers)

[2] Wrong even condition
WRONG: if n % 2 == 1
WHY: This checks for odd numbers instead of even
EXPECT: if n % 2 == 0

[3] Wrong factorial base case
WRONG: if n == 2: return 1
WHY: factorial(2) should be 2
EXPECT: if n == 0 or n == 1: return 1

[4] Missing multiplication operator
WRONG: return n factorial(n - 1)
WHY: invalid syntax
EXPECT: return n * factorial(n - 1)

---

## Bug 3

**Intended Behavior**:  
getUserAge(user) -> safely return user.profile.age  
printUpperCase(str) -> print uppercase string  
divide(a, b) -> return division result  
parseConfig(jsonString) -> parse JSON and return timeout  

**Issue Type**: Runtime exceptions  

**Notes**:
[1] No null/undefined check
WRONG: return user.profile.age
EXPECT: validate user before access

[2] Missing closing brace in function definition
WRONG: function getUserAge(user) { return user.profile.age;

[3] Null string crash
WRONG: str.toUpperCase()

[4] Division by zero not handled
WRONG: return a / b

[5] Missing closing brace in divide function
WRONG: function divide(a, b) { return a / b;

[6] Invalid JSON not handled
WRONG: JSON.parse(jsonString)
EXPECT: try/catch required

---

## Bug 4 – bug4.py
**Intended Behavior**: print_first_n, sum_pairs, count_down, build_fence functions correctly handle list and loop logic.

**Issue Type**: Off-by-one and loop logic errors  

**Notes**:
[1] Off-by-one range error
WRONG: range(n + 1)
EXPECT: range(n)

[2] Missing last pair in loop
WRONG: range(len(lst) - 2)
EXPECT: range(len(lst) - 1)

[3] Infinite loop in countdown
WRONG: while n > 0: print(n)
EXPECT: decrement n inside loop

[4] Wrong fence calculation
WRONG: rails = posts
EXPECT: rails = posts - 1

---

## Bug 5
**Intended Behavior**: greet_user, is_adult, store_location, tag_items should work correctly with proper types and fresh state per call.

**Issue Type**: Type errors and mutable default argument misuse  

**Notes**:
[1] String + int error
WRONG: "you are " + age
EXPECT: convert age to string

[2] Boundary error
WRONG: if age > 18
EXPECT: if age >= 18

[3] Mutable dict default argument
WRONG: def store_location(..., locations={})
EXPECT: use None

[4] Mutable list default argument
WRONG: def tag_items(..., tag=[])
EXPECT: use None

[5] Undefined variable usage
WRONG: tag.append(item)
EXPECT: iterate over items