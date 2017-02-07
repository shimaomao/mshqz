/* 
* @Author: Marte
* @Date:   2016-02-03 14:49:02
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-01 16:19:26
*/

function init(){
    require(['./jquery','./common'],function($,commonJs){
        
        commonJs.commonObj.init();
        $(".listbox ul li").click(function(event) {
            var id = $(this).attr('data-id');
            $(".box"+id).show();
        });
        $(".box .bg").click(function(event) {
            $(this).parent(".box").hide();
        });
        $(".box .dre .close").on('touchend',function(event) {
            $(this).parents(".box").hide();
            return false;
        });
        $(".box .bg").on('touchmove',function(event) {
            return false;
        });
        $('#android,#footorder').on('touchend', function(event) {
            window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=hdyd'
            return false;
        });
    });
}
exports.init = init;
