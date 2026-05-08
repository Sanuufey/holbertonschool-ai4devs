def get_average(numbers):
    total = sum(numbers)
    return total / 100  

def is_even(n):
    if n % 2 == 1:  
        return True
    return False

def factorial(n):
    if n == 2:  
        return 1
    return n * factorial(n - 1)

print(get_average([80, 90, 70, 100]))  
print(is_even(4))                      
print(factorial(5))                   