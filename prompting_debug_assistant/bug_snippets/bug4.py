# bug4.py — Off-by-One & Loop Errors

def print_first_n(lst, n):
    for i in range(n + 1):  # Bug: should be range(n)
        print(lst[i])

def sum_pairs(lst):
    total = 0
    for i in range(len(lst) - 2):  # Bug: should be len(lst) - 1
        total += lst[i] + lst[i + 1]
    return total

def count_down(n):
    while n > 0:
        print(n)
        # Bug: n never decremented — infinite loop

def build_fence(posts):
    rails = posts  # Bug: should be posts - 1
    return f"{posts} posts, {rails} rails"

print_first_n([10, 20, 30, 40, 50], 5)  # IndexError
print(sum_pairs([1, 2, 3, 4]))           # Expected: 10, Got: 6
print(build_fence(5))                    # Expected: 5 posts, 4 rails
