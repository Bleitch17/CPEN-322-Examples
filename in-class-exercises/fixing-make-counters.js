function MakeCounters(n) {
	var counters = [];
	for (var i=0; i<n; i++) {
        counters[i] = function() {
            var initial = i;
            var val = initial;
            return {
                increment: function() { val++; },
                get: function() { return val; },
                reset: function() { val = initial; }
            }
        }(); // calling counters[i] for every i preserves the state that the closure inside counters[i] remembers
	}
	return counters;
};

var m = MakeCounters(10);
for (var i=0; i<10; i++) {
    console.log("Counter[ " + i + "] = " + m[i].get());
}