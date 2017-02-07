/* 
* @Author: jia
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-28 10:13:50
*/
function init(){
    require(['./jquery','./common','./guomanConfig'],function($,commonJs,guomanConfigJs){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();
            var width = $('.innerbox').width();
            console.log(width);
                 
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                width:width,
                effect : 'fade',
                paginationClickable: true,
                spaceBetween:0,
                //initialSlide :1,
                //autoplay:4000,
                autoplayDisableOnInteraction : false,
                loop: true
            });
       

            $('.box1').addClass('start');
            $('.box1>div').show();
            $(".innerbox").on('touchend', function(event) {
                //event.preventDefault();
                setTimeout(function(){
                    $(".box").removeClass('start');
                    var index = swiper.activeIndex
                    if(!$(".swiper-slide").eq(index).find('.box').hasClass('start')){
                        $(".swiper-slide").eq(index).find('.box').addClass('start');
                    }
                    
                }, 400)
                
            });

            $('#android,#footorder').on('touchend', function(event) {
                window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=gmyd'
                return false;
            });

            
            $("#imgBtn span").on('touchend', function(event) {
                var index = $(this).index();
                $(this).addClass('on').siblings('span').removeClass('on');
                $('.picbox div').eq(index).show().siblings('div').hide();
                return false;

            });

            $('.guomanout .bg,.guomanout .close').on('touchend', function(event) {
                $('.guomanout').hide();
                $('.picbox div').hide();
                $("#imgBtn span").removeClass('on');
                return false;
            });
            function getInfo(id,arr){
                var someObj = null;
                var obj = null;
                for(var i = 0;i<arr.length;i++){
                    obj = arr[i];
                    if(obj.id == id){
                        someObj = obj;
                        break;
                    }
                }
                return someObj;
            }
            $('.box .btn span').on('touchend', function(event) {
                var id = $(this).attr('data-id');
                var index = $(this).index();
                var info = getInfo(id,guomanConfigJs.guomanObj.img)
                $('.guomanout').show();
                $('.guomanout .she img').attr('src', info.sheding);
                $('.guomanout .san img').attr('src', info.sanshi);
                $("#imgBtn span").eq(index).addClass('on');
                $("#imgBtn span").each(function(val) {
                    if ($(this).hasClass('on')) {
                        var index = $(this).index();
                        $('.picbox div').eq(index).show();
                    };

                });
                return false; 
            });     
        }           
    })
}
        
exports.init = init;
