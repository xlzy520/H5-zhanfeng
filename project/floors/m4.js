main.floors.m4=
{
    "floorId": "m4",
    "title": "第三区",
    "name": "第三区",
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
                    "text": "${(flag:记录45)}",
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
                    "text": "${(flag:记录46)}",
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
                    "text": "${(flag:记录47)}",
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
                    "text": "${(flag:记录48)}",
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
                    "text": "${(flag:记录49)}",
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
                    "text": "${(flag:记录50)}",
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
                    "text": "${(flag:记录51)}",
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
                    "text": "${(flag:记录52)}",
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
                    "text": "${(flag:记录53)}",
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
                    "text": "${(flag:记录54)}",
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
                    "text": "${(flag:记录55)}",
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
                    "text": "${(flag:记录56)}",
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
                    "text": "${(flag:记录57)}",
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
                    "text": "${(flag:记录58)}",
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
                    "text": "${(flag:记录59)}",
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
                    "text": "${(flag:记录60)}",
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
                    "text": "${(flag:记录61)}",
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
                    "text": "${(flag:记录62)}",
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
                    "text": "${(flag:记录63)}",
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
                    "text": "${(flag:记录64)}",
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
                    "text": "${(flag:记录45)}",
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
                    "text": "${(flag:记录46)}",
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
                    "text": "${(flag:记录47)}",
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
                    "text": "${(flag:记录48)}",
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
                    "text": "${(flag:记录49)}",
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
                    "text": "${(flag:记录50)}",
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
                    "text": "${(flag:记录51)}",
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
                    "text": "${(flag:记录52)}",
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
                    "text": "${(flag:记录53)}",
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
                    "text": "${(flag:记录54)}",
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
                    "text": "${(flag:记录55)}",
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
                    "text": "${(flag:记录56)}",
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
                    "text": "${(flag:记录57)}",
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
                    "text": "${(flag:记录58)}",
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
                    "text": "${(flag:记录59)}",
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
                    "text": "${(flag:记录60)}",
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
                    "text": "${(flag:记录61)}",
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
                    "text": "${(flag:记录62)}",
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
                    "text": "${(flag:记录63)}",
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
                    "text": "${(flag:记录64)}",
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
                    8
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
                "floorId": "m11",
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
                "floorId": "m14",
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
                "floorId": "m10",
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
                "floorId": "m12",
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
                "floorId": "m10",
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
                "floorId": "m11",
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
                "floorId": "m14",
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
                "floorId": "m11",
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
                "floorId": "m10",
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
                "floorId": "m14",
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
                "floorId": "m13",
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
                "floorId": "m12",
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
                "floorId": "m11",
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
                "floorId": "m14",
                "loc": [
                    0,
                    9
                ],
                "time": 300
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "45"
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
                "value": "638"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "220"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1035"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "404"
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "46"
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
                "value": "1826"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1827"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1814"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1808"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "2016"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1900"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2106"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2107"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1901"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2319"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "50"
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
                "value": "342"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "343"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "520"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1422"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1926"
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
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "52"
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
                "value": "300"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "2222"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "306"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "322"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "602"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "202"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "714"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "710"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "711"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2315"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "906"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1138"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1108"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1400"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1424"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1634"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1800"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1802"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1904"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "1906"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "2020"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "107"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "53"
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
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1935"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "710"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "711"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "714"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "724"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "725"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "64"
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
                "value": "1942"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1943"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "2222"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "130"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "520"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "521"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "124"
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "63"
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
                "value": "1806"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1826"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1900"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1904"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1905"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1935"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1938"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2020"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2106"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1802"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2206"
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "62"
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
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "733"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "724"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "107"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "119"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "124"
            }
        ],
        "5,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "61"
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
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1004"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1134"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1035"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1124"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1125"
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "60"
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
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1034"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1130"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1131"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1140"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1141"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1035"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "59"
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
                "value": "1420"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1421"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1534"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1535"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1518"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1522"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "58"
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
                "value": "1800"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1806"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1826"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1936"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1904"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "55"
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
                "value": "1122"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1123"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1118"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "624"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1902"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "2004"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "2206"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "2217"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "2319"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "2322"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1220"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "119"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "56"
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
                "value": "220"
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
                "value": "318"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "320"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "105"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "125"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "57"
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
                "value": "616"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "617"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "618"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "628"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "629"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "630"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "631"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "718"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "904"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "720"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "722"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "724"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "725"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "733"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "740"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "804"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "810"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "850"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "904"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "906"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "54"
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
                "value": "1418"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1502"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1538"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1534"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1542"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1114"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1115"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "47"
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
                "value": "119"
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
                "value": "326"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "328"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "332"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "334"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "322"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "202"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "220"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "342"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "520"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2307"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "2310"
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "49"
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
                "value": "2213"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "2214"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "2220"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "2222"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "2202"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "2206"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1130"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1131"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1918"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1919"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "732"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1124"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "48"
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
                "value": "104"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1420"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "1516"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1517"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "1518"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "1520"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "1542"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "1634"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "1534"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "1638"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "1640"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "2211"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "2335"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1000"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "51"
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
                "value": "336"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "337"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "432"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "520"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "730"
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
    [306,307,307,307,307,307,307,307,307,307,307,307,307,307,306],
    [306,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,306],
    [306,  0,306,  0,306,  0,306,  0,306,  0,306,  0,306,  0,306],
    [306,  0,306,301,306,302,306,302,306,302,306,302,306,  0,306],
    [306,  0,306,307,306,307,306,307,306,307,306,307,306,  0,306],
    [306,  0,306,301,306,301,306,  2,306,301,306,301,306,  0,306],
    [307,  0,307,  0,307,  0,307,  0,307,  0,307,  0,307,  0,306],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,306],
    [306,  0,306,  0,306,  0,306,  0,306,  0,306,  0,306,  0,306],
    [306,  0,306,302,306,301,306,  1,306,301,306,301,306,  0,306],
    [306,  0,306,307,306,307,306,307,306,307,306,307,306,  0,306],
    [306,  0,306,301,306,301,306,301,306,302,306,301,306,  0,306],
    [306,  0,307,  0,307,  0,307,  0,307,  0,307,  0,307,  0,306],
    [306,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,306],
    [306,306,306,306,306,306,306,306,306,306,306,306,306,306,306]
],
    "bgmap": [

],
    "fgmap": [

]
}