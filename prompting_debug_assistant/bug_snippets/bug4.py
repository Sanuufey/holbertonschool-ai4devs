# bug4.py — Off-by-One & Loop Logic Issues
# Bug: range goes one too far, loop skips last element,
#      infinite loop due to missing increment, fence-post error

def print_first_n(lst, n):
    # Bug: range(n+1) goes out of bounds when n == len(lst)
    for i in range(n + 1):
        print(lst[i])

def sum_pairs(lst):
    total = 0
    # Bug: stops one short — last pair (lst[-2], lst[-1]) is never summed
    for i in range(len(lst) - 2):
        total += lst[i] + lst[i + 1]
    return total

def count_down(n):
    # Bug: n is never decremented — infinite loop
    while n > 0:
        print(n)

def build_fence(posts):
    # Bug: should have (posts - 1) rails between posts, not posts rails
    rails = posts
    return f"{posts} posts, {rails} rails"

items = [10, 20, 30, 40, 50]
print_first_n(items, 5)       # IndexError: list index out of range

print(sum_pairs([1, 2, 3, 4]))  # Expected: 10, Got: 6

print(build_fence(5))           # Expected: "5 posts, 4 rails", Got: "5 posts, 5 rails"
