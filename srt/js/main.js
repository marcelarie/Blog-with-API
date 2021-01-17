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
    saveButton
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
        const urlImg = $(e.target).closest('img')[0].src
        if (e.target && $(e.target).hasClass('open--modal')) {
            clone.forEach(post => {
                if (post.userId === parseFloat(userId)
                    && post.id === parseFloat(id)) {
                    getPost(post.title, urlImg, post.body, post.userId, post.id)
                }
            });
            showOrHide('show');
            getUser(userId);
        } else if (e.target && $(e.target).hasClass('post--buttons--delete')) {
            deletePost(e.target.value);
        } else if (e.target && $(e.target).hasClass('post--buttons--edit')) {
            clone.forEach(post => {
                if (post.userId === parseFloat(userId)
                    && post.id === parseFloat(id)) {
                    getPost(post.title, urlImg, post.body, post.userId, post.id);
                }
            });
            showOrHide('show');
            getUser(userId);
        }
    })
}

function buttonsPostModal() {
    $('#modal').on('click', function (e) {
        if (e.target && $(e.target).hasClass('modal--buttons--close')) {
            modalEditMode('noedit');
            saveButton('nosave');
            showOrHide('hide');
        } else if (e.target && $(e.target).hasClass('modal--comments-load')) {
            getComments(e.target.value);
        }
    })
}
