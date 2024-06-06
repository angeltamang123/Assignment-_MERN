// Q1: Retrieve the value of the 'model' property from the 'car' object.
// Expected output:
// 'Civic'
const car1 = { make: 'Honda', model: 'Civic', year: 2020 };
console.log(car1.model)

// Q2: Add a new property 'color' with the value 'red' to the 'shirt' object.
// Expected output:
// { size: 'large', material: 'cotton', color: 'red' }
const shirt2 = { size: 'large', material: 'cotton' };
shirt2['color']='red'
console.log(shirt2)

// Q3: Calculate the total price by multiplying the 'quantity' and 'price' properties of the 'product' object.
// Expected output:
// 400
const product3 = { name: 'Laptop', quantity: 2, price: 200 };
const totalPrice = product3['quantity']*product3['price']
console.log(totalPrice)

// Q4: Update the value of the 'age' property in the 'person' object to 35.
// Expected output:
// { name: 'Alice', age: 35, city: 'New York' }
const person4 = { name: 'Alice', age: 30, city: 'New York' };
person4['age']=35
console.log(person4)

// Q5: Remove the 'price' property from the 'book' object.
// Expected output:
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
const book5 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, price: 15 };
delete book5.price
console.log(book5)

// Q6: Retrieve the value of the 'department' property from the 'employee' object.
// Expected output:
// 'HR'
const employee6 = { name: 'John', age: 28, department: 'HR', salary: 60000 };
const hr= employee6['department']
console.log(hr)

// Q7: Add a new property 'size' with the value 'large' to the 'box' object.
// Expected output:
// { type: 'box', dimensions: { length: 10, width: 8, height: 6 }, size: 'large' }
const box7 = { type: 'box', dimensions: { length: 10, width: 8, height: 6 } };
box7['size']= 'large'
console.log(box7)

// Q8: Concatenate the 'firstName' and 'lastName' properties of the 'person' object with a space in between.
// Expected output:
// 'John Doe'
const person8 = { firstName: 'John', lastName: 'Doe', age: 25 }
const st= person8['firstName']+' '+ person8['lastName']
console.log(st)

// Q9: Increment the value of the 'quantity' property in the 'cart' object by 1.
// Expected output:
// { item: 'Book', quantity: 3, total: 45 }
const cart9 = { item: 'Book', quantity: 2, total: 30 };
cart9.quantity++
console.log(cart9)

// Q10: Check if the 'price' property in the 'product' object is less than 100.
// Expected output:
// false
const product10 = { name: 'Phone', price: 150 };
const isLessThan= product10.price<100
console.log(isLessThan)