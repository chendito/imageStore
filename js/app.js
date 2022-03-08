/*-----------------------------------------------------------------------------------

    Name: imageStore
    Theme URI: @chendito
    Description: Web Site - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io - https://chendito.com
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

-----------------------------------------------------------------------------------*/
const storeList = document.querySelector('#store_list');
const car = document.querySelector('#store_car');
const bodyCar = document.querySelector('.car_list tbody'); 
let countChen = document.querySelector('#count_chen');
let count = 0;

let articles = [];
eventListeners();
function eventListeners() {
    storeList.addEventListener('click', addCar);

    document.addEventListener('DOMContentLoaded', () => {
        articles = JSON.parse(localStorage.getItem('car')) || [];
        addToCar();
    });

    car.addEventListener('click', delItem);

}
function addCar(e) {
    e.preventDefault();
    if(e.target.classList.contains('btn')){
        const data = e.target.parentElement.parentElement;
        readHTML(data);
    }
}
function delItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('deleteItem')){
        const delId = e.target.getAttribute('data-id');
        articles = articles.filter( item => item.id !== delId);
        localStorage.removeItem('car');
        count = articles.length;
        addToCar();
        addHTML();
    } 
}
function readHTML(item){
    const containerCar = {
        image: item.querySelector('img').src,
        name: item.querySelector('small').textContent,
        price: item.querySelector('p').textContent,
        id:    item.querySelector('a').getAttribute('data-id'),
        total: 1,
    }
    const exists = articles.some( item => item.id === containerCar.id);
    if(exists) {
        const items = articles.map( item => {   
            if(item.id === containerCar.id) {
                item.total++;
                return item;
            } else{
                return item;  
            }
        });
        articles = [...items];
    } else {
        articles = [...articles, containerCar];
    }

    addToCar();
}
function addToCar() {
    clearHTML();
    articles.forEach( article => {
        const { image, name, price, total, id} = article;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <img src="${image}" width="100">
            </td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${total}</td>
            <td>
                <a href="#" class="deleteItem" data-id="${id}">x</a>
            </td>
        `;
        count = articles.length;
        bodyCar.appendChild(tr);
        addHTML();
        s();
    })
}
function s() {
    localStorage.setItem('car', JSON.stringify(articles));
}
function addHTML() {
    let countChen = document.querySelector('#count_chen');
    countChen.innerHTML = `${count}`
}
function clearHTML() {
    while(bodyCar.firstChild){
        bodyCar.removeChild(bodyCar.firstChild);
    }
}