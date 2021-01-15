
function showOrHide(parameter) {
    const modal = document.getElementById('modal')

    if (parameter === 'show') {
        modal.classList.remove('none');
    } else if (parameter === 'hide') {
        modal.classList.add('none');
        $('.modal--comments--container').text('');
    }
};

function filterContent(parentTag, parent) {
    if (parentTag === 'post') {
        const splittedUrl = parent.children[0].getAttribute('src').split('/')
        const title = parent.children[1].children[0].textContent
        const body = parent.children[1].children[1].textContent
        const url = splittedUrl.map(item => {
            item = item.replace('200', '600')
            return item
        })
        const result = {title, body, url}
        return result;
    } else if (parentTag === 'edit') {
        parent = parent.parentElement.children[1]
        const title = parent.children[0].textContent
        const body = parent.children[1].textContent
        const splittedUrl = parent.parentElement.children[0]
            .getAttribute('src').split('/')
        const url = splittedUrl.map(item => {
            item = item.replace('200', '600')
            return item
        })
        const result = {title, body, url}
        return result;
    } else {
        const title = parent.children[0].textContent
        const body = parent.children[1].textContent
        const splittedUrl = parent.parentElement.children[0]
            .getAttribute('src').split('/')
        const url = splittedUrl.map(item => {
            item = item.replace('200', '600')
            return item
        })
        const result = {title, body, url}
        return result;
    };
}


export {showOrHide, filterContent}
