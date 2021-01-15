function editModalListeners() {
    document.getElementById('posts--container').addEventListener('click',
        function (e) {
            if (e.target && e.target.classList
                .contains('post--buttons--edit')) {
                modalEditMode('edit');
            }
        })
}

function modalInputListeners() {
    document.getElementById('modal-content').addEventListener('input',
        function (e) {
            console.log(e.target.value)
        })
}

function modalEditMode(input) {
    if (input === 'edit') {
        $('#modal--title').removeAttr('readonly')
        $('#modal--body').removeAttr('readonly')
    } else {
        $('#modal--title').attr('readonly')
        $('#modal--body').attr('readonly')
    }
}

export {editModalListeners, modalEditMode, modalInputListeners}
