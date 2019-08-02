function add (x) { return function (y) { return x + y } }
var add2 = add(2);
console.log(add2(2));

