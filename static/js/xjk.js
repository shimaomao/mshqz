/**
 * Created by YX160516 on 2016/6/1.
 */
var xjkObj = {
    init:function(){
        require(['./jquery','./zepto.min','./common','./swiper', './sortConfig', './personConfig'],function($,zeptoJs,commonJs,swiperJs, sortConfigJs, personConfigJs){
            commonJs.commonObj.init();
            initUI.apply(this);
            function  initUI(){
                function doAction(){
                    $('#android,#footorder').on('touchend', function(event) {
                        window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                        return false;
                    });
                    //滚动的代码
                    //var SwperArr = [];
                    ////初始化所有的swiper
                    // (function swiperTouchInit() {
                    //    var containers = document.getElementsByClassName('swiper-container');
                    //    for (var i = 0, id = ''; i < containers.length; i++) {
                    //        id = containers[i].id;
                    //        if (!id)
                    //            id = "swiperT" + i;
                    //        containers[i].setAttribute("id", id);
                    //        SwperArr[i] = new Swiper("#" + id, {
                    //
                    //            pagination: "#" + id + " .swiper-pagination",
                    //            paginationClickable: true
                    //        });
                    //    }
                    //})();



                    //tab切换的代码

                    //tab事件
                    //$(".xjkTab .x_hd span").click(function () {
                    //
                    //    //自己加上cur，兄弟去掉cur。
                    //    $(this).addClass("cur").siblings().removeClass("cur");
                    //    //对应的ul加cur，兄弟去cur。
                    //    $(".xjkTab .x_bd .div_ul").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
                    //    var i = $(this).index();
                    //    SwperArr[i].update();
                    //    //SwperArr[i].updatePagination();
                    //    $("#swiperT" + i).find('.swiper-pagination-bullet-active').removeClass('swiper-pagination-bullet-active')
                    //    $("#swiperT" + i).find('.swiper-pagination-bullet').eq(SwperArr[i].activeIndex).addClass('swiper-pagination-bullet-active');
                    //
                    //});

                }
                doAction();



                //是否显示选项卡状态
                //var xkpstatus=false;
                $(function(){
                    var AllData = sortConfigJs.sortConfigObj.AllData;
                    //var persons  = personConfigJs.":Obj.persons;

                    //拼接字符串
                    function buildTabBox(){

                        var str = [];
                        str.push("<div class='xjkTab'>");
                        str.push("<div class='x_hd'>");
                        for(var i=0;i<AllData.length;i++){
                            var name = AllData[i].name;
                            var id=AllData[i].id;
                            var data=AllData[i].data;
                            var flag=AllData[i].flag;
                            str.push("<span class='' flag='"+flag+"' id='"+flag+"'>"+name+"</span>");
                        }

                        str.push("</div>");
                        str.push("<div class='cl'></div><div class='x_bd'>");
                        for(var i=0;i<AllData.length;i++){
                                //div_ul 循环开始
                                var flag =  AllData[i].flag;
                                str.push("<div class='div_ul "+flag+"' flag='"+flag+"'>");
                                str.push("<div class='banner'>");
                                str.push("<div class='swiper-slide banner-box'>");
                                 var spandata = AllData[i].data;
                                for(var j=0;j<spandata.length;j++){
                                    str.push("<div class='li_a'>");
                                    str.push("<a href='list.html?name="+spandata[j].name+"'>");
                                    str.push("<img class='lazyload' data-src='"+spandata[j].img+"' alt=''>");
                                    str.push("</a>");
                                    str.push("<span>");
                                    str.push(spandata[j].name);
                                    str.push("</span>");
                                    str.push("</div>");
                                }

                                str.push("</div>");
                                str.push("</div>");
                                str.push("</div>");
                        }

                        //for(var i=0;i<AllData.length;i++){
                        //    //div_ul 循环开始
                        //    var flag =  AllData[i].flag;
                        //    str.push("<div class='div_ul' flag='"+flag+"'>")
                        //    str.push("<div class='banner'>");
                        //    //str.push("<div class='swiper-container' id='swiperT"+i+"'>");
                        //    str.push("<div class='swiper-container' id='swiper-container"+i+"'>");
                        //    str.push("<div class='swiper-wrapper'>");
                        //
                        //
                        //    var spandata = AllData[i].data;
                        //    //1.判断是否要分页：每9条为一页[注意要向上取整]  Math.ceil
                        //    var pageSize=4;
                        //    var size=Math.ceil((spandata.length)/pageSize);
                        //    for(var fy=0;fy<size;fy++){
                        //        str.push("<div class='swiper-slide banner-box'>");
                        //        //不足一页
                        //        if(size==1 || size==0){
                        //            for(var ny=0;ny<spandata.length;ny++){
                        //                str.push("<div class='li_a'>");
                        //                str.push("<a href='list.html?name="+spandata[ny].name+"'>");
                        //                str.push("<img class='lazyload' data-src='"+spandata[ny].img+"' alt=''>");
                        //                str.push("</a>");
                        //                str.push("<span>");
                        //                str.push(spandata[ny].name);
                        //                str.push("</span>");
                        //                str.push("</div>");
                        //            }
                        //        }else{
                        //            //大于一页 比如3页 这里代表着1,2页【0-8 9-17】
                        //            if(fy<(size-1)){
                        //                for(var ny=fy*pageSize;ny<(fy*pageSize+pageSize);ny++){
                        //                    str.push("<div class='li_a'>");
                        //                    str.push("<a href='list.html?name="+spandata[ny].name+"'>");
                        //                    str.push("<img class='lazyload' data-src='"+spandata[ny].img+"' alt=''>");
                        //                    str.push("</a>");
                        //                    str.push("<span>");
                        //                    str.push(spandata[ny].name);
                        //                    str.push("</span>");
                        //                    str.push("</div>");
                        //                }
                        //                //大于一页 比如3页 这里代表着第3页
                        //            }else{
                        //                for(var ny=fy*pageSize;ny<spandata.length;ny++){
                        //                    str.push("<div class='li_a'>");
                        //                    str.push("<a href='list.html?name="+spandata[ny].name+"'>");
                        //                    str.push("<img class='lazyload' data-src='"+spandata[ny].img+"' alt=''>");
                        //                    str.push("</a>");
                        //                    str.push("<span>");
                        //                    str.push(spandata[ny].name);
                        //                    str.push("</span>");
                        //                    str.push("</div>");
                        //                }
                        //            }
                        //        }
                        //        str.push("</div>");
                        //    }
                        //    //for(var k=0;k<spandata.length;k++){
                        //    //    swiper-slide banner-box  li_a循环开始
                        //    //    str.push("<div class='swiper-slide banner-box'>");
                        //    //    str.push("<div class='li_a'>");
                        //    //    str.push("<a href='#'>");
                        //    //    str.push("<img class='lazyload' data-src='"+spandata[k].img+"' alt=''>");
                        //    //    str.push("</a>");
                        //    //    str.push("<span>");
                        //    //    str.push(spandata[k].name);
                        //    //    str.push("</span>");
                        //    //    str.push("</div>");
                        //    //
                        //    //    str.push("</div>");
                        //    //   swiper-slide banner-box li_a 循环结束
                        //    //}
                        //
                        //    str.push("</div>");
                        //    <!-- Add Pagination -->
                        //    str.push("<div class='swiper-pagination' id='swiper-pagination"+i+"' ></div>");
                        //    str.push("</div>");
                        //    str.push("</div>");
                        //    <!-- banner e -->
                        //    str.push("</div>");
                        //    // div_ul 循环结束
                        //}

                        str.push("</div>");
                        str.push("</div>");
                        str.push("</div>");
                        //由数组变成字符串
                        return str.join("");
                    }
                   // var strr = "";
                   //strr += buildTabBox();
                    $(".xWrap").html(buildTabBox());
                        //.find("#tanke").click()


                    //for(var i= 0,id = '';i<AllData.length;i++){
                    //    //debugger;
                    //    var targetContain=$($(".swiper-container")[i]);
                    //     id=targetContain.id;
                    //    if(!id){
                    //        id="swiperT" + i;
                    //        targetContain.attr("id",id);
                    //        SwperArr[i] = new Swiper("#" + id, {
                    //            pagination: "#" + id + " .swiper-pagination",
                    //            paginationClickable: true
                    //        });
                    //    }
                    //    //SwperArr[i].update();
                    //}

                    //
                    //for (var i=0;i<AllData.length;i++){
                    //    SwperArr[i] = new Swiper("#" + id, {
                    //        paginationClickable: true
                    //    });
                    //}
                    //for (var i=0;i<AllData.length;i++){
                    //    SwperArr[i]  = new Swiper("#swiper-container"+i+"", {
                    //    pagination: "#swiper-pagination"+i+"",
                    //    paginationClickable: true
                    //
                    //});

                //};
//轮播功能
                    // 添加轮播的样式
                    //var SwperArr = [];
                    for(var i=0;i<AllData.length;i++){
                        //SwperArr[i]  = new Swiper("#swiper-container"+i+"", {
                        //    pagination: "#swiper-pagination"+i+"",
                        //    paginationClickable: true
                        //
                        //});

                        //SwperArr[i].update();
                        var flag = AllData[i].flag;
                        $("#"+flag).bind("click",function(){
                            var spanflag = $(this).attr("flag");
                            for(var g=0;g<$(".div_ul").length;g++){
                                var div_ul =  $(".div_ul")[g];
                                var ulflag = $(div_ul).attr("flag");
                                if(spanflag==ulflag){
                                    $(".div_ul").eq($(this).index()).addClass('cur');
                                }else{
                                    $(".div_ul").eq($(this).index()).siblings(".div_ul").removeClass('cur');
                                }
                                //var idx = $(div_ul).index();
                                //SwperArr[idx].update();
                                //$("#swiper-container" + g+"").find('.swiper-pagination-bullet-active').removeClass('swiper-pagination-bullet-active')
                                //$("#swiper-container" + g+"").find('.swiper-pagination-bullet').eq(SwperArr[idx].activeIndex).addClass('swiper-pagination-bullet-active');
                                //console.log(g);

                            }

                            //var spandata = [];
                            //for(var h = 0;h<AllData.length;h++){
                            //    var flag=AllData[h].flag;
                            //    var data=AllData[h].data;
                            //    if(spanflag==flag){
                            //        spandata = data;
                            //        break;
                            //    }
                            //}
                            //左边选项卡的颜色的区分
                            var  arrSpan = $(".x_hd").children("span");
                            for(var i = 0;i<arrSpan.length;i++){
                                var spanContent = arrSpan[i];
                                var newarrSpan = $(spanContent).attr('flag');
                                if(flag==newarrSpan){
                                    $(this).attr("class",'cur');
                                }else{
                                    $(this).siblings("span").removeClass('cur');
                                }
                          }


                        })

                    }
                    $("#tanke").click();

                    //搜索功能
                    //$("#searchBtn").click(function(){
                    //    var key= $("#searchText").val();
                    //    $(".xWrap").textSearch(key);
                    //    doAction();
                    //})

                    $("#searchBtn").on("click",function(){
                        var onOff = true;
                        var searchText  = $("#searchText").val();
                        var ArraySpan = $(".x_hd").children("span");
                        var ArrayDiv_ul  = $(".x_bd").find(".div_ul");

                        //点击搜索前先清空
                        //清空选项卡的

                        for(var i=0;i<ArraySpan.length;i++){
                            var findWords = $($(ArraySpan)[i]).find("i.color_i");
                            if(findWords.length>0){
                                for(k=0;k<findWords.length;k++){
                                    var content = $(findWords[k]).html();
                                    $(findWords[k]).replaceWith(content);
                                }
                            }
                        };
                        //清空小卡片的
                        for(var i=0;i<ArrayDiv_ul.length;i++){
                            var Arrspan = $(ArrayDiv_ul[i]).find(".li_a  span");
                            for(var p = 0;p<Arrspan.length;p++){
                                var keyWords = $(Arrspan[p]).find("i.color_i");
                                if(keyWords.length>0){
                                    for(g=0;g<keyWords.length;g++){
                                        var content = $(keyWords[g]).html();
                                        console.log(content);
                                        $(keyWords[g]).replaceWith(content);
                                    }

                                }
                            }
                        };

                        if(!searchText){
                            alert("关键字不能为空");
                            return false;
                        }
                        //遍历找到选项卡的关键字
                        for(var i = 0;i<ArraySpan.length;i++){
                            var content = $(ArraySpan[i]).html();
                            if(content.indexOf(searchText)>-1){
                                var Str = "<i class='color_i'> "+searchText+"</i>";
                                var  gxt =content.replace(searchText,Str);
                                $(ArraySpan[i]).html(gxt);
                                onOff = false;
                            }
                        };
                        //遍历找到小卡片的关键字
                        for(var k=0;k<ArrayDiv_ul.length;k++){
                            var ArrSpn=  $(ArrayDiv_ul).find(".li_a span");
                            for(var j=0;j<ArrSpn.length;j++){
                               var content = $(ArrSpn[j]).html();
                                if(content.indexOf(searchText)>-1){
                                    var str = "<i class='color_i'>"+searchText+"</i>";
                                    var gtx = content.replace(searchText,str);
                                   $(ArrSpn[j]).html(gtx);
                                    onOff = false;
                                    return false;
                                }
                            }
                        };
                        if(onOff){
                            alert("没有搜索到关键字");
                            return false;
                        }
                    })

                })

            }
        })
    }
}

exports.xjkObj = xjkObj;