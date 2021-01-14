import {getData} from './data/data.js'
import {resizeH1} from './modal/resizeH1.js'


getData('https://jsonplaceholder.typicode.com/posts');
getData('https://jsonplaceholder.typicode.com/users')


$(document).ready(function () {
    resizeH1();
});
