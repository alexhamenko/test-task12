import renderCheckbox from './renderCheckbox';
import renderRemoveBtn from './renderTrashBtnWithTooltip';
import renderRow from  './renderRow';

/* Create row with data */
export default function createRowWithData(response, renderNewRow = true) {
    response.forEach(function(item, id){
        if (renderNewRow) {
            createEmptyRow(id);
        }
        createNamedLink(item.path, '/sitemap.xml', `#table-row-${id} .result-url`);

        createSpanWithData('Sitemap index', `#table-row-${id} .result-type`);

        let submittedDateFormatted = parseIsoDate(item.lastSubmitted);
        createSpanWithData(submittedDateFormatted, `#table-row-${id} .submitted-date`);

        let lastCheckDateFormatted = parseIsoDate(item.lastCheck);
        createSpanWithData(lastCheckDateFormatted, `#table-row-${id} .last-check`);
        
        if(item.errors) {
            createSpanWithData(`${item.errors} Errors`, `#table-row-${id} .result-status`, 'error-text');
            createSpanWithData(0, `#table-row-${id} .url-count`);
        } else {
            createSpanWithData('Success', `#table-row-${id} .result-status`, 'success-text');
            createSpanWithData(item.urls, `#table-row-${id} .url-count`);
        }

        createSpanWithData('Recrawl', `#table-row-${id} .recrawl-buttons`, 'recrawl-button');
    })
}

/* Empty row with accessory elements */
function createEmptyRow(id) {
    renderRow(id, '.table-results', [
        'select-one_checkbox',
        'result-url',
        'result-type',
        'submitted-date',
        'last-check',
        'result-status',
        'url-count',
        'recrawl-buttons',
        'remove-cell'
    ]);
    renderCheckbox(id, `#table-row-${id} .select-one_checkbox`);
    renderRemoveBtn(id, 'Remove from Search Console', 'left', `#table-row-${id} .remove-cell`);
}

/* Create span with data and append it to target element */
function createSpanWithData(data, targetElem, spanClasses = null) {
    let target = document.querySelector(targetElem);
    let span = document.createElement('span');
    span.innerHTML = data;
    span.classList.add(spanClasses);
    target.appendChild(span);
    return target;
}

/* Create link with url and text. Then append it to target element */
function createNamedLink(url, text, targetElem) {
    let link = document.createElement('a');
    let target = document.querySelector(targetElem);
    link.setAttribute('href', `${url}`);
    link.innerText = text;
    target.appendChild(link);
    return target;
}

/* Parse data to 'Mon dd, yyyy' format */
function parseIsoDate(date) {
    const formatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short' , year: 'numeric' });
    let ms = new Date(date);
    let result = formatter.format(ms);
    return result
}