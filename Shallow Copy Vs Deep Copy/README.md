# Shallow Copy Vs Deep Copy

<p>

 `copy`: First thing is to understand why we doing copy of objects into objects or arrays or any string into each other
 The reason for this is getting already used or defined data so we donot manully created the data explicitly 
 for example

 ```javascript
 const obj={}
 ```
 Having data already in this obj , so we donot need to make again new objects with same keys , just we need to copy 
 and do changes according to our need(but in most cases we donot mutate the original object | arrays)

 ## Shallow Copy: 
 'def': 
 Shallow copy in JavaScript means creating a new object or array with the
'1. same top-level structure as the original object or array', 
but with the 
'2.same references to the nested objects or arrays'.

 2 points discused in the above definition, 
 first  shallow copy only creates a new object with the same properties as the original object( top level),
 but it does not create new copies of the nested objects or arrays within the original object(means nested property still referecing to the original one)

 'explantion':
 implemnting it with  example
 'Using spread operator:'
 
 ```javascript
 const obj1 = { a: 1, b: 2, c: { d: 3 } };
const obj2 = { ...obj1 }

//changing top levl property will not refllect in original object , means original object key value will not be changed (point 1)
obj2.a = 4;  

//changing nested property will  refllect in original object , means original object key value will  be changed(point 2)
obj2.c.d = 5;  

console.log(obj1); // { a: 1, b: 2, c: { d: 5 } }
console.log(obj2); // { a: 4, b: 2, c: { d: 5 } }
```












</p>