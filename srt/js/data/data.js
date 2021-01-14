
function getData(url) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            return data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus)
        }
    });
}


export {getData}
