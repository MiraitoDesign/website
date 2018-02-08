let timer = 0;
let logo_scale_flg = false;
$(function(){
    $('body').mousemove(function(e){
        if (!logo_scale_flg) {
            timer += 1;
        }
        if (timer > 60) {
            logo_scale_flg = true;
            scaleLogo();
            timer = 0;
        }
    });

    $('div#mail').on('click', ()=>{
        $('#overlay, #contact').fadeIn(1000);
    })

    $('#overlay').on('click', () => {
        $('#overlay, #contact').fadeOut();
    })

    $('#send').on('click', (e) => {
        e.preventDefault();
        let form = $('#contact-form');
        $.ajax({
            url : 'src/contact.php',
            type : 'POST',
            data : form.serialize(),
            dataType : 'json',
        })
        .done((data) => {
            if (data.result) {
                alert('送信しました');
            }
        })
        .fail((d) => {
            // console.log(d);
                alert('送信失敗しました');
        })
        .always((d) => {
            $('#overlay, #contact').fadeOut();
        })
    })



    locateCenter();
    $(window).resize(locateCenter);

})

const scaleLogo = () => {
    const logo = $('#logo');
    logo.animate(
        {paddingRight:1},
        {
            duration : 1200,
            easing : 'linear',
            step : (now) => {
                let scale;
                if (now <= 0.5) {
                    scale = 1 - (now * 4);
                } else {
                    scale = ((now - 0.5) * 4) -1;
                }
                if (now == 1) {
                    scale = 1;
                }
                logo.css({transform:'scaleX(' + scale  + ')'});
            },
            complete:function(){
                logo.css('paddingRight', 0);
                logo_scale_flg = false;
            }
        }
    );
}

const locateCenter = () => {
    let w = $(window).width();
    let h = $(window).height();

    let cw = $('#contact').outerWidth();
    let ch = $('#contact').outerHeight();

    $('#contact').css({
        'left': ((w - cw) / 2) + 'px',
        'top': ((h - ch) / 2) + 'px'
    });
}