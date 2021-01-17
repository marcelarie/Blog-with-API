import {clone} from '../data/clone.js'

function editModalListeners() {
    document.addEventListener('click',
        function (e) {
            if (e.target && e.target.textContent === 'done_outline') {
                saveButton('nosave');
                modalEditMode('noedit');
            } else if (e.target && e.target.classList
                .contains('post--buttons--edit')) {
                saveButton('save');
                modalEditMode('edit');
            }
        })
}

function saveButton(status) {
    const editButton = $('#edit--on--post')
    if (status === 'save') {
        editButton.text('done_outline')
        editButton.css('color', 'var(--green)')
    } else {
        editButton.text('edit')
        editButton.css('color', 'var(--light-grey)')
    }
}

function modalInputListeners() {
    document.getElementById('modal-content').addEventListener('input',
        function (e) {
            const id = $('#edit--on--post').attr('post--id')
            const userId = $('#edit--on--post').attr('user--id')
            clone.forEach(post => {
                if (post.userId === parseFloat(userId) && post.id === parseFloat(id)) {
                    post.body = e.target.value;
                }
            })
        })
}

function modalEditMode(input) {
    if (input === 'edit') {
        $('#modal--title').removeAttr('readonly');
        $('#modal--body').removeAttr('readonly');
    } else {
        $('#modal--title').attr('readonly', true);
        $('#modal--body').attr('readonly', true);
    }
}

export {editModalListeners, modalEditMode, modalInputListeners, saveButton}
