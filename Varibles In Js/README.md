
#  <u>Define Vs not define Vs undefined</u>
---

<p>

## Define

`Defined`: means that a variable or function has been declared and assigned a value. For example:
</p>

```javascript
var x = 5;
function add(a, b) {
  return a + b;
}
```

<p>
variable  `x` has been declared as var x and it has value 5 , so ```console.log(x)```  will give us output 5

## not defined 
`Not defined:` means that a variable or function has not been `declared` or is not in `scope`.
 like no `var` , `let` or `const` has been used with variables and we are trying to access them 
it will give us the message variable is `not defined`
or
we try to access the declared variable but which is not in the same `scope` where we are accessing them

#### Example
</p>


```javascript

console.log(z); // Output: Uncaught ReferenceError: z is not defined
```

<p>

## undefined 

`Undefined` means that a variable or property has been declared, but has not been assigned a `value`
In the Follwowing example , we trying to access the decalred which donot contain value yet

#### Example
</p>

```javascript
var y;
console.log(y); // Output: undefined
```
---

# <u>Hoisting In js</u>

<p>

#### Definittion

Hoisting in JavaScript is a mechanism where `variable and function declarations` are moved to `the top of their respective scopes` during the compilation phase. This means that it is possible to use a variable or function before it has been `declared`, and the code will still run without any errors.

 However, it's important to note that only the declaration of the variable or function is hoisted to the top of the scope, not the assignment or initialization of the variable or function.
 This behavior is caused by how JavaScript is interpreted and compiled by the browser or runtime environment. When JavaScript code is executed, the engine first compiles the code and creates an execution context. During this compilation phase, the engine scans the code for variable and function declarations and moves them to the top of their respective scope
 #### Example

 ```javascript
 function print() {
  console.log(name);
  console.log(age);
  var name = 'mujtaba';
  let age = 21;
}
ptint();
 ```

 In the above example , name and age are moved to the top once they are declared but point to be noted 
 `assignment or initialization ` are not moved to the top so accessing them before assignment or initialization it will give error
 `name` is  not `defined` and `age` will  give `Ref error` (as varible declartion with let and const are not completly hosited)

 #### Using hoisting

  ```javascript
 function print() {
     name = 'mujtaba';
    console.log(name);    // here name is defined  as  var name will be hosited and can be access
    var name ;


    
}
ptint();
 ```


</p>










