/* 
* @Author: Marte
* @Date:   2016-02-01 11:56:24
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-28 11:03:49
*/
function init(){
    require(['./jquery'],function($){
        initUI.call(this);
        function initUI(){
           $('#android,#footorder').on('touchend', function(event) {
                window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                return false;
            });
                 
        }
              
    })    
        
}
exports.init = init;