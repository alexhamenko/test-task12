export default function(id, tooltipText, tooltipPosition, parentElem) {
    let parent = document.querySelector(parentElem);

    let container = document.createElement('div');
    container.classList.add('trash-icon', 'tooltip-item'), `tooltip-item-${id}`;

    let tooltip = document.createElement('span');
    let position = `tooltip-text--${tooltipPosition}`;
    tooltip.classList.add('tooltip-text', position);
    tooltip.innerText = tooltipText;

    container.appendChild(tooltip);

    parent.appendChild(container);
}