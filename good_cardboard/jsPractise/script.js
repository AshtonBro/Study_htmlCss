'use strict';

const btAddElem = document.getElementById('btn1'),
    btDeleteElem = document.getElementById('btn2'),
    main = document.getElementById('main'),
    popup = document.querySelector('.popup'),
    cLose = document.querySelector('.close'),
    myList = document.getElementById('list'),
    ul = document.getElementsByTagName('ul');
let items = myList.getElementsByClassName('item');


const addItem = () => {
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Новая задача';
    newLi.className = 'item';
    myList.appendChild(newLi);
    if (items.length > 0){
        popup.style.display = 'none';
    }
};

const deletItem = () => {
    if(items.length > 0){
        myList.removeChild(items[items.length - 1]);
    }
    
    if(items.length == 0){
        popup.style.display = 'block';
    }

};


btAddElem.addEventListener('click', addItem);
btDeleteElem.addEventListener('click', deletItem);