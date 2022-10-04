function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = function(point) {
		return Math.sqrt( (this.x - point.x) * (this.x - point.x)
				+ (this.y - point.y) * (this.y - point.y) );
	};
	return 0;	
};

Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
};

var addAll = function() {
    var p = new Point(0, 0);
    for (var i = 0; i < arguments.length; i++) {
        var point = arguments[i];
        if (Object.getPrototypeOf(point) != Point.prototype) {
            throw {
                name: TypeError,
                message: 'Object ' + point + ' is not of type Point',
                result: p
            };
        }
        p.x += point.x;
        p.y += point.y;
    }
    return p;
}

var p1 = new Point(2, 3);
var p2 = new Point(1, 4);

try {
    console.log(addAll(p1, p2, { type: 'random garbage' }).toString());
} catch (e) {
    console.log(e.message);
    console.log(e.result.toString());
}
