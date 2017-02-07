/**
 * Created by Administrator on 2016/12/9.
 */
var kfjzObj = {
    init: function () {
        require(['./jquery', './common', './videoConfig', './proxy'], function ($, commonJs, videoConfigJs, proxyJS) {
            commonJs.commonObj.init();
            initUI.apply(this);

            function initUI() {

                $('#android,#footorder').on('touchend', function (event) {
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m';
                    return false;
                });

//隐藏轮播开始

                //var bannerwidth = $('.carsoular').width();
                //var swiper2 = new Swiper('.swiper-container2', {
                //    pagination: '.swiper-pagination2',
                //    updateOnImagesReady : true,
                //    width:bannerwidth,
                //    paginationClickable: true,
                //    autoplay:4000,
                //    //slidesPerView:'auto',   //页面分组显示，这里显示为3组
                //    slidesPerView:2.5,   //页面分组显示，这里显示为3组
                //    spaceBetween:30,  //slide间隙
                //    autoplayDisableOnInteraction : false,
                //    loop: true
                //});
                //$(window).resize(function(){
                //    swiper2.update();
                //})
                //
                //
                //var bannerwidth4 = $('.carousal4').width();
                //var swiper4 = new Swiper('.swiper-container4', {
                //    pagination: '.swiper-pagination4',
                //    updateOnImagesReady : true,
                //    width:bannerwidth4,
                //    paginationClickable: true,
                //    autoplay:4000,
                //    slidesPerView:1,   //页面分组显示，这里显示为3组
                //    spaceBetween:50,  //slide间隙
                //    autoplayDisableOnInteraction : false,
                //    loop: true
                //});
//隐藏轮播end
////////////////////////////////
                $(".Agifts").click(function () {
                    if ($(this).children('.psa-msg').hasClass("show")) {
                        $(this).children('.psa-msg').removeClass("show");
                        $("#touming").hide();
                    } else {
                        $(this).children('.psa-msg').addClass("show").parents(".p2intro-b").siblings(".p2intro-b").find('.psa-msg').removeClass("show");
                        $("#touming").show();
                    }
                });
                $("#touming").click(function () {
                    $(".psa-msg").removeClass("show");
                    $(this).hide();
                });
                $("#touming").on("touchmove", function () {
                    $(".psa-msg").removeClass("show");
                    $(this).hide();
                })

////////////////////////////////
                $("#kf-btn").click(function () {
                    $("#join-team-alert").show();
                });
                $("#jointeam-close").click(function () {
                    $("#join-team-alert").hide();
                });
                $("#guessbtn03").click(function () {
                    $("#guessAlert").show();

                });
                $("#guessAlert-close").click(function () {
                    $("#guessAlert").hide();
                });
                $("#joinResAlert-close").click(function () {
                    $("#joinResAlert").hide();
                });

                $(".commeAlert .bg").on('touchmove', function (event) {
                    //event.preventDefault();
                    return false;
                    /* Act on the event */
                });


////////////////////////////////
                jionEnlist();
                function jionEnlist() {

                    $("#Enlist-btn").click(function () {
                        var appKey = proxyJS.proxyObj.appKey;
                        var appId = proxyJS.proxyObj.appId;

                        var _corpName = $.trim($("#teamName").val());
                        var _captainPhone = $.trim($("#captainPhone").val());
                        var _corpServer = $.trim($("#inServer").val());
                        var _captainId = $.trim($("#captainId").val());
                        var _player1 = $.trim($("#player1").val());
                        var _player2 = $.trim($("#player2").val());
                        var _player3 = $.trim($("#player3").val());
                        var _player4 = $.trim($("#player4").val());
                        var _playerReplace = $.trim($("#playerReplace").val());
                        var _sign = $.md5(appId + _captainPhone + appKey);

                        if (kfjzObj.IsTeamName(_corpName) && kfjzObj.IsServerName(_corpServer) && kfjzObj.IsPhone(_captainPhone) && kfjzObj.IsID(_captainId) && kfjzObj.IsID(_player1) && kfjzObj.IsID(_player2) && kfjzObj.IsID(_player3) && kfjzObj.IsID(_player4)) {
                            if ((_playerReplace == '') || kfjzObj.IsID(_playerReplace)) {
                                proxyJS.proxyObj.reqActivityOfflineSignUpAjax({
                                    action: 'getOffline',
                                    corpName: _corpName,
                                    captainPhone: _captainPhone,
                                    corpServer: _corpServer,
                                    captain: _captainId,
                                    player1: _player1,
                                    player2: _player2,
                                    player3: _player3,
                                    player4: _player4,
                                    replacement1: _playerReplace,
                                    replacement2: '',
                                    sign: _sign,
                                    success: function (res) {
                                        $("#join-team-alert").hide();
                                        $("#joinResAlert").show();
                                    },
                                    error: function (res) {
                                        alert(res.msg);
                                    }
                                })
                            } else if (!kfjzObj.IsID(_playerReplace)) {
                                alert('请正确输入替补队员的ID,由1-7个数字组成。');
                                return;
                            }
                        }

                        if (!kfjzObj.IsTeamName(_corpName)) {
                            alert('请正确输入由不超过10个字符的中文，英语，数字组成的队伍名称');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsServerName(_corpServer)) {
                            alert('请正确输入由4个中文字符组成的所在服务器名。');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsPhone(_captainPhone)) {
                            alert('请正确输入手机号码。');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsID(_captainId)) {
                            alert('请正确输入队长的ID,由1-7个数字组成。');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsID(_player1)) {
                            alert('请正确输入队员1的ID,由1-7个数字组成。');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsID(_player2)) {
                            alert('请正确输入队员2的ID,由1-7个数字组成。');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsID(_player3)) {
                            alert('请正确输入队员3的ID,由1-7个数字组成。');
                            return;
                        }
                        ;
                        if (!kfjzObj.IsID(_player4)) {
                            alert('请正确输入队员4的ID,由1-7个数字组成。');
                            return;
                        }

                    })
                }

////////////////////////////////

                getTeamInfo();
                function getTeamInfo() {
                    var str = "";
                    var _timestamp = Date.parse(new Date()) / 1000;
                    var md5sign = $.md5(kfjzObj.appId + _timestamp + kfjzObj.appKey);
                    proxyJS.proxyObj.reqActivityCorpsGuessAjax({
                        action: 'getGuessTeam',
                        timestamp: _timestamp,
                        sign: md5sign,
                        success: function (res) {
                            for (var index in res.data) {
                                str += '<option value="' + index + '" id="' + index + '">' + res.data[index] + '</option>';
                            }
                            $('#select1').html(str);
                        },
                        error: function (res) {
                            alert(res.msg);
                        }
                    })
                }

////////////////////////////////
                $("#guessCommit-btn").click(function () {

                    var _mineId = $.trim($("#mineId").val());
                    var _teamVal = $.trim($("#select1 option").val());
                    var _teamId = $("#select1 option").attr('id');
                    var _signMd5 = $.md5(kfjzObj.appId + _mineId + kfjzObj.appKey);
                    if (!(_mineId == "")) {
                        if (kfjzObj.IsID(_mineId)) {
                            if (_teamVal == "") {
                                alert('请选择竞猜队伍。');
                            } else {
                                var md5sign = $.md5(kfjzObj.appId + _mineId + kfjzObj.appKey);
                                $.ajax({
                                    url: 'http://activityapi.15166.com/sqNewData/corps-guess',
                                    data: {
                                        action: 'getCorpsGuess',
                                        mineId: _mineId,
                                        teamId: _teamId,
                                        sign: _signMd5
                                    },
                                    dataType: 'jsonp',
                                    scriptCharset: 'gbk',
                                    success: function (r) {
                                        var result = r.result;
                                        var msg = r.msg;
                                        if (result == 1) {
                                            alert('成功參加竞猜！');
                                            window.location.reload();
                                        }
                                        if (result == 0) {
                                            alert(msg);
                                        }
                                    },
                                    fail: function (r) {
                                        alert('请求失败');
                                    }
                                });
                            }
                        } else {
                            alert('请输入由1-7个数字组成的ID。')
                        }
                    } else {
                        alert('请输入ID。');
                    }

                });
////////////////////////////////


                var videoinitkfjzVedio = videoConfigJs.videoObj.kfjzVedio;

                //var music = document.getElementById("music");
                var video1 = document.getElementById("video1");
                var video2 = document.getElementById("video2");
                var videostr = '';
                var _videoTimeId = 0;
                $(".shipinbox .picture").on('click', function (event) {
                    //debugger;
                    var id = $(this).attr('data-id');
                    updateAlertVideoById.apply(this, [id]);
                    $('.videobox').show();
                });

                function updateAlertVideoById(id) {

                    var videoUrl2 = (getVideoID(id, videoinitkfjzVedio)).kfjzvideosrc;
                    //
                    //if( id == 11){
                    //    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo va-myVideo2"></video>').show();
                    //}else{
                    //    $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo"></video>').show();
                    //}
                    $('.videobox').append('<video src="' + videoUrl2 + '" controls="controls" class="va-myVideo"></video>').show();
                    $('.videoout').on('click', function () {
                        clearTimeout(_videoTimeId);
                        $('.videobox').hide();
                        $('.va-myVideo').remove();

                    });

                    var i = $(".va-myVideo").get(0);
                    _videoTimeId = setTimeout(function () {
                        i.play();
                    }, 16);
                    $("#kfjz").on('touchend', function (event) {

                        // console.log($('.videobox').is(":visible"))

                        if ($('.videobox').is(":visible")) {
                            //clearTimeout(_videoTimeId);
                            $('.videobox').hide();
                            $('.va-myVideo').remove();
                        }


                    });
                }

                function getVideoID(id, arr) {
                    var giftObj = null;
                    var obj = null;
                    for (var i = 0; i < arr.length; i++) {
                        obj = arr[i];
                        if (obj.id == id) {
                            giftObj = obj;
                            break;
                        }
                    }

                    return giftObj;
                }

////////////////////////////////
            }
        })
    },
    IsTeamName: function (text) {
        var reg = /^[\u4E00-\u9FA5A-Za-z0-9]{1,10}$/;
        var res = "";
        if (reg.test(text)) {
            res = true;
        } else {
            res = false;
        }
        return res;
    },
    IsServerName: function (text) {

        var reg = /^[\u4e00-\u9fa5]{4}$/;
        var res = false;
        if (reg.test(text)) {
            res = true;
        } else {
            res = false;
        }
        return res;
    },
    IsPhone: function (text) {
        //匹配13，14，15，16,17,18,19开头的手机号码！
        var reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        var res = false;
        if (reg.test(text)) {
            res = true;
        } else {
            res = false;
        }
        ;

        return res;
    },
    IsID: function (num) {
        var reg = /^\d{1,7}$/;
        var res = false;
        if (reg.test(num)) {
            res = true;
        } else {
            res = false;
        }
        return res;
    }
}


exports.kfjzObj = kfjzObj;