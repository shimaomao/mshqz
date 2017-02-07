/**
 * Created by Administrator on 2016/12/16.
 */
var freshContObj = {
    init: function () {
        require(['./jquery', './common', './proxy'], function ($,commonJs, proxyJS) {
            commonJs.commonObj.init();
            initUI.apply(this);

            function initUI() {

                $('#android,#footorder').on('touchend', function(event) {
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m';
                    return false;
                });



////////////////////////////////
                $("#shenTab-hd span").click(function(){
                    $(this).addClass("cur").siblings().removeClass("cur");
                    $("#shenTab-bd").find(".shenpicLi").eq($(this).index()).addClass("active").siblings(".shenpicLi").removeClass("active");
                })

////////////////////////////////
                $("#tec-ul li").click(function(){
                    $("#opacityBox").show();
                    $(this).find(".liTips").show().parent("li").siblings("li").find(".liTips").hide();
                });

                $("#tec-ul2 li").click(function(){
                    $("#opacityBox").show();
                    $(this).find(".liTips").show().parent("li").siblings("li").find(".liTips").hide();
                });
                $("#opacityBox").on("touchmove",function(){
                    $(".liTips").hide();
                    $(this).hide();
                });
                $("#opacityBox").on("click",function(){
                    $(".liTips").hide();
                    $(this).hide();
                });
////////////////////////////////
                var onOff = true;

                $("#bk .boy").click(function(){

                    if(!$(".nan-img img").is(":animated")){
                        if(onOff){
                            $(".nan-img").find(".img1").fadeOut();
                            $(".nan-img").find(".img2").fadeIn();
                            $(this).find(".nan-w").html("查看正面");
                            onOff = false;
                        }else {
                            $(".nan-img").find(".img1").fadeIn();
                            $(".nan-img").find(".img2").fadeOut();
                            $(this).find(".nan-w").html("查看背面");
                            onOff = true;
                        }
                    }
                });
                var onOff2 = true;
                $("#bk .girl").click(function(){
                    if(!$(".nan-img img").is(":animated")){
                        if(onOff2){
                            $(".nan-img").find(".img3").fadeOut();
                            $(".nan-img").find(".img4").fadeIn();
                            $(this).find(".nan-w").html("查看正面");
                            onOff2= false;
                        }else {
                            $(".nan-img").find(".img4").fadeOut();
                            $(".nan-img").find(".img3").fadeIn();
                            $(this).find(".nan-w").html("查看背面");
                            onOff2 = true;
                        }
                    }

                });
////////////////////////////////
                $("#fuTab .hd span").click(function(){
                    $(this).addClass("cur").siblings().removeClass("cur");
                    $(".fuTab_ul li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
                });

////////////////////////////////
            }
        })
    }

}


exports.freshContObj = freshContObj;