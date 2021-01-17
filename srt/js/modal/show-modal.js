
function showOrHide(parameter) {
    const modal = $('#modal')

    if (parameter === 'show') {
        modal.removeClass('none');
    } else if (parameter === 'hide') {
        modal.addClass('none')
        $('.modal--comments--container').text('');
    }
};

export {showOrHide}
