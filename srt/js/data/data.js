function getPost(url, id) {
    return $.ajax({
        url: `${url}`,
        data: 'json',
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            data.forEach(post => {
                console.log(post)
                const userId = post.userId
                if (id === userId) {
                    createPost(post)
                }
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function getUser(id) {
}

function getComment(id) {
}

function createPost(post) {
    const div = document.createElement('div')
    const postTitle = document.createElement('h1')
    const postBody = document.createElement('p')
    const user = document.createElement('')
}

export {getPost, getUser, getComment}
