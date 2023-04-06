// ________________pass by value example___________________
/* let num = 42; // global variable 

 function modifyNum(n) {
  n = 99;   // here new value assigned to the n // local variable  , so not affecting the original one as it passed by value 
}

 modifyNum(num);

 console.log(num); // Outputs: 42 
  */




// but here it update the global variable 
/*
let a = 4;

 function update() {
  a = 10; // Update the global variable a , as the value here and original value both ref to the same global ref and scope 
}
 update();
 console.log(a); // Outputs: 10

 */

// ________________pass by value example end___________________





// ________________pass by ref example___________________

/* const obj = { prop: 'value' };

 function modifyObj(o) {   // obj(original) here is copied  so 0 and obj pointing to the same ref or memory location
   o.prop = 'new value';      // modifying the o will effect the obj(original) cause o(copying the original) have the same ref as obj(original)
 }

 modifyObj(obj);

 console.log(obj.prop); // Outputs: 'new value' */


// but 
/*
const obj = { prop: 'value' };

function modifyObj(o) {
  o = 'new value';   // here ' new value ' is passed as new varible to the o which make it local variable , now obj and o pointing different memory or ref so not changing the 
}

modifyObj(obj);

console.log(obj.prop); // Outputs: 'value' , not changed 
*/

// the same with array as we did for objects
const obj = { prop: 'value' };

function modifyObj() {
  o =  obj
  o.prop= 'new value'
}

modifyObj();

console.log(obj.prop); // Outputs: 'new value'









