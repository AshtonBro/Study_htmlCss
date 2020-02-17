'use strict';

const btAddElem = document.getElementById('btn1'),
    btDeleteElem = document.getElementById('btn2'),
    main = document.getElementById('main'),
    popup = document.querySelector('.popup'),
    cLose = document.querySelector('.close'),
    myList = document.getElementById('list'),
    ul = document.getElementsByTagName('ul'),
    mainField = document.querySelector('.container');
let items = myList.getElementsByClassName('item');

mainField.style.display = 'none';

const addItem = () => {
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Новая задача';
    newLi.className = 'item';
    myList.appendChild(newLi);
    if (items.length > 0) {
        popup.style.display = 'none';
    }
};

const deletItem = () => {
    if (items.length > 0) {
        myList.removeChild(items[items.length - 1]);
    }
    if (items.length == 0) {
        popup.style.display = 'block';
    }
};

btAddElem.addEventListener('click', addItem);
btDeleteElem.addEventListener('click', deletItem);
cLose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// additional tasks

const randomAge = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
};

const check = () => {
    const rndBool = Boolean(Math.round(Math.random()));
    let rndNum = 0;
    let div = document.createElement('div');
    div.innerHTML = 'Do you have 18 ?';
    div.className = 'textScreen';
    main.appendChild(div);
    console.log('Do you have 18 ?');
    setTimeout(() => {
        rndNum = randomAge(17, 19);
        console.log(div.innerHTML = rndNum);
        checkTwo();
    }, 2000);

    const checkTwo = () => {
        if (rndNum === 17) {
            console.log('Access is denied');
            div.innerHTML = 'Access is denied';
            clearTimeout(timeoutId);
        } else {
            setTimeout(checkTree, 2000);
        }
    };

    const checkTree = () => {
        console.log(div.innerHTML = 'Do you have subscription ?');
        setTimeout(() => {
            if (rndBool == true){
                console.log('YES');
                div.innerHTML = 'YES';
                setTimeout(() => {
                    console.log('Welcome');
                    div.style.color = 'blue';
                    div.innerHTML = 'Welcome';
                    setTimeout(() => {
                        mainField.style.display = 'block';
                        clearTimeout(timeoutId);
                    }, 2000);
                }, 2000);
            } 
            if (rndBool == false){
                console.log('NO');
                div.innerHTML = 'NO';
                setTimeout(() => {
                    console.log('You are not subscribed! Access is denied');
                    div.style.color = 'red';
                    div.innerHTML = 'You are not subscribed! Access is denied';
                    clearTimeout(timeoutId);
                }, 2000);
            }
        }, 2000);
    };
    };

let timeoutId = setTimeout(check, 1000);