var Point = function(x, y) {
    this.x = x;
    this.y = y;
    this.area = function() {
        return 0;    
    }
}
Point.prototype.toString = function() {
    return this.x + ', ' + this.y;
}


var Circle = function(x, y, r) {
    Point.call(this, x, y);                 // assigns 'this.area' to Point's implementation
    this.r = r;
    this.area = function() {                // overriding Point's area function - putting this in Circle.prototype would not be correct in this scenario
        return Math.PI * this.r * this.r;
    }
}
Circle.prototype = new Point();             // Sets Circle.prototype.__proto__ = Point.prototype
Circle.prototype.constructor = Circle;
Circle.prototype.toString = function() {
    return this.x + ',' + this.y + ', ' + this.r;
}


var Ellipse = function(x, y, r, r2) {
    Circle.call(this, x, y, r);
    this.r2 = r2;
    this.area = function() {
        return Math.PI * this.r * this.r2;
    }
}
Ellipse.prototype = new Circle();           // Sets Ellips.prototype.__proto__ = Circle.prototype, where Circle.prototype.__proto__ = Point.prototype
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.toString = function() {
    return this.x + ', ' + this.y + ', ' + this.r + ', ' + this.r2; 
}

// Remember: if cannot find the method in the object, search the __proto__ field of object.


var p = new Point(0, 0);                // Sets p.__proto__ = Point.protoype
console.log(p.toString());

var c = new Circle(0, 0, 1);            // Sets c.__proto__ = Circle.prototype, where Circle.prototype.__proto__ = Point.prototype
console.log(c.toString());

var e = new Ellipse(0, 0, 1, 2);        // Sets e.__proto__ = Ellipse.prototype, where Ellipse.prototype.__proto__ = Circle.prototype, where Circle.prototype.__proto__ = Point.prototype
console.log(e.toString());