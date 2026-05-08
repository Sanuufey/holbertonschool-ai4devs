def calculate_discount(price, member):
    if price > 100:
        discount = 0.2
    else:
        discount = 0.1

    final_price = price * (1 - discount)
    print("Final price:", final_price)

    if member == True:
        print("Member discount applied")

    return final_price

print(calculate_discount(150, True))
