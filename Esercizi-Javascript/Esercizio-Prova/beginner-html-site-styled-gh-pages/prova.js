const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').addEventListener('click',()=> {
    alert
        ('Ouch! Se mme clicchi nantra vorta divento la volpe a nove code super sayian 3');
});
let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute ('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute ('src', 'images/firefox2.png')
    } else {
        myImage.setAttribute ('src', 'images/firefox-icon.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello World!';

function setUserName() {
    let myName = prompt('Please enter your Name');
    local.storage.setItem('Name', myName);
    myHeading.textContent = 'Mozilla is cool' + myName;
}

if (!localStorage.getItem('Name')){
    setUserName();
}
else 
{
    let storedName = localStorage.getItem ('Name'); 
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}