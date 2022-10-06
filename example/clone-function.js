var test = function() {return "Hello World!"}
var dupTest = test.bind();
console.log(test());
console.log(dupTest());
dupTest.abc = 'abc';
console.log(dupTest.abc);
console.log(test.abc);
