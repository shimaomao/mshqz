

require(['./jquery','common'],function($,commonJs){
   //common.js执行
   commonJs.commonObj.init();
   var csrhObj = {
      init:function(){
         $(".nav-list span").click(function(event) {
            $(this).addClass('on').siblings('span').removeClass('on');
            var i = $(this).index();
            $(".content").hide();
            $(".content").eq(i).show();
         });
      }
   };
   exports.csrhObj = csrhObj;

});