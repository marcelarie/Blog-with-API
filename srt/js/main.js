import {getPosts, getUser, deletePost, detectScrollBottom, getComments, editPost} from './data/data.js'


$(document).ready(function () {
    getPosts();
    getUser(1);
    buttonListeners();
    detectScrollBottom();
    editPost(1, 'title', 'body')
});

function buttonListeners() {
    $('.posts').on('click', function (e) {
        if (e.target && e.target.classList.contains('post--content--title')) {
            console.log(e.target)
        }
        else if(e.target && e.target.classList.contains('post--buttons--delete')){
            deletePost(e.target.value);
        }
    })
}




