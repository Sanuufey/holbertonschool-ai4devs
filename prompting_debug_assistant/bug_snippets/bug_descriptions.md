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
    WHY:    The interpreter keeps reading the next lines as part of the same
            expression -> SyntaxError
    EXPECT: price * (1 - discount)

[4] Unclosed parenthesis in print statement
    WRONG:  print("Final price:", final_price
    WHY:    SyntaxError - the closing ')' is required to end the call
    EXPECT: print("Final price:", final_price)

[5] Assignment '=' used instead of comparison '==' in member check
    WRONG:  if member = True:
    WHY:    '=' is assignment, not comparison. Python raises SyntaxError
            inside an if condition
    EXPECT: if member == True:

# Bug 2 - bug2.py

**Intended Behavior**:
get_average(numbers) -> return arithmetic mean of the list
is_even(n)           -> return True if n is even, False if odd
factorial(n)         -> return n! recursively  e.g. factorial(5) == 120
**Issue Type**:
Logical errors
**Notes**:
[1] get_average divides by hardcoded 100 instead of len(numbers)
WRONG:  return total / 100
WHY:    Only correct when list has exactly 100 elements.
Input [80, 90, 70, 100] -> returns 3.4 instead of 85.0
EXPECT: divide by the actual number of elements in the list
[2] is_even checks n % 2 == 1 which is True for ODD numbers, not even
    WRONG:  if n % 2 == 1: return True
    WHY:    Remainder of 1 means the number is odd, not even.
            is_even(4) returns False  (wrong)
            is_even(3) returns True   (wrong)
    EXPECT: condition should be True when remainder is 0

[3] factorial base case is n == 2 instead of n == 0 or n == 1
    WRONG:  if n == 2: return 1
    WHY:    factorial(2) should be 2, not 1. Every result for n >= 2
            ends up exactly half of the correct value.
            factorial(5) returns 60 instead of 120
    EXPECT: base case must be n == 0 or n == 1, both returning 1

[4] Missing '*' operator in the recursive call
    WRONG:  return n factorial(n - 1)
    WHY:    Python reads n(...) as a function call on an integer -> TypeError
    EXPECT: n * factorial(n - 1)
# Bug 3 - bug3.py
**Intended Behavior**:
getUserAge(user)         -> return user.profile.age safely
printUpperCase(str)      -> print str converted to uppercase
divide(a, b)             -> return a divided by b
parseConfig(jsonString)  -> parse JSON string and return config.timeout
**Issue Type**:
Runtime exceptions
**Notes**:
[1] getUserAge does not guard against undefined/null input
WRONG:  return user.profile.age   // called with undefined
WHY:    Accessing .profile on undefined throws:
TypeError: Cannot read properties of undefined
EXPECT: validate that user is not null/undefined before accessing .profile
[2] getUserAge is missing its closing brace '}'
    WRONG:  function getUserAge(user) { return user.profile.age;
            function printUpperCase(str) { ... }   // treated as code inside getUserAge
    WHY:    printUpperCase is parsed as part of getUserAge's body -> SyntaxError
    EXPECT: getUserAge must be closed with '}' before printUpperCase begins

[3] printUpperCase does not guard against null input
    WRONG:  console.log(str.toUpperCase())   // called with null
    WHY:    null has no string methods ->
            TypeError: Cannot read properties of null (reading 'toUpperCase')
    EXPECT: verify str is a valid string before calling .toUpperCase()

[4] divide does not handle division by zero
    WRONG:  return a / b   // called as divide(10, 0)
    WHY:    JavaScript silently returns Infinity instead of throwing.
            This is mathematically undefined and unintended behaviour.
    EXPECT: check if b === 0 and handle it explicitly before dividing

[5] divide is missing its closing brace '}'
    WRONG:  function divide(a, b) { return a / b;
            function parseConfig(...) { ... }   // treated as code inside divide
    WHY:    Same structural issue as getUserAge - parseConfig is parsed
            inside divide's body
    EXPECT: divide must be closed with '}' before parseConfig begins

[6] parseConfig does not handle invalid JSON input
    WRONG:  const config = JSON.parse(jsonString)   // called with "{ bad json }"
    WHY:    JSON.parse throws SyntaxError: Unexpected token on malformed input.
            There is no error handling so the whole program crashes.
    EXPECT: wrap JSON.parse in a try/catch block to handle bad input gracefully
# Bug 4 - bug4.py
**Intended Behavior**:
print_first_n(lst, n) -> print exactly the first n elements (indices 0 to n-1)
sum_pairs(lst)        -> sum every adjacent pair: lst[i] + lst[i+1] for all i
count_down(n)         -> print n, n-1, n-2, ... 1 then stop
build_fence(posts)    -> rails = posts - 1, return formatted string
**Issue Type**:
Off-by-one and loop logic errors
**Notes**:
[1] print_first_n uses range(n + 1) producing n+1 iterations instead of n
WRONG:  for i in range(n + 1)
WHY:    Generates indices 0 through n inclusive. The last index n is
out of bounds on a list of length n.
print_first_n([10,20,30,40,50], 5) -> IndexError at index 5
(valid indices are 0-4)
EXPECT: range(n) to iterate exactly indices 0 through n-1
[2] sum_pairs uses range(len(lst) - 2) and misses the last valid pair
    WRONG:  for i in range(len(lst) - 2)
    WHY:    For [1, 2, 3, 4] this gives range(2) -> i = 0, 1 only.
            Pairs processed: (1+2), (2+3). Pair (3+4) is skipped entirely.
    EXPECT: range(len(lst) - 1) to include every adjacent pair

[3] count_down never decrements n, causing an infinite loop
    WRONG:  while n > 0:
                print(n)
                # n is never changed
    WHY:    n stays the same on every iteration so the condition n > 0
            is always True and the loop never terminates.
    EXPECT: n must decrease by 1 inside the loop body each iteration

[4] build_fence sets rails = posts instead of rails = posts - 1
    WRONG:  rails = posts
    WHY:    A fence with n posts has n-1 gaps between them, each needing
            one rail. build_fence(5) returns "5 posts, 5 rails" (wrong)
    EXPECT: rails should be one less than the number of posts
# Bug 5 - bug1.c
**Intended Behavior**:
greet_user(name, age)              -> return greeting string with name and age
is_adult(age)                      -> return True if age >= 18, else False
store_location(coord, label, ...)  -> store coord:label in dict, return dict
each call should be independent
tag_items(items, tag=[])           -> append each item to tag list, return it
each call should start with a fresh list
**Issue Type**:
Type errors and misuse of mutable default arguments
**Notes**:
[1] greet_user concatenates a string with an integer using '+'
WRONG:  return "Hello " + name + ", you are " + age + " years old."
WHY:    The '+' operator cannot join str and int directly in Python.
"you are " + 30 raises TypeError: can only concatenate str
(not "int") to str
EXPECT: age must be converted to str before concatenation
[2] is_adult uses '>' instead of '>=' excluding age 18
    WRONG:  if age > 18
    WHY:    age = 18 evaluates to False, classifying an 18-year-old as
            a minor. The boundary value must be included.
    EXPECT: condition should be True for age 18 and above

[3] store_location uses a mutable dict {} as a default argument
    WRONG:  def store_location(coord, label, locations={}):
    WHY:    Python evaluates default arguments once at definition time.
            The same dict is reused across all calls.
            First call:  {(40.4, 49.8): "Baku"}
            Second call: {(40.4, 49.8): "Baku", (51.5, -0.1): "London"}
                         ^ previous data persists - calls are not independent
    EXPECT: use None as default and create a new dict inside the function body

[4] tag_items uses a mutable list [] as a default argument
    WRONG:  def tag_items(items, tag=[]):
    WHY:    Same issue as store_location - the same list is shared across
            all calls that do not pass an explicit tag argument.
            Data from previous calls accumulates unexpectedly.
    EXPECT: use None as default and create a new list inside the function body

[5] tag_items references undefined variable 'item' with no loop
    WRONG:  tag.append(item)   # 'item' is never defined
    WHY:    The parameter is named 'items' (plural). There is no for loop
            to iterate over it. Python raises NameError: name 'item' is
            not defined
    EXPECT: a for loop over 'items' is required before appending each element
"""