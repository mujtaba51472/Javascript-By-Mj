# PASS BY VALUE AND PASS BY REF
---
<p>

  ## Pass by value

In JavaScript, primitive values (such as numbers, strings, and booleans) are passed by value. This means that when you pass a primitive value as an argument to a function or assign it to a variable, a new copy of the value is created, and any changes made to that copy do not affect the original value, since they are independent copies.

`Example`

```javascript
  let num = 42;   // global scope 

function modifyNum(n) {
n = 99;  // local scope , 
}

modifyNum(num);

console.log(num); // Outputs: 42
```

but here the case is different 

```javascript
  let num = 42;   // global scope 

function modifyNum() {
num = 99;  // pointing to the same scope (global) as above num , not passed value , 
}

modifyNum();
console.log(num); // Outputs: 99
```
</p>

---
---

<p>

# Pass by reference

`Definition`

 In JavaScript, objects (including arrays and functions) are passed by reference. This means that when you pass an object as an argument to a function or assign it to a variable, a reference to the memory location where the object is stored is passed or assigned, rather than creating a new copy of the object. This also means that any changes made to the object inside the function or through the assigned variable will affect the original object, since they both point to the same memory location.
 
 ```javascript
 const obj = { prop: 'value' };

function modifyObj(o) {
  o.prop = 'new value';
}

modifyObj(obj);

console.log(obj.prop); // Outputs: 'new value'
```

`Here obj not passed but directly copied so it will too changed`

 ```javascript
 const obj = { prop: 'value' };

function modifyObj() {
  o =  obj
  o.prop= 'new value'
}

modifyObj();

console.log(obj.prop); // Outputs: 'new value'
```

The same case with array as we did for object

`but check this example`

```javascript
const obj = { prop: 'value' };

function modifyObj(o) {
 
 o= 'new value'
}

modifyObj(obj);

console.log(obj.prop); // Outputs: 'value'
```
In the last example we assigned or copied new variable to the `o` and didnot copy the original `obj` to the `o` so here the `o` will be different it maybe any primitive or can be object depend on condition but the imp thing is it will have no connection with `obj` original one .So making changing to this will not effect the `obj`

`also check this example`

```javascript
const obj = { prop: 'value' };

function modifyObj(o) {
 
 o= 'new value'  // it creates a new primitive value (a string) , different variable and different scope , and new variable is assigned so it will not changed original object
}

modifyObj(obj);

console.log(obj.prop)  // value
  ```
  
  
  
  
  
  `check this example`
  
  ```javascript 
  let person = { name: 'Lydia' };
const members = [person];
person = null;
console.log(members)
```

When you set the person variable to null, you're not actually modifying the person object that was originally created, but only the variable that was pointing to it. The members array still holds a reference to the original person object, so it remains unchanged.
  
</p>
  
  
```










