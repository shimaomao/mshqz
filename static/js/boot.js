/* 
* @Author: Marte
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-19 15:03:58
*/
function init(){
    require(['./jquery','./common','./videoConfig','./mCustomScrollbar.min'],function($,commonJs,videoConfigJs){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();
//轮播
            var width = $('.bannerbox').width();
            if($(".bannerbox").length>0){
                var swiper2 = new Swiper('.swiper-container2', {
                    pagination: '.swiper-pagination2',
                    updateOnImagesReady : true,
                    slidesPerView: 1,
                    width:width,
                    paginationClickable: true,
                    spaceBetween:0,
                    autoplay:4000,
                    autoplayDisableOnInteraction : false,
                    loop: true
                })
            }

//判断手机类型
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            var iosobj={
                src1:"http://wwwapi.15166.com/download?game=shqz&cid=fabyd",
                srcboot:"http://wwwapi.15166.com/download?game=shqz&cid=fabyd",
                src2: "http://lnk0.com/Fxtgg8?kwid={keywordid}&creative={creative}",
                src4: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8",
                src5: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8",
                src6: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8",
                src7: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8",
                src8: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8",
                src9: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8",
                src10: "http://itunes.apple.com/cn/app/shui-huq-chuan-shi-nian-shuiq/id1127730211?mt=8"
            };
            var androidobj={
                src1:"javascript:alert('敬请期待')",
                srcboot:"http://wwwapi.15166.com/download?game=shqz&cid=fabyd",
                src2:"http://lnk0.com/t40Qts?kwid={keywordid}&creative={creative}",
                src4:"http://lnk0.com/lU1oUp?kwid={keywordid}&creative={creative}",
                src5:"http://lnk0.com/kkgs8c?kwid={keywordid}&creative={creative}",
                src6:"http://lnk0.com/1YBJxh?kwid={keywordid}&creative={creative}",
                src7:"http://lnk0.com/tkk08o?kwid={keywordid}&creative={creative}",
                src8:"http://lnk0.com/ksQ1Ep?kwid={keywordid}&creative={creative}",
                src9:"http://lnk0.com/ogI18o?kwid={keywordid}&creative={creative}",
                src10:"http://lnk0.com/MpkI10?kwid={keywordid}&creative={creative}"
            };
            //var info=$("#info"), imgzd=$("#imgzd"),  zdllq=$("#zdllq");
            var lianjie2=$(".lianjie2"),lianjie1=$(".lianjie1"),lianjie4 = $(".lianjie4"),lianjie5 = $(".lianjie5"),lianjie6 = $(".lianjie6");
            var lianjie7=$(".lianjie7"),lianjie8 = $(".lianjie8"),lianjie9 = $(".lianjie9"),lianjieboot = $(".lianjieboot"),lianjie10 = $(".lianjie10");

            if(isiOS){
                lianjieboot.attr("href",iosobj.srcboot);
                lianjie1.attr("href",iosobj.src1);
                lianjie2.attr("href",iosobj.src2);
                lianjie4.attr("href",iosobj.src4);
                lianjie5.attr("href",iosobj.src5);
                lianjie6.attr("href",iosobj.src6);
                lianjie7.attr("href",iosobj.src7);
                lianjie8.attr("href",iosobj.src8);
                lianjie9.attr("href",iosobj.src9);
                lianjie10.attr("href",iosobj.src10);
            }
            if (isAndroid){
                lianjieboot.attr("href",androidobj.srcboot);
                lianjie1.attr("href",androidobj.src1);
                lianjie2.attr("href",androidobj.src2);
                lianjie4.attr("href",androidobj.src4);
                lianjie5.attr("href",androidobj.src5);
                lianjie6.attr("href",androidobj.src6);
                lianjie7.attr("href",androidobj.src7);
                lianjie8.attr("href",androidobj.src8);
                lianjie9.attr("href",androidobj.src9);
                lianjie10.attr("href",androidobj.src10);
            }


            //视频播放开始
            var videoinit = videoConfigJs.videoObj;
            function getVideoID(id,arr){
                var giftObj = null;
                var obj = null;
                for(var i = 0;i<arr.length;i++){
                    obj = arr[i];
                    if(obj.id == id){
                        giftObj = obj;
                        break;
                    }
                }

                return giftObj;
            }

            var videostr = '';
            var _videoTimeId = 0;
            $(".shipinbox .picture,#videobtn").on('click',function(event) {
                var id = $(this).attr('data-id');

                //music.pause();
                //$(".musicimg").removeClass('stopmusic');
                updateAlertVideoById.apply(this,[id]);
                $('.videobox').show();
            });

            function updateAlertVideoById(id){
                var videoUrl = (getVideoID(id,videoinit.video)).videosrc;

                if( id == 11){
                    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo va-myVideo2"></video>').show();
                }else{
                    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo"></video>').show();
                }

                $('.videoout').on('click',function(){
                    clearTimeout(_videoTimeId);
                    $('.videobox').hide();
                    $('.va-myVideo').remove();

                });

                var i = $(".va-myVideo").get(0);
                _videoTimeId = setTimeout(function () {
                    i.play();
                }, 16);
                $(".shqz-wapper").on('touchend', function(event) {

                    // console.log($('.videobox').is(":visible"))

                    if($('.videobox').is(":visible")){
                        //clearTimeout(_videoTimeId);
                        $('.videobox').hide();
                        $('.va-myVideo').remove();
                    }


                });
            }
            //视频播放结束

            $("#tc-closeBtn").on('click', function(event) {
                $(this).parents('.boot-out').hide();
                $(".boot-out").hide();
                $(".box-inner").mCustomScrollbar('destroy');

            });
            //弹窗开始
            $(".m2-block li").on("click",function(event){
                $(this).addClass("cur").siblings("li").removeClass("cur");
            })
            $(".giftbox li:not('.last')").on('click',function(event) {
                //var $this = $(this).index();
                var dataId = parseInt($(this).attr('data-id'));
                $(".box").hide();
                $(".box").eq(dataId-1).show();
                $('.boot-out').show();
                $(".box").eq(dataId-1).mCustomScrollbar('update');
                $(".box-inner").mCustomScrollbar({
                    scrollInertia:100
                });

                return false;
            })

            $('.box-inner').on('touchmove', function(event) {
                event.preventDefault();
                /* Act on the event */
                return false;
            });
            $('.boot-out .bg').on('touchmove', function(event) {
                event.preventDefault();
                //$(this).siblings('div').hide();
                //$(".box-inner").mCustomScrollbar('destroy');
                //$('.box-inner').hide();
                /* Act on the event */
                return false;
            });


            //弹窗结束


        }
    })
}
        
exports.init = init;
