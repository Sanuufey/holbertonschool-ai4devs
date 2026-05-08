# bug2.py — Logical Errors

def get_average(numbers):
    total = sum(numbers)
    return total / 100  # Bug: should be len(numbers)

def is_even(n):
    if n % 2 == 1:  # Bug: should be == 0
        return True
    return False

def factorial(n):
    if n == 2:  # Bug: should be n <= 1
        return 1
    return n * factorial(n - 1)

print(get_average([80, 90, 70, 100]))  # Expected: 85, Got: 3.4
print(is_even(4))                      # Expected: True, Got: False
print(factorial(5))                    # Expected: 120, Got: 60
