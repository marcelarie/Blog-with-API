function resizeH1(){
    $(window).resize(function(){
        let fs=$(this).height()/7
      $('.header>h1').css('font-size', `${fs}px`)
       let width=$(this).width()-($(this).height()/7);
      $('.main').css('width', )
    });
}
export {resizeH1}
