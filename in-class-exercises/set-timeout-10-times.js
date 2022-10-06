function invokeTimes(fn, times, time) {
    for (var i = 0; i < times; i++) {
        // setTimeout(fn.bind(null, i), i * time); works too instead of the bottom method
        var timeoutHandler = function(count) {
			return function() {
				fn(count);
			}
		}
        // can't just past in func(i), need to pass a function that returns the function passed in.
		setTimeout(timeoutHandler(i), time * i);
    }
}

// There is a difference from the above method: this one only finishes the next timeout when the first one finishes.
//      will have to run in browser using alert() to see the difference.
function invokeTimesAgain(fn, times, time) {
	var count = 0;
	var timeoutHandler = function() {
		func(count);
		count = count + 1;
		if (count < times) {
			setTimeout(timeoutHandler, time);
		}
	}
	if (times > 0) setTimeout(timeoutHandler, time);
}

var setup = function() {
    invokeTimes(function(i) { console.log("hello " + i); }, 10, 1000);
}

setup();