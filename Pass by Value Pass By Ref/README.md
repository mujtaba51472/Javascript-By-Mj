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
num = 99;  // pointing to the same scope as above num , not passed value , 
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

</p>








