/* 
 * @Author: Marte
 * @Date:   2016-01-25 16:53:27
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-12-09 10:21:50
 */
var commonObj = {
    init: function () {
        require(['./jquery', './proxy', './jQuery.md5', './lazysizes.min'], function ($, proxyJS) {
            initUI.call(this);
            function initUI() {
                var appkey = proxyJS.proxyObj.appKey;
                var appId = proxyJS.proxyObj.appId;

                //横屏代码
                function hengshuping() {
                    if (window.orientation == 180 || window.orientation == 0) {
                        $('#zhuan').hide();
                    }
                    if (window.orientation == 90 || window.orientation == -90) {
                        $('#zhuan').show();
                    }
                }

                window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
                $('#zhuan').bind('touchmove', function (event) {
                    return false;
                });
                $('#android,#footorder').on('touchend', function (event) {
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                    return false;
                });
                $("#out,.videoout").bind("touchmove", function (t) {
                    t.preventDefault();
                });
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                //alert('是否是Android：'+isAndroid);
                //alert('是否是iOS：'+isiOS);
                if (isiOS || isAndroid) {
                    $("#android").css('display', 'block');
                    $("#footorder").css('display', 'block');
                }
                ;

                // if (isAndroid) {
                //    $("#ios").css('display', 'block');
                //    //$("#gift").show();

                //    //下载按钮时出现
                //    $("#iosfootorder").css('display', 'block');
                // };

                if (isAndroid) {
                    //$("#footorder").css('display', 'block');
                    //下载按钮时出现
                    $("#gift").css('display', 'block');
                    //$("#android").css('display', 'block');
                }
                ;

                // if (isiOS) {
                //    $("#ios").css('display', 'block');

                //    //下载按钮时出现
                //    $("#iosfootorder").css('display', 'block');
                //    $("#gift").css('display', 'block');
                // };
                // if (isAndroid) {
                //     $("#footorder").css('display', 'block');
                //     //下载按钮时出现
                //     $("#gift").css('display', 'block');
                //     $("#android").css('display', 'block');
                // };

                $(".qidai").click(function (event) {
                    alert("敬请期待")
                });

                $("#returnTop").bind('touchend', function () {
                    var speed = 500;//滑动的速度
                    $('body,html').animate({scrollTop: 0}, speed);
                    return false;
                });


                $(".out .bg").on('touchmove', function (event) {
                    //event.preventDefault();
                    return false;
                    /* Act on the event */
                });
                $(".out .bg").on('touchend', function (event) {
                    $(this).siblings('div').hide();
                    $(".out").hide();
                    return false;
                    /* Act on the event */
                });


                $("#ios,#iosfootorder,#fengce,#guideorder").unbind().bind('click', function (event) {
                    $(".out").css('display', 'block');
                    $(".ios").css('display', 'block');

                    //alert("苹果用户敬请期待")
                });
                $('.ios .close').unbind().bind('touchend', function (event) {
                    $(".out").css('display', 'none');
                    $(".ios").css('display', 'none');

                    return false;
                });


                $("#gift").unbind().bind('click', function (event) {
                    //alert(1)
                    // alert("敬请期待");
                    // return;
                    $(".out").show();
                    $(".anzhuo").css('display', 'block');
                    $('.anzhuo .close').unbind().bind('touchend', function (event) {
                        var sms = $("#getPhonecode").attr('disabled');
                        // console.log(sms)
                        if (sms == undefined) {
                            $("#getPhonecode").val("获取验证码")
                        }
                        $(".out").css('display', 'none');
                        $(".anzhuo").css('display', 'none');

                        return false;
                    });
                    // alert("礼包君正在赶来的路上，请客官稍等！");
                });


                //验证码接口
                function bindcodeajax(username, from, type, signatureMd5, _this) {
                    proxyJS.proxyObj.reqPassPortCapchaNewAjax({
                        action: 'general',
                        appId: proxyJS.proxyObj.appId,
                        username: username,
                        from: from,
                        type: type,
                        signature: signatureMd5,
                        success: function (res) {

                        },
                        error: function (res) {
                            alert(res.msg);
                        }
                    });
                }

                //发送短信成功倒计时
                function sentsms(sentbtn) {
                    var InterValObj; //timer变量，控制时间
                    var count = 59; //间隔函数，1秒执行
                    var curCount;//当前剩余秒数
                    curCount = count;
                    //设置button效果，开始计时
                    sentbtn.attr("disabled", "true");
                    sentbtn.val("再次发送(" + curCount + ")");
                    sentbtn.css('background', '#DA7F51');
                    InterValObj = window.setInterval(SetRemainTime, 1000);
                    function SetRemainTime() {
                        if (curCount == 0) {
                            window.clearInterval(InterValObj);//停止计时器
                            sentbtn.removeAttr("disabled");//启用按钮
                            sentbtn.val("重新发送");
                            sentbtn.css('background', '#f39d72');
                        }
                        else {
                            curCount--;
                            sentbtn.val("再次发送(" + curCount + ")");
                            sentbtn.css('background', '#DA7F51');
                        }
                    }
                }


                //手机获取验证码
                $("#getPhonecode").bind('click', function (event) {
                    var _this = $(this);
                    var from = 'activityapi';
                    var type = 'phone';
                    var phoneNum = $('#giftphone').val();
                    var signatureStr = appId + phoneNum + from + type + appkey;
                    var signatureMd5 = $.md5(signatureStr);

                    if (phoneNum == "") {
                        alert("请填写手机号码")
                    } else {
                        var phoneCheck = !phoneNum.match(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/);
                        if (phoneCheck == true) {
                            alert("输入的手机格式不正确")
                        } else {
                            proxyJS.proxyObj.reqActivityApiGiftOrderCaptchaCheckAjax({
                                action: 'getCaptchaCheck',
                                phone: phoneNum,
                                giftID: "53",
                                sign: $.md5(appId + phoneNum + appkey),
                                success: function (res) {
                                    bindcodeajax(phoneNum, from, type, signatureMd5, _this)
                                    sentsms(_this);
                                },
                                error: function (res) {
                                    alert(res.msg);
                                }
                            })

                        }
                    }
                });


                $("#getGift").bind('click', function (event) {
                    var phoneNum = $('#giftphone').val();
                    var code = $('#code').val();
                    var giftID = '53';
                    var md5sign = $.md5(appId + phoneNum + giftID + code + appkey);
                    if (phoneNum == "") {
                        alert("请填写手机号码")
                    } else if (code == "") {
                        alert("请填写验证码")
                    } else {
                        libao(phoneNum, md5sign, code, giftID);
                    }
                });

                function libao(phoneNum, md5sign, code, giftID) {
                    proxyJS.proxyObj.reqActivityGiftOrderAjax({
                        action: 'getGift',
                        giftID: giftID,
                        appID: proxyJS.proxyObj.appId,
                        sign: md5sign,
                        gameName: 'shqz',
                        captcha: code,
                        phone: phoneNum,
                        success: function (data) {
                            //alert(data.msg);
                            $(".success").show();
                            $(".anzhuo").css('display', 'none');
                            $("#giftcode").html(code);
                            $(".success .close").on('touchend', function (event) {
                                $("#giftphone").val('');
                                $('#code').val('');
                                $(".success").hide();
                                $(".out").css('display', 'none');
                                $("#giftphone").val("");

                                return false;
                            });
                        },
                        error: function (res) {
                            alert(res.msg);
                        }
                    })

                }

                $("#ordernow").on('click', function (event) {
                    event.preventDefault();
                    var device = "";
                    var phoneNum = $("#orderPhone").val();
                    var check = !phoneNum.match(/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/);
                    ////console.log(check)
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    //alert('是否是Android：'+isAndroid);
                    //alert('是否是iOS：'+isiOS);
                    if (isiOS) {
                        device = "ios"
                    }

                    if (isAndroid) {
                        device = "android"
                    }

                    if (phoneNum == '') {
                        alert('请填写手机号码')
                    } else if (phoneNum.length < 11) {
                        alert('手机号码不足11位')
                    } else if (check) {
                        alert('手机号码格式不正确')
                    } else {
                        ordernew(phoneNum, device)
                    }
                });


                function ordernew(phoneNum, device) {
                    proxyJS.proxyObj.reqActivityTelePhoneOrderAjax({
                        action: 'getTel',
                        phone: phoneNum,
                        device: device,
                        game_name: 'shqz',
                        success: function (data) {
                            if (isiOS) {
                                alert('恭喜您预约成功！');
                                $("#orderPhone").val('');
                            } else {
                                alert('恭喜您预约成功！');
                                $("#orderPhone").val('');
                            }
                        },
                        error: function (res) {
                            alert(res.msg);
                            $("#orderPhone").val('');
                        }
                    })
                }

            }

        })

    }
}

exports.commonObj = commonObj;


   