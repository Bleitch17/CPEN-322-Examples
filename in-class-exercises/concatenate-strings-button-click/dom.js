var clickHandler = function(message, fn) {
    // event gets passed to the event handler:
    return function(e) {
        fn(message);
    }
}

window.addEventListener('load', function() {
    var button = document.getElementById('click');
    button.addEventListener('click', clickHandler('click', alert), false);
}, false);
