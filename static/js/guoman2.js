/* 
* @Author: jia
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-03 21:22:46
*/
function init(){
    require(['./jquery','./common'],function($,commonJs){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();
            var width = $('.innerbox').width();
            console.log(width);
                 
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                width:width,
                //effect : 'fade',
                paginationClickable: true,
                //spaceBetween:0,
                //initialSlide :3,
                //autoplay:4000,
                autoplayDisableOnInteraction : false,
                loop: true
            });
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            window.onload = function(){
                $('.box1').addClass('start');
            }
            $('.download-btn').on('touchend', function(event) {
                
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=gmyd';
                   // alert('敬请期待！')
                
                return false;
            });
            
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


            var videostr = '';
            var _videoTimeId = 0;
            $("#guoman-play,.box2 .play,.playbtn").on('touchend',function(event) {
                if($(this).attr('data-id') == 1){
                    $('.videobox').show();
                    var videoUrl = 'https://resource.15166.com/video/shqz/zs.mp4';
                    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo"></video>').show();
                }else if($(this).attr('data-id') == 2){
                    var videoUrl = 'https://resource.15166.com/video/shqz/xianxing.mp4';
                    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo va-myVideo2"></video>').show();
                }else if($(this).attr('data-id') == 3){
                    $('.videobox').show();
                    var videoUrl = 'https://resource.15166.com/video/shqz/zhutiqu.mp4';
                    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo va-myVideo2"></video>').show();
                }
                
                

                $('.video-bg').on('touchend',function(){
                    clearTimeout(_videoTimeId);
                    $('.videobox').hide();
                    $('.va-myVideo').remove();
                    return false;
                });

                var i = $(".va-myVideo").get(0);
                _videoTimeId = setTimeout(function () {
                    i.play();
                }, 16);
                $(".innerbox").on('touchend', function(event) {
                    
                   // console.log($('.videobox').is(":visible"))
                         
                    if($('.videobox').is(":visible")){
                        //clearTimeout(_videoTimeId);
                        $('.videobox').hide();
                        $('.va-myVideo').remove();
                    }
                   
                    
                });
                return false;
            });

           

            $('.guomanout .bg,.guomanout .close').on('touchend', function(event) {
                $('.guomanout').hide();
                $(".guomanout .left,.guomanout .right").show();
                return false;
            });
            $('.guomanout2 .bg,.guomanout2 .close').on('touchend', function(event) {
                $('.guomanout2').hide();
                $(".guomanout2 .left,.guomanout2 .right").show();
                return false;
            });

            var cjSrcobj=
            { 
                'cjsrc1' : "<img src="+__uri('../static/images/guoman2/cj-1.jpg')+" />",
                'cjsrc2' :  "<img src="+__uri('../static/images/guoman2/cj-2.jpg')+" />",
                'cjsrc3' :  "<img src="+__uri('../static/images/guoman2/cj-3.jpg')+" />",
                'cjsrc4' :  "<img src="+__uri('../static/images/guoman2/cj-4.jpg')+" />",
                'cjsrc5' :  "<img src="+__uri('../static/images/guoman2/cj-5.jpg')+" />",
                'cjsrc6' :  "<img src="+__uri('../static/images/guoman2/cj-6.jpg')+" />",
                'cjsrc7' :  "<img src="+__uri('../static/images/guoman2/cj-7.jpg')+" />",
                'cjsrc8' :  "<img src="+__uri('../static/images/guoman2/cj-8.jpg')+" />",
                'cjsrc9' :  "<img src="+__uri('../static/images/guoman2/cj-9.jpg')+" />",
                'cjsrc10' : "<img src="+ __uri('../static/images/guoman2/cj-10.jpg')+" />"
            }
            var rsSrcobj = {
                'rsSrc1' :  "<img src="+__uri('../static/images/guoman2/rs-1.jpg')+" />",
                'rsSrc2' :  "<img src="+__uri('../static/images/guoman2/rs-2.jpg')+" />",
                'rsSrc3' :  "<img src="+__uri('../static/images/guoman2/rs-3.jpg')+" />",
                'rsSrc4' :  "<img src="+__uri('../static/images/guoman2/rs-4.jpg')+" />",
                'rsSrc5' :  "<img src="+__uri('../static/images/guoman2/rs-5.jpg')+" />",
                'rsSrc6' :  "<img src="+__uri('../static/images/guoman2/rs-6.jpg')+" />",
                'rsSrc7' :  "<img src="+__uri('../static/images/guoman2/rs-7.jpg')+" />",
                'rsSrc8' :  "<img src="+__uri('../static/images/guoman2/rs-8.jpg')+" />",
                'rsSrc9' :  "<img src="+__uri('../static/images/guoman2/rs-9.jpg')+" />",
                'rsSrc10' :  "<img src="+__uri('../static/images/guoman2/rs-10.jpg')+" />",
                'rsSrc11' :  "<img src="+__uri('../static/images/guoman2/rs-11.jpg')+" />",
                'rsSrc12' :  "<img src="+__uri('../static/images/guoman2/rs-12.jpg')+" />"
            };
            $('.box .renshe img,.box3 .more').on('click', function(event) {
                var srcIndex = parseInt($(this).attr('data-id'));
                if(srcIndex == 12){
                    $(".guomanout .right").hide();
                }else if(srcIndex == 1){
                    $(".guomanout .left").hide();
                }
                $('.guomanout .index em').html(srcIndex);
                var src = 'rsSrc'+ srcIndex;
                $.each(rsSrcobj, function(index, val) {
                    if (src == index) {
                        $('.guomanout').show().find('.picbox').html(val);
                    };
                });

                $(".guomanout .right").off().on('touchend', function(event) {
                    srcIndex++;

                    if (srcIndex==12) {
                        $(this).hide();
                    }else if(srcIndex>1){
                        $(".guomanout .left").show();
                    };
                    $('.guomanout .index em').html(srcIndex);
                    src = 'rsSrc'+ srcIndex;
                    $.each(rsSrcobj, function(index, val) {
                        if (src == index) {
                            $('.guomanout .picbox').html(val);
                        };
                    });
                    return false; 
                });
                $(".guomanout .left").off().on('touchend', function(event) {
                    srcIndex--;
                    if (srcIndex==1) {
                        $(this).hide();
                    }else if(srcIndex<12){
                        $(".guomanout .right").show();
                    };
                    $('.guomanout .index em').html(srcIndex);
                    src = 'rsSrc'+ srcIndex;
                    $.each(rsSrcobj, function(index, val) {
                        if (src == index) {
                            $('.guomanout .picbox').html(val);
                        };
                    });
                    return false; 
                });

                return false; 
            });   

            $('.box .changjing img').on('click', function(event) {
                var srcIndex = parseInt($(this).attr('data-id'));
                if(srcIndex == 10){
                    $(".guomanout2 .right").hide();
                }else if(srcIndex == 1){
                    $(".guomanout2 .left").hide();
                }
                $('.guomanout2 .index em').html(srcIndex);
                var src = 'cjsrc'+ srcIndex;
                $.each(cjSrcobj, function(index, val) {
                    if (src == index) {
                        $('.guomanout2').show().find('.picbox').html(val);
                    };
                });

                $(".guomanout2 .right").off().on('touchend', function(event) {
                    srcIndex++;

                    if (srcIndex==10) {
                        $(this).hide();
                    }else if(srcIndex>1){
                        $(".guomanout2 .left").show();
                    };
                    $('.guomanout2 .index em').html(srcIndex);
                    src = 'cjsrc'+ srcIndex;
                    $.each(cjSrcobj, function(index, val) {
                        if (src == index) {
                            $('.guomanout2 .picbox').html(val);
                        };
                    });
                    return false; 
                });
                $(".guomanout2 .left").off().on('touchend', function(event) {
                    srcIndex--;
                    if (srcIndex==1) {
                        $(this).hide();
                    }else if(srcIndex<10){
                        $(".guomanout2 .right").show();
                    };
                    $('.guomanout2 .index em').html(srcIndex);
                    src = 'cjsrc'+ srcIndex;
                    $.each(cjSrcobj, function(index, val) {
                        if (src == index) {
                            $('.guomanout2 .picbox').html(val);
                        };
                    });
                    return false; 
                });

                return false; 
            });     
        }           
    })
}
        
exports.init = init;
