var intervalHandler = function() {
    return function() {
        var counter = document.getElementById('counter');
        var count = counter.nodeValue;
        var count_as_number = parseInt(count);
        count_as_number += 1;
        counter.nodeValue = count_as_number.toString();
    }
}

window.onload = function() {
    var ret = setInterval(intervalHandler(), 1000);
}