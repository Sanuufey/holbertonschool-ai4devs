## Bug 1 – bug1.py

**Intended Behavior**:  
Compute a final price by applying a discount based on whether the user is a member and the price value.

**Issue Type**: Syntax Errors

**Issues:**
- Missing `:` after `if price > 100`
- Missing `:` after `else`
- Incorrect arithmetic expression: `price (1 - discount)` instead of `price * (1 - discount)`
- Missing closing parenthesis in `print()`
- Wrong assignment used in condition: `if member = True` instead of `if member == True`

---

## Bug 2 – functions.py

**Intended Behavior**:  
- `get_average(numbers)`: return the correct average of a list  
- `is_even(n)`: return True if `n` is even, otherwise False  
- `factorial(n)`: compute factorial using recursion  

**Issue Type**: Logical Errors

**Issues:**
- Hardcoded divisor `100` used in average calculation instead of `len(numbers)`
- Incorrect even check using `n % 2 == 1` (checks odd instead of even)
- Wrong factorial base case (`n == 2`) instead of `n in (0, 1)`
- Missing multiplication operator in recursion: `n factorial(n - 1)`

---

## Bug 3 – runtime_errors.py

**Intended Behavior**:  
Safely handle user data, string operations, division, and JSON parsing without runtime crashes.

**Issue Type**: Runtime Exceptions

**Issues:**
- Unsafe access to `user.profile.age` without null/undefined checks
- `toUpperCase()` called on potentially null/undefined string
- Division by zero not handled in `a / b`
- Missing error handling for JSON parsing (`JSON.parse`)
- Missing proper function closure syntax causing runtime failures

---

## Bug 4 – bug4.py

**Intended Behavior**:  
Correctly execute loop-based logic including iteration, countdown, pair processing, and fence calculation.

**Issue Type**: Off-by-one and Loop Logic Errors

**Issues:**
- `range(n + 1)` includes extra iteration
- `range(len(lst) - 2)` skips valid elements
- Countdown loop missing decrement causing infinite loop
- Fence calculation incorrect: `rails = posts` instead of `posts - 1`

---

## Bug 5 – state_and_types.py

**Intended Behavior**:  
Handle user-related operations correctly with proper type usage and independent function state:
- greeting user
- checking adult status
- storing locations
- tagging items

**Issue Type**: Type Errors and Mutable Default Argument Issues

**Issues:**
- String + integer concatenation error (`"you are " + age`)
- Incorrect boundary condition (`age > 18` instead of `age >= 18`)
- Mutable default argument `{}` causing shared state across calls
- Mutable default argument `[]` causing shared list reuse
- Incorrect usage of `.append()` without proper iteration logic