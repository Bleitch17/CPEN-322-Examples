var filter = function(array, fn) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (fn(element)) {
            result.push(element);
        }
    }
    return result;
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(arr, function(num) { return num <= 2; }));
