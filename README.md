# Define Vs not define Vs  undefined 

## Define
<p>
`Defined`: means that a variable or function has been declared and assigned a value. For example:
</p>

```
var x = 5;
function add(a, b) {
  return a + b;
}
```

<p>
variable  `x` has been declared as var x and it has value 5 , so ```console.log(x)```  will give us output 5
</p>

## not defined 
<p>
`Not defined:` means that a variable or function has not been `declared` or is not in `scope`.
 like no `var` , `let` or `const` has been used with variables and we are trying to access them 
it will give us the message variable is `not defined`
or
we try to access the declared variable but which is not in the same `scope` where we are accessing them
</p>

#### Example

```
console.log(z); // Output: Uncaught ReferenceError: z is not defined
```

## undefined 
<p>
`Undefined` means that a variable or property has been declared, but has not been assigned a `value`
In the Follwowing example , we trying to access the decalred which donot contain value yet
<p>

#### Example
```
var y;
console.log(y); // Output: undefined
```
---








