# bug2.py — Logical Errors
# Bug: wrong formula for average, condition uses = instead of ==,
#      factorial returns wrong result due to bad base case

def get_average(numbers):
    total = 0
    for n in numbers:
        total += n
    # Bug: divides by fixed 100 instead of len(numbers)
    return total / 100

def is_even(n):
    # Bug: should be == 0, not == 1
    if n % 2 == 1:
        return True
    return False

def factorial(n):
    # Bug: base case should be n == 0 or n == 1, not n == 2
    if n == 2:
        return 1
    return n * factorial(n - 1)

scores = [80, 90, 70, 100]
print("Average:", get_average(scores))   # Expected: 85, Got: 3.4
print("Is 4 even?", is_even(4))          # Expected: True, Got: False
print("5! =", factorial(5))              # Expected: 120, Got: 60
