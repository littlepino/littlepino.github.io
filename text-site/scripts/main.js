var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc==='img/c003844dab4b64d20351143cd1288acb_hd.jpg') {
        myImage.setAttribute('src', 'img/zhouxingchi.jpg');

    }else {
        myImage.setAttribute('src', 'img/c003844dab4b64d20351143cd1288acb_hd.jpg');
    }
    
}
var iceCream='chocolate';
if (iceCream==='chocolate'){
    alert('Yay,I love chocolate ice cream');
} else {
    alert("emmmm,but chocolate is my favorite...")
}
function mutiply(num1,num2) {
    var reslut=num1*num2;
    return reslut;
    
}
document.querySelector('html').onclick=function () {
    alert('oh,stop poking me ');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = '帅气的星爷, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '帅气的星爷, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}