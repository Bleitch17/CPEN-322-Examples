var setup = function(id, interval) {
    setInterval(intervalHandler(id), interval);
}

// Broken: fix this later.
intervalHandler = function(id) {
    return function() {
        var div = document.getElementById(id);
        var imgs = div.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            var src = imgs[i].src;
            if (i == 0) {
                imgs[imgs.length - 1].src = src;
                imgs[i].src = imgs[i + 1].src;
            } else if (i == imgs.length-1) {
                imgs[i].src = imgs[1].src;
            }
            else {
                imgs[i - 1].src = src;
                imgs[i].src = imgs[i + 1].src;
            }
        }
    }
}

window.onload = function() {
    setup('parent', 5000);
}