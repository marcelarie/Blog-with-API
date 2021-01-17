import {
    getPosts,
    getUser,
    getPost,
    deletePost,
    detectScrollBottom,
    getComments
} from './data/data.js'

import {showOrHide} from './modal/show-modal.js'

import {
    editModalListeners,
    modalEditMode,
    modalInputListeners,
} from './modal/edit-modal.js'

import {clone} from './data/clone.js'

$(document).ready(function () {
    detectScrollBottom()
    getPosts('https://jsonplaceholder.typicode.com/posts')
    buttonListenersPosts()
    editModalListeners()
    modalInputListeners()
    buttonsPostModal()
})

function buttonListenersPosts() {
    $('.posts').on('click', function (e) {
        const userId = e.target.getAttribute('userId')
        const id = e.target.getAttribute('value')
        // const parent = e.target.parentElement
        if (e.target && e.target.classList.contains('open--modal')) {
            clone.forEach(i => {
                if (i.userId === parseFloat(userId) && i.id === parseFloat(id)) {
                    getPost(i.title, 'https://picsum.photos/600/600?random',
                        i.body, i.userId)
                }
            });
            showOrHide('show');
            getUser(userId);
        } else if (e.target && e.target.classList.contains('post--buttons--delete')) {
            deletePost(e.target.value);
        } else if (e.target && e.target.classList.contains('post--buttons--edit')) {
            clone.forEach(i => {
                if (i.userId === parseFloat(userId) && i.id === parseFloat(id)) {
                    getPost(i.title, 'https://picsum.photos/600/600?random',
                        i.body, i.userId);
                }
            })
            showOrHide('show');
            getUser(userId);
        }
    })
}

function buttonsPostModal() {
    $('#modal').on('click', function (e) {
        if (e.target && e.target.classList.contains('modal--buttons--close')) {
            modalEditMode('noedit');
            showOrHide('hide');
        } else if (e.target && e.target.classList.contains('modal--comments-load')) {
            getComments(e.target.value);
        }
    })
}
