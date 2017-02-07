/* 
* @Author: Marte
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-22 12:14:15
*/
function init(){
    require(['./jquery','./videoConfig','./ios','./proxy'],function($,videoConfigJs,iosJs,proxyJS){
        initUI.call(this);
        function initUI(){
            iosJs.iosObj.init();
            $('.zhiye .tabtit span').bind('touchend',function(event) {
                 //$(this).addClass('on').siblings().removeClass('on');
                var index = $(this).index();
                $('.renwubox>div').eq(index).show().siblings().hide();
                var activePos = $(this).position();
                $('#border1').stop().css({
                    'transform' : 'translateX('+activePos.left+'px)'
                   // 'left':activePos.left
                });
            });


            
                $(".bigbanner").addClass('start');
                $(".ren").addClass('fly');
                // setTimeout(function () {
                //     $(".ren").addClass('up');
                // }, 2500);
                setTimeout(function () {
                    $(".ren").addClass('move');
                }, 2500);
                var iosTimmer = 0;
                $('.ios-wait .btn').on('touchend', function(event) {
                    clearTimeout(iosTimmer);
                    if($('.ios-wait').hasClass('up2')){
                        $('.ios-wait').removeClass('up2')
                    }else{
                        $('.ios-wait').addClass('up2')
                    }
                   iosTimmer = setTimeout(function(){
                        $('.ios-wait').removeClass('up2');
                    }, 10*1000)
                    return false;
                });
            

           $('.sex .woman').bind('touchend',function(event){
                $(this).siblings('.manclick').hide().siblings('.womanclick').show();
                $(this).parents('.com').find('.nv').show().siblings('.nan').hide();
           });
           $('.sex .man').bind('touchend',function(event){
                $(this).siblings('.womanclick').hide().siblings('.manclick').show();
                $(this).parents('.com').find('.nan').show().siblings('.nv').hide();
           });
            var music = document.getElementById("music");
            var video1 = document.getElementById("video1");
            var video2 = document.getElementById("video2");
            

           $("#weixin").unbind().bind('click',function(event) {
                $(".out").css('display', 'block');
                $(".weixin").css('display', 'block');
                $('.weixin .close').unbind().bind('click',function(event) {
                    $(".out").css('display', 'none');
                    $(".weixin").css('display', 'none');
                });
            });
           $("#qq").unbind().bind('click',function(event) {
                $(".out").css('display', 'block');
                $(".kefuout").css('display', 'block');

                $('.kefuout .close').unbind().bind('click',function(event) {
                    $(".out").css('display', 'none');
                    $(".kefuout").css('display', 'none');

                });
            });
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            var downloadbtn = function(){
                
                    $('.downloadbtn').html("下载游戏").on('touchend', function(event) {
                        window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                        return false;
                    });
                
            }
            downloadbtn();

            
                
            getbanner ();
            function getbanner (){
                proxyJS.proxyObj.reqWWWApiBannerAjax({
                    action: 'getscene',
                    website:'8',
                    scene:'shqz_yd',
                    success:function(res){
                        forimg(res);
                    }
                })
            };
            var bannerwidth = $('.tese .innerbox').width();
            var swiper2 = new Swiper('.swiper-container2', {
                pagination: '.swiper-pagination2',
                updateOnImagesReady : true,
                slidesPerView: 1,
                width:bannerwidth,
                paginationClickable: true,
                spaceBetween:0,
                autoplay:4000,
                autoplayDisableOnInteraction : false,
                loop: true
            });

            function forimg(data){
                var imginfo = data.data
               // console.log(imginfo)
                $.each(imginfo, function(index, val) {
                    var liStr = "";
                   // console.log(imginfo[index])
                    var obj = imginfo[index];
                    liStr +=  "<div class='swiper-slide banner-box'>"
                            +    "<a href='"+obj.url+"'>"
                            +        "<img src='"+obj.banner+"' />"
                            +    "</a>"
                            +"</div>";

                    //console.log(liStr)
                    $("#pic").append(liStr)        
                });
                var width = $('.banner .innerbox').width();
                var swiper = new Swiper('.swiper-container1', {
                    pagination: '.swiper-pagination1',
                    slidesPerView: 1,
                    width:width,
                    paginationClickable: true,
                    spaceBetween:0,
                    autoplay:4000,
                    autoplayDisableOnInteraction : false,
                    loop: true
                });
            }
           
            var aType = '12,13,15,51';
            var quantity = '6';//每页的数量
            var leixing = '新闻';
            getList(aType,quantity,'0','1',leixing);
            //获取列表
             function getList(aType,quantity,thisindex,page,leixing){
                 proxyJS.proxyObj.reqWWWApiArticleAjax({
                     req:'multi_simple',
                     aType:aType,
                     limit: quantity,
                     success:function(data){
                         getname(data);
                     }
                 });
            }
           
            function getname(data){
                var arry1 = [];
                var arry2 = [];
                var arry3 = [];
                var arry4 = [];
                var arry5 = '';
                var arry6 = [];
                $.each(data, function(key,val){
                    var obj = data[key]
                    arry2.push(data[key].articles)
                    arry1.push(data[key].name)
                })
                var aaa = '';
                var indexnum = '';
                $.each(arry2, function(index, val) {
                     indexnum = index;
                     for(var i =0; i<arry2[index][0].length; i++){
                        aaa = arry2[indexnum][0][i];
                        aaa.name = arry1[indexnum];
                        //console.log(aaa)
                        arry3.push(aaa)
                     }
                     
                });
                for(var i =0; i<arry3.length; i++){
                    //console.log(parseInt(arry3[i].publish_time))

                    arry4.push(parseInt(arry3[i].publish_time))
                   
                         
                    if( i == arry3.length-1){
                        arry5 = arry4.sort(function(a,b){return b-a})
                    }
                }

                     
                for(var i =0; i<6; i++){
                  arry6.push(arry5[i])
                }                    
                $.each(arry6,function() {
                    //console.log(parseInt(this));
                    var liStr = "";
                    var timeDate = null;
                    for(var i = 0 ; i<arry3.length; i++){
                        if(parseInt(arry3[i].publish_time) == this){
                            var obj = arry3[i];
                            timeDate = new Date((obj.publish_time)*1000);
                            //console.log(timeDate.getMonth())
                            var month = timeDate.getMonth() + 1;
                            var day = timeDate.getDate();
                            var year = timeDate.getFullYear();
                            if(month <10){
                                month = '0' + month;
                            }
                            if(day < 10){
                                day = '0' + day;
                            }

                            if(obj.hasOwnProperty('attr')==true && obj.attr.hasOwnProperty('link') == true && obj.attr.link==true){
                                liStr = "<li>"
                                    +        "<a href='"+ obj.content +"'>"
                                    +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                    +            "<i>"+ month +"-"+ day +"</i>"
                                    +        "</a>"
                                    +    "</li>"
                            }else{
                              liStr =    "<li>"
                                    +        "<a href='./news/"+ year+"/"+month+"/"+day +"/"+parseInt(obj.id)+".html'>"
                                    +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                    +            "<i>"+ month +"-"+ day +"</i>"
                                    +        "</a>"
                                    +    "</li>"
                            }
                                
                            $(".news ul").append(liStr);
                        }
                    }
                     

                });
            }
            var aType2 = '';
            var quantity2 = '6';//每页的数量
            var leixing2 = '新手';
            getList2('45',quantity2,'0','1',leixing2,$('.comnews'));
            $('.gonglue .tabtit span').unbind().bind('touchend', function(event) {
                //$(this).addClass('on').siblings().removeClass('on');
                //$('.newsbox>div').eq($(this).index()).addClass('on').siblings().removeClass('on');

                var index = $(this).index();
                $('.newsbox>div').eq(index).show().siblings().hide();
                var activePos = $(this).position();
                $('#border2').stop().css({
                    'transform' : 'translateX('+activePos.left+'px)'
                   // 'left':activePos.left
                });
                var thisindex = $(this).index();
                var innerbox = $('.comnews');
                if($(this).attr('data-has') == 'false'){
                    switch(thisindex)
                    {
                    case 0:
                        var page = '1';
                        leixing2 = '新手';
                        aType2 = '45';
                        getList2(aType2,quantity2,thisindex,page,leixing2,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 1:
                        var page = '1';
                        leixing2 = '装备';
                        aType2 = '46';
                        getList2(aType2,quantity2,thisindex,page,leixing2,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 2:
                        var page = '1';
                        leixing2 = '宠物';
                        aType2 = '47';
                        getList2(aType2,quantity2,thisindex,page,leixing2,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 3:
                        var page = '1';
                        leixing2 = 'P K';
                        aType2 = '48';
                        getList2(aType2,quantity2,thisindex,page,leixing2,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 4:
                        var page = '1';
                        leixing2 = '玩法';
                        aType2 = '49';
                        getList2(aType2,quantity2,thisindex,page,leixing2,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    }
                }
            });
            ////////////////////// 新闻列表 //////////////////////
                //获取列表
                 function getList2(aType,quantity,thisindex,page,leixing,innerbox){
                     proxyJS.proxyObj.reqWWWApiArticleAjax({
                         req:'multi_page',
                         aType:aType,
                         page: page,
                         limit: quantity,
                         success:function(data){
                             updatePageListByResult(data.articles,thisindex,leixing,innerbox)
                         }
                     })
                }
                function updatePageListByResult(data,thisindex,leixing,innerbox){
                    var liStr = "";
                    var obj = 0;
                    var timeDate = null;
                    //console.log(innerbox)
                    //console.log(data)
                    $.each(data, function(key) {
                        //console.log(key);
                        //console.log(key);
                        if(!isNaN(key) == true){
                            obj = data[key];
                            timeDate = new Date((obj.publish_time)*1000);
                            //console.log(timeDate.getMonth())
                            var month = timeDate.getMonth() + 1;
                            var day = timeDate.getDate();
                            var year = timeDate.getFullYear();
                            if(month <10){
                                month = '0' + month;
                            }
                            if(day < 10){
                                day = '0' + day;
                            }
                          //alert(1);

                              if(obj.hasOwnProperty('attr')==true && obj.attr.hasOwnProperty('link') == true && obj.attr.link==true){
                                    liStr += "<li>"
                                        +        "<a href='"+ obj.content +"'>"
                                        +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                        +            "<i>"+ month +"-"+ day +"</i>"
                                        +        "</a>"
                                        +    "</li>"
                                }else{
                                  liStr +=    "<li>"
                                        +        "<a href='./news/"+ year+"/"+month+"/"+day +"/"+parseInt(obj.id)+".html'>"
                                        +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                        +            "<i>"+ month +"-"+ day +"</i>"
                                        +        "</a>"
                                        +    "</li>"
                                }
                            }
                            innerbox.eq(thisindex).children('ul').html(liStr);
                    });
                }


                $(".musicimg").on('touchend',function(event) {
                    //console.log(music.paused)
                    if(music.paused){
                        music.play();
                        $(".musicimg").addClass('stopmusic');
                        return;
                    }
                    music.pause();
                    $(".musicimg").removeClass('stopmusic');
                    return false;

               }); 
                
                var musicSrc = "./static/video/music.mp3";
                var autoplayMusic = function(){
                    if(document.readyState == "complete"){
                        $('#music').attr('src', musicSrc);
                            //music.play();
                        setTimeout(function () {
                            music.play();
                        }, 16);
                    
                    }
                }
                document.onreadystatechange = autoplayMusic;


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

                music.pause();
                $(".musicimg").removeClass('stopmusic');
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



        }           
    })
}
        
exports.init = init;
