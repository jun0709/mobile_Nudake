$(document).ready(function(){
    var box_x = $('.box').width() ;
    var win_h = $(window).height() * 0.01;
    var win_w = $(window).width() ; 
    tmp();

    $('.box').hover(function(){ 
        $('.box').css({transition: 'clip 0.5s'})
        $(this).css({
            clip: 'rect(0px, '+box_x+'px, '+(win_w * 1.5)+'px, 0px)'
        })
        if($(this).index() < $('.box').length - 1) {
            $(this).next().css({
                clip: 'rect('+(win_h* 2.5 * 2)+'px, '+box_x+'px, '+(win_w * 1.5)+'px, 0px)'
                
            })
        }
    }, function(){
        tmp();
    });

    function tmp() {
        $('.box').css({
            
                clip: 'rect('+(win_h * 3)+'px, '+box_x+'px, '+(win_w * 1.5)+'px, 0px)'
        }   )
        $('.box').eq(0).css({
            clip: 'rect('+(win_h * 0)+'px, '+box_x+'px, '+(win_w * 1.5)+'px, 0px)'
        }   )
        $('.box').eq(2).css({
              clip: 'rect('+(win_h * 3)+'px, '+box_x+'px, '+(win_w * 1.5)+'px, 0px)'
        }   )
    }
    $(window).resize(function(){
        $('.box').css({transition: 'none'})
        box_x = $('.box').height() ;
        win_h = $(window).height() * 0.01;
        win_w = $(window).width() ; 
        tmp();
    })
});