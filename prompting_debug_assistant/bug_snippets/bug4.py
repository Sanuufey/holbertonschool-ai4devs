def print_first_n(lst, n):
    for i in range(n):
        print(lst[i])

def sum_pairs(lst):
    total = 0
    for i in range(len(lst) - 1):
        total += lst[i] + lst[i + 1]
    return total

def count_down(n):
    while n > 0:
        print(n)
        n -= 1

def build_fence(posts):
    rails = posts - 1
    return f"{posts} posts, {rails} rails"

print_first_n([10, 20, 30, 40, 50], 5)
print(sum_pairs([1, 2, 3, 4]))
print(build_fence(5))
