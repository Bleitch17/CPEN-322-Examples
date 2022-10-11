var start = function(id) {
    var node = document.getElementById(id);
    alert(node.nodeType);
    var siblings = node.parentNode.childNodes;
    var nodeData = '';
    if (node.nodeType == 3) {
        alert('text node');
        nodeData += node.nodeValue;
    }
    for (var i = 0; i < siblings.length; i++) {
        if (siblings[i].nodeType == 3) {
            nodeData += siblings[i].nodeValue;
        }
        nodeData += concatenateSubTree(siblings[i]);
    }
    return nodeData;
}

var concatenateSubTree = function(node) {
    var siblings = node.parentNode.childNodes;
    var data = '';
    for (var i = 0; i < siblings.length; i++) {
        if (siblings[i].nodeType == 3) {
            data += siblings[i].nodeValue;
        }
    }
    return data;
}

window.onload = function() {
    message = start('one');
    alert(message);
}