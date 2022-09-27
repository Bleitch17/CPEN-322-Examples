var Point = {
    init: function(x, y) {
        this.x = x;
        this.y = y;
    },
    area: function() {
        return 0;
    },
    toString() {
        return this.x + ', ' + this.y;
    }
}


var Circle = Object.create(Point); // Sets Circle.__proto__ to Point object
Circle.init = function(x, y, r) {
    Point.init.call(this, x, y);
    this.r = r;
}
Circle.area = function() {
    return Math.PI * this.r * this.r;
}
Circle.toString = function() {
    return this.x + ', ' + this.y + ', ' + this.r;
}

var Ellipse = Object.create(Circle); // Sets Ellipse.__proto__ to Circle object
Ellipse.init = function(x, y, r, r2) {
    Circle.init.call(this, x, y, r);
    this.r2 = r2;
}
Ellipse.area = function() {
    return Math.PI * this.r * this.r2;
}
Ellipse.toString = function() {
    return this.x + ', ' + this.y + ', ' + this.r + ', ' + this.r2;
}

var p = Object.create(Point);       // Sets p.__proto__ to Point object
p.init(0, 0);
console.log(p.toString());
console.log(p.area());

var c = Object.create(Circle);      // Sets c.__proto__ to Circle object, where Circle.__proto__ = Point object
c.init(0, 0, 1);
console.log(c.toString());
console.log(c.area());

var e = Object.create(Ellipse);     // Sets e.__proto__ to Ellipse object, where Ellipse.__proto__ = Circle object, where Circle.__proto__ = Point object
e.init(0, 0, 1, 2);
console.log(e.toString());
console.log(e.area());