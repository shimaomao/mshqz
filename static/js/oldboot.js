/* 
* @Author: Marte
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-19 15:03:58
*/
function init(){
    require(['./jquery','./common','./mCustomScrollbar.min'],function($,commonJs){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();

            var width = $('.bannerbox').width();
            var swiper2 = new Swiper('.swiper-container2', {
                pagination: '.swiper-pagination2',
                updateOnImagesReady : true,
                slidesPerView: 1,
                width:width,
                paginationClickable: true,
                spaceBetween:0,
                autoplay:4000,
                autoplayDisableOnInteraction : false,
                loop: true
            });
            
            $('.tap-nav span').on('click',function(event) {
                 $(this).addClass('on').siblings().removeClass('on');
                var index = -$(this).index();
                //$('.renwubox>div').eq(index).show().siblings().hide();
                var activePos = $(this).position();
                $('#border1').stop().css({
                    'transform' : 'translateX('+activePos.left+'px)'
                   // 'left':activePos.left
                });

                $('.picbox ul').stop().css({
                    'transform' : 'translateX('+index*33.3333+'%)'
                   // 'left':activePos.left
                });
            });
            $(".other-box").mCustomScrollbar({
                scrollInertia:100
            });

            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

            $("#bootAndroid").click(function(event) {
                if(isiOS){
                    alert("苹果用户敬请期待")
                }else{
                    window.location.href = "http://wwwapi.15166.com/download?game=shqz&cid=m";
                }
            });

            // $(".apple2").unbind().bind('click',function(event) {
            //     $(".out").css('display', 'block');
            //     $(".ios").css('display', 'block');
            //     $("body").css({
            //         'height': '100%',
            //         'overflow': 'hidden'
            //     });
            // });

            $(".list-box ul li").click(function(event) {
                window.location.href="http://shqz.15166.com/m/fuli";
               // alert("敬请期待"); 
            });
            var qidai = "敬请期待";

            $("#kaifa").click(function(event) {
                var html = '<p class="info">水q精诚开测，策划纷纷诚意亮相。也许你有许多心声无处安放，现在机会来了，对你所关心领域的策划说出你的心声吧。这一次，策划与你零距离接触、面对面交谈，用心声说出期待。</p>'
                         + '<p class="info">活动规则：活动开启时，点击你关注的策划头像进入指定活动贴链接，回复你的心声，我们将精选回复发放诚意礼包。</p>'
                         + '<p class="info center"><a href="./liangxiang">>>点击进入开发组专题<<</a></p>';
                         
                         $('.boot-out,.inbox1').show();
                         $('.boot-out .inbox1 h3').html('开发组诚意');
                         $('.info-box').html(html);
            });
            $("#tiaoyou").click(function(event) {
                var html = '<p class="info">《水浒Q传》手游前次测试中，我们听到了许多建议与批评的声音。水粉们的这些声音，既为我们指明了前进的方向，也提供了不断进步的动力。在6月封测前的这段空窗期里，我们对游戏做了充足的调整，既有新增，也有优化。水Q手游的每一次迭代更新，段王爷都会以“开发者日志”的形式如实地呈现给大家，以展现我们的调优诚意。我们也希望与各位水粉一起，将水浒Q传打造成一款更好玩的游戏！</p>'
                         + '<p class="info center"><a href="http://bbs.15166.com/forum.php?mod=viewthread&tid=3423&extra=page%3D1">>>点击查看调优诚意<<</a></p>';
                         
                         $('.boot-out,.inbox1').show();
                         $('.boot-out .inbox1 h3').html('调优诚意');
                         $('.info-box').html(html);
            });
            $("#zhibo").click(function(event) {
                var html = '<p class="info">《水浒Q传》手游6月23日精诚封测，我们还将为各位带来一系列的诚意直播。不仅会提前带来武师新职业、帮派联赛的试玩展示，封测期间还将带来实况人气直播！详情可参见官方论坛预告，敬请期待！</p>'
                         + '<p class="info center"><a href="http://www.douyu.com/705682?_r=0.1944780985722412" >>>点击进入直播间<<</a></p>';
                         
                         $('.boot-out,.inbox1').show();
                         $('.boot-out .inbox1 h3').html('直播诚意');
                         $('.info-box').html(html);
            });
            $("#fuli").click(function(event) {
                var html = '<p class="info">诚心诚意，好礼先行，丰富的福利活动助你再上梁山。水Q精诚封测开启在即，相信各位小伙伴已经按耐不住心中跃跃欲试的心情了，福利诚意特地为诸位预先准备了多重好礼，快来参与领取，备战精诚封测吧！</p>'
                         + '<p class="info center"><a href="../fuli/" >>>点击进入福利中心<<</a></p>';
                         
                         $('.boot-out,.inbox1').show();
                         $('.boot-out .inbox1 h3').html('福利诚意');
                         $('.info-box').html(html);
            });

            $(".inbox .close,.boot-out .bg").on('touchend',function(event) {
                $('.boot-out,.inbox').hide();
                return false;
            });

            $('.boot-out').on('touchmove',function(event) {
                return false;
            });
            
        }           
    })
}
        
exports.init = init;
