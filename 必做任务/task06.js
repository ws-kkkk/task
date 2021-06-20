var arr = [];
var inRight = document.getElementById('inRight');
var searchIt = document.getElementById('search');
var ruler = /^[0-9]*$/;


function render() {
    var div = document.getElementsByClassName('display');
    var content = '';
    for (var i = 0; i < arr.length; i++){
        content += '<span class="old">' + arr[i] + '</span>';
    }
    div[0].innerHTML = content;
}



function rightIn() {
    var numValue = document.getElementsByTagName('textarea')[0].value;
    if (!ruler.test(numValue)) {
        alert('输入错误！！！');
        document.getElementsByTagName('textarea').value = '';
        document.getElementsByTagName('textarea').focus();
    }
    else {
        arr.push(numValue);
        render();
    }
}

function searchOut() {
    var wantValue = document.getElementById('searchText').value;
    
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].replace(wantValue, '<span class="new">' + wantValue + '</span>');
    }
    render();
}

inRight.onclick = rightIn;
searchIt.onclick = searchOut;

