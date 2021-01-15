let start=0;
let canLoadMore=true;
let posts=[];

function getPosts() {
    if(start<100){
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=9`,
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                posts=posts.concat(data);
                printAllPosts(data);
                start+=9;
                canLoadMore=true;
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

function detectScrollBottom(){
    $('.posts').scroll(function() {
        let lastPost=$('.post:last-child');
        if($(lastPost).position().top-$('.posts').height()+$(lastPost).height()<=0 && canLoadMore){
            getPosts();
            canLoadMore=false;
        }
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

function getComments(id) {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        type: "GET",
        success: function (data, textStatus) {
            console.log(data)
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // error callback
        },
      });
}

function editPost(id, title, body){
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/"+id,
        type: "PATCH",
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
          },
        data: JSON.stringify({"title":title,"body":body}),
        success: function (data, textStatus, jqXHR) {
            posts[id-1].title=title;
            posts[id-1].body=body;
            console.log(posts[id-1]);
        },
        error: function (jqXHR, textStatus, errorThrown) {},
    }); 
}

function printPost(post) {
  $("#posts--container").append(`<article class='post shadows' id='${post.id}'>
        <img src="https://picsum.photos/200/200?random=${post.id}">
        <div class='post--content'>
            <button userID='${post.userId}' value='${post.id}' class='post--content--title clickable'>${post.title}</h3>
            <button userID='${post.userId}' value='${post.id}' class='post--content--body clickable'>${post.body}</button>
        </div>
        <div class='post--buttons'>
            <button userID='${post.userId}' value='${post.id}' class='post--buttons--edit material-icons clickable shadows'>edit</button>
            <button userID='${post.userId}' value='${post.id}' class='post--buttons--delete material-icons clickable shadows'>delete</button>
        </div>
    </article>`);
}

function printUser(user) {
  $(".modal--user").text(user.name);
}

function deletePost(id){
    let $post=$(`#${id}`);
    $post.addClass('disaled');
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        type: "DELETE",
        success: function (data, textStatus) {
            $($post).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // error callback
          $post.removeClass('disaled');
        },
      });
}

export { getPosts, getUser, getComments, deletePost,editPost, detectScrollBottom};
