function getPosts(url) {
    $.ajax({
        url: `${url}`,
        type: 'GET',
        success: function (data, textStatus) {
            data.forEach((post) => {
                printPosts(post)
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {

        },
    })
}

function getUser(id) {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        type: 'GET',
        success: function (data, textStatus) {
            printUser(data)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // error callback
        },
    })
}

function getComment(id) {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        type: 'GET',
        success: function (data, textStatus) {
            printUser(data)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // error callback
        },
    })
}

function printPosts(post) {
    $('#posts--container').append(`<article class='post'>
                <div class='post--content'>
                    <button userID='${post.userId}' value='${post.id}' class='post--content--title'>${post.title}</h3>
                    <button userID='${post.userId}' value='${post.id}' class='post--content--body'>${post.body}</button>
                </div>
                <div class='post--buttons'>
                    <button userID='${post.userId}' value='${post.id}' class='post--buttons--edit material-icons'>edit</button>
                    <button userID='${post.userId}' value='${post.id}' class='post--buttons--delete material-icons'>delete</button>
                </div>
            </article>`)
}

function printUser(user) {
    $('.modal--user').text(user.name)
    $('.modal--username').text(user.username)
    $('.modal--mail').text(user.email)
}

export {getPosts, getUser, getComment}
