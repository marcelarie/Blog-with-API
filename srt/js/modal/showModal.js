
function showOrHide(parameter) {
    const modal = document.getElementById('modal')

    if (parameter === 'show') {
        modal.classList.remove('none');
    } else if (parameter === 'hide') {
        modal.classList.add('none')
    }
};

export {showOrHide}
