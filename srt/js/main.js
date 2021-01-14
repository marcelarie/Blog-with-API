import {getPosts} from './data/data.js'
import {resizeH1, newSise} from './modal/resizeH1.js'



$(document).ready(function () {
    newSise();
    resizeH1();
    getPosts('https://jsonplaceholder.typicode.com/posts');
});
