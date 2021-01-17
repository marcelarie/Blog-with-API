import {clone} from '../data/clone.js'

function editModalListeners() {
    document.addEventListener('click',
        function (e) {
            if (e.target && e.target.textContent === 'done_outline') {
                saveButton('nosave');
                modalEditMode('noedit');
            } else if (e.target && $(e.target)
                .hasClass('post--buttons--edit')) {
                saveButton('save');
                modalEditMode('edit');
            }
        })
}

function saveButton(status) {
    const editButton = $('#edit--on--post')
    if (status === 'save') {
        editButton.text('done_outline')
        $(editButton).addClass('done--button');
        editButton.css('color', 'var(--green)')
    } else {
        editButton.text('edit')
        $(editButton).removeClass('done--button');
        editButton.css('color', 'var(--light-grey)')
    }
}

function modalInputListeners() {
    document.getElementById('modal-content').addEventListener('input',
        function (e) {
            const id = $('#edit--on--post').attr('post--id')
            const userId = $('#edit--on--post').attr('user--id')
            
            if(e.target.id=='modal--title'){
                clone[id-1].title = e.target.value; 
            }else if(e.target.id=='modal--body'){
                clone[id-1].body = e.target.value; 
            }
            /*clone.forEach(post => {
                if (post.userId === parseFloat(userId)
                    && post.id === parseFloat(id)) {
                    if(e.target.id=='modal--title'){
                        post.title = e.target.value; 
                    }else if(e.target.id=='modal--body'){
                       post.body = e.target.value; 
                    }
                }
            })*/
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
