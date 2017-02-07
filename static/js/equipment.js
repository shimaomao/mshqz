/**
 * Created by Administrator on 2016/12/15.
 */
var equipmentObj = {
    init: function () {
        require(['./jquery', './common', './proxy'], function ($,commonJs, proxyJS) {
            commonJs.commonObj.init();
            initUI.apply(this);

            function initUI() {

                $('#android,#footorder').on('touchend', function(event) {
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m';
                    return false;
                });

                var arrgifts = ['青云','烈山','鬼道','九黎','天音','暗影','碧影','舍利']
                var bannerwidth = $('.Eqbanner').width();
                var swiper = new Swiper('.swiper-container', {
                    //pagination: '.swiper-pagination',
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    updateOnImagesReady : true,
                    width:bannerwidth,
                    paginationClickable: true,
                    autoplay:4000,
                    slidesPerView:1,   //页面分组显示，这里显示为3组
                    spaceBetween:0,  //slide间隙
                    autoplayDisableOnInteraction : false,
                    //loop: true,
                    paginationType : 'fraction',
                    //paginationCustomRender: function (swiper, current, total) {
                    //    return current + ' / ' + total;
                    //}
                    onSlideChangeEnd:function(swiper){
                          //console.log(swiper.activeIndex);
                        $("#swiper-pagination-current").html((swiper.activeIndex)+1);
                        $(".blue").remove();
                        $("#swiper-pagination-current").before('<span class="blue"> '+ arrgifts[swiper.activeIndex] +' </span>')
                    }
                });
               var len =  $(".swiper-slide").length;
                $("#swiper-pagination-total").html(len);

////////////////////////////////


////////////////////////////////


////////////////////////////////
            }
        })
    }

}


exports.equipmentObj = equipmentObj;