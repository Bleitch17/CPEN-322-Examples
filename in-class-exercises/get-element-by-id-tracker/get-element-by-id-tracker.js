var divInit = function () {
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].accessed = 0;
    }
}

// Should first store the original getElementById
// use .call on the original getElementById to set the 'this' value to document.

// My first attempt:
document.getElementById = function(id) {
    var element = document.querySelector('#' + id);
    if (element.tagName == 'DIV') {
        element.accessed += 1;
        alert(element.accessed);
    }
    return element;
}

window.onload = function() {
    divInit();
    // document.getElementById('one');
    // document.getElementById('two');
    // document.getElementById('one');
}