/* 
 * @Author: jia
 * @Date:   2016-01-25 15:10:03
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-08-05 17:57:41
 */
function init() {
    require(['./jquery', './common', './proxy'], function ($, commonJs, proxyJS) {
        initUI.call(this);
        function initUI() {

            $('#android,#footorder').on('touchend', function (event) {
                window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=kaifayd'
                return false;
            });
            commonJs.commonObj.init();

            proxyJS.proxyObj.reqWWWApiTelephoneOrderAjax({
                action: 'player',
                success: function (res) {
                    $('.newPlayer em').html(res.data.newPlayer);
                    $('.oldPlayer em').html(res.data.oldPlayer);
                },
                error: function (res) {
                    alert(res.msg);
                }
            })


            $("#kaifaOrder").on('touchend', function (event) {
                var device = "";
                var phoneNum = $(".kaifaOrderphone").val();
                var check = !phoneNum.match(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/);
                ////console.log(check)
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if (isiOS) {
                    device = "ios"
                }
                ;
                if (isAndroid) {
                    device = "android"
                }
                ;


                if (phoneNum == '') {
                    alert('请填写手机号码')
                } else if (phoneNum.length < 11) {
                    alert('手机号码不足11位')
                } else if (check) {
                    alert('手机号码格式不正确')
                } else {
                    proxyJS.proxyObj.reqWWWApiTelephoneOrderAjax({
                        action: 'getTel',
                        phone: phoneNum,
                        device: device,
                        game_name: 'shqz',
                        success: function (res) {
                            $(".kaifaOrderphone").val('');
                            $('.orderbox1').hide();
                            $('.orderbox2').show();
                        },
                        error: function (res) {
                            alert(res.msg);
                            $(".kaifaOrderphone").val('');
                        }
                    })
                }
                return false;
            });

            var width = $('.innerbox').width();
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                // initialSlide :4,
                width: width,
                direction: 'vertical'
            });
            $('.box2').addClass('start');
            $(".swiper-wrapper").on('touchend', function (event) {
                //event.preventDefault();
                setTimeout(function () {
                    $(".box").removeClass('start');
                    var index = swiper.activeIndex
                    if (!$(".swiper-slide").eq(index).find('.box').hasClass('start')) {
                        $(".swiper-slide").eq(index).find('.box').addClass('start');
                    }

                }, 300)
            });
            $('.newPlayer,.oldPlayer').on('touchend', function (event) {
                event.preventDefault();
                /* Act on the event */
                $(".kaifaout,.kaifaout .orderbox1").show();
                return false;
            });
            $('.kaifaout .bg,.kaifaout .close').on('touchend', function (event) {
                event.preventDefault();
                /* Act on the event */
                $(".kaifaout,.kaifaout .orderbox1,.kaifaout .orderbox2").hide();
                return false;
            });

            var videostr = '';
            var _videoTimeId = 0;
            $(".innerbox .play").on('click', function (event) {
                $('.videobox').append('<video src="https://resource.15166.com/video/shqz/kaifazu.mp4" controls="controls" class="va-myVideo"></video>').show();
                $('.videobox').show();
                $('.videoout').on('click', function () {
                    clearTimeout(_videoTimeId);
                    $('.videobox').hide();
                    $('.va-myVideo').remove();

                });

                var i = $(".va-myVideo").get(0);
                _videoTimeId = setTimeout(function () {
                    i.play();
                }, 16);
                $(".kaifaout").on('touchend', function (event) {

                    // console.log($('.videobox').is(":visible"))

                    if ($('.videobox').is(":visible")) {
                        //clearTimeout(_videoTimeId);
                        $('.videobox').hide();
                        $('.va-myVideo').remove();
                    }
                });
                return false;

            });
        }
    })
}

exports.init = init;
