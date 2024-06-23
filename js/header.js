$('.m_header_btn').click(function(){
    $('.menu_view').stop().animate({left:0});
    $(' .close_btn .line:nth-child(1)').stop().animate({ rotate:"45deg"},800);
    $(' .close_btn .line:nth-child(2)').stop().animate({ rotate:"-45deg"},800);
})
$('.close_btn').click(function(){
    $(this).closest('.menu_view').stop().animate({left:100+"%"});
    $(' .close_btn .line:nth-child(1)').stop().animate({ rotate:"0deg"});
    $(' .close_btn .line:nth-child(2)').stop().animate({ rotate:"0deg"});
})
