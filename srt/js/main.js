import {getPosts, getUser, deletePost} from './data/data.js'



$(document).ready(function () {
    getPosts('https://jsonplaceholder.typicode.com/posts');
    getUser(1);
    buttonListeners();
});

function buttonListeners() {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('post--content--title')) {
            console.log(e.target)
        }
        else if(e.target && e.target.classList.contains('post--buttons--delete')){
            deletePost(e.target.value);
        }
    })
}
