function createPostMain(id, title, body){
    const post=
    `<article class='post'>

        <div class='post--content'>
            <button value='${id}' class='post--content--title'>${title}</h3>
            <button value='${id}' class='post--content--body'>${body}</button>
        </div>
        <div class='post--buttons'>
            <button value='${id}' class='post--buttons--edit material-icons'>edit</button>
            <button value='${id}' class='post--buttons--delete material-icons'>delete</button>
        </div>
    </article>`;
    $('.posts').text(post) ;
}

createPostMain(1, 'lo', 'lorem');