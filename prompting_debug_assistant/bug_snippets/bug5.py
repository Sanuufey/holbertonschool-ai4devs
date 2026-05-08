# bug5.py — Misuse of Data Types
# Bug: concatenating int with string, comparing str to int,
#      using list as dict key, mutating default mutable argument

def greet_user(name, age):
    # Bug: cannot concatenate str and int directly
    message = "Hello " + name + ", you are " + age + " years old."
    return message

def is_adult(age):
    # Bug: age comes in as string from input(), comparing str > int always False in Python 3
    if age > 18:
        return True
    return False

def store_location(coord, label, locations={}):
    # Bug: dict is mutable default arg — persists across calls (shared state)
    locations[coord] = label
    return locations

def tag_items(items, tag=[]):
    # Bug: mutable default list accumulates across calls
    for item in items:
        tag.append(item)
    return tag

print(greet_user("Anar", 30))          # TypeError

user_age = input("Enter age: ")        # Returns str
print(is_adult(user_age))              # Wrong: "25" > 18 raises TypeError in Python 3

print(store_location((40.4, 49.8), "Baku"))
print(store_location((51.5, -0.1), "London"))  # Unexpected: carries previous data
