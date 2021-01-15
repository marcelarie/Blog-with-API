import {getPosts, getUser} from './data/data.js'
import {resizeH1, newSize} from './modal/resizeH1.js'



$(document).ready(function () {
    newSize();
    resizeH1();
    getPosts('https://jsonplaceholder.typicode.com/posts');
    getUser(1);
});

function buttonListeners() {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('post--content--title')) {
            console.log(e.target)
        }
    })
}
