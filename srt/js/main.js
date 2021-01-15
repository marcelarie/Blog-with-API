import {getPosts, getUser, getPost, deletePost, detectScrollBottom} from './data/data.js'
import {showOrHide, filterContent} from './modal/showModal.js'

$(document).ready(function () {
    detectScrollBottom();
    getPosts('https://jsonplaceholder.typicode.com/posts');
    buttonListenersPost();
    editModalListeners();
});

function buttonListenersPost() {
    document.addEventListener('click', function (e) {
        const userId = e.target.getAttribute('userId');
        const parent = e.target.parentElement
        if (e.target && e.target.classList.contains('open--modal')) {
            if (parent.classList.contains('post')) {
                const post = filterContent('post', parent)
                getPost(post.title, post.url.join('/'), post.body);
            } else {
                const post = filterContent('else', parent)
                getPost(post.title, post.url.join('/'), post.body);
            }
            showOrHide('show')
            getUser(userId);
        } else if (e.target &&
            e.target.classList.contains('post--buttons--delete')) {
            deletePost(e.target.value)
        } else if (e.target &&
            e.target.classList.contains('post--buttons--edit')) {
            const post = filterContent('edit', parent)
            getPost(post.title, post.url.join('/'), post.body);
            showOrHide('show')
            getUser(userId);
        }
    });
};

function editModalListeners() {
    document.getElementById('posts--container').addEventListener('click',
        function (e) {
            if (e.target && e.target.classList
                .contains('post--buttons--edit')) {
                modalEditMode('edit');
            }
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
