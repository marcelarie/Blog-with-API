
function getData(url) {
    $.ajax({
        url: 'url',
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            return data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(error)
        }
    });
}


export {getData}
