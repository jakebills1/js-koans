* arrays
  * arrays can be multi typed
  * array length is assigneable in two ways `Array.new(10)` or `arr.length == 5`
  * Array.slice is non-inclusive of the 2nd argument
    * positive end values out of the range of the array will return the rest of the array from the begin value
    * invalid or impossible ranges will return an empty array
  * arrays are pass by reference
    * so a function that takes an array and alters it will effect that array globally, even if it does not explicitly return the array
    * EXCEPT if an array is copied over, then changing the values in the copied array will not effect the original array
* functions
  * javascript has lexical scoping with function scope
    * nested function have access to the scope of their parents
  * functions can be called with too many arguments with little affect, but too few args can return undefined behavior
  * the arguments keyword if an array refering to however many arguments were passed in
  * functions are passed by value
* Objects 
  * the `in` keyword tests if a property exists in an object, returning true or false
  * to delete a property of an object, `delete <object>.<property>`
  * the prototype property of object is used to add properties to all instances of that object
* mutability
  * the properties and methods of an object are public and muteable
  * the variables inside a constructor and cunstructor args are private
 
