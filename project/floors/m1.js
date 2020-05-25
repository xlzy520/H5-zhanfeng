main.floors.m1=
{
    "floorId": "m1",
    "title": "广场",
    "name": "广场",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        0,
        0,
        "b00.jpg",
        0
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "item:redJewel",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:wand",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:superPotion",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:coin",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:I321",
            "value": "1"
        },
        "若是初见，请务必要查看上方正中的木牌了解规则设定等",
        {
            "type": "setValue",
            "name": "flag:卡91",
            "value": "1804"
        },
        {
            "type": "setValue",
            "name": "flag:卡101",
            "value": "1805"
        },
        {
            "type": "setValue",
            "name": "flag:卡92",
            "value": "1902"
        },
        {
            "type": "setValue",
            "name": "flag:卡102",
            "value": "1903"
        },
        {
            "type": "addValue",
            "name": "flag:余1902",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡93",
            "value": "1918"
        },
        {
            "type": "setValue",
            "name": "flag:卡103",
            "value": "1919"
        },
        {
            "type": "addValue",
            "name": "flag:余1918",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡94",
            "value": "1924"
        },
        {
            "type": "setValue",
            "name": "flag:卡104",
            "value": "1925"
        },
        {
            "type": "addValue",
            "name": "flag:余1924",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡95",
            "value": "1938"
        },
        {
            "type": "setValue",
            "name": "flag:卡105",
            "value": "1939"
        },
        {
            "type": "addValue",
            "name": "flag:余1938",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡96",
            "value": "2102"
        },
        {
            "type": "setValue",
            "name": "flag:卡106",
            "value": "2013"
        },
        {
            "type": "addValue",
            "name": "flag:余2102",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡97",
            "value": "2104"
        },
        {
            "type": "setValue",
            "name": "flag:卡107",
            "value": "2105"
        },
        {
            "type": "addValue",
            "name": "flag:余2104",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡71",
            "value": "1422"
        },
        {
            "type": "setValue",
            "name": "flag:卡81",
            "value": "1423"
        },
        {
            "type": "setValue",
            "name": "flag:卡72",
            "value": "1502"
        },
        {
            "type": "setValue",
            "name": "flag:卡82",
            "value": "1503"
        },
        {
            "type": "addValue",
            "name": "flag:余1502",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡73",
            "value": "1538"
        },
        {
            "type": "setValue",
            "name": "flag:卡83",
            "value": "1539"
        },
        {
            "type": "addValue",
            "name": "flag:余1538",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡74",
            "value": "1636"
        },
        {
            "type": "setValue",
            "name": "flag:卡84",
            "value": "1637"
        },
        {
            "type": "addValue",
            "name": "flag:余1636",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡75",
            "value": "1516"
        },
        {
            "type": "setValue",
            "name": "flag:卡85",
            "value": "1517"
        },
        {
            "type": "addValue",
            "name": "flag:余1516",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡76",
            "value": "1534"
        },
        {
            "type": "setValue",
            "name": "flag:卡86",
            "value": "1535"
        },
        {
            "type": "addValue",
            "name": "flag:余1534",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:卡77",
            "value": "1708"
        },
        {
            "type": "setValue",
            "name": "flag:卡87",
            "value": "1709"
        },
        {
            "type": "addValue",
            "name": "flag:余1708",
            "value": "2"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.platform.isPC==true",
            "true": [
                {
                    "type": "showTextImage",
                    "code": 80,
                    "text": "${(flag:记录1)}",
                    "loc": [
                        139,
                        70
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 81,
                    "text": "${(flag:记录2)}",
                    "loc": [
                        203,
                        70
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 82,
                    "text": "${(flag:记录3)}",
                    "loc": [
                        267,
                        70
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 83,
                    "text": "${(flag:记录4)}",
                    "loc": [
                        331,
                        70
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('胜场记录', 0)>=10",
                    "true": [
                        {
                            "type": "showTextImage",
                            "code": 84,
                            "text": "${(flag:胜场记录)}",
                            "loc": [
                                230,
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
                            "code": 84,
                            "text": "${(flag:胜场记录)}",
                            "loc": [
                                235,
                                358
                            ],
                            "lineHeight": 1,
                            "opacity": 1,
                            "time": 0
                        }
                    ]
                }
            ],
            "false": [
                {
                    "type": "showTextImage",
                    "code": 80,
                    "text": "${(flag:记录1)}",
                    "loc": [
                        139,
                        68
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 81,
                    "text": "${(flag:记录2)}",
                    "loc": [
                        203,
                        68
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 82,
                    "text": "${(flag:记录3)}",
                    "loc": [
                        267,
                        68
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "showTextImage",
                    "code": 83,
                    "text": "${(flag:记录4)}",
                    "loc": [
                        331,
                        68
                    ],
                    "lineHeight": 1,
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('胜场记录', 0)>=10",
                    "true": [
                        {
                            "type": "showTextImage",
                            "code": 84,
                            "text": "${(flag:胜场记录)}",
                            "loc": [
                                230,
                                356
                            ],
                            "lineHeight": 1,
                            "opacity": 1,
                            "time": 0
                        }
                    ],
                    "false": [
                        {
                            "type": "showTextImage",
                            "code": 84,
                            "text": "${(flag:胜场记录)}",
                            "loc": [
                                235,
                                356
                            ],
                            "lineHeight": 1,
                            "opacity": 1,
                            "time": 0
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:卡选",
            "value": "0"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "insert",
                "name": "老人左"
            }
        ],
        "8,9": [
            {
                "type": "insert",
                "name": "老人右"
            }
        ],
        "13,11": [
            {
                "type": "if",
                "condition": "core.getFlag('总积分', 0)>=100",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                13,
                                11
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    "总积分不低于100以后再点击此处可通过"
                ]
            }
        ],
        "14,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m4",
                "loc": [
                    0,
                    7
                ],
                "time": 300
            }
        ],
        "14,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MT0",
                "loc": [
                    0,
                    7
                ],
                "time": 300
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:新一轮",
                "value": "2"
            },
            {
                "type": "setValue",
                "name": "flag:胜场记录记",
                "value": "flag:胜场记录"
            },
            {
                "type": "if",
                "condition": "core.getFlag('胜场记录', 0)<=3",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:胜场记录",
                        "value": "4"
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:胜场",
                "value": "-4+flag:胜场记录"
            },
            {
                "type": "setValue",
                "name": "flag:胜场记录",
                "value": "flag:胜场记录记"
            },
            {
                "type": "setValue",
                "name": "flag:士气记",
                "value": "10"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.z0();\n}"
            },
            {
                "type": "setValue",
                "name": "flag:摸1",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:摸2",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:摸3",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:摸4",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:摸5",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:摸6",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:摸7",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余1",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余2",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余3",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余4",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余5",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余6",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余7",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余8",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余9",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余10",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余11",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余12",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余13",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余14",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余15",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余16",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余17",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余18",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余19",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余20",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余21",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余22",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余23",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余24",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余25",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余26",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余27",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余28",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余29",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余30",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余31",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:余32",
                "value": "0"
            }
        ],
        "7,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m50",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,8": [
            {
                "type": "if",
                "condition": "core.getFlag('总积分', 0)>=70",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                13,
                                8
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    "总积分不低于70以后再点击此处可通过"
                ]
            }
        ],
        "4,2": [
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
        "6,2": [
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
        "8,2": [
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
        "10,2": [
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
        "4,3": [
            {
                "type": "if",
                "condition": "core.getFlag('记录1', 0)<=2",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:敌1",
                        "value": "1422"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌2",
                        "value": "1638"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌3",
                        "value": "1640"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌4",
                        "value": "1610"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌5",
                        "value": "1700"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌6",
                        "value": "2305"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌7",
                        "value": "2327"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌1",
                                "value": "1422"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌1",
                                "value": "flag:1敌1"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌2', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌2",
                                "value": "1638"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌2",
                                "value": "flag:1敌2"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌3', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌3",
                                "value": "1640"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌3",
                                "value": "flag:1敌3"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌4', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌4",
                                "value": "1610"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌4",
                                "value": "flag:1敌4"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌5', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌5",
                                "value": "1700"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌5",
                                "value": "flag:1敌5"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌6', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌6",
                                "value": "2305"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌6",
                                "value": "flag:1敌6"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('1敌7', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌7",
                                "value": "2327"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌7",
                                "value": "flag:1敌7"
                            }
                        ]
                    },
                    {
                        "type": "insert",
                        "name": "自定义1"
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "1"
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
            }
        ],
        "6,3": [
            {
                "type": "if",
                "condition": "core.getFlag('记录2', 0)<=2",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:敌1",
                        "value": "204"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌2",
                        "value": "205"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌3",
                        "value": "308"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌4",
                        "value": "324"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌5",
                        "value": "400"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌6",
                        "value": "402"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌7",
                        "value": "404"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌8",
                        "value": "406"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌9",
                        "value": "412"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌10",
                        "value": "416"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌11",
                        "value": "424"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌12",
                        "value": "428"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌13",
                        "value": "518"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:敌14",
                        "value": "101"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌1",
                                "value": "204"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌1",
                                "value": "flag:2敌1"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌2', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌2",
                                "value": "205"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌2",
                                "value": "flag:2敌2"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌3', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌3",
                                "value": "308"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌3",
                                "value": "flag:2敌3"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌4', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌4",
                                "value": "324"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌4",
                                "value": "flag:2敌4"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌5', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌5",
                                "value": "400"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌5",
                                "value": "flag:2敌5"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌6', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌6",
                                "value": "402"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌6",
                                "value": "flag:2敌6"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌7', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌7",
                                "value": "404"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌7",
                                "value": "flag:2敌7"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌8', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌8",
                                "value": "406"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌8",
                                "value": "flag:2敌8"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌9', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌9",
                                "value": "412"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌9",
                                "value": "flag:2敌9"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌10', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌10",
                                "value": "416"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌10",
                                "value": "flag:2敌10"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌11', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌11",
                                "value": "424"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌11",
                                "value": "flag:2敌11"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌12', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌12",
                                "value": "428"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌12",
                                "value": "flag:2敌12"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌13', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌13",
                                "value": "518"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌13",
                                "value": "flag:2敌13"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('2敌14', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:敌14",
                                "value": "101"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:敌14",
                                "value": "flag:2敌14"
                            }
                        ]
                    },
                    {
                        "type": "insert",
                        "name": "自定义2"
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "2"
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
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "3"
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
                "value": "426"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "1220"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "520"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "1228"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "632"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "633"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "634"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "635"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "738"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "739"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "730"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "1926"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "742"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "1700"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "816"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "2221"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "105"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "107"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "125"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "336"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "432"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:关卡",
                "value": "4"
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
                "value": "204"
            },
            {
                "type": "setValue",
                "name": "flag:敌2",
                "value": "205"
            },
            {
                "type": "setValue",
                "name": "flag:敌3",
                "value": "206"
            },
            {
                "type": "setValue",
                "name": "flag:敌4",
                "value": "207"
            },
            {
                "type": "setValue",
                "name": "flag:敌5",
                "value": "300"
            },
            {
                "type": "setValue",
                "name": "flag:敌6",
                "value": "301"
            },
            {
                "type": "setValue",
                "name": "flag:敌7",
                "value": "404"
            },
            {
                "type": "setValue",
                "name": "flag:敌8",
                "value": "406"
            },
            {
                "type": "setValue",
                "name": "flag:敌9",
                "value": "407"
            },
            {
                "type": "setValue",
                "name": "flag:敌10",
                "value": "424"
            },
            {
                "type": "setValue",
                "name": "flag:敌11",
                "value": "425"
            },
            {
                "type": "setValue",
                "name": "flag:敌12",
                "value": "428"
            },
            {
                "type": "setValue",
                "name": "flag:敌13",
                "value": "429"
            },
            {
                "type": "setValue",
                "name": "flag:敌14",
                "value": "518"
            },
            {
                "type": "setValue",
                "name": "flag:敌15",
                "value": "1018"
            },
            {
                "type": "setValue",
                "name": "flag:敌16",
                "value": "1019"
            },
            {
                "type": "setValue",
                "name": "flag:敌17",
                "value": "1102"
            },
            {
                "type": "setValue",
                "name": "flag:敌18",
                "value": "1103"
            },
            {
                "type": "setValue",
                "name": "flag:敌19",
                "value": "1134"
            },
            {
                "type": "setValue",
                "name": "flag:敌20",
                "value": "1230"
            },
            {
                "type": "setValue",
                "name": "flag:敌21",
                "value": "1231"
            },
            {
                "type": "setValue",
                "name": "flag:敌22",
                "value": "1306"
            },
            {
                "type": "setValue",
                "name": "flag:敌23",
                "value": "1904"
            },
            {
                "type": "setValue",
                "name": "flag:敌24",
                "value": "1905"
            },
            {
                "type": "setValue",
                "name": "flag:敌25",
                "value": "1934"
            },
            {
                "type": "setValue",
                "name": "flag:敌26",
                "value": "2106"
            },
            {
                "type": "setValue",
                "name": "flag:敌27",
                "value": "2120"
            },
            {
                "type": "setValue",
                "name": "flag:敌28",
                "value": "2203"
            }
        ],
        "4,4": [
            "在老人处设置好卡组*1可通过"
        ],
        "5,4": [
            {
                "type": "choices",
                "text": "在这里可以更改角色行走图（初始角色行走图是随机的）",
                "choices": [
                    {
                        "text": "博丽灵梦",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero.png"
                            }
                        ]
                    },
                    {
                        "text": "雾雨魔理沙",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero2.png"
                            }
                        ]
                    },
                    {
                        "text": "森近霖之助",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero3.png"
                            }
                        ]
                    },
                    {
                        "text": "犬走椛",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero4.png"
                            }
                        ]
                    },
                    {
                        "text": "蕾蒂",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero5.png"
                            }
                        ]
                    },
                    {
                        "text": "伊吹萃香",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero6.png"
                            }
                        ]
                    },
                    {
                        "text": "幽香",
                        "action": [
                            {
                                "type": "setHeroIcon",
                                "name": "hero7.png"
                            }
                        ]
                    },
                    {
                        "text": "（不进行更改）",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            "在老人处设置好卡组*2可通过"
        ],
        "7,4": [
            "每个关卡所需出战的卡组数量会有所不同（卡组*1、*2、*3、*4），进入关卡后若需要的是卡组*3则直接使用在左边老人处设置出战的卡组*3的3个卡组进行战斗。\n玩家一共10个卡组，5个种族各两个，可在右边商人处为卡组重新选择卡牌，重新选择的卡组中原本的卡牌会回归到牌库中。初始卡组较弱，建议根据各个关卡的不同特点自行设置好卡组再去挑战。",
            "牌库中5个种族（即非中立）的卡各有两张，而中立的卡只有1张。每个卡组1张英雄和6张其他卡，选择英雄角色时英雄角色卡右上3个数字表示其余可选择的6张卡种类。\n浏览牌库方法：游戏设置-浏览地图（快捷键键盘右上pgup和pgdn）。卡牌按稀有度、CD、攻击、生命的优先度依次排序（中立和英雄卡不按稀有度排序）。使用背包里的纸条，可以查看全部的技能说明。",
            "关卡获胜后获得的积分，按胜利时我方被直接攻击消耗的士气来计算（不计算被技能影响的士气部分），被消耗不超过20%（-4、-5、-6、-7）记3分，不超过40%（-8、-10、-12、-14）记2分，否则记1分。所有关卡都可无限挑战，最高分记录显示在关卡入口处。使用背包里的图纸可查看和提交总积分成绩。\n大厅上方的左边两个关卡在3分通过以后可以对关卡进行自定义。\n大厅下方的是摸牌战关卡，规则与其他关卡有少许不同，是单独结算成绩的，详细可进入关卡后在其左边木牌处查看。"
        ],
        "8,4": [
            "在老人处设置好卡组*3可通过"
        ],
        "9,4": [
            "已知bug：\n1.选择非英雄且非中立角色卡牌时，若卡组1选择了XX，之后卡组2也选择XX，再之后解散并重新卡组1再次选择XX则不能正常显示XX的卡图。此时可以将卡组1、2都重新选择一些不需要的卡牌，再重新选择需要的卡牌即可解决此bug\n2.神通卡“烈火焚身”，在毁灭加护类技能角色后，若存在失去加护导致生命小于1的角色则神通卡“烈火焚身”不会消失"
        ],
        "10,4": [
            "在老人处设置好卡组*4可通过"
        ],
        "13,2": [
            {
                "type": "if",
                "condition": "core.getFlag('总积分', 0)>=10",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                13,
                                2
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    "总积分不低于10以后再点击此处可通过"
                ]
            }
        ],
        "13,5": [
            {
                "type": "if",
                "condition": "core.getFlag('总积分', 0)>=40",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                13,
                                5
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    "总积分不低于40以后再点击此处可通过"
                ]
            }
        ],
        "14,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m3",
                "loc": [
                    0,
                    7
                ],
                "time": 300
            }
        ],
        "14,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m2",
                "loc": [
                    0,
                    7
                ],
                "time": 300
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
    [310,310,310,  0,310,310,310,310,310,310,310,310,310,310,310],
    [310,310,310, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [311,311,311, 17,301, 17,302, 17,  1, 17,  2, 17, 17,181,  0],
    [  0,  0, 17, 17,  0, 17,  0, 17,  0, 17,  0, 17, 17,  0, 17],
    [310,310, 17,  0,181,128,181,128,181,128,181,  0,  0,  0, 17],
    [311,311, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,181,  0],
    [315,  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [311,311, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [315,  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,181,  0],
    [310,310, 17,  0,  0,  0,125,  0,122,  0,  0,  0,  0,  0, 17],
    [311,311, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17,  0, 17],
    [  0,  0,  0,310,310,310,310,  3,310,310,310,310, 17,181,  0],
    [310,310,310,310,310,310,310,310,310,310,310,310, 17, 17, 17],
    [310,310,310,310,310,310,310,310,310,310,310,310,310,310,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310,310,310]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10000,10001,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10000,10001,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}