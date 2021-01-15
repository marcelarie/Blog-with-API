import {getPosts, getUser, getPost, detectScrollBottom} from './data/data.js'
import {showOrHide, filterContent} from './modal/showModal.js'

$(document).ready(function () {
    detectScrollBottom();
    getPosts('https://jsonplaceholder.typicode.com/posts');
    buttonListeners();
});

function buttonListeners() {
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
        };
    });
};
