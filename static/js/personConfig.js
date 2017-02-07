/**
 * Created by YX160516 on 2016/6/13.
 */

var personsConfig = {
    persons:[
        {
              id唯一的标示
            id:1,
              图片链接
            imgUrl: __uri('../images/xjk/sort_tk_1.png'),
              星将名
            name:'李逵',
              介绍
            jieshao:'绰号“黑旋风”，惯使一双板斧，在梁山泊一百单八将中排第二十二位。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值: 923",
                    "攻击力: 60",
                    "防御力: 62",
                    "灵巧度: 18",
                    "命中率: 60",
                    "精神力: 117",
                    "坚韧度: 248",
                    "闪避率: 27",
                    "技能值: 216"
                ],
              特殊属性
            specialAttr:
                [
                    '重击概率:10%',
                    "重击伤害:10%",
                    "物伤加成:5%",
                    "魔伤减免:11.6%"

                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role1_xj_1.png'),
                        "jineng":"疯魔旋风",
                        "text":"攻击目标及其周围1格内的所有敌人，造成物理伤害，并且有几率嘲讽敌人2回合，冷却4回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role1_xj_2.png'),
                        "jineng":"连牙斧",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role1_xj_3.png'),
                        "jineng":"疯魔大法",
                        "text":"开启疯魔状态3回合，并在40、75、100级分别增加多1回合，每次受到伤害时，会将伤害的一部分转化为提升自身的攻击力，冷却3回合，并在75、100级分别增加1个冷却回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role1_xj_4.png'),
                        "jineng":"怒吼",
                        "text":"受到攻击时有7%几率对攻击者施加晕眩，持续2回合"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role1_xj_5.png'),
                        "jineng":"强力恢复",
                        "text":"战斗有几率触发自动回血，每回合自动回复20%生命值，持续5回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }  ,
                  {
                  'speId':"2",
                  'specialImg':"000.png",
                  'specialInfo':'xxxx'
                  }

            ]
        },
        {
              id唯一的标示
            id:2,
              图片链接
            imgUrl: __uri('../images/xjk/sort_tk_2.png'),
              星将名
            name:'鲁智深',
              介绍
            jieshao:'本名鲁达，绰号“花和尚”，在梁山泊一百单八将中排第十三位，梁山上司职步军总大将。',
              星级
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"永久免费",
              基础属性
            baseAttr:
                [
                    "生命值:  630",
                    "攻击力:  90",
                    "防御力:  125",
                    "灵巧度:  14",
                    "命中率:  90",
                    "精神力:  193",
                    "坚韧度:  345",
                    "闪避率:  21",
                    "技能值:  306"

                ],
              特殊属性
            specialAttr:
                [
                    "物伤减免:5%",
                    "重击抵抗:20%",
                    "重击概率:10%",
                    "魔伤减免:11.6%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role2_xj_1.png'),
                        "jineng":"长驱直入",
                        "text":"对直线敌人造成一次物理伤害，有几率眩晕目标，持续2回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role2_xj_2.png'),
                        "jineng":"横扫千军",
                        "text":"攻击前排最多3个敌人，造成物理伤害"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role2_xj_3.png'),
                        "jineng":"怒焰罗汉",
                        "text":"攻击单体两次，造成物理伤害，本技能的出手速度会大幅度提升"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role2_xj_4.png'),
                        "jineng":"不败金刚",
                        "text":"被动提高防御力"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role2_xj_5.png'),
                        "jineng":"反击",
                        "text":"受到近身攻击时有几率反击"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role2_xj_6.png'),
                        "jineng":"高级佛性",
                        "text":"战斗力免疫晕眩和嘲讽，封印抗性提高8%，持续4回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:3,
              图片链接
            imgUrl: __uri('../images/xjk/sort_tk_3.png'),
              星将名
            name:'阮小二',
              介绍
            jieshao:'绰号“立地太岁”，在梁山排行第二十七位，梁山四寨水军头领第四位。阮小二在阮氏三兄弟中排行第一。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:644",
                    "攻击力:116",
                    "防御力:105",
                    "灵巧度:18",
                    "命中率:166",
                    "精神力:171",
                    "坚韧度:304",
                    "闪避率:27",
                    "技能值:270"
                ],
              特殊属性
            specialAttr:
                [
                    "重击减免:10%",
                    "封印抗性:5%",
                    "重击抵抗:10%",
                    "重击概率:10%",
                    "魔伤减免:11.6%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role3_xj_1.png'),
                        "jineng":"太岁临头",
                        "text":"召唤太岁攻击防御最高的敌人，造成物理伤害，本次攻击无视对方防御，冷却2回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role3_xj_2.png'),
                        "jineng":"兄弟同心",
                        "text":"指定1名队友，并在40、75、100级分别增加多1名，在本回合内为其承受所有单体物理伤害，为其承受的伤害会受到一定程度削减"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role3_xj_3.png'),
                        "jineng":"冲撞",
                        "text":"进行物理攻击时有10%几率施加晕眩，持续2回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role3_xj_4.png'),
                        "jineng":"高级兽躯",
                        "text":"提高（等级x7）点生命最大值"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role3_xj_5.png'),
                        "jineng":"粉碎打击",
                        "text":"提高自身命中率，对单人造成大量物理伤害，命中率提高持续2回合，并在40、75、100级分别增加多1 个持续回合，最大叠加2次，并在 40、75、100级分别增多一个叠加次数"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:4,
              图片链接
            imgUrl: __uri('../images/xjk/sort_tk_4.png'),
              星将名
            name:'周通',
              星级
              介绍
            jieshao:"因外表酷似项羽，人称“小霸王”，使一杆走水绿沉枪，在梁山泊一百单八将中排第八十七位。",
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"消耗10个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:419",
                    "攻击力:90",
                    "防御力:140",
                    "灵巧度:12",
                    "命中率:90",
                    "精神力:159",
                    "坚韧度:292",
                    "闪避率:18",
                    "技能值:251"
                ],
              特殊属性
            specialAttr:
                [
                    "物伤减免:10%",
                    "重击概率:10%",
                    "魔伤减免:11.6%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role4_xj_1.png'),
                        "jineng":"霸王别姬",
                        "text":"为自身加持霸王状态，在3回合内免疫封印并提高攻击力和重击概率，对面场上存货敌人达到10、15个时，加成效果将提高到200%、300%，冷却10回合，本技能的出手速度会获得一定幅度提高"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role4_xj_2.png'),
                        "jineng":"势如破竹",
                        "text":"攻击一条直线上所有敌人，本次伤害无视一定比例防御力"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role4_xj_3.png'),
                        "jineng":"嘲讽诀",
                        "text":"嘲讽一个敌人，并在40、75、100级分别增加多一个目标，嘲讽成功则对方会以自己为目标进行普通攻击，持续2回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role4_xj_4.png'),
                        "jineng":"反击",
                        "text":"受到近身攻击时有几率反击"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role4_xj_5.png'),
                        "jineng":"幽体化",
                        "text":"被动提高物伤减免10%，并且每回合有7%几率进入无懈状态，本回合内格挡所有物理伤害"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:5,
              图片链接
            imgUrl: __uri('../images/xjk/sort_tk_5.png'),
              星将名
            name:'林冲',
              星级
              介绍
            jieshao:"素罗袍上青纱角，霜花骏马小张飞。梁山天雄星林冲，曾任朝廷八十万禁军教头，枪法如神，江湖人称“豹子头”。",
            level:5,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"首充礼包赠送",
              基础属性
            baseAttr:
                [
                    "生命值:588",
                    "攻击力:126",
                    "防御力:90",
                    "灵巧度:25",
                    "命中率:126",
                    "精神力:171",
                    "坚韧度:304",
                    "闪避率:36",
                    "技能值:270"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:40%",
                    "重击伤害:10%",
                    "魔伤减免:20%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role5_xj_1.png'),
                        "jineng":"虎豹骑",
                        "text":"攻击一条直线上的所有敌人，造成大量物理伤害，同时自身获得虎豹骑魂加持，在2回合内免疫物理伤害和法术伤害，冷却8回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role5_xj_2.png'),
                        "jineng":"势如破竹",
                        "text":"攻击一条直线上的所有敌人，造成物理伤害，本次伤害无视目标一定比例的防御力"
                    }
                    ,
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role5_xj_3.png'),
                        "jineng":"霸体",
                        "text":"开启霸体状态4回合，提高一定防御力和速度并且免疫封印，冷却10回合，本技能的出手速度会获得一定幅度提高"
                    }
                    ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role5_xj_4.png'),
                        "jineng":"侵掠如火",
                        "text":"被动增加自身重击伤害，主动使用后开启烈火光环，提高全体友军重击伤害，光环效果会持续到自身死亡或战斗结束，不可叠加"
                    }
                    ,
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role5_xj_5.png'),
                        "jineng":"求生",
                        "text":"生命值低于35%时，3回合内每回合回复6%生命值，冷却10回合"
                    }
                    ,
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role5_xj_6.png'),
                        "jineng":"高级强力必杀",
                        "text":"物理攻击的重击概率提高30%"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:6,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_4.png'),
              星将名
            name:'顾大嫂',
              介绍
            jieshao:'绰号“母大虫”，是梁山三位女将之一，在梁山泊一百单八将中排第一百零一位。',
              星级
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"10个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:584",
                    "攻击力:116",
                    "防御力:120",
                    "灵巧度:20",
                    "命中率:116",
                    "精神力:156",
                    "坚韧度:279",
                    "闪避率:30",
                    "技能值:247"

                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击抵抗:5%",
                    "封印概率:5%",
                    "魔伤减免:11.6%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role21_xj_1.png'),
                        "jineng":"河东狮吼",
                        "text":"施放狮吼攻击前排所有敌人，造成1次物理伤害和1次法术伤害，有较低几率附带晕眩效果，持续2回合，冷却5回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role21_xj_2.png'),
                        "jineng":"穹苍破",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role21_xj_3.png'),
                        "jineng":"姐妹同心",
                        "text":"指定1名队友，并在40、75、100级分别增加多1名，在本回合内为其承受所有单体物理伤害，为其承受的伤害会受到一定程度削减"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role21_xj_4.png'),
                        "jineng":"兽躯",
                        "text":"提高（等级x4）点生命最大值"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role21_xj_5.png'),
                        "jineng":"怒吼",
                        "text":"受到攻击时有7%几率对攻击者施加晕眩，持续2回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:7,
              图片链接
            imgUrl: __uri('../images/xjk/sort_kz_1.png'),
              星将名
            name:'公孙胜',
              星级
              介绍
            jieshao:"绰号“入云龙”，原为紫虚观道士，道号一清，在梁山泊一百单八将中排第四位，担任掌管机密军师。",
            level:5,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"40个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:330",
                    "攻击力:24",
                    "防御力:84",
                    "灵巧度:63",
                    "命中率:24",
                    "精神力:155",
                    "坚韧度:170",
                    "闪避率:91",
                    "技能值:336"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "封印概率:17%",
                    "封印抗性:15%",
                    "魔伤减免:11.6%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role6_xj_1.png'),
                        "jineng":"云龙附身",
                        "text":"化身为云龙，攻击随机3个敌人，造成法术伤害，化为云龙时自身将提高精神力、闪避。持续5回合，冷却5回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role6_xj_2.png'),
                        "jineng":"道法禁言",
                        "text":"单体法术，沉默一个敌人，使之暂时无法使用主动技能，持续2回合，并在40、75、100级分别增加多1回合，本技能的出手速度会获得一定幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role6_xj_3.png'),
                        "jineng":"道法醉酒",
                        "text":"单体法术，灌醉一个敌人，使之暂时无法使用普通攻击和主动技能，持续2回合，并在40、75、100级分别增加多1回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role6_xj_4.png'),
                        "jineng":"道法领悟",
                        "text":"进行潜心修炼可以增加道法系技能命中概率"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role6_xj_5.png'),
                        "jineng":"扭转乾坤",
                        "text":"群体法术，作用3个目标，并在40、75、100级分别增加1个，降低敌人的灵巧度，持续3回合，并在40、75、100级分别增加多一个，降低敌人的灵巧度，持续3回合，并在40、75、100级分别多增加1回合，不可叠加"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role6_xj_6.png'),
                        "jineng":"闪避",
                        "text":"战斗中有7%几率闪避物理和法术攻击"
                    },
                    {
                        'imgList':"7",
                        'img': __uri('../images/xjk/role6_xj_7.png'),
                        "jineng":"风卷",
                        "text":"对单体敌人造成2次法术伤害，有几率使目标命中率降低2回合"
                    },
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:8,
              图片链接
            imgUrl: __uri('../images/xjk/sort_kz_2.png'),
              星将名
            name:'孙二娘',
              星级
              介绍
            jieshao:"孙二娘是菜园子的妻子，绰号“母夜叉”，是梁山三位女将之一，在梁山泊一百单八将中排第一百零三位。",
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"消耗10个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:269",
                    "攻击力:24",
                    "防御力:87",
                    "灵巧度:45",
                    "命中率:24",
                    "灵巧度:184",
                    "坚韧度:185",
                    "闪避率:65",
                    "技能值:405"
                ],

              特殊属性
            specialAttr:
                [
                    "封印概率:25%",
                    "重击概率:10%",
                    "魔伤减免:11.6%"
                ],
              技能
            abilityInfo:
                [

                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role7_xj_1.png'),
                        "jineng":"梦魇侵袭",
                        "text":"近身攻击一个处于沉睡状态的敌人，造成一次法术伤害，同时附加40%重伤效果3回合，冷却4回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role7_xj_2.png'),
                        "jineng":"小鬼打击",
                        "text":"单体攻击，召唤恶鬼吸取单体敌人生命，吸取值为敌人当前生命一定比例，吸取值不会超出100~60000，同时自己按吸取值的一定比例回复生命"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role7_xj_3.png'),
                        "jineng":"催眠曲",
                        "text":"单体法术，命中则使一个敌人暂时无法行动，受到伤害2次后会苏醒，持续2回合，并在40、75、100级分别增加多受到伤害次数2次和1回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role7_xj_4.png'),
                        "jineng":"疾风突进",
                        "text":"战斗中获得10%灵巧和闪避率加成，同时命中率下降8%"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role7_xj_5.png'),
                        "jineng":"偷袭",
                        "text":"封印概率提高10%"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:9,
              图片链接
            imgUrl: __uri('../images/xjk/sort_fs_1.png'),
              星将名
            name:'吴用',
              介绍
            jieshao:'足智多谋，常以诸葛亮自比，道号“加亮先生”，人称“智多星”，在梁山排行第三位，为山寨的掌管机密军师。',
              星级
            level:5,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"40个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:269",
                    "攻击力:18",
                    "防御力:69",
                    "灵巧度:41",
                    "命中率:18",
                    "精神力:196",
                    "坚韧度:197",
                    "闪避率:60",
                    "技能值:432"

                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "魔伤加成:10%",
                    "封印概率:10%",
                    "魔伤减免:13.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role8_xj_1.png'),
                        "jineng":"算无遗策",
                        "text":"对1个敌人施加随机一种封印（禁锢、沉默、醉酒、沉睡、离间），持续3回合，冷却4回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role8_xj_2.png'),
                        "jineng":"灰飞烟灭",
                        "text":"群体法术，攻击3个目标，并在40、75、100级分别增加多一个，有几率造成2回合晕眩效果，不可叠加"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role8_xj_3.png'),
                        "jineng":"羽扇纶巾",
                        "text":"群体法术，攻击3个目标，并在40、75、100级分别增加多一个，有几率造成2回合降低灵巧值效果，最大叠加2次"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role8_xj_4.png'),
                        "jineng":"真假替身",
                        "text":"制造2个真假分身，并在40、75、100级分别增加多1个，持续99回合，自己受到物理攻击时，有几率消耗1个幻影，免疫本次物理伤害"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role8_xj_5.png'),
                        "jineng":"法神领域",
                        "text":"在战场存活时，会为全体友军加持光环，提高（等级*0.5）精神力"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role8_xj_6.png'),
                        "jineng":"致盲",
                        "text":"在战场上存活时，会为全体友军加持光环，提高（等级*1）精神力"
                    },
                    {
                        'imgList':"7",
                        'img': __uri('../images/xjk/role8_xj_7.png'),
                        "jineng":"运筹帷幄",
                        "text":"使用群体法术时，有几率再使用1次该法术"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:10,
              图片链接
            imgUrl: __uri('../images/xjk/sort_fs_2.png'),
              星将名
            name:'潘金莲',
              介绍
            jieshao:'清河县里一个大户人家的使女，出落得亭亭玉立，婀娜多姿，后嫁与武大郎为妻。',
              星级
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"10个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:240",
                    "攻击力:15",
                    "防御力:66",
                    "灵巧度:34",
                    "命中率:15",
                    "精神力:184",
                    "坚韧度:185",
                    "闪避率:50",
                    "技能值:405"
                ],
              特殊属性
            specialAttr:
                [
                    "封印概率:10%",
                    "重击概率:10%",
                    "魔伤减免:13.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role9_xj_1.png'),
                        "jineng":"温柔乡",
                        "text":"对3名敌人施放媚术，被魅惑的敌人会在2回合内反戈攻击友军，冷却8回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role9_xj_2.png'),
                        "jineng":"干柴烈火",
                        "text":"单体法术攻击，攻击2次，有几率造成2回合降低命中率效果，最大叠加2次，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role9_xj_3.png'),
                        "jineng":"碧波金莲",
                        "text":"群体法术，攻击3个目标2次，有几率造成2回合降低灵巧值效果，最大叠加2次，本技能的出手速度会获得大幅度提高"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role9_xj_4.png'),
                        "jineng":"影分身",
                        "text":"制造2个影分身，并在40、75、100级分别增加多1个，持续99回合，自己受到物理攻击时，有几率消耗1个幻影，免疫本次物理伤害"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role9_xj_5.png'),
                        "jineng":"魅惑",
                        "text":"法术攻击时有6%几率魅惑目标，使之意乱情迷，在2回合反戈攻击友军"
                    }
                    ,
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role9_xj_6.png'),
                        "jineng":"法力高深",
                        "text":"战斗中获得10%精神力加成，同时防御力下降8%"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:11,
              图片链接
            imgUrl: __uri('../images/xjk/sort_fs_3.png'),
              星将名
            name:'神火将',
              介绍
            jieshao:'魏定国化身，原是凌州团练使，精熟火攻法，上阵专用火器取人，人称“神火将军”，在梁山排行第四十五位。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:233",
                    "攻击力:21",
                    "防御力:72",
                    "灵巧度:48",
                    "命中率:21",
                    "精神力:193",
                    "坚韧度:172",
                    "闪避率:70",
                    "技能值:428"

                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击伤害:5%",
                    "魔伤减免:13.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role10_xj_1.png'),
                        "jineng":"火焰风暴",
                        "text":"对一个3X3区域内的所有敌人都造成法术伤害"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role10_xj_2.png'),
                        "jineng":"冥火之触",
                        "text":"单体法术攻击，有几率造成2回合持续伤害效果，最大叠加2次，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role10_xj_3.png'),
                        "jineng":"火烧连营",
                        "text":"群体法术，攻击3个目标，并在40、75、100级分别增加多一个，有几率造成2回合晕眩效果，不可叠加"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role10_xj_4.png'),
                        "jineng":"自爆",
                        "text":"死亡时会对全体敌人造成（等级*3）点伤害"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role10_xj_5.png'),
                        "jineng":"高级法爆",
                        "text":"攻击造成重击时自身精神力和法术重击概率将提高8%，持续3回合，最多叠加3次"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:12,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ys_1.png'),
              星将名
            name:'李瓶儿',
              介绍
            jieshao:'真实身份不明，自称为女娲后人，身负除魔正道之重任。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:360",
                    "攻击力:21",
                    "防御力:84",
                    "灵巧度:38",
                    "命中率:21",
                    "精神力:172",
                    "坚韧度:172",
                    "闪避率:55",
                    "技能值:377"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "封印抗性:28%",
                    "魔伤减免:10%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role11_xj_1.png'),
                        "jineng":"女娲祝福",
                        "text":"为一名友军加持3回合减伤盾，受到伤害时会直接抵消伤害，抵消掉一定伤害后减伤盾会直接消失，冷却5回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role11_xj_2.png'),
                        "jineng":"回春术",
                        "text":"单体法术，对敌人使用则造成法术伤害，对友军使用则进行治疗，本技能的出手速度会获得一定幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role11_xj_3.png'),
                        "jineng":"起死回生",
                        "text":"单体法术，复活一名已死亡的队友，使其回复一定比例生命值和技能值"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role11_xj_4.png'),
                        "jineng":"闭月羞花",
                        "text":"被动提高封印抗性"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role11_xj_5.png'),
                        "jineng":"圣灵",
                        "text":"每隔6回合解除并免疫所有负面类状态，持续1回合"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role11_xj_6.png'),
                        "jineng":"魅惑",
                        "text":"法术攻击时有6%几率魅惑目标，使之意乱情迷，在2回合反戈攻击友军"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:13,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ys_2.png'),
              星将名
            name:'李师师',
              介绍
            jieshao:'汴京有名的青楼歌姬，美貌超全，在仕子官宦中颇有声名，是文人雅士、公子王孙竞相争夺的对象。',
              星级
            level:5,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"40个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:593",
                    "攻击力:21",
                    "防御力:81",
                    "灵巧度:31",
                    "命中率:21",
                    "精神力:227",
                    "坚韧度:363",
                    "闪避率:45",
                    "技能值:480"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击抵抗:10%",
                    "封印抗性:10%",
                    "魔伤减免:10%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role12_xj_1.png'),
                        "jineng":"救赎",
                        "text":"对友军施加一个救赎状态，持续2回合，拥有此状态的友军在死亡时会马上复活，回复生命值和技能值，救赎状态生效一次会自动删除，冷却3回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role12_xj_2.png'),
                        "jineng":"凤舞呈祥",
                        "text":"群体法术，攻击3个目标，并在40、75、100级分别增加多一个，治疗队友大量气血，冷却2回合"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role12_xj_3.png'),
                        "jineng":"凤舞天下",
                        "text":"群体法术，初始作用2个目标，并在40、75、100级分别增加多一个，对敌人使用则造成法术伤害，同时附带2回合持续伤害，对友军使用则进行治疗，同时附带2回合持续加血，持续伤害和持续回血会在40、75、100级分别增加多一回合，不可叠加"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role12_xj_4.png'),
                        "jineng":"凤舞九天",
                        "text":"进场时给全体友军加持1回合的免疫封印状态，并提高坚韧度1回合"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role12_xj_5.png'),
                        "jineng":"法力高深",
                        "text":"战斗中获得10%精神力加成，同时防御力下降8%"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role12_xj_6.png'),
                        "jineng":"奉献",
                        "text":"死亡时会给全体友军加上回复状态：每回合回复（等级*3）点生命值，持续3回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:14,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ys_3.png'),
              星将名
            name:'宋江',
              介绍
            jieshao:'字公明，绰号呼保义，又号及时雨，人称孝义黑三郎，在一百单八将稳坐梁山泊第一把交椅，为三十六天罡星之首。',
              星级
            level:5,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"40个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:360",
                    "攻击力:21",
                    "防御力:111",
                    "灵巧度:20",
                    "命中率:21",
                    "精神力:193",
                    "坚韧度:182",
                    "闪避率:30",
                    "技能值:428"

                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "封印抗性:15%",
                    "魔伤减免:10%"

                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role13_xj_1.png'),
                        "jineng":"及时雨",
                        "text":"治疗最虚弱的友军并为其驱散身上的所有封印状态"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role13_xj_2.png'),
                        "jineng":"呼风唤雨",
                        "text":"群体法术，初始作用2个目标，并在40、75、100级分别增加多一个，对敌人使用则造成法术伤害，同时附带2回合持续伤害，对友军使用则进行治疗，同时附带2回合持续加血，持续伤害和持续回血会在40、75、100级分别增加多一回合，不可叠加"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role13_xj_3.png'),
                        "jineng":"净化术",
                        "text":"单体法术，解除一名队友身上的持续减血状态，同时有几率施放1回合免疫负面状态，并在40、75、100级分别增加多1回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role13_xj_4.png'),
                        "jineng":"众志成城",
                        "text":"群体法术，作用3个目标，并在40、75、100级分别增加1个，提高队友攻击力，持续3回合，并在40、75、100级分别增加多1回合，不可叠加"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role13_xj_5.png'),
                        "jineng":"连续恢复",
                        "text":"战斗有几率触发自动回血，每回合自动回复10%生命值，持续5回合"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role13_xj_6.png'),
                        "jineng":"高级求生",
                        "text":"生命值低于35%时，3回合内每回合回复12%生命值，冷却6回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:15,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ss_1.png'),
              星将名
            name:'扈三娘',
              介绍
            jieshao:'绰号“一丈青”，是梁山三位女将之一，在梁山泊一百单八将中排第五十九位。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:269",
                    "攻击力:116",
                    "防御力:78",
                    "灵巧度:48",
                    "命中率:116",
                    "精神力:159",
                    "坚韧度:261",
                    "闪避率:70",
                    "技能值:251"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击伤害:5%",
                    "魔伤减免:10%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role14_xj_1.png'),
                        "jineng":"落月箭",
                        "text":"对最近敌人进行最多4次物理射击，并附带减速效果，持续3回合，减速最多叠加4次"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role14_xj_2.png'),
                        "jineng":"百步穿杨",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role14_xj_3.png'),
                        "jineng":"一心一意",
                        "text":"主动技能，使用后，扈三娘的箭术技能伤害增加，并有机率闪避任意攻击，持续2回合，并在40、75、100级分别增加1回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role14_xj_4.png'),
                        "jineng":"满天散箭",
                        "text":"攻击随机2个敌人，并在40、75、100级分别增加1个，造成物理伤害"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role14_xj_5.png'),
                        "jineng":"风神领域",
                        "text":"在战场存活时，会为全体友军加持光环，提高（等级*1）灵巧值"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role14_xj_6.png'),
                        "jineng":"高级冰心",
                        "text":"进入战斗时免疫沉默和冰冻，法伤减免提高10%。持续4回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:16,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ss_2.png'),
              星将名
            name:'朱贵',
              介绍
            jieshao:'绰号“旱地忽律”，梁山第九十二条好汉，梁山的第一号特务，专为梁山通风报信的眼线。',
              星级
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"10个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:206",
                    "攻击力:116",
                    "防御力:75",
                    "灵巧度:52",
                    "命中率:116",
                    "精神力:107",
                    "坚韧度:133",
                    "闪避率:75",
                    "技能值:195"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "封印概率:15%",
                    "魔伤加成:10%",
                    "魔伤减免:10%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role15_xj_1.png'),
                        "jineng":"暗箭伤人",
                        "text":"远程攻击当前速度最低的一个敌人，造成物理伤害并晕眩2回合，冷却7回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role15_xj_2.png'),
                        "jineng":"爆破陷阱",
                        "text":"对目标放一个陷阱，计时3回合，目标攻击、死亡时、计时结束时，会引爆身上全部陷阱"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role15_xj_3.png'),
                        "jineng":"拆除专家",
                        "text":"单体法术，拆除一名队友身上的陷阱状态，同时有几率施加1回合免疫陷阱状态，并在40、75、100级分别增加多1回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role15_xj_4.png'),
                        "jineng":"炸弹陷阱",
                        "text":"对目标放一个陷阱，计时2回合，目标攻击、死亡时、计时结束时，会引爆身上全部陷阱。炸弹陷阱可叠加2次，被引爆后对1格内单位造成物理、法术伤害和中毒，持续损失生命值和技能值，并在40、75、100级可以提高毒的持续回合和叠加次数。"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role15_xj_5.png'),
                        "jineng":"隐身",
                        "text":"被动提高魔伤减免10%，并且每回合有7%几率进入隐身状态，本回合内免疫所有法术伤害"
                    }
                    ,
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role15_xj_6.png'),
                        "jineng":"偷袭",
                        "text":"封印概率提高10%"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:17,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ss_3.png'),
              星将名
            name:'花荣',
              介绍
            jieshao:'绰号小李广，乃将门之后，为清风寨武知寨，使一杆银枪，箭法高超，百步穿杨。',
              星级
            level:5,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"40个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:300",
                    "攻击力:213",
                    "防御力:78",
                    "灵巧度:47",
                    "命中率:175",
                    "精神力:171",
                    "坚韧度:280",
                    "闪避率:67",
                    "技能值:270"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:15%",
                    "重击伤害:15%",
                    "魔伤减免:10%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role16_xj_1.png'),
                        "jineng":"落日箭",
                        "text":"射击一名精神力最高的敌人，造成5次物理伤害，每次攻击的命中会逐渐降低，冷却4回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role16_xj_2.png'),
                        "jineng":"百发百中",
                        "text":"攻击单体，造成物理伤害，本次攻击会大幅度提高自身攻击力并大幅度降低目标防御力，降防效果技能3回合，不可叠加，冷却2回合"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role16_xj_3.png'),
                        "jineng":"箭术精通",
                        "text":"被动提高攻击力"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role16_xj_4.png'),
                        "jineng":"战神领域",
                        "text":"在战场存活时，会为全体友军加持光环，提高（等级*1）攻击力"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role16_xj_5.png'),
                        "jineng":"高级精准",
                        "text":"战斗中命中率和灵巧度提高10%"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role16_xj_6.png'),
                        "jineng":"一箭双雕",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得一定幅度提高"
                    }

                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:18,
              图片链接
            imgUrl: __uri('../images/xjk/sort_ss_4.png'),
              星将名
            name:'西门庆',
              介绍
            jieshao:'西门庆，原是阳谷县的一个落魄财主，后来开了一家生药铺，是当地的暴发户兼地头蛇。',
              星级
            level:3,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"10个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:240",
                    "攻击力:90",
                    "防御力:75",
                    "灵巧度:27",
                    "命中率:90",
                    "精神力:165",
                    "坚韧度:169",
                    "闪避率:39",
                    "技能值:351"

                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "魔伤加成:5%",
                    "魔伤减免:10%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role17_xj_1.png'),
                        "jineng":"暴雨梨花",
                        "text":"攻击全体敌人，造成物理伤害，附带中毒效果，在3回合内持续扣生命，不可叠加，冷却4回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role17_xj_2.png'),
                        "jineng":"西门飞扇",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得一定幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role17_xj_3.png'),
                        "jineng":"阴阳陷阱",
                        "text":"对目标放一个陷阱，计时2回合，目标攻击、死亡时、计时结束时，会引爆身上全部陷阱。阴阳陷阱可叠加2次，被引爆后对1格单位造成物理、法术伤害和中毒，持续损失生命值和技能值，并在40、70、100级可以提高毒的持续回合和叠加次数"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role17_xj_4.png'),
                        "jineng":"扫雷",
                        "text":"单体法术，拆除一名队友身上的陷阱状态，同时有几率施加1回合免疫陷阱状态，并在40、75、100级分别增加多1回合"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role17_xj_5.png'),
                        "jineng":"涂毒",
                        "text":"攻击时施加持续伤害，每回合（等级*1）点生命值 ，持续2回合，最多叠加3次"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role17_xj_6.png'),
                        "jineng":"快感",
                        "text":"杀死敌人后自身攻击力和灵巧值将提高10%，持续2回合，最多叠加3次"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:19,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_1.png'),
              星将名
            name:'柴进',
              介绍
            jieshao:'绰号“小旋风”，后周皇裔，人称柴大官人，在梁山泊一百单八将中排第十位。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:269",
                    "攻击力:116",
                    "防御力:81",
                    "灵巧度:45",
                    "命中率:116",
                    "精神力:188",
                    "坚韧度:308",
                    "闪避率:65",
                    "技能值:297"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:25%",
                    "魔伤减免:8.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role18_xj_1.png'),
                        "jineng":"万剑朝宗",
                        "text":"召唤天剑攻击全体敌人，造成物理伤害，本次攻击会直接扣除目标一定比例的当前生命冷却4回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role18_xj_2.png'),
                        "jineng":"断魂刺",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role18_xj_3.png'),
                        "jineng":"万剑归宗",
                        "text":"瞬间攻击单体7次，造成物理伤害，每次攻击的伤害会逐渐提高，命中率会逐渐降低，冷却2回合"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role18_xj_4.png'),
                        "jineng":"致命",
                        "text":"重击伤害提高15%"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role18_xj_5.png'),
                        "jineng":"高级圣灵",
                        "text":"每隔3回合解除并免疫所有负面类状态，持续1回合"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role18_xj_6.png'),
                        "jineng":"一击必杀",
                        "text":"物理攻击的重击概率提高15%"
                    }

                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:20,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_2.png'),
              星将名
            name:'杨志',
              介绍
            jieshao:'绰号“青面兽”，在梁山排第十七位，上应天暗星，位列马军八骠骑兼先锋使。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:330",
                    "攻击力:165",
                    "防御力:81",
                    "灵巧度:25",
                    "命中率:165",
                    "精神力:170",
                    "坚韧度:281",
                    "闪避率:36",
                    "技能值:251"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击伤害:5%",
                    "魔伤减免:8.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role19_xj_1.png'),
                        "jineng":"连牙刀",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role19_xj_2.png'),
                        "jineng":"饮血妖刀",
                        "text":"每杀死一名敌人，自己会马上回复一定比例生命，同时永久提高4%攻击"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role19_xj_3.png'),
                        "jineng":"追魂索命",
                        "text":"寻找生命值最低的敌人，进行2次物理攻击，第2次攻击伤害提高50%，命中降低50%"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role19_xj_4.png'),
                        "jineng":"灭魔斩",
                        "text":"攻击生命最少的敌人，造成物理伤害，同时直接扣除目标生命（已损失生命越多伤害越高），冷却3回合%"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role19_xj_5.png'),
                        "jineng":"赤子",
                        "text":"进入战斗时免疫魅惑和沉睡，持续2回合"
                    }
                    ,
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role19_xj_6.png'),
                        "jineng":"高级吸血",
                        "text":"将物理攻击伤害的30%转化为自己生命值"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:21,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_3.png'),
              星将名
            name:'索超',
              介绍
            jieshao:'绰号“急先锋”，梁山排名第十九，为马军八骠骑兼先锋使之一。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:419",
                    "攻击力:99",
                    "防御力:99",
                    "灵巧度:55",
                    "命中率:99",
                    "精神力:142",
                    "坚韧度:233",
                    "闪避率:80",
                    "技能值:225"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击抵抗:10%",
                    "封印概率:5%",
                    "魔伤减免:8.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role20_xj_1.png'),
                        "jineng":"死亡冲锋",
                        "text":"攻击一名速度最快的敌人，造成物理伤害，并且有几率晕眩2回合，冷却7回合，本技能的出手速度会获得提高"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role20_xj_2.png'),
                        "jineng":"横扫千军",
                        "text":"攻击前排最多3个敌人，造成物理伤害"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role20_xj_3.png'),
                        "jineng":"钢铁意志",
                        "text":"在战场中，自己的坚韧会获得提高，提高值等于自己防御力乘以一定比例"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role20_xj_4.png'),
                        "jineng":"疾如风",
                        "text":"被动增加自身灵巧值，主动使用后开启疾风光环，提高全体友军灵巧值，光环效果会持续到自身死亡或战斗结束，不可叠加"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role20_xj_5.png'),
                        "jineng":"铁布衫",
                        "text":"自身受击时会提高4%防御力，持续2回合，最多叠加4次"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role20_xj_6.png'),
                        "jineng":"高级冲撞",
                        "text":"进行物理攻击时有20%几率施加晕眩，持续2回合"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },

        {
              id唯一的标示
            id:22,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_5.png'),
              星将名
            name:'阮小五',
              介绍
            jieshao:'绰号“短命二郎”，在梁山排行第二十九位，梁山八大水军头领第五位。阮小五在阮氏三兄弟中排行第二。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:269",
                    "攻击力:108",
                    "防御力:102",
                    "灵巧度:48",
                    "命中率:108",
                    "精神力:171",
                    "坚韧度:280",
                    "闪避率:70",
                    "技能值:270"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击伤害:10%",
                    "魔伤减免:8.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role22_xj_1.png'),
                        "jineng":"致命一击",
                        "text":"对后排生命值最低的敌人造成一次物理伤害，本次攻击会大幅度提高重击伤害"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role22_xj_2.png'),
                        "jineng":"追魂索命",
                        "text":"寻找生命值最低的敌人，进行2次物理攻击，第2次攻击伤害提高50%，命中降低50%"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role22_xj_3.png'),
                        "jineng":"吸血",
                        "text":"将物理攻击伤害的15%转化为自己生命值"
                    },
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role22_xj-4.png'),
                        "jineng":"破绽打击",
                        "text":"攻击处于封印状态的敌人时伤害提高10%"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role22_xj_5.png'),
                        "jineng":"高级隐身",
                        "text":"被动提高魔伤减免20%，并且每回合有15%几率进入隐身状态，本回合内免疫所有法术伤害"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:23,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_6.png'),
              星将名
            name:'史进',
              介绍
            jieshao:'绰号“短命二郎”，在梁山排行第二十九位，梁山八大水军头领第五位。阮小五在阮氏三兄弟中排行第二。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:330",
                    "攻击力:132",
                    "防御力:81",
                    "灵巧度:37",
                    "命中率:148",
                    "精神力:164",
                    "坚韧度:271",
                    "闪避率:54",
                    "技能值:243"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "重击伤害:10%",
                    "封印抗性:10%",
                    " 魔伤减免:8.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role23_xj_1.png'),
                        "jineng":"豪龙破军",
                        "text":"召唤神龙攻击最近敌人，造成物理伤害，有几率晕眩目标，持续2回合，施放后自己会获得1个提高攻击力的龙纹状态，持续9回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role23_xj_2.png'),
                        "jineng":"连牙捧",
                        "text":"攻击单体2次，造成物理伤害，本技能的出手速度会获得大幅度提高"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role23_xj_3.png'),
                        "jineng":"全神贯注",
                        "text":"被动提高命中"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role23_xj_4.png'),
                        "jineng":"变身",
                        "text":"进场时所有基础属性都提高5%，持续2回合"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role23_xj_5.png'),
                        "jineng":"高级不屈",
                        "text":"生命值低于35%时，3回合内吸血效果提高30%，冷却7回合"
                    },
                    {
                        'imgList':"6",
                        'img': __uri('../images/xjk/role23_xj_6.png'),
                        "jineng":"粉碎打击",
                        "text":"提高自身命中率，对单人造成大量物理伤害，命中率提高持续2回合，并在40、75、100级分别增加多1 个持续回合，最大叠加2次，并在 40、75、100级分别增多一个叠加次数"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx'
                }
            ]
        },
        {
              id唯一的标示
            id:24,
              图片链接
            imgUrl: __uri('../images/xjk/sort_zs_7.png'),
              星将名
            name:'阮小七',
              介绍
            jieshao:'绰号“活阎罗”，在梁山排行第三十一位，梁山水军八员头领第六位。阮小七在阮氏三兄弟中排行第三。',
              星级
            level:4,
              解锁等级
            lockLevel:"20",
              获取方式
            getType:"20个星将碎片",
              基础属性
            baseAttr:
                [
                    "生命值:330",
                    "攻击力:126",
                    "防御力:75",
                    "灵巧度:34",
                    "命中率:126",
                    "精神力:176",
                    "坚韧度:289",
                    "闪避率:50",
                    "技能值:278"
                ],
              特殊属性
            specialAttr:
                [
                    "重击概率:10%",
                    "物伤加成:5%",
                    "重击伤害:15%",
                    "魔伤减免:8.2%"
                ],
              技能
            abilityInfo:
                [
                    {
                        'imgList':"1",
                        'img': __uri('../images/xjk/role24_xj_1.png'),
                        "jineng":"翻江倒海",
                        "text":"攻击目标及其周围1格内的所有敌人，造成物理伤害，有较高几率挑飞敌人，被击飞者在本回合内无法行动，冷却8回合"
                    },
                    {
                        'imgList':"2",
                        'img': __uri('../images/xjk/role24_xj_2.png'),
                        "jineng":"势如破竹",
                        "text":"攻击一条直线上所有敌人，造成物理伤害，本次伤害目标无视一定比例防御力"
                    },
                    {
                        'imgList':"3",
                        'img': __uri('../images/xjk/role24_xj_3.png'),
                        "jineng":"蓄力挑飞",
                        "text":"每累计攻击2次后，下回合的攻击就会附带真实伤害，并且有几率挑飞敌人，被击飞者在本回合内无法行动"
                    } ,
                    {
                        'imgList':"4",
                        'img': __uri('../images/xjk/role24_xj_4.png'),
                        "jineng":"吸血",
                        "text":"将物理攻击伤害的15%转化为自己生命值"
                    },
                    {
                        'imgList':"5",
                        'img': __uri('../images/xjk/role24_xj_5.png'),
                        "jineng":"高级战刃突袭",
                        "text":"战斗中获得20%攻击力加成，同时所受法术伤害提高5%"
                    }
                ],
            specialAbility:[
                {
                    'speId':"1",
                    'specialImg':"000.png",
                    'specialInfo':'xxxx战斗中获得20战斗中获得20战斗中获得20战斗中获得20战斗中获得20战斗中获得20战斗中获得20'
                }
            ]
        }
    ]
}

exports.personsConfigObj = personsConfig;