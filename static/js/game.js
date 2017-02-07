/**
 * Created by Administrator on 2016/4/5.
 */
var gameObj = {
    init: function () {
        require(['./jquery', './proxy', './newsID','./highlight'], function ($, proxyJS, newsIDJS,highlightJS) {

            initUI.apply(this);

            function initUI() {

                $('#android,#footorder').on('touchend', function(event) {
                    window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                    return false;
                });
               
                
                initNewsUI.apply(this);


                function initNewsUI() {
                    reqLevel1NewsById(newsIDJS.newsIDObj.ZILIAO_PC_ID);
                }

                function reqLevel1NewsById(level1Id) {

                    var REQ_NEWS_MAX_NUM = 300000;
                    $('#desc-list').empty();

                    var succFunc1 = function (res) {

                        var arr1 = res.data.childs;
                        var parent1ID = parseInt(res.data.parent);

                        var obj1 = null;
                        var bigListStr = '';

                        if(arr1 != null && arr1.length>0){
                            for (var i = 0; i < arr1.length; i++) {//这里可以得到热门资料，游戏介绍，系统介绍，活动玩法，物品道具之类的大标题
                                obj1 = arr1[i];
                                var id2 = obj1.id;
                                var name2 = obj1.name;

                                var oneItemStr  =    '<div>'
                                                +        '<div class="tit">'
                                                +            '<h2>'+name2+'</h2>'
                                                +        '</div>'
                                                +        '<ul id="grand_'+id2+'" class="click ziliaobox clearfix">'
                                                +        '</ul>'
                                                +    '</div>';

                                $('#desc-list').append(oneItemStr);

                                if(obj1.hasOwnProperty('isLast') == true){
                                    if(obj1.isLast == true){
                                        var paragraphId = '#grand_'+id2;
                                        var liStr = '<li id="para_'+id2+'" class="clearfix"></li>';

                                        $(paragraphId).html(liStr)
                                        //console.log(liStr)
                                        var succFunc4 = function (res) {//这里才是最终可以得到小标题下具体的内容新闻列表

                                            if (res != null && res != undefined) {
                                                var newsArr = res[0].articles[0];
                                                var title3 = res[0].name;//title first
                                                var id4 = res[0].id;//
                                                var linkStr = '';

                                                if(newsArr != null && newsArr.length>0){
                                                    var obj3 = null;
                                                    var nowDate = null;
                                                    var year = 0;
                                                    var month = 0;
                                                    var date = 0;
                                                    var urlPath = '';

                                                    for(var k = 0;k<newsArr.length;k++){

                                                        obj3 = newsArr[k];
                                                        nowDate = new Date(obj3.publish_time*1000);
                                                        year = nowDate.getFullYear();
                                                        month = nowDate.getMonth()+1;
                                                        date = nowDate.getDate();
                                                        month = month<10?"0"+month:month;
                                                        date = date<10?"0"+date:date;
                                                        urlPath = './'+year+"/"+month+"/"+date+"/"+obj3.id+".html";
                                                        linkStr += "<a href='"+urlPath+"'>"+obj3.title+"</a>";
                                                    }
                                                }

                                                //console.log('===================linkStr start=======================');
                                                //console.log(linkStr);
                                                //console.log('===================linkStr end=======================');
                                                var pId = '#para_'+id4;

                                                $(pId).html(linkStr);
                                            }
                                        };

                                        var errorFunc4 = function (res) {

                                        };

                                        reqNewsInfoListByIdAjax(id2,succFunc4,errorFunc4);//这里请求每一项下的新闻列表
                                    }
                                }else{
                                    var succFunc2 = function (res) {//这里可以得到装备系统，召唤兽系统，战斗系统，帮派系统。。。（大标题下的小标题）
                                        var arr2 = res.data.childs;
                                        var parent2ID = parseInt(res.data.parent);
                                        var ulID = "#grand_"+parent2ID;

                                        if(arr2 != null && arr2.length>0){
                                            var obj2 = null;
                                            var id3 = 0;
                                            var name3 = '';
                                            var listStr = '';
                                            for (var j = 0; j < arr2.length; j++) {
                                                obj2 = arr2[j];
                                                id3 = obj2.id;
                                                name3 = obj2.name;

                                                listStr='<li class="clearfix"><div class="left"><span>'+name3+'</span></div><div id="para_'+id3+'" class="right clearfix"></div></li>';
                                                $(ulID).append(listStr)


                                                var succFunc3 = function (res) {//这里才是最终可以得到小标题下具体的内容新闻列表

                                                    if (res != null && res != undefined) {
                                                        var newsArr = res[0].articles[0];
                                                        var title3 = res[0].name;//title first
                                                        var id4 = res[0].id;//

                                                        var linkStr = '';
                                                        //console.log(newsArr.length)
                                                        if(newsArr.length == 0){
                                                            $('#para_'+id4).parent("li").hide();
                                                        }
                                                             
                                                        if(newsArr != null && newsArr.length>0){
                                                            var obj3 = null;
                                                            var nowDate = null;
                                                            var year = 0;
                                                            var month = 0;
                                                            var date = 0;
                                                            var urlPath = '';
                                                            var pId = '#para_'+id4;

                                                            for(var k = 0;k<newsArr.length;k++){
                                                                
                                                                obj3 = newsArr[k];
                                                                nowDate = new Date(obj3.publish_time*1000);
                                                                year = nowDate.getFullYear();
                                                                month = nowDate.getMonth()+1;
                                                                date = nowDate.getDate();
                                                                month = month<10?"0"+month:month;
                                                                date = date<10?"0"+date:date;
                                                                urlPath = './'+year+"/"+month+"/"+date+"/"+obj3.id+".html";
                                                                linkStr = "<a href='"+urlPath+"'>"+obj3.title+"</a>";
                                                                $(pId).append(linkStr);

                                                            }
                                                        }

                                                        //console.log('===================linkStr start=======================');
                                                        //console.log(linkStr);
                                                        //console.log('===================linkStr end=======================');
                                                        
                                                    }
                                                    //console.log($(".ziliaobox li a"))
                                                    /*$(".ziliaobox li a").each(function() {
                                                        var aright = $(this).offset().left;
                                                        console.log(aright);
                                                        if(aright- right == 0){
                                                            $(this).css({
                                                                "min-width": '3.072rem',
                                                                "text-align": 'left'
                                                            });
                                                        }
                                                    });*/
                                                };
                                               

                                                var errorFunc3 = function (res) {

                                                };


                                                reqNewsInfoListByIdAjax(id3,succFunc3,errorFunc3);//这里请求每一项下的新闻列表
                                            }
                                        }
                                    };


                                    var errorFunc2 = function (res) {

                                    };


                                    reqNewsByIdAjax(id2,succFunc2, errorFunc2);
                                    
                                         
                                    
                                }
                            }
                        }
                    }

                    var errorFunc1 = function (res) {
                        alert('服务器出错');
                    }


                    reqNewsByIdAjax(level1Id, succFunc1, errorFunc1);

                    function reqNewsInfoListByIdAjax(newsId,succFunc,errorFunc){
                        proxyJS.proxyObj.reqCommonNewsByATypeAjax({
                            aType:newsId,
                            limit:REQ_NEWS_MAX_NUM,
                            req:'multi_simple',
                            dataFormat: 'jsonp',
                            success:succFunc,
                            error:errorFunc
                        });
                    }

                    function reqNewsByIdAjax(newsId, succFunc, errorFunc) {
                        proxyJS.proxyObj.reqCommonNewsNavListAjax({
                            id: newsId,
                            success: succFunc,
                            error: errorFunc
                        });
                    };

                }

                
                $(function(){
                   // console.log($(".ziliaobox li .right a"));
                    var right = $(".right").offset().left;
                    console.log(right)
                    $(".ziliaobox li .right a").each(function() {
                        var aright = $(this).offset().left;

                        //console.log(aright);
                        if(aright- right == 0){
                            $(this).css({
                                "min-width": '3.072rem',
                                "text-align": 'left'
                            });
                        }
                    });
                     function toTop(weizhi) {
                        
                            var speed = 500; 
                            $('body,html').animate({
                                scrollTop: weizhi
                            }, speed);
                    }
                    $(".navbox span").bind('click',function(event) {
                        var index = $(this).index();
                        //console.log(index)
                        //console.log($('.ziliao>div').eq(index).offset().top)
                             
                        toTop($('.ziliao>div').eq(index).offset().top);
                    });
                    $("#sss").click(function(){
                        var key= $("#text-search").val();
                        $(".ziliao").textSearch(key);
                    })
                    //console.log($('#hot').offset().top);
            
                });
            }
        })
    }
}

exports.gameObj = gameObj;