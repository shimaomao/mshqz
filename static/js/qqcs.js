/**
 * Created by Administrator on 2016/12/16.
 */
var qqcsObj = {
    init: function () {
        require(['./jquery', './common', './proxy'], function ($,commonJs, proxyJS) {
            commonJs.commonObj.init();
            initUI.apply(this);

            function initUI() {

                $('#android,#footorder').on('touchend', function(event) {
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m';
                    return false;
                });


                vedioinit();
                function  vedioinit(){
                    var videostr = '';
                    var _videoTimeId = 0;
                    $("#play2").on('click',function(event) {
                        $('.videobox').show();
                        var videoUrl = 'http://resource.15166.com/video/shqz/qingqiuchuanshuo.mp4';
                        $('.videobox').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo"></video>').show();
                        $('.videoout').on('click',function(){
                            clearTimeout(_videoTimeId);
                            $('.videobox').hide();
                            $('.va-myVideo').remove();
                        });
                        var i = $(".va-myVideo").get(0);
                        _videoTimeId = setTimeout(function () {
                            i.play();
                        }, 16);
                        $("#index-w").on('touchend', function(event) {
                            // console.log($('.videobox').is(":visible"))
                            if($('.va-myVideo').is(":visible")){
                                //clearTimeout(_videoTimeId);
                                $('.videobox').hide();
                                $('.va-myVideo').remove();
                            }
                        });
                    });
                }


                //animateinit();
                function  animateinit(){
                    window.onload = function(){
                       var len =  $("#nav_ul").find("a").length;
                        //for (var i=0;i<len;i++){
                        //    $("#nav_ul").find("a").eq($(this).index()).addClass("trans"+i);
                        //    return false;
                        //}
                        $("#nav_ul a").each(function(i,event){
                            $(this).addClass("trans"+i );
                        });
                    }

                }

            }
        })
    }//,
    //video : function(){
    //
    //}()

}


exports.qqcsObj = qqcsObj;