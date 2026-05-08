def get_average(numbers):
    total = sum(numbers)
    return total / len(numbers)

def is_even(n):
    if n % 2 == 0:
        return True
    return False

def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(get_average([80, 90, 70, 100]))
print(is_even(4))
print(factorial(5))
