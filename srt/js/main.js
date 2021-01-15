import {getPosts, getUser, getPost} from './data/data.js'
import {resizeH1, newSize} from './modal/resizeH1.js'
import {showOrHide} from './modal/showModal.js'



$(document).ready(function () {
    newSize();
    resizeH1();
    getPosts('https://jsonplaceholder.typicode.com/posts');
    buttonListeners();
});

function buttonListeners() {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('open--modal')) {
            const userId = e.target.getAttribute('userId');
            const parent = e.target.parentElement
            if (parent.classList.contains('post')) {
                const url = parent.children[0].getAttribute('src')
                const title = parent.children[1].children[0].textContent
                getPost(title, url);
            } else {
                const title = parent.children[0].textContent
                const url = parent.parentElement.children[0].getAttribute('src')
                getPost(title, url);
            }
            showOrHide('show')
            getUser(userId);
        };
    })
}
