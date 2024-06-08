// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
let returnGroup=(person1)=>{
    if(person1.age<=12 && person1.age>0){return 'Child'};
    if(person1.age<=19 && person1.age>=13){return 'Teen'};
    if(person1.age<=59 && person1.age>20){return 'Adult'};
    if(person1.age>60){return 'Senior';}
  }
  console.log(returnGroup(person1))

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
const sum=function(inventory){
    let sum=0
    for(let keys in inventory){
      sum+=inventory[keys];
    }
    return sum;}
  console.log(sum(inventory2))

  
// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
let arr=students=>Object.values(students);

console.log(arr(students3))

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
let check=hmm=>{
  let detail=true
  for(let keys in hmm){
    if(!hmm[keys])
      {
        detail=false;
        return detail;
      }
  }
  return detail;
}

console.log(check(details4))

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
let sum=product=>{
  return Object.values(product).reduce((acc,item,index)=>
  {
    let add=acc+item.price;
    return add;
  }              
                                       ,0)
  };
  const denominator= Object.keys(products5).length
  console.log(sum(products5)/denominator);

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
let highest=score=>
  {
    return Object.values(score).reduce((acc,item)=>
                    {
      if(item>acc){
        acc=item;
      }
      return acc;
      
    })
  }
  
  console.log(highest(scores6))

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
let sum=employee=>{
  return Object.values(employee).reduce((acc,item,index)=>
  {
    let add=acc+item.salary;
    return add;
  }              
                                       ,0)
  };
  const denominator= Object.keys(employees7).length
  console.log(sum(employees7)/denominator);

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
const arr=(data)=>{
  return Object.values(data).sort();}
console.log(arr(data8))

// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
const total=order=>{
  return order['quantity']*order['price'];}
console.log(total(order9))

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };

const total=expense=>
  {
    let sum=0;
    for(let keys in expense){
      sum+=expense[keys];
    }
    return sum;
  }
  console.log(total(expenses10))