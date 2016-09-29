var Person = function(firstName, lastName, gender) {
	this.firstName = firstName;	
	this.lastName = lastName;
	this.gender = gender;
	this.name = function() { // this is how you add a method 
		return this.firstName + " " + this.lastName;
	}
}

var p1 = new Person("John", "Smith", "Male");
console.log( p1.firstName );
console.log( p1["lastName"] );
console.log( p1.name );

p1.print = function() {
	console.log("Boo");
}


Person.prototype.print = function() { // this is a method of the prototype
	console.log( this.name() + " " + this.gender );
}


console.log(p1);
var proto1 = Object.getPrototypeOf(p1);
console.log(proto1);
console.log(proto1.gender);
console.log(Object.getPrototypeOf(proto1));

var p2 = new Person("Linda", "James", "Female");
var proto2 = Object.getPrototypeOf(p2);
console.log(proto2);
console.log(p2);

p1.print();
p2.print();

var Employee = function(firstName, lastName, gender, title) {
	Person.call(this, firstName, lastName, gender);
	this.title = title;	
};

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

Employee.prototype.print = function() {
	console.log( this.name() + " " + this.gender + " " + this.title );
}

var e1 = new Employee("XYZ", "ABC", "Male", "Manager");
console.log( Object.getPrototypeOf(e1) );

// Print all the people and the employees
e1.print();
p1.print();
p2.print();
