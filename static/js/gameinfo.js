/* 
 * @Author: Marte
 * @Date:   2016-01-25 15:10:03
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-05-11 18:10:30
 */
function init() {
    require(['./jquery', './common', './game.js'], function($, commonJs,gameJs) {
        initUI.call(this);
        function initUI() {
            commonJs.commonObj.init();
            gameJs.gameObj.init();
           
        }
    })
}
exports.init = init;