const input = document.querySelector('input');
input.focus();
const button = document.querySelector('.button')
const list = document.querySelector('ul');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addToList();
    }
});

function addToList() {
    const inputText = input.value;
    input.value = "";

    const item = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.textContent = inputText;

    const itemRemove = document.createElement('div');
    itemRemove.textContent = 'X';
    // itemRemove.toggleAttribute('class', 'item-remove');
    itemRemove.setAttribute('class', 'item-remove');
    itemRemove.addEventListener('click', () => {
        itemRemove.parentNode.remove();
    });

    item.appendChild(itemText);
    item.appendChild(itemRemove);
    list.appendChild(item);
    input.focus();
}