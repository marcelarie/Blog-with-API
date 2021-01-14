import {getPosts, getUser} from './data/data.js'
import {resizeH1} from './modal/resizeH1.js'


getPosts('https://jsonplaceholder.typicode.com/posts');
getUser(1)


$(document).ready(function () {
    resizeH1();
});

function buttonListeners() {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('post--content--title')) {
            console.log(e.target)
        }
    })
}
