

# variables 

<p>
In JavaScript (JS), variables are used to store and manipulate data during runtime. 
A variable is a named container that holds a value, which can be a number, string, boolean, object, or any other data type

## Declaration of variable

 there are three keywords used to declare a variable — var, let, and const.
 Declaration of variables means defining varibles with keyword(var , let , const)

 `for example`

```javascript
 var a ;   variables  declared with var
 let b ;
 const c;
 ```

 `initilazation`

 In JavaScript, initialization refers to the process of assigning an initial value to a variable

```javascript
 var a = 10 ;
 let b = 20 ;
 ```

## var vs let vs const(declaration , initialization , assignment)

`var`  
can be re-declara , re assign value  , hositing  , scope( only have block scope when used in function  else it has global scope )

`let`
 cannot be redeclared , re assignment allowed , no hositing , scope(function , block scope , global scope)

 `const`
  cannot be redeclared , re assignment is not  allowed , no hositing , scope(function , block scope , global scope)




  # Scope in variables

   In JavaScript  the term `scope` refers to the visibility and accessibility of variables, functions, and objects within a particular portion of code during runtime. It determines where variables and functions can be accessed and modified in a JavaScript program.

  ` JavaScript has 3 main types of scope:`

  ## function scope

   variable with var , let and const has function scope , so they are visible only inside the function 

 ##  block scope

 const and let have block scope while var is visible outside even used inside loop

  ##  global scope

 const , var  and let have global  scope , varibles in global scope can be access from anywhere in the code 


</p>

---

#  <u>Define Vs not define Vs undefined varibles</u>
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
  // console.log(name);  //name is not defined cause we cannot used varible before  assignment or initialization   but we can before decelartion
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
---
---












