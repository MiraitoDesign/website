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
    })
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