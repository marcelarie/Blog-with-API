function getPost(url, id) {
    return $.ajax({
        url: `${url}`,
        data: 'json',
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            data.forEach(post => {
                console.log(post)
                printPosts(post)
            })
        }, error: function (jqXHR, textStatus, errorThrown) {}
    });
}

function printPosts(post) {
    const postsContainer = $('#posts--container');
    postsContainer.append(`<article class='post'>
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
export {getPost, getUser, getComment}
