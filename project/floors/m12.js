main.floors.m12=
{
    "floorId": "m12",
    "title": "密境",
    "name": "密境",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        [
            0,
            0,
            "b42.jpg",
            0
        ],
        [
            1,
            116,
            "0.jpg",
            1
        ],
        [
            1,
            256,
            "0.jpg",
            1
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('敌方卡组', 0)>=10",
            "true": [
                {
                    "type": "showTextImage",
                    "code": 11,
                    "text": "${(flag:敌方卡组)}",
                    "loc": [
                        30,
                        116
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                }
            ],
            "false": [
                {
                    "type": "showTextImage",
                    "code": 11,
                    "text": "${(flag:敌方卡组)}",
                    "loc": [
                        35,
                        116
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                }
            ]
        },
        {
            "type": "if",
            "condition": "core.getFlag('卡组', 0)>=10",
            "true": [
                {
                    "type": "showTextImage",
                    "code": 10,
                    "text": "${(flag:卡组)}",
                    "loc": [
                        30,
                        345
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                }
            ],
            "false": [
                {
                    "type": "showTextImage",
                    "code": 10,
                    "text": "${(flag:卡组)}",
                    "loc": [
                        35,
                        345
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:cdf",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdg",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdh",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdi",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdj",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdk",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdq",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdr",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cds",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdt",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdu",
            "value": "-1"
        },
        {
            "type": "setValue",
            "name": "flag:cdv",
            "value": "-1"
        },
        {
            "type": "insert",
            "name": "我方回合"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}