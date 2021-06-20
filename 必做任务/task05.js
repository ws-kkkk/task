var arr = [];
var inLeft = document.getElementById('inLeft');
var inRight = document.getElementById('inRight');
var outLeft = document.getElementById('outLeft');
var outRight = document.getElementById('outRight');
var itSort = document.getElementById('sortIt');

var ruler = /^[0-9]*$/;


function render() {
    var div = document.getElementById('display');
    div.innerHTML = '';
    for (var i = 0; i < arr.length; i++){
        div.innerHTML += '<span>' + '</span>';
        div.childNodes[i].style.height = arr[i]+ 'px';
    }
    
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
function sortThem() {
    for (var j = 0; j < arr.length-1; j++){
        for (var i = 0; i < arr.length-j-1; i++){
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        };
    };
    render();
}



window.onload = function () {
    inLeft.onclick = leftIn;
    inRight.onclick = rightIn;
    outLeft.onclick = leftOut;
    outRight.onclick = rightOut;  
itSort.onclick = sortThem;
};