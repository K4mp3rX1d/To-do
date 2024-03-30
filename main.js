const input = document.querySelector('.input');
// input.focus();
const button = document.querySelector('.button')
const list = document.querySelector('.todo > ul');
const acomplished = document.querySelector('.acomplished > ul');

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
        const selectedItem = done.parentElement;
        const selectedParent = selectedItem.parentElement === list ? acomplished : list;
        selectedItem.childNodes[1].classList.toggle('done');
        selectedParent.appendChild(selectedItem);
    });

    const item = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.textContent = inputText;
    itemText.addEventListener('dblclick', () => {
        itemText.classList.add('editable');
        itemText.contentEditable = true;
    });
    itemText.addEventListener('focusout', () => {
        itemText.classList.remove('editable');
        itemText.contentEditable = false;
    });
    itemText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            itemText.classList.remove('editable');
            itemText.contentEditable = false;
        }
    });

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