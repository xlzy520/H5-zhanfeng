main.floors.m3=
{
    "floorId": "m3",
    "title": "第二区",
    "name": "第二区",
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
                    "text": "${(flag:记录25)}",
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
                    "text": "${(flag:记录26)}",
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
                    "text": "${(flag:记录27)}",
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
                    "text": "${(flag:记录28)}",
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
                    "text": "${(flag:记录29)}",
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
                    "text": "${(flag:记录30)}",
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
                    "text": "${(flag:记录31)}",
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
                    "text": "${(flag:记录32)}",
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
                    "text": "${(flag:记录33)}",
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
                    "text": "${(flag:记录34)}",
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
                    "text": "${(flag:记录35)}",
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
                    "text": "${(flag:记录36)}",
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
                    "text": "${(flag:记录37)}",
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
                    "text": "${(flag:记录38)}",
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
                    "text": "${(flag:记录39)}",
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
                    "text": "${(flag:记录40)}",
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
                    "text": "${(flag:记录41)}",
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
                    "text": "${(flag:记录42)}",
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
                    "text": "${(flag:记录43)}",
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
                    "text": "${(flag:记录44)}",
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
                    "text": "${(flag:记录25)}",
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
                    "text": "${(flag:记录26)}",
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
                    "text": "${(flag:记录27)}",
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
                    "text": "${(flag:记录28)}",
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
                    "text": "${(flag:记录29)}",
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
                    "text": "${(flag:记录30)}",
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
                    "text": "${(flag:记录31)}",
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
                    "text": "${(flag:记录32)}",
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
                    "text": "${(flag:记录33)}",
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
                    "text": "${(flag:记录34)}",
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
                    "text": "${(flag:记录35)}",
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
                    "text": "${(flag:记录36)}",
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
                    "text": "${(flag:记录37)}",
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
                    "text": "${(flag:记录38)}",
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
                    "text": "${(flag:记录39)}",
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
                    "text": "${(flag:记录40)}",
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
                    "text": "${(flag:记录41)}",
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
                    "text": "${(flag:记录42)}",
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
                    "text": "${(flag:记录43)}",
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
                    "text": "${(flag:记录44)}",
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
    "parallelDo": "",
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
                    5
                ],
                "time": 300
            }
        ],
        "3,3": [
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
        "5,3": [
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
        "7,3": [
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
        "9,3": [
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
                "floorId": "m12",
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
                "floorId": "m11",
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
                "floorId": "m10",
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
                "floorId": "m13",
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
                "floorId": "m12",
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
                "floorId": "m12",
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
                "floorId": "m14",
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
                "floorId": "m11",
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
                "floorId": "m11",
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
                "floorId": "m13",
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
                "floorId": "m12",
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
                "floorId": "m10",
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
                "floorId": "m14",
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
                "floorId": "m11",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "32"
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
                "value": "602"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "612"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "606"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "620"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "622"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "710"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "711"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "714"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "715"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "724"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "725"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "733"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "628"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "33"
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
                "value": "202"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "302"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "303"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "300"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "306"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "314"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "315"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "318"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "320"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "326"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "328"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2310"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "220"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "221"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "35"
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
                "value": "1018"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1019"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "300"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "301"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "406"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1102"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1103"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1904"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1905"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1932"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1933"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "107"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "124"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2310"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "36"
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
                "value": "1020"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1021"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1010"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1011"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1124"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1125"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1326"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1212"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "2217"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "2220"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1935"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2202"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2206"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "38"
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
                "value": "640"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "641"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "724"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "725"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1106"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1107"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1520"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1521"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1922"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1924"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2208"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2220"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2221"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "220"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "39"
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
                "value": "636"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "637"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "612"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "613"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "733"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "708"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "710"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "714"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "606"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "607"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "724"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "730"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "124"
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "25"
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
                "value": "1406"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1407"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "512"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "513"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1512"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1634"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1514"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1520"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1522"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1632"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2307"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1530"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1532"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1534"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "37"
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
                "value": "1528"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1536"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1920"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1921"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1936"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1529"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1537"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "220"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1220"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "119"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "121"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2220"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2306"
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "43"
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
                "value": "2328"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "2335"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1942"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1943"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1926"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1935"
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "26"
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
                "value": "2214"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "2220"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "216"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "217"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1124"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1125"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "2210"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "27"
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
                "value": "1806"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1807"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1912"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1913"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1900"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "104"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "28"
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
                "value": "1806"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1912"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "2214"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "121"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "220"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1900"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "104"
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "29"
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
                "value": "104"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "332"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "333"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "326"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "327"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "600"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "602"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "603"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "338"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "339"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "608"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "609"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "601"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "712"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "713"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "814"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "815"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1126"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1127"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "2310"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1504"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "44"
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
                "value": "302"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "303"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "304"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "305"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "310"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "318"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "319"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "320"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "321"
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
                "value": "613"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "636"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "637"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "708"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "709"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1510"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "2207"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "2307"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "2310"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "702"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "703"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "222"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "104"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "105"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "40"
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
                "value": "405"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1402"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1403"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1404"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1408"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1409"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1416"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1418"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1420"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1422"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1424"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1426"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1428"
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
                "value": "1640"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1641"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "404"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1421"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "2211"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1114"
            }
        ],
        "5,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "41"
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
                "value": "404"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "405"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1006"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1012"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1022"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1024"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1026"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1028"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1030"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1032"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1036"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1014"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1134"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1135"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1220"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1120"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "832"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "833"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1018"
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "42"
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
                "value": "404"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "405"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1614"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1615"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "2010"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "204"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "208"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "314"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "214"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "216"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "218"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "220"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "222"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "226"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "228"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "230"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "236"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "238"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "105"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1120"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1121"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "30"
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
                "value": "302"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "303"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "234"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "235"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1012"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1013"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1018"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1019"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1020"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1021"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1102"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1103"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1124"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1125"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1224"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1306"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1320"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1322"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1500"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1501"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1704"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1935"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "2012"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "906"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "107"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "1802"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "2220"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "34"
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
                "value": "111"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "314"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "315"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1114"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1115"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1138"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1139"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1202"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1203"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1204"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1205"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1222"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1223"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1318"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1319"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1418"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1419"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1502"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1503"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1538"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1539"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1636"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1637"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "2206"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "2217"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "2313"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "2333"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "2322"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "31"
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
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1035"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1104"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1105"
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
                "value": "1208"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1209"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1300"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1408"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1410"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1412"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1428"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1429"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1506"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1508"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1526"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "2008"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "2213"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "2222"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "2214"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "2305"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "102"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "105"
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
    [308,309,309,309,309,309,309,309,309,309,309,309,309,309,308],
    [308,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,308],
    [308,  0,308,  0,308,  0,308,  0,308,  0,308,  0,308,  0,308],
    [308,  0,308,302,308,301,308,301,308,301,308,  1,308,  0,308],
    [308,  0,308,309,308,309,308,309,308,309,308,309,308,  0,308],
    [308,  0,308,  2,308,  2,308,302,308,302,308,  2,308,  0,308],
    [309,  0,309,  0,309,  0,309,  0,309,  0,309,  0,309,  0,308],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,308],
    [308,  0,308,  0,308,  0,308,  0,308,  0,308,  0,308,  0,308],
    [308,  0,308,302,308,302,308,302,308,302,308,302,308,  0,308],
    [308,  0,308,309,308,309,308,309,308,309,308,309,308,  0,308],
    [308,  0,308,  1,308,  1,308,  1,308,301,308,  2,308,  0,308],
    [308,  0,309,  0,309,  0,309,  0,309,  0,309,  0,309,  0,308],
    [308,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,308],
    [308,308,308,308,308,308,308,308,308,308,308,308,308,308,308]
],
    "bgmap": [

],
    "fgmap": [

]
}