# Bug 1 - bug1.py
**Intended Behavior**:
Calculate a discounted final price based on price value and membership.
- If price > 100: apply 20% discount
- Otherwise:      apply 10% discount
- If member is True: print a confirmation message
- Return the final discounted price

**Issue Type**:
Syntax errors

**Notes**:
[1] Missing colons after if and else statements
WRONG:  if price > 100
WHY:    Python raises SyntaxError - every if/else header must end with ':'
EXPECT: if price > 100:
[2] Missing '*' operator between price and (1 - discount)
WRONG:  final_price = price (1 - discount)
WHY:    Python reads price(...) as a function call on a number -> TypeError
EXPECT: price * (1 - discount)

[3] Unclosed parenthesis in the discount expression
WRONG:  price * (1 - discount
WHY:    SyntaxError due to missing ')'
EXPECT: price * (1 - discount)

[4] Unclosed parenthesis in print statement
WRONG:  print("Final price:", final_price
WHY:    Missing closing ')'
EXPECT: print("Final price:", final_price)

[5] Assignment '=' used instead of comparison '==' in member check
WRONG:  if member = True:
WHY:    '=' is assignment, not comparison
EXPECT: if member == True:


# Bug 2 - bug2.py
**Intended Behavior**:
get_average(numbers) -> return arithmetic mean
is_even(n)           -> True if even
factorial(n)         -> recursive factorial

**Issue Type**:
Logical errors

**Notes**:
[1] Hardcoded divisor
WRONG:  return total / 100
EXPECT: return total / len(numbers)

[2] Wrong even check
WRONG:  if n % 2 == 1
EXPECT: if n % 2 == 0

[3] Wrong base case
WRONG:  if n == 2: return 1
EXPECT: if n == 0 or n == 1: return 1

[4] Missing multiplication operator
WRONG:  return n factorial(n - 1)
EXPECT: return n * factorial(n - 1)


# Bug 3 - bug3.py
**Intended Behavior**:
getUserAge(user)
printUpperCase(str)
divide(a, b)
parseConfig(jsonString)

**Issue Type**:
Runtime exceptions

**Notes**:
[1] No null check
WRONG:  return user.profile.age
EXPECT: check user before access

[2] Missing closing brace
WRONG:  function getUserAge(user) { return user.profile.age;

[3] Null string crash
WRONG:  str.toUpperCase()

[4] Division by zero not handled
WRONG:  return a / b

[5] Missing closing brace in divide
WRONG:  function divide(a, b) { return a / b;

[6] No JSON error handling
WRONG:  JSON.parse(jsonString)
EXPECT: try/catch needed


# Bug 4 - bug4.py
**Intended Behavior**:
print_first_n(lst, n)
sum_pairs(lst)
count_down(n)
build_fence(posts)

**Issue Type**:
Off-by-one and loop logic errors

**Notes**:
[1] Wrong range
WRONG:  range(n + 1)
EXPECT: range(n)

[2] Missing last pair
WRONG:  range(len(lst) - 2)
EXPECT: range(len(lst) - 1)

[3] Infinite loop
WRONG:
while n > 0:
    print(n)

[4] Wrong fence logic
WRONG:  rails = posts
EXPECT: rails = posts - 1


# Bug 5 - bug5.c

**Intended Behavior**:
greet_user(name, age)
is_adult(age)
store_location(...)
tag_items(...)

**Issue Type**:
Type errors + mutable defaults

**Notes**:
[1] int + str error
WRONG:  "you are " + age
EXPECT: str(age)

[2] boundary error
WRONG:  if age > 18
EXPECT: age >= 18

[3] mutable dict default
WRONG:  def store_location(..., locations={})
EXPECT: use None

[4] mutable list default
WRONG:  def tag_items(..., tag=[])
EXPECT: use None

[5] undefined variable
WRONG:  tag.append(item)
EXPECT: loop over items