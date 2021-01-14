function resizeH1(){
    $(window).resize(function(){
        newSise();
    });
}

function newSise(){
    let fs=$(this).height()/7;
      $('.header>h1').css('font-size', `${fs}px`);
}
export {resizeH1,newSise}
