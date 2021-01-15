function getPosts(url) {
    $.ajax({
        url: `${url}`,
        type: "GET",
        success: function (data, textStatus, jqXHR) {
            printAllPosts(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {},
    });
}

function printAllPosts(posts) {
    posts.forEach((post) => {
        printPost(post);
    });
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

function getComment(id) {}

function printPost(post) {
    $("#posts--container").append(`<article class='post shadows'>
        <img userID='${post.userId}' class='open--modal' src="https://picsum.photos/200/200?random=${post.id}">
        <div class='post--content'>
            <button userID='${post.userId}' value='${post.id}' class='post--content--title clickable open--modal'>${post.title}</button>
            <button userID='${post.userId}' value='${post.id}' class='post--content--body clickable open--modal'>${post.body}</button> </div>
        <div class='post--buttons'>
            <button userID='${post.userId}' value='${post.id}' class='post--buttons--edit material-icons clickable shadows'>edit</button>
            <button userID='${post.userId}' value='${post.id}' class='post--buttons--delete material-icons clickable shadows'>delete</button>
        </div>
    </article>`);
}

function printUser(user) {
    $('.modal--user').text(user.name);
    $('.modal--username').text(user.username)
    $('.modal--mail').text(user.email)
}
function getPost(title, url, body) {
    $('.modal--post--title').text(title)
    $('.modal--post--body').text(body)
    $('#modal--image').attr('src', url)
}

export {getPosts, getUser, getComment, getPost};
