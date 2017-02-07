var xinshouObj = {
    init: function () {
        require(['./zepto.min', './common'], function (zeptoJs,commonJs) {

            initUI.apply(this);

            function initUI() {
                commonJs.commonObj.init();
                    $('#android,#footorder').on('touchend', function(event) {
                        window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m'
                        return false;
                    });
                
                    $(".navtab ul li").on('tap', function(event) {
                        event.preventDefault();
                        /* Act on the event */
                        var val = $(this).find('b').html();
                       // console.log(val)
                        var index = $(this).index();
                        var html = '<span class="on"><i></i><em>'+val+'</em></span>'
                        $(this).append(html).siblings('li').find('.on').remove();
                        $('.roleinfo').eq(index).show().siblings('.roleinfo').hide();
                    }); 
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    $('#iosdl').click(function(event) {
                        /* Act on the event */
                        
                            window.location.href = 'http://wwwapi.15166.com/download?game=shqz&cid=m';
                        
                    });

                    $(".nanon").on('tap', function(event) {
                        event.preventDefault();
                        /* Act on the event */
                        $(this).hide().siblings('.nvon').css('display', 'block');
                        $(this).parents('.picbox').find('.picbox img.nv').show().siblings('.nan').hide();
                        
                    });
                    $(".nvon").on('tap', function(event) {
                        event.preventDefault();
                        /* Act on the event */
                        $(this).hide().siblings('.nanon').css('display', 'block');
                        $(this).parents('.picbox').find('.picbox img.nan').show().siblings('.nv').hide();
                    });

                    $('.skilltit li').on('tap',function(event) {
                        event.preventDefault();
                        $(this).addClass('on').siblings('li').removeClass('on');
                        var index = $(this).index();
                        $(this).parents('.jinengtab').find('.skillicon').eq(index).show().siblings('.skillicon').hide();
                    });

                    $('.levelNav li').on('tap',function(event) {
                        var index = $(this).index();
                        $(this).addClass('on').siblings('li').removeClass('on');
                        $('.outside .level').eq(index).show().siblings('.level').hide();
                    });
            }
        })
    }
}

exports.xinshouObj = xinshouObj;