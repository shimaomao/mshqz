/* 
* @Author: Marte
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-28 10:51:54
*/
function init(){
    require(['./jquery','./common','./zepto.min.js','./videoConfig'],function($,commonJs,zeptoJs,videoConfigJs){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();

           $('#android,#footorder').on('touchend', function(event) {
                window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                return false;
            });
                 
            $('#video-nav li').on('tap', function(event) {
                event.preventDefault();
                var index = $(this).index();
                /* Act on the event */
                var activePos = $(this).position();
                //console.log(activePos.left)
                $('.border').stop().css({
                    'transform' : 'translateX('+activePos.left+'px)'
                   // 'left':activePos.left
                });
                $('#media>div').eq(index).show().siblings().hide();
            });

            $(".big-picture .close,.big-picture .bg").unbind().on('touchend', function(event) {
                $(".big-picture").hide();
                $(".big-picture .right,.big-picture .left").hide();
                return false;
            });

            

            var imghtml = '';
            var id = null;
            var jid = null;
            $('.bizhi .pic,.bizhi ul li').on('touchend',function(event) {
                id = parseInt($(this).attr('data-id'));
                var arr = videoinit.img;
               // console.log(id);
                     
                if(id==1){
                    $(".big-picture .right").show();
                }else if(id == arr.length){
                    $(".big-picture .left").show();
                }else{
                    $(".big-picture .right,.big-picture .left").show();
                }
                var imginfo = getVideoID(id,arr);
                var src = imginfo.imgsrc;
                imghtml = '<img src='+src+' />';
                $(".big-picture .tu .picbox").html(imghtml);
                $(".big-picture,.big-picture .tu").show();
                     
                $(".big-picture .right").unbind().on('touchend',function(event) {
                    id = id+1;
                   // console.log(id)
                    if(id == arr.length){
                        $(this).hide();
                    }else{
                        $(this).show();
                        $(this).siblings('.left').show();
                    }
                    var rimginfo = getVideoID(id,arr);
                    var rsrc = rimginfo.imgsrc;
                    imghtml = '<img src='+rsrc+' />';
                    $(".big-picture .tu .picbox").html(imghtml);
                });
                $(".big-picture .left").unbind().on('touchend',function(event) {
                    id = id-1;
                    //console.log(id)
                    if(id == 1){
                        $(this).hide();
                    }else{
                        $(this).show();
                        $(this).siblings('.right').show();
                    }
                    var rimginfo = getVideoID(id,arr);
                    var rsrc = rimginfo.imgsrc;
                    imghtml = '<img src='+rsrc+' />';
                    $(".big-picture .tu .picbox").html(imghtml);
                });
                return false;
            });
            $('.jietu .pic,.jietu ul li').on('click',function(event) {
                jid = parseInt($(this).attr('data-id'));
                var arr = videoinit.jieimg;
               // console.log(jid);
                     
                if(jid==1){
                    $(".big-picture .right").show();
                }else if(jid == arr.length){
                    $(".big-picture .left").show();
                }else{
                    $(".big-picture .right,.big-picture .left").show();
                }
                var imginfo = getVideoID(jid,arr);
                var src = imginfo.imgsrc;
                imghtml = '<img src='+src+' />';
                $(".big-picture .tu .picbox").html(imghtml);
                $(".big-picture,.big-picture .tu").show();
                     
                $(".big-picture .right").unbind().on('touchend',function(event) {
                    jid = jid+1;
                   // console.log(jid)
                    if(jid == arr.length){
                        $(this).hide();
                    }else{
                        $(this).show();
                        $(this).siblings('.left').show();
                    }
                    var rimginfo = getVideoID(jid,arr);
                    var rsrc = rimginfo.imgsrc;
                    imghtml = '<img src='+rsrc+' />';
                    $(".big-picture .tu .picbox").html(imghtml);
                    return false;
                });
                $(".big-picture .left").unbind().on('touchend',function(event) {
                    jid = jid-1;
                    //console.log(jid)
                    if(jid == 1){
                        $(this).hide();
                    }else{
                        $(this).show();
                        $(this).siblings('.right').show();
                    }
                    var rimginfo = getVideoID(jid,arr);
                    var rsrc = rimginfo.imgsrc;
                    imghtml = '<img src='+rsrc+' />';
                    $(".big-picture .tu .picbox").html(imghtml);
                    return false;
                });
            });
            $('.jietu .pic,.jietu ul li').on('click', function(event) {
                $(".big-picture,.big-picture .tu").show();

            });
            $('.bg').on('touchmove', function(event) {
                event.preventDefault();
                /* Act on the event */
                return false;
            });

            var videoinit = videoConfigJs.videoObj;
            //console.log(videoinit)
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
            $(".videobtn").on('click',function(event) {
                var id = $(this).attr('data-id');
                // var arr = videoinit.video;
                // var videoinfo = getVideoID(id,arr);
                // var src = videoinfo.videosrc;
                // videostr = '<video src='+src+' id="video2" controls="controls" autoplay="autoplay"></video>'
                // $(".big-picture,.big-picture .shipin").show();
                // $(".big-picture .shipin").append(videostr);
                // var video2 = document.getElementById("video2");
                // video2.play();
                updateAlertVideoById.apply(this,[id]);
            });

            function updateAlertVideoById(id){
                var videoUrl = (getVideoID(id,videoinit.video)).videosrc;
                
                if( id == 11){
                    $('.va-alert').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo va-myVideo2"></video>').show();
                }else{
                    $('.va-alert').append('<video src="' + videoUrl + '" controls="controls" class="va-myVideo"></video>').show();
                }
                $('#va-closeBtn').on('click',function(){
                    //alert(1)
                    clearTimeout(_videoTimeId);
                    $('.va-alert').hide();
                    $('.va-myVideo').remove();
                    return false;
                });
                $(".main").on('touchend', function(event) {
                    
                   // console.log($('#va-myVideo').is(":visible"))
                         
                    if($('.va-myVideo').is(":visible")){
                        $('.va-myVideo').remove();
                    }
                    
                });

                var i = $(".va-myVideo").get(0);
                _videoTimeId = setTimeout(function () {
                    i.play();
                }, 16);
            }
        }
    })
}
        
exports.init = init;
