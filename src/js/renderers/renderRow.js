
/* Некрасивый код. Знаю, что здесь необходимо использовать инструменты
по типу JSX, но следовал требованию делать ТЗ на чистом JS */

export default function (id, parentElem, cellNames) {
    let parent = document.querySelector(parentElem);
    let cells = cellNames;

    let infoRow = document.createElement('div');
    infoRow.classList.add('table-row');
    infoRow.setAttribute('id', `table-row-${id}`);

    for (let i = 0; i < cells.length; i++) {
        let tableCell =  document.createElement('div');
        let uniqueClass = cells[i];
        tableCell.classList.add('table-cell', uniqueClass);
        infoRow.appendChild(tableCell);
    }
    parent.appendChild(infoRow);

}
