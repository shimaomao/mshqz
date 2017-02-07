var csrhObj = {
   init:function(){
      require(['./jquery','common','game'],function($,commonJs,gameJs){

         //common.js执行
         commonJs.commonObj.init();

         gameJs.gameObj.init();

         //菜单栏
         $('nav').find('li').on('touchend',function(event){
            var id = $(this).attr('data-id');
            $(this).siblings('li').removeClass('current');
            $(this).addClass('current');
            $('#' + id).siblings('.container').hide();
            $('#' + id).show()
         });

         //视频播放
         $('#play').click(function(event) {
            var videostr = '';
            var _videoTimeId = 0;
            $('#video_container').show();
            var videoUrl = 'https://resource.15166.com/video/shqz/xuanchuan.mp4';
            $('.video-inner').append('<video src="' + videoUrl + '" controls="controls" id="video"></video>').show();
            $('#video_container .bg').on('click',function(){
               clearTimeout(_videoTimeId);
               $('#video_container').hide();
               $('#video').remove();
            });
            var i = $("#video").get(0);
            _videoTimeId = setTimeout(function () {
               i.play();
            }, 16);
            $("main").on('touchend', function(event) {
               // console.log($('.videobox').is(":visible"))      
               if($('#video_container').is(":visible")){
                  //clearTimeout(_videoTimeId);
                  $('.video_container').hide();
                  $('#video').remove();
               }
            });
         });
         
      });
   }
};
exports.csrhObj = csrhObj;