/*
* @Author: Marte
* @Date:   2016-02-03 14:49:02
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-11 16:54:54
*/

function init(){
    require(['./jquery','./zepto.min','./proxy','./lazysizes.min','./common','./mCustomScrollbar.min','./swiper.min.js'],function($,zeptoJs,proxyJS,lazyJs,commonJs){
        var width = $('.all .banner').width();
        commonJs.commonObj.init();
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            width:width,
            paginationClickable: true,
            spaceBetween:0,
            autoplay:4000,
            autoplayDisableOnInteraction : false,
            loop: true
        });

        window.location.href="../../huodong/"

        $(".giftbox li").on('tap',function(event) {
            //var $this = $(this).index();
            var dataId = parseInt($(this).attr('data-id'));
            $(".infpbox").eq(dataId-1).show();
            $('.out2').show();
            $(".infpbox").eq(dataId-1).mCustomScrollbar('update');
            $(".info").mCustomScrollbar({
                scrollInertia:100
            });
            return false;

            // if(dataId<100){
            //     $('.infpbox').each(function(){
            //         var id = $(this).attr('data-id');
            //         //console.log(id);
            //         if(id == dataId){
            //             $(this).show();
            //         }else{
            //             $(this).hide();
            //         }
            //     });

            //     $('.out2').show();
            //         $(".info").mCustomScrollbar('update');
            //         $(".info").mCustomScrollbar({
            //             scrollInertia:100
            //         });
            // }

        });

        $('.out2 .bg,.infpbox').on('touchmove', function(event) {
            event.preventDefault();
            /* Act on the event */
            return false;
        });
         $('.out2 .bg').on('touchend', function(event) {
            event.preventDefault();
            $(this).siblings('div').hide();
            $(".info").mCustomScrollbar('destroy');
            $('.out2').hide();
            /* Act on the event */
            return false;
        });


        $("#ordernow").on('click', function(event) {
            event.preventDefault();
            var device = "";
            var phoneNum = $("#orderPhone").val();
            var check =!phoneNum.match(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/);
           ////console.log(check)
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            //alert('是否是Android：'+isAndroid);
            //alert('是否是iOS：'+isiOS);
            if (isiOS) {
                device = "ios"
            };
            if (isAndroid) {
                device = "android"
            };
            if(phoneNum == ''){
                alert('请填写手机号码')
            }else if(phoneNum.length <11){
                alert('手机号码不足11位')
            }else if(check){
                alert('手机号码格式不正确')
            }else{
                ordernew(phoneNum,device)
            }
        });

        function ordernew(phoneNum,device){

            proxyJS.proxyObj.reqWWWApiTelephoneOrderAjax({
                phone: phoneNum,
                device: device,
                game_name: 'shqz',
                success:function(data){
                    if(isiOS){
                        alert('恭喜预约成功！本次仅开放安卓测试，因您是苹果机型，可下载模拟器体验！');
                        $("#orderPhone").val('');
                    }else{
                        alert(data.msg);
                        $("#orderPhone").val('');
                    }
                },
                error:function(res){
                    alert(res.msg);
                    $("#orderPhone").val('');
                }
            })
        }

        $(".out2 .close").on('tap', function(event) {
            $(this).parents('.infpbox').hide();
            $(".out2").hide();
            $(".info").mCustomScrollbar('destroy');

        });
    });
}
exports.init = init;
