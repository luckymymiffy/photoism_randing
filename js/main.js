    // main_nav control
    $('#main_nav ul').css({
        right:-$('#main_nav ul').width()
    });
    $('#main_nav').hide();
    $('#nav_toggle').click(function(){
        $('#main_nav').fadeIn(500);
        $('#main_nav ul').animate({
            right:0
        },500);
    });
    $('#main_nav .close').click(function(){
        $('#main_nav').fadeOut(500);
        $('#main_nav ul').animate({
            right:-$('#main_nav ul').width()
        },500);
    });
    //---- main_nav control 끝
    
    // scroll시 내용 애니메이션
    $('.img, .con').css({
        top:200,
        opacity:0
    });
    
    
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        
        
        $('.scroll_view').each(function(index,item){
        if($(item).offset().top - sct < 400){
        $(item).find('.con').not('on').delay(300).animate({
            top:0,
            opacity:1
        },2000).addClass('on');
        $(item).find('.img').not('on').animate({
            top:0,
            opacity:1
        },2000).addClass('on');
        }
    });
    
        // if(sct>400){
        //     $('.img').eq(0).not('.on').animate({
        //         top:0,
        //         opacity:1
        //     } ,2000);
        //     $('.img').eq(0).addClass('on');
        // }
        // if(sct>500){
        //     $('.con').eq(0).not('.on').animate({
        //         top:0,
        //         opacity:1
        //     } ,2000);
        //     $('.con').eq(0).addClass('on');
        // }
        // if(sct>1000){
        //     $('.img').eq(1).not('.on').animate({
        //         top:0,
        //         opacity:1
        //     } ,2000);
        //     $('.img').eq(1).addClass('on');
        // }
        // if(sct>1100){
        //     $('.con').eq(1).not('.on').animate({
        //         top:0,
        //         opacity:1
        //     } ,2000);
        //     $('.con').eq(1).addClass('on');
        // }
    });
        //scroll시 내용 애니메이션 끝
    