/**
 * Created by YX160516 on 2016/6/1.
 */
var xjklistObj = {
    init:function(){
        require(['./jquery','./zepto.min','./common','./swiper','./highlight', './sortConfig', './personConfig'],function($,zeptoJs,commonJs,swiperJs,highlightJs, sortConfigJs, personConfigJs){
            commonJs.commonObj.init();
            initUI.apply(this);
            function  initUI(){


                $(function(){
                    //var AllData = sortConfigJs.sortConfigObj.AllData;
                    var persons  = personConfigJs.personsConfigObj.persons;

                    //获取对应的详情
                    function getOneDetailByName(name){

                        //个人的详情内容
                        var data="";
                        for(var i=0;i<persons.length;i++){
                            var obj=persons[i];
                            if (obj.name==name) {
                                data=obj;
                                break;
                            };
                        }
                        return data;
                    }


                    //获取这里的链接

                    function doMyContent(urlcontent){
                        var obj={};
                        var target=urlcontent.split("?");
                        //我们传过来的参数
                        var param=target[1];
                        //解决超链接的中午的乱码的问题
                        var realcontent=decodeURI(param);
                        //分解出你每个参数的key 与 value值
                        var arr=realcontent.split("&");
                        for(var i=0;i<arr.length;i++){
                            var content=arr[i].split("=");
                            obj[content[0]]=content[1];
                        }

                        // debugger;
                        return obj;
                    }
                    var urlcontent=window.location.href;
                    //console.log(obj);
                    var localHttpAddress = doMyContent(urlcontent);

                    if(localHttpAddress.name){
                        var onePerson =  getOneDetailByName(localHttpAddress.name);
                        buildDetail(onePerson);
                    }

                    //var onePerson =  getOneDetailByName("阮小二");
                    //buildDetail(onePerson);
                    //console.log(urlcontent);
                    function buildDetail(obj){

                        var str=[];
                        str.push("<div class='ren_info'>");
                        str.push("<div class='diban'>");
                        str.push("<div class='db_tit'>");
                        str.push(obj.name);
                        str.push("</div>");
                        str.push("<div class='db_h'>");
                        str.push("<div class='db_head_l'>");
                        str.push("<div class='img_box img_box"+obj.id+"'>");
                        str.push("<img class='lazyload' data-src= '"+obj.imgUrl+"'  >");
                        str.push("</div>");
                        str.push("</div>");
                        str.push("<div class='db_head_r'>");
                        str.push("<div class='h_top'>");
                        str.push("<p>星级：<span>");
                        for( var i=0;i<obj.level;i++){
                            str.push("<i></i>");
                        }
                        str.push("</span>");
                        str.push("</p>");
                        str.push("<p>解锁等级：<span>");
                        str.push(obj.lockLevel);
                        str.push("<p>");
                        str.push("</span></p>");
                        str.push("<p>获取方式：<span>");
                        str.push(obj.getType);
                        str.push("</span></p></div>");
                        str.push("<div class='h_bottom'>");
                        str.push(obj.jieshao);
                        str.push(" </div>");
                        str.push("</div></div><div class='db_b'>");
                        str.push("<div class='db_body_l'>");
                        str.push("<dt>基础属性</dt>");
                        var bAttr = obj.baseAttr;
                        for(var i=0; i< bAttr.length; i++){
                            var onestr=bAttr[i];
                            str.push("<dd>");
                            str.push(onestr.split(":")[0]);
                            str.push("<b> : </b>");
                            str.push("<em>");
                            str.push(onestr.split(":")[1]);
                            str.push("</em>");
                            str.push("</dd>");
                        }

                        str.push(" </div>");
                        str.push("<div class='db_body_r'>");
                        str.push("<dt>特殊属性</dt>");

                        var speAttr =obj.specialAttr;
                        for(var i=0;i<speAttr.length;i++){
                            var tStr = speAttr[i];
                            str.push("<dd>");
                            str.push(tStr.split(":")[0]);
                            str.push("<b> : </b>");
                            str.push("<em>");
                            str.push(tStr.split(":")[1]);
                            str.push("</em>");
                            str.push("</dd>");
                        }

                        str.push(" </div> </div></div></div>");
                        <!--人物信息结束-->
                        str.push("<div class='skip_wrap'>");
                        str.push("<div class='skip_info'>");
                        str.push("<h3>星将技能</h3>");
                        str.push("<div class='newsList'>");
                        str.push("<ul>");
                        var abAtrr = obj.abilityInfo;
                        for(var i=0;i<abAtrr.length;i++){
                            var ob = abAtrr[i];
                            str.push("<li>");
                            str.push("<div class='L_imgBox'>");
                            str.push("<img class='lazyload' data-src='"+ob.img+"' alt=''>");
                            str.push("</div><div class='R_txt'>");
                            str.push("<strong>"+ob.jineng+"</strong> ");
                            str.push("<p>");
                            str.push(ob.text);
                            str.push(" </p>");
                            str.push("</div>");
                            str.push(" </li>");
                        }

                        str.push(" </ul>");
                        str.push(" </div>");
                        str.push(" </div>");
                        //t特殊技能 代码注释隐藏开始
                        //str.push("<div class='tesu'>");
                        //str.push("<h3>特殊技能</h3>");
                        //str.push("<div class='newsList'>");
                        //str.push("<ul>");
                        //var speAbility = obj.specialAbility;
                        //
                        //for(var i=0;i<speAbility.length;i++){
                        //    var speAttr = speAbility[i];
                        //    str.push("<li>");
                        //    str.push("<div class='L_imgBox'>");
                        //    str.push("<img class='lazyload' data-src='"+speAttr.specialImg+"' alt=''>");
                        //    str.push("</div>");
                        //    str.push("<div class='R_txt'>");
                        //    str.push("<strong>"+speAttr.speId+"</strong>");
                        //    str.push("<p>");
                        //    str.push(speAttr.specialInfo);
                        //    str.push("</p>");
                        //    str.push("</div>");
                        //    str.push("</li>");
                        //}
                        //
                        //str.push("</ul>");
                        //str.push("</div>");
                        //str.push("</div>");
                        //t特殊技能 代码注释隐藏结束
                        str.push("</div>");
                        var newstr =  str.join("");
                        //console.log(newstr);
                        $("#bigBox").html(newstr);
                    }

                })

            }
        })
    }
}

exports.xjklistObj = xjklistObj;