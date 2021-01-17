import {cloneJSON, clone} from './clone.js'

let start = 0;
let canLoadMore = true;

function getSinglePost(id) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                clone[id-1]=data;
            },
            error: function (jqXHR, textStatus, errorThrown) {},
        });
}

function getPosts() {
    if (start < 100) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=9`,
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                cloneJSON(data)
                printAllPosts(data)
                start += 9;
                canLoadMore = true;
            },
            error: function (jqXHR, textStatus, errorThrown) {},
        });
    }
}

function printAllPosts(posts) {
    posts.forEach((post) => {
        printPost(post);
    });
}

function detectScrollBottom() {
    $(".posts").scroll(function () {
        detectBottom()
    });
}
function detectBottom() {
    let lastPost = $(".post:last-child");
    if (
        $(lastPost).position().top - $(".posts").height() +
        $(lastPost).height() <= 0 && canLoadMore
    ) {
        getPosts();
        canLoadMore = false;
    }
}

function getUser(id) {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        type: "GET",
        success: function (data, textStatus) {
            printUser(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // error callback
        },
    });
}

function getComments(id) {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        type: "GET",
        success: function (data, textStatus) {
            $(".modal--comments--container").text('');
            data.forEach(comment => printComment(comment));
            document.querySelector('#modal--comments').scrollIntoView({
                behavior: 'smooth'
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // error callback
        },
    });
}

function editPost(id) {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        type: "PATCH",
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify({"title": clone[id-1].title, "body": clone[id-1].body}),
        success: function (data, textStatus, jqXHR) {
            changePost(id, clone[id-1].title, clone[id-1].body);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            getSinglePost(id);
        },
    });
}

function printPost(post) {
    $("#posts--container").append(`<article class='post shadows' id='${post.id}'>
        <img userID='${post.userId}' value='${post.id}' class='open--modal clickable' src="https://picsum.photos/600/600?random=${post.id}">
        <div class='post--content'>
            <button userID='${post.userId}' value='${post.id}' class='post--content--title clickable open--modal'>${post.title}</button>
            <button userID='${post.userId}' value='${post.id}' class='post--content--body clickable open--modal'>${post.body}</button> </div>
        <div class='post--buttons'>
            <button userID='${post.userId}' value='${post.id}' class='open--modal post--buttons--edit material-icons clickable shadows'>edit</button>
            <button userID='${post.userId}' value='${post.id}' class='post--buttons--delete material-icons clickable shadows'>delete</button>
        </div>
    </article>`);
}

function printComment(comment) {
    let c = `<div class='comment'>
    <div class='comment--header'>
        <h3 class='comment--title'>${comment.name}</h3>
        <p class='comment--user'>${comment.email}</p>
    </div>
    <br>
    <p class='comment--body'>${comment.body}</p>
</div>`;
    $(".modal--comments--container").append(c)
}

function printUser(user) {
    $(".modal--username").text(user.username);
    $(".modal--mail").text(user.email);
}
function getPost(title, url, body, userId, id) {
    $('.modal--post--title').val(title)
    $('.modal--post--body').val(body)
    $('#modal--image').attr('src', url)
    $('#edit--on--post').attr('post--id', id)
    $('#edit--on--post').attr('user--id', userId)
    document.querySelector('.modal--comments-load').value = userId;
}

function deletePost(id) {
    let $post = $(`#${id}`);
    $post.addClass("disaled");
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        type: "DELETE",
        success: function (data, textStatus) {
            $($post).fadeOut(500, function () {
                setTimeout(detectBottom, 10)
            })

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // error callback
            $post.removeClass("disaled");
        },
    });
}

function changePost(id, title, body) {
    console.log(title);
    $(`#${id} .post--content--title`).text(title);
    $(`#${id} .post--content--body`).text(body);
}

export {
    getPosts,
    getUser,
    getComments,
    deletePost,
    editPost,
    detectScrollBottom,
    getPost
};
