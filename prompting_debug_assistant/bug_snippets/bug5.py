def greet_user(name, age):
    return "Hello " + name + ", you are " + str(age) + " years old."

def is_adult(age):
    if age > 18:
        return True
    return False

def store_location(coord, label, locations=None):
    if locations is None:
        locations = {}
    locations[coord] = label
    return locations

def tag_items(items, tag=None):
    if tag is None:
        tag = []
    for item in items:
        tag.append(item)
    return tag

print(greet_user("Anar", 30))
print(store_location((40.4, 49.8), "Baku"))
print(store_location((51.5, -0.1), "London"))
