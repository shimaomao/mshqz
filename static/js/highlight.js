/*

highlight v3  !! Modified by Jon Raasch (http://jonraasch.com) to fix IE6 bug !!

Highlights arbitrary terms.

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

*/
var jQuery = require('./jquery');
(function($) {
    $.fn.textSearch = function(str, options) {
        var defaults = {
            divFlag: true,
            divStr: " ",
            markClass: "",
            markColor: "#ee8529",
            nullReport: true,
            callback: function() {
                return false;
            }
        };
        var sets = $.extend({}, defaults, options || {}),
            clStr;
        if (sets.markClass) {
            clStr = "class='" + sets.markClass + "'";
        } else {
            clStr = "style='color:#fff;background:" + sets.markColor + ";'";
        }
        //对前一次高亮处理的文字还原
        $("i[rel='mark']").removeAttr("class").removeAttr("style").removeAttr("rel");
        //字符串正则表达式关键字转化
        $.regTrim = function(s) {
            var imp = /[\^\.\\\|\(\)\*\+\-\$\[\]\?]/g;
            var imp_c = {};
            imp_c["^"] = "\\^";
            imp_c["."] = "\\.";
            imp_c["\\"] = "\\\\";
            imp_c["|"] = "\\|";
            imp_c["("] = "\\(";
            imp_c[")"] = "\\)";
            imp_c["*"] = "\\*";
            imp_c["+"] = "\\+";
            imp_c["-"] = "\\-";
            imp_c["$"] = "\$";
            imp_c["["] = "\\[";
            imp_c["]"] = "\\]";
            imp_c["?"] = "\\?";
            s = s.replace(imp, function(o) {
                return imp_c[o];
            });
            return s;
        };
        $(this).each(function() {
            var t = $(this);
            str = $.trim(str);
            if (str === "") {
                alert("关键字为空");
                return false;
            } else {
                //将关键字push到数组之中
                var arr = [];
                if (sets.divFlag) {
                    arr = str.split(sets.divStr);
                } else {
                    arr.push(str);
                }
            }
            var v_html = t.html();
            //删除注释
            v_html = v_html.replace(/<!--(?:.*)\-->/g, "");
            //将HTML代码支离为HTML片段和文字片段，其中文字片段用于正则替换处理，而HTML片段置之不理
            var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
            var a = v_html.match(tags),
                test = 0;
            $.each(a, function(i, c) {
                if (!/<(?:.|\s)*?>/.test(c)) { //非标签
                    //开始执行替换
                    $.each(arr, function(index, con) {
                        if (con === "") {
                            return;
                        }
                        var reg = new RegExp($.regTrim(con), "g");
                        if (reg.test(c)) {
                            //正则替换
                            c = c.replace(reg, "♂" + con + "♀");
                            test = 1;
                        }
                    });
                    c = c.replace(/♂/g, "<i rel='mark' " + clStr + ">").replace(/♀/g, "</i>");
                    a[i] = c;

                }
            });
            //将支离数组重新组成字符串
            var new_html = a.join("");
            $(this).html(new_html);
            if (test === 0 && sets.nullReport) {
                alert("没有搜索结果");
                return false;
            }
            //执行回调函数
            sets.callback();
        });
    };
})(jQuery);