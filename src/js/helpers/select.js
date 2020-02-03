document.querySelectorAll('.select').forEach(select => { //Выбриаем все выпадающие списки на странице

    let selectCurrent = select.querySelector('.select__current'),
        selectList = select.querySelector('.select__list'),
        selectInput = select.querySelector('.select__input'),
        selectItem = select.querySelectorAll('.select__item');

    selectCurrent.addEventListener('click', () => {
        selectList.classList.toggle('select__list--show')
    });

    selectItem.forEach(item =>{

        item.addEventListener('click', ()=>{

            let itemValue = item.getAttribute('data-value');

            let itemText = item.textContent;

            selectInput.value = itemValue;

            selectCurrent.textContent = itemText;

            selectListHide();
        })
    });

    // Close select function
    let selectListHide = () => {
        selectList.classList.remove('select__list--show');
    };
    // Close select on outside click
    document.addEventListener('mouseup', (e) =>{
        if (!select.contains(e.target))	selectListHide();
    });
});