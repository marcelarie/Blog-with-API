function getPosts(url) {
    $.ajax({
        url: `${url}`,
        data: 'json',
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
                printAllPosts(data)
        },
        error: function (jqXHR, textStatus, errorThrown) {}
    });
}

function printAllPosts(posts){
    posts.forEach(post => {
        printPost(post)
    })
}

function printPost(post) {
    $('.posts').append(`<article class='post'>
                <img src="https://picsum.photos/200/200?random=${post.id}">
                <div class='post--content'>
                    <button value='${post.id}' class='post--content--title'>${post.title}</h3>
                    <button value='${post.id}' class='post--content--body'>${post.body}</button>
                </div>
                <div class='post--buttons'>
                    <button value='${post.id}' class='post--buttons--edit material-icons'>edit</button>
                    <button value='${post.id}' class='post--buttons--delete material-icons'>delete</button>
                </div>
            </article>`);
}

function getUser(id) {
}

function getComment(id) {
}
export {getPosts, getUser, getComment}
