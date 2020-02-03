import createRowWithData from './renderers/renderRowWithData';
import getResourse from './api/getResourse';

let parentElem = document.querySelector('.table-results');
let numberPattern = /\d+/g;

parentElem.addEventListener('click', e => {
    /* Remove row */
    if (e.target.classList.contains('trash-icon')) {
        e.target.closest('.table-row').remove();
    }
    /* Select row */
    else if (e.target.classList.contains('checkmark')) {
        e.target.closest('.table-row').classList.toggle('active');
        // e.target.closest('.table-header').querySelector('.selected-block').classList.add('active');
    }
    /* Refresh row data */
    else if (e.target.classList.contains('recrawl-button')) {
        let id = e.target.closest('.table-row').getAttribute('id');
        let numericId = id.match(numberPattern)[0];
        getResourse('https://semalt.tech/dev/api/v1/example/test/')
            .then(data => {
                let rowData = data.result.sitemap[numericId];
                let dataArray = [rowData];
                /* Convert NodeList to Array*/
                let nodeListRowCells = e.target.closest('.table-row').querySelectorAll('.table-cell');
                let arrayRowCells = Array.prototype.slice.call(nodeListRowCells);
                /* Clear data in current row */
                arrayRowCells.forEach(item => {
                    if(!item.classList.contains('select-one_checkbox') || !item.classList.contains('remove_cell')) {}
                    item.innerHTML = '';
                });
                /* works properly only on 1-st row...*/
                createRowWithData(dataArray, false);
            })
            .catch(err => console.error(err));
    }
});



