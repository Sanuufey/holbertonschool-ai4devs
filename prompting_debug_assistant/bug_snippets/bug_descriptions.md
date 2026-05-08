
## Bug 1 – bug1.py

**Intended Behavior:**  
Calculate a final price after applying a discount depending on whether the user is a member.

**Issue Type:** Syntax Errors

**Issues:**
- Missing colon in `if price > 100:`
- Missing `:` in `else:`
- Incorrect arithmetic syntax: `price (1 - discount)` should be `price * (1 - discount)`
- Missing closing parentheses in `print()`
- Assignment vs comparison error: `if member = True` should be `if member == True`


## Bug 2 – Functions (Logic Errors)

**Intended Behavior:**
- `get_average(numbers)`: return correct average of list
- `is_even(n)`: return True if number is even
- `factorial(n)`: compute factorial recursively

**Issue Type:** Logical Errors

**Issues:**
- ❌ `return total / 100` → hardcoded divisor  
  ✔ should be `return total / len(numbers)`

- ❌ `if n % 2 == 1`  
  ✔ should be `if n % 2 == 0`

- ❌ `if n == 2: return 1`  
  ✔ correct base case: `if n in (0, 1): return 1`

- ❌ `return n factorial(n - 1)`  
  ✔ should be `return n * factorial(n - 1)`


## Bug 3 – Runtime Exceptions

**Intended Behavior:**
- Safely access user age
- Convert string to uppercase
- Divide numbers safely
- Parse JSON config safely

**Issue Type:** Runtime Errors

**Issues:**
- ❌ Null/undefined check missing for `user.profile.age`
- ❌ `str.toUpperCase()` may crash on null/undefined
- ❌ Division by zero not handled in `a / b`
- ❌ Missing error handling in JSON parsing
- ❌ Missing closing braces in functions


## Bug 4 – bug4.py (Loop / Off-by-one Errors)

**Intended Behavior:**
- print numbers correctly
- sum pairs correctly
- countdown works properly
- fence calculation is correct

**Issue Type:** Loop Logic / Off-by-one Errors

**Issues:**
- ❌ `range(n + 1)` includes extra iteration  
  ✔ should be `range(n)`

- ❌ `range(len(lst) - 2)` skips valid pairs  
  ✔ should be `range(len(lst) - 1)`

- ❌ Infinite loop in countdown (missing decrement)

- ❌ Fence logic incorrect: `rails = posts`  
  ✔ should be `rails = posts - 1`


## Bug 5 – Type Errors & Mutable Default Issues

**Intended Behavior:**
- `greet_user`: correct string handling
- `is_adult`: correct age validation
- `store_location`: safe storage per call
- `tag_items`: safe tagging without shared state

**Issue Type:** Type Errors / State Bugs

**Issues:**
- ❌ `"you are " + age` → type mismatch  
  ✔ convert age to string

- ❌ `if age > 18`  
  ✔ should be `if age >= 18`

- ❌ `locations={}` as default argument → shared state bug  
  ✔ should use `None`

- ❌ `tag=[]` as default argument → mutable default bug  
  ✔ should use `None`

- ❌ incorrect usage of `tag.append(item)` without proper iteration logic
