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
                const splittedUrl = parent.children[0].getAttribute('src').split('/')
                const title = parent.children[1].children[0].textContent
                const body = parent.children[1].children[0].textContent
                const url = splittedUrl.map(item => {
                    item = item.replace('200', '600')
                    return item
                })
                getPost(title, url.join('/'), body);
            } else {
                const title = parent.children[0].textContent
                const body = parent.children[0].textContent
                const splittedUrl = parent.parentElement.children[0].getAttribute('src').split('/')
                const url = splittedUrl.map(item => {
                    item = item.replace('200', '600')
                    return item
                })
                getPost(title, url.join('/'), body);
            }
            showOrHide('show')
            getUser(userId);
        };
    })
}
