var iosObj = {
    init: function () {
        require(['./jquery'], function ($) {
            initUI();
            function initUI() {
                var goldImgUrl = __uri('./static/images/index/yuanbao.png');
                var coinImgUrl = __uri('./static/images/index/p-1.png');
                var danImgUrl = __uri('./static/images/index/p-4.png');
                var starImgUrl = __uri('./static/images/index/p-2.png');
                var cardImgUrl = __uri('./static/images/index/p-3.png');


   
                var _prevHour = -1;
                
                var leftHours = 0;
                var _startDate = new Date(2016, 6, 27, 11, 0, 0);//在Date函数中，月份从0-11，所以月份为6
                countTimeFunc();

                var _timeId = setInterval(countTimeFunc, 1000);

                //每秒用来刷新界面的函数
                function countTimeFunc() {
                    var firstDayH = 13;
                    var _nowDate = new Date();

                    if (_nowDate.getTime() >= _startDate.getTime()) {

                        //计算现在时间与开始时间的距离
                        var disAllSeconds = parseInt((_nowDate.getTime() - _startDate.getTime()) / 1000);
                        var disHour = Math.floor(disAllSeconds / 3600);
                        var disMinute = Math.floor(Math.floor(disAllSeconds % 3600) / 60);
                        var disSecond = Math.floor(disAllSeconds % 60);
                        disHour = disHour < 10 ? "0" + disHour : disHour;
                        disMinute = disMinute < 10 ? "0" + disMinute : disMinute;
                        disSecond = disSecond < 10 ? "0" + disSecond : disSecond;
                        $('#ios-time').html(disHour + ":" + disMinute + ":" + disSecond);

                        var nowHours = _nowDate.getHours();

                        if (nowHours != _prevHour) {
                            _prevHour = nowHours;
                            var enterHtmlStr = '';
                            var equipHtmlStr = '';
                           // console.log(disHour >=13 )
                                 
                            if (disHour >= 13 && disSecond > 0) {
                                if (disHour >= (13 + 24) && disSecond > 0) {
                                    //证明已经属于7月30号，则按7月30号的奖励规则来计算
                                //<img src="static/images/index/yuanbao.png" alt="" /><em>x30</em>
                                leftHours = parseInt(disHour - (13+24));
                                enterHtmlStr = "iOS玩家进入游戏可获得 <img src='" + goldImgUrl + "'/><span>" + "x" +  parseInt(49 + leftHours * 2)+"</span>";
                                equipHtmlStr = "<div class='a-2'>等值奖励:"
                                    + "<img src='" + coinImgUrl + "'/><span>" + "x" + parseInt(147 + leftHours * 3 * 2) + "w</span>"
                                    + "<img src='" + starImgUrl + "'/><span>" + "x" + parseInt(49 + leftHours * 2)+"</span>"
                                    + "</div>"
                                    + "<div class='a-3' >"
                                    + "<img src='" + danImgUrl + "'/><span>" + "x" + parseInt(49 + leftHours * 2)+"</span>"
                                    + "<img src='" + cardImgUrl + "'/><span>" + "x" + Number(9.8 + Number((leftHours * 0.2 * 2).toFixed(1))).toFixed(1)+"</span>"
                                    + "</div>";
                            } else {

                                     
                                leftHours = parseInt(disHour - 13);
                                //console.log('2->'+leftHours)
                                     
                                enterHtmlStr = "iOS玩家进入游戏可获得 <img src='" + goldImgUrl + "'/>" + "x" + (13 + leftHours * 1.5).toFixed(1);
                                equipHtmlStr = "<div class='a-2'>等值奖励:"
                                    + "<img src='" + coinImgUrl + "'/><span>" + "x" + (39 + Number((leftHours * 3 * 1.5).toFixed(1))).toFixed(1) + "w</span>"
                                    + "<img src='" + starImgUrl + "'/><span>" + "x" +(13 + Number((leftHours * 1.5).toFixed(1))).toFixed(1)+"</span>"
                                    + "</div>"
                                    + "<div class='a-3' >"
                                    + "<img src='" + danImgUrl + "'/><span>" + "x" + (13 + Number((leftHours * 1.5).toFixed(1))).toFixed(1)+"</span>"
                                    + "<img src='" + cardImgUrl + "'/><span>" + "x" + (2.6 + Number((leftHours * 0.2 * 1.5).toFixed(1))).toFixed(1) +"</span>"
                                    + "</div>";
                            }
                        } else {
                            leftHours = parseInt(disHour - 0);

                            //证明属于7月28号，则按7月28号的奖励规则计算
                            enterHtmlStr = "iOS玩家进入游戏可获得 <img src='" + goldImgUrl + "'/>" + "x" + parseInt(leftHours * 1);
                            equipHtmlStr = "<div class='a-2'>等值奖励:"
                                + "<img src='" + coinImgUrl + "'/><span>" + "x" + parseInt(leftHours * 3 * 1) + "w</span>"
                                + "<img src='" + starImgUrl + "'/><span>" + "x" + parseInt(leftHours * 1)+"</span>"
                                + "</div>"
                                + "<div class='a-3' >"
                                + "<img src='" + danImgUrl + "'/><span>" + "x" + parseInt(leftHours * 1)+"</span>"
                                +"<img src='" + cardImgUrl + "'/><span>" + "x" +Number(((leftHours * 0.2 * 1).toFixed(1))).toFixed(1)+"</span>"
                                + "</div>";
                        }

                            $('#ios-enter').html(enterHtmlStr);
                            $('#ios-equip').html(equipHtmlStr);
                        }


                        var firstDayH = 13;


                    } else {
                        $('#ios-time').html('00:00:00');
                        return;
                    }
                }

            }
        });
    }
}

exports.iosObj = iosObj;

