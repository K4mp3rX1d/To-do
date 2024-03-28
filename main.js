const input = document.querySelector('.input');
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
    const inputText = input.textContent;
    input.textContent = "";

    const done = document.createElement('div');
    done.innerHTML = "&check;"
    done.classList.toggle('status');
    done.addEventListener('click', () => {
        done.parentElement.childNodes[1].classList.toggle('done');
    });

    const item = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.textContent = inputText;

    const itemRemove = document.createElement('div');
    itemRemove.innerHTML = '&#10060;';
    itemRemove.classList.toggle('item-remove');
    itemRemove.addEventListener('click', () => {
        itemRemove.parentNode.remove();
    });

    item.appendChild(done);
    item.appendChild(itemText);
    item.appendChild(itemRemove);
    list.appendChild(item);
    input.focus();
}