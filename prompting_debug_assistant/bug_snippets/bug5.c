def greet_user(name, age):
    return "Hello " + name + ", you are " + age + " years old."  # Bug: age is int

def is_adult(age):
    if age > 18:  # Bug: age is str from input()
        return True
    return False

def store_location(coord, label, locations={}):  # Bug: mutable default arg
    locations[coord] = label
    return locations

def tag_items(items, tag=[]):  # Bug: mutable default arg
    for item in items:
        tag.append(item)
    return tag

print(greet_user("Anar", 30))
print(store_location((40.4, 49.8), "Baku"))
print(store_location((51.5, -0.1), "London"))  # Carries over Baku unexpectedly
