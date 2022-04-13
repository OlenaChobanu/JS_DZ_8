// создать инпут и кнопку в html темплейте
// при нажатии на кнопку, введенный в инпут текст должен появляться в виде блока с текстом в контейнере под инпутом и кнопкой
// При нажатии очищаем инпут от введенного текста

const inpE = document.querySelector('#input');
const btnE =  document.querySelector('#btn');
const ulContainerE = document.getElementById('list');

btnE.addEventListener('click', onClick);

function onClick() {
    const liE = document.createElement('li');
    liE.textContent = inpE.value;
    ulContainerE.append(liE);
    inpE.value = '';
}