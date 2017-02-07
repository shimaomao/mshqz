/* 
* @Author: Marte
* @Date:   2016-01-25 15:10:03
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-24 16:26:09
*/
function init(){
    require(['./jquery','./common','./proxy'],function($,commonJs,proxyJS){
        initUI.call(this);
        function initUI(){
            commonJs.commonObj.init();
            $('#android,#footorder').on('touchend', function(event) {
                window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                return false;
            });
            var aType = '';
            var quantity = '9';//每页的数量
            var leixing = '新闻';
            getList('12',quantity,'0','1',leixing,$('.comnews'));
            $('.tabtit span').unbind().bind('touchend', function(event) {
                // $(this).addClass('on').siblings().removeClass('on');
                // $('.newsbox>div').eq($(this).index()).addClass('on').siblings().removeClass('on');
                
                var thisindex = $(this).index();
                $('.newsbox>div').eq(thisindex).show().siblings().hide();
                var activePos = $(this).position();
                //console.log(activePos)
                $('#border1').stop().css({
                    'transform' : 'translateX('+activePos.left+'px)'
                   // 'left':activePos.left
                });
                var innerbox = $('.comnews');
                if($(this).attr('data-has') == 'false'){
                    switch(thisindex)
                    {
                    case 0:
                        var page = '1';
                        leixing = '新闻';
                        aType = '12';
                        getList(aType,quantity,thisindex,page,leixing,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 1:
                        var page = '1';
                        leixing = '公告';
                        aType = '13';
                        getList(aType,quantity,thisindex,page,leixing,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 2:
                        var page = '1';
                        leixing = '活动';
                        aType = '15';
                        getList(aType,quantity,thisindex,page,leixing,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    case 3:
                        var page = '1';
                        leixing = '媒体';
                        aType = '51';
                        getList(aType,quantity,thisindex,page,leixing,innerbox);
                        $(this).attr('data-has', 'true');
                        break;
                    }
                }
            });
            ////////////////////// 新闻列表 //////////////////////
                //获取列表
                 function getList(aType,quantity,thisindex,page,leixing,innerbox){
                     proxyJS.proxyObj.reqWWWApiArticleAjax({
                         req:'multi_page',
                         aType:aType,
                         page: page,
                         limit: quantity,
                         success:function(data){
                             if(data.count <= 9){
                                 $('.newsbox>div').eq(thisindex).children('.getmore').hide();
                             }else{
                                 $('.newsbox>div').eq(thisindex).children('.getmore').show();
                             }

                             $('.newsbox>div').eq(thisindex).children('.getmore').unbind().bind('click', function(event) {
                                 page++;
                                 getMoreList(aType,quantity,thisindex,page,leixing)
                             });
                             updatePageListByResult(data.articles,thisindex,leixing,innerbox)
                         }
                     })
                }
                function getMoreList(aType,quantity,thisindex,page,leixing){
                    proxyJS.proxyObj.reqWWWApiArticleAjax({
                        req:'multi_page',
                        aType:aType,
                        page: page,
                        limit: quantity,
                        success:function(data){
                            if(data.articles.length == 0){
                                alert('没有更多了')
                                $('.newsbox>div').eq(thisindex).children('.getmore').hide();
                            }
                            $('.newsbox>div').eq(thisindex).children('.getmore').bind('click', function(event) {
                                page++
                            });
                            loadmore(data.articles,thisindex,leixing)
                        }
                    });
                }
                function updatePageListByResult(data,thisindex,leixing,innerbox){
                    var liStr = "";
                    var obj = 0;
                    var timeDate = null;
                   // console.log(innerbox)
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
                                    +        "<a href='../news/"+ year+"/"+month+"/"+day +"/"+parseInt(obj.id)+".html'>"
                                    +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                    +            "<i>"+ month +"-"+ day +"</i>"
                                    +        "</a>"
                                    +    "</li>"
                            }
                        }
                            innerbox.eq(thisindex).children('ul').html(liStr);
                    });

                }
                function loadmore(data,thisindex,leixing){
                    var liStr = "";
                    var obj = 0;
                    var timeDate = null;
                    //console.log(data)
                    $.each(data, function(key) {
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
                                liStr = "<li>"
                                    +        "<a href='"+ obj.content +"'>"
                                    +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                    +            "<i>"+ month +"-"+ day +"</i>"
                                    +        "</a>"
                                    +    "</li>"
                                }else{
                                  liStr =    "<li>"
                                        +        "<a href='../news/"+ year+"/"+month+"/"+day +"/"+parseInt(obj.id)+".html'>"
                                        +            "<span>[<em>"+ leixing +"</em>]"+obj.title+"</span>"
                                        +            "<i>"+ month +"-"+ day +"</i>"
                                        +        "</a>"
                                        +    "</li>"
                                }
                        }
                            $('.comnews').eq(thisindex).children('ul').append(liStr);
                    });

                }
           
        }
    })
}
        
exports.init = init;
