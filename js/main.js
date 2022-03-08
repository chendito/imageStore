/*-----------------------------------------------------------------------------------

    Name: imageStore
    Theme URI: @chendito
    Description: Web Site - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io - https://chendito.com
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

-----------------------------------------------------------------------------------*/
const btnMenu = document.querySelector('.car_count');
const openMenu = document.querySelector('.car_list');
const menu = document.querySelector('.menu');
const submenu = document.querySelector('.submenu');
const user = document.querySelector('.user');
const login = document.querySelector('.login_sign-out');

btnMenu.addEventListener('click', () => {
    openMenu.classList.toggle('display');
});
menu.addEventListener('click', () => {
    submenu.classList.toggle('open')
});
user.addEventListener('click', () => {
    login.classList.toggle('open');
});