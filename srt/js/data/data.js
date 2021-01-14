
function getData(url) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            console.log(data)
            return data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus)
        }
    });
}


export {getData}
