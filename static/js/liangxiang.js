/* 
* @Author: jia
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-28 10:52:19
*/
function init(){
    require(['./jquery','./common','./liangxiangConfig','./pagination'],function($,commonJs,liangxiangConfigJs){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();
            $('#android,#footorder').on('touchend', function(event) {
                window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                return false;
            });
    
            $(".pic").on('touchstart', function(event) {
                $(this).find('.info').css('opacity', '1');
            });
            $(".pic").on('touchmove', function(event) {
                $(this).find('.info').css('opacity', '0');
            });
            $(".pic").on('touchend', function(event) {
                $(this).find('.info').css('opacity', '0');
            });

            $(".libaoalert .bg,.libaoalert .close").on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                $(".libaoalert").hide();
            });
            $(".getgift").on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                $(".libaoalert").show();
            });
                
            var id = null;
            var liangxianginit = liangxiangConfigJs.liangxiangObj.man;
            $(".box .pic").click(function(event) {
                id = $(this).attr('data-id');
                var maninfo = getmanID(id,liangxianginit);
                //console.log(getmanID(id,liangxianginit));
                $(".alertman").show();
                $('.leftpicbox div').addClass('man'+id);
                $('.alertman .top .name em').html(maninfo.name);
                $('.alertman .top .job').html(maninfo.job);
                $('.alertman .ziliao .word').html(maninfo.contents);
                $('.talkabout').attr('href', maninfo.mamsrc);
            });
            $('.alertman .bg,.alertman .infobox .close').click(function(event) {
                $('.alertman').hide();
                $('.leftpicbox div').removeClass('man'+id);
            });

            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            $("#leftboxDownload").click(function(event) {
                if(isiOS){
                    alert("苹果用户敬请期待")
                }else{
                    window.location.href = "http://wwwapi.15166.com/download?game=shqz&cid=m";
                }
            });
            
            //console.log(videoinit)
            function getmanID(id,arr){
                var manObj = null;
                var obj = null;
                for(var i = 0;i<arr.length;i++){
                    obj = arr[i];
                    if(obj.id == id){
                        manObj = obj;
                        break;
                    }
                }

                return manObj;
            }


            //分页
            var length = $("#hiddenresult li").length;
            var initPagination = function() {
                var num_entries = $("#hiddenresult li").length;
                // 创建分页
                $("#Pagination").pagination(num_entries, {
                    maxentries: length,
                    num_edge_entries: 0, //边缘页数
                    num_display_entries: 3, //主体页数
                    items_per_page:4 ,//每页显示1项
                    callback: pageselectCallback
                });
            }();
            function pageselectCallback(page_index, jq){
                var items_per_page = 4;
                var max_elem = Math.min((page_index+1) * items_per_page, length);
                $("#Searchresult").html("");
                // 获取加载元素
                var html = "";
                for(var i=page_index*items_per_page;i<max_elem;i++){
                    html += '<li class="clearfix">'+$("#hiddenresult li:eq("+i+")").html() +'</li>';
                    //$("#Searchresult").append($("#hiddenresult li:eq("+i+")").clone());
                }
                $("#Searchresult").html(html).find('.more').on('click',function(event) {
                    /* Act on the event */
                   // alert(1)
                    var reword = $(this).parent(".word").siblings('.reword');

                    if(reword.attr('show')=="1"){
                        reword.show();
                        $(this).html("收起回复↑")
                        reword.attr('show',"2")
                    }else if(reword.attr('show')=="2"){
                        reword.hide();
                        $(this).html("查看回复↓")
                        reword.attr('show',"1")
                    }
                });;
                //阻止单击事件
                return false;
            }

        }           
    })
}
        
exports.init = init;
