const input = document.querySelector('input');
const button = document.querySelector('button')
const list = document.querySelector('ul');

button.addEventListener('click', addToList);

function addToList() {
    const item = document.createElement('li');
    item.textContent = "Function Not Implemented Yet!";
    list.appendChild(item);
    //TO-DO: Complete the function
}