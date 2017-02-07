<?php
    try{
        $article = file_get_contents("https://wwwapi.15166.com/www/article?id={$_GET['id']}&req=one&dataFormat=json");
        $article = json_decode($article,true);
    }catch(\Exception $e){
        $article = array(
            'title'=>'null',
            'publish_time'=>0,
            'content'=>''
        );
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title><?=$article['title']?>-《水浒Q传》手游官方网站-回合必玩典藏手游</title>
    <link rel="stylesheet" href="../static/scss/news.scss"/>
    <meta name="description" content="《水浒Q传》手游官方网站，火石原班人马倾情打造的回合必玩典藏手游，经典职业回归，全民合宠进化，个性炫彩造型，创新MOBA帮战！最新游戏资讯、最热福利活动，尽在新闻资讯中心。
    游戏攻略：《水浒Q传》手游官方网站，火石原班人马倾情打造的回合必玩典藏手游，经典职业回归，全民合宠进化，个性炫彩造型，创新MOBA帮战！新手攻略、装备攻略、宠物攻略、PK攻略、玩法攻略，助你荣耀而战！
    "/>
    <link rel="import" href="./static/html/header_noDes.html?__inline"/>
</head>
<body> 
    <link rel="import" href="./static/html/zhuan.html?__inline"/>
    <link rel="import" href="./static/html/out.html?__inline"/>
    <link rel="import" href="./static/html/top.html?__inline"/>
    <div class="titb">
        <a href="javascript:history.go(-1);"> < 返回</a>
        新闻中心
    </div>
    <div class="common-wapper">
        <div class="newsAll">
            <div class="newsTit">
                <h1><?=$article['title']?></h1>
                <p><span>发布时间：<em><?=date("Y-m-d",$article['publish_time'])?></em></span></p>
            </div>
            <div class="newsContent">
                <?=$article['content']?>
            </div>
        </div>
        <div class="main">
            <link rel="import" href="./static/html/footer.html?__inline"/>
        </div>
    </div>
    
<script src="./static/plugins/mod.js"></script>
<script type="text/javascript">
    require(['./static/js/common','./static/js/newsContent'],function(commonJs,newsContentJs){
        commonJs.commonObj.init();
        newsContentJs.init();
    });
</script>

</body>
</html>