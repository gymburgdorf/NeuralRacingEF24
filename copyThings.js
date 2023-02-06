
// COPY BY VALUE
a = 3
b = a
a = 4 
console.log(a, b)

a = "Hello"
b = a
a = "Bye"
console.log(a, b)

// COPY BY REFERENCE
car1 = {v: 7}
car2 = car1
car1.v = 0
console.log(car1, car2)

cars = [
    {v:7},
    {v:5},
    {v:0}
]

bestCar = cars[0]

bestCar.v += 1

log
