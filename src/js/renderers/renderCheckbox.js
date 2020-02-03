export default function (id, parentElem) {
    let parent = document.querySelector(parentElem);
    let idString = `checkbox-container-${id}`;

    let checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');

    let input = document.createElement('input');
    input.setAttribute('id', idString);
    input.setAttribute('type', 'checkbox');


    let label = document.createElement('label');
    label.setAttribute('for', idString);
    label.classList.add('checkmark');

    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);

    parent.appendChild(checkboxContainer);
}