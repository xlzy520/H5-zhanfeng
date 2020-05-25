main.floors.m2=
{
    "floorId": "m2",
    "title": "第一区",
    "name": "第一区",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        0,
        0,
        "b0.jpg",
        0
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.platform.isPC==true",
            "true": [
                {
                    "type": "showTextImage",
                    "code": 80,
                    "text": "${(flag:记录5)}",
                    "loc": [
                        107,
                        102
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 81,
                    "text": "${(flag:记录6)}",
                    "loc": [
                        171,
                        102
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 82,
                    "text": "${(flag:记录7)}",
                    "loc": [
                        235,
                        102
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 83,
                    "text": "${(flag:记录8)}",
                    "loc": [
                        299,
                        102
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 84,
                    "text": "${(flag:记录9)}",
                    "loc": [
                        363,
                        102
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 85,
                    "text": "${(flag:记录10)}",
                    "loc": [
                        107,
                        166
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 86,
                    "text": "${(flag:记录11)}",
                    "loc": [
                        171,
                        166
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 87,
                    "text": "${(flag:记录12)}",
                    "loc": [
                        235,
                        166
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 88,
                    "text": "${(flag:记录13)}",
                    "loc": [
                        299,
                        166
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 89,
                    "text": "${(flag:记录14)}",
                    "loc": [
                        363,
                        166
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 90,
                    "text": "${(flag:记录15)}",
                    "loc": [
                        107,
                        294
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 91,
                    "text": "${(flag:记录16)}",
                    "loc": [
                        171,
                        294
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 92,
                    "text": "${(flag:记录17)}",
                    "loc": [
                        235,
                        294
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 93,
                    "text": "${(flag:记录18)}",
                    "loc": [
                        299,
                        294
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 94,
                    "text": "${(flag:记录19)}",
                    "loc": [
                        363,
                        294
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 95,
                    "text": "${(flag:记录20)}",
                    "loc": [
                        107,
                        358
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 96,
                    "text": "${(flag:记录21)}",
                    "loc": [
                        171,
                        358
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 97,
                    "text": "${(flag:记录22)}",
                    "loc": [
                        235,
                        358
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 98,
                    "text": "${(flag:记录23)}",
                    "loc": [
                        299,
                        358
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 99,
                    "text": "${(flag:记录24)}",
                    "loc": [
                        363,
                        358
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                }
            ],
            "false": [
                {
                    "type": "showTextImage",
                    "code": 80,
                    "text": "${(flag:记录5)}",
                    "loc": [
                        107,
                        100
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 81,
                    "text": "${(flag:记录6)}",
                    "loc": [
                        171,
                        100
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 82,
                    "text": "${(flag:记录7)}",
                    "loc": [
                        235,
                        100
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 83,
                    "text": "${(flag:记录8)}",
                    "loc": [
                        299,
                        100
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 84,
                    "text": "${(flag:记录9)}",
                    "loc": [
                        363,
                        100
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 85,
                    "text": "${(flag:记录10)}",
                    "loc": [
                        107,
                        164
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 86,
                    "text": "${(flag:记录11)}",
                    "loc": [
                        171,
                        164
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 87,
                    "text": "${(flag:记录12)}",
                    "loc": [
                        235,
                        164
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 88,
                    "text": "${(flag:记录13)}",
                    "loc": [
                        299,
                        164
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 89,
                    "text": "${(flag:记录14)}",
                    "loc": [
                        363,
                        164
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 90,
                    "text": "${(flag:记录15)}",
                    "loc": [
                        107,
                        292
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 91,
                    "text": "${(flag:记录16)}",
                    "loc": [
                        171,
                        292
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 92,
                    "text": "${(flag:记录17)}",
                    "loc": [
                        235,
                        292
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 93,
                    "text": "${(flag:记录18)}",
                    "loc": [
                        299,
                        292
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 94,
                    "text": "${(flag:记录19)}",
                    "loc": [
                        363,
                        292
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 95,
                    "text": "${(flag:记录20)}",
                    "loc": [
                        107,
                        356
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 96,
                    "text": "${(flag:记录21)}",
                    "loc": [
                        171,
                        356
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 97,
                    "text": "${(flag:记录22)}",
                    "loc": [
                        235,
                        356
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 98,
                    "text": "${(flag:记录23)}",
                    "loc": [
                        299,
                        356
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 99,
                    "text": "${(flag:记录24)}",
                    "loc": [
                        363,
                        356
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                }
            ]
        }
    ],
    "parallelDo": null,
    "events": {
        "0,7": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m1",
                "loc": [
                    14,
                    2
                ],
                "time": 300
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "5"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "2219"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "2203"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "2205"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "2207"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "2208"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "2213"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "2216"
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "2"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "1114"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1115"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "2211"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1504"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1614"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "812"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "832"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1126"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "416"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "417"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2010"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1505"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1615"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "105"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "7"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "4"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "234"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "235"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "302"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "322"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "334"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "420"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "500"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "504"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1010"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1011"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1020"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1021"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1124"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1142"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1212"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1218"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1224"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1304"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1326"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1327"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1328"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1338"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1622"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "2012"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "2201"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "2202"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "2214"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "8"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "2"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "514"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1532"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1620"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1924"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1510"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "515"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1533"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1621"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1925"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1511"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1035"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2306"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2308"
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "9"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "3"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "710"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "711"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "736"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "812"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "832"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "834"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "835"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "836"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "838"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "840"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "842"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "844"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "846"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "848"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "849"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "738"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "908"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1141"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1120"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1140"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1220"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "2"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "200"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "600"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1400"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1800"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "2315"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "2316"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "2334"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1608"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1300"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1522"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1424"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1028"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "336"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "11"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "3"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "1804"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1805"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1818"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1819"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1902"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1916"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1922"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1924"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1928"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1929"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1938"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1940"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2004"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "2102"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "2104"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "2304"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "2309"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "2319"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "2330"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "2316"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "12"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "4"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "844"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "845"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "408"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1104"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1106"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1108"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1110"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1112"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1114"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1118"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1128"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1130"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1131"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1132"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1134"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1508"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1136"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1138"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1140"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "2304"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1210"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1300"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "1518"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "1626"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "1627"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "1608"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "13"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "1016"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1116"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1117"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1134"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1135"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "2328"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "2335"
            }
        ],
        "3,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m10",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "5,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "7,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "9,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m13",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "11,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m11",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "3,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "5,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m14",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "7,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "9,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "11,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m10",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "3,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m11",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "5,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m13",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "7,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m11",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "9,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m10",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "11,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "3,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m10",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "5,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m11",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "7,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m12",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "9,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m11",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "11,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m10",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "17"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "3"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "632"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "633"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "700"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "702"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "704"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "706"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "707"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "708"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "714"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "716"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "726"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "728"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "734"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "800"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "802"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "808"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "820"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "822"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "824"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "828"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "900"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "15"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "2"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "228"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "216"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "226"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "238"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "604"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "606"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "612"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "614"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "636"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "404"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "405"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2218"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "620"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "622"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "19"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "2"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "1404"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1002"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1100"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1026"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1206"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1322"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1634"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1220"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1120"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2304"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2308"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2309"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2209"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "24"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "202"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "314"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "418"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "328"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "330"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "113"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "108"
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "23"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "630"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "806"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "328"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1106"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1518"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1916"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1918"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "14"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "2"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "306"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "330"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "338"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "339"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "608"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "609"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1004"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1400"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1702"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1802"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1906"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2018"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2222"
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "22"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "3"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "1129"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1128"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1114"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1115"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1130"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1131"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1134"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1140"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1141"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1035"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1106"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1107"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1518"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1519"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "2220"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1112"
            }
        ],
        "5,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "21"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "634"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "635"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "2221"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1220"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "432"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1926"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "336"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "20"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "4"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "202"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "230"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "226"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "314"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "315"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "328"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "334"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "335"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "306"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "418"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "442"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "722"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "728"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "822"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "838"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "850"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1022"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1024"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1112"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1116"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1126"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1524"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1816"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "1916"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "620"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "2202"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "2307"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "108"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "16"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "336"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "337"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "440"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1426"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1427"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "2316"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "2323"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "18"
            },
            {
                "type": "setValue",
                "name": "flag:需卡组",
                "value": "4"
            },
            {
                "type": "insert",
                "name": "人"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.u();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:敌1",
                "value": "202"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "218"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "226"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "306"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "328"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "330"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "334"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "420"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "421"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1542"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "606"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "607"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "612"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "620"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "622"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "714"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "342"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1543"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "728"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "902"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "2202"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1022"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1126"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "1128"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "1400"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "1420"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "1534"
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 17,  0,310,  0,310,  0, 17,  0, 17,  0, 17,  0,310,  0,310],
    [ 17,  0,310,301,310,302,310,  2, 17,302, 17,  1,310,  0,310],
    [ 17,  0,310,311,310,311,310,311,310,311,310,311,310,  0,310],
    [ 17,  0,310,302,310,  1,310,  2,310,301,310,302,310,  0,310],
    [ 17,  0,311,  0,311,  0,311,  0,311,  0,311,  0,311,  0,311],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [310,  0,310,  0,310,  0,310,  0,310,  0,310,  0,310,  0,310],
    [310,  0,310,302,310,301,310,  1,310,  2,310,302,310,  0,310],
    [310,  0,310,311,310,311,310,311,310,311,310,311,310,  0,310],
    [310,  0,310,  2,310,301,310,  1,310,301,310,301,310,  0,310],
    [310,  0,311,  0,311,  0,311,  0,311,  0,311,  0,311,  0,310],
    [310,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310,310,310]
],
    "bgmap": [

],
    "fgmap": [

]
}