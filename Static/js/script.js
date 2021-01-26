function convertToDays(){
    let daysInYear = 365;
    let year = prompt('What year were you born?');
    let currentYear = 2020;
    let convertYearToDays = (currentYear - year) * daysInYear;
    var h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + convertYearToDays + ' days old');
    h1.setAttribute('id', 'convertYearToDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(convertYearToDays);
}

function reset(){
    document.getElementById('convertYearToDays').remove();
}

let addToDoButtom = document.getElementById('addToDo');
let toDoContainer = document.getElementById('inputContainer');
let inputField = document.getElementById('inputField');

addToDoButtom.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})