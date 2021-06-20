var arr = [];
var inLeft = document.getElementById('inLeft');
var inRight = document.getElementById('inRight');
var outLeft = document.getElementById('outLeft');
var outRight = document.getElementById('outRight');
var disPlay = document.getElementsByClassName('display');
var ruler = /^[0-9]*$/;


function render() {
    var div = document.getElementsByClassName('display');
    var content = '';
    for (var i = 0; i < arr.length; i++){
        content += '<span>' + arr[i] + '</span>';
    }
    div[0].innerHTML = content;
}

function leftIn() {
    var numValue = document.getElementsByTagName('input')[0].value;
    if (!ruler.test(numValue)) {
        alert('输入错误！！！');
        document.getElementsByTagName('input').value = '';
        document.getElementsByTagName('input').focus();
    }
    else {
        arr.unshift(numValue);
        render();
    }
}

function rightIn() {
    var numValue = document.getElementsByTagName('input')[0].value;
    if (!ruler.test(numValue)) {
        alert('输入错误！！！');
        document.getElementsByTagName('input').value = '';
        document.getElementsByTagName('input').focus();
    }
    else {
        arr.push(numValue);
        render();
    }
}

function leftOut() {
    arr.shift();
    render();
}

function rightOut() {
    arr.pop();
    render();
}



inLeft.onclick = leftIn;
    inRight.onclick = rightIn;
    outLeft.onclick = leftOut;
    outRight.onclick = rightOut;  
