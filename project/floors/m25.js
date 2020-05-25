main.floors.m25=
{
    "floorId": "m25",
    "title": "仙族英雄",
    "name": "仙族英雄",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b32.jpg",
            0
        ],
        [
            1,
            2,
            "600.jpg",
            0
        ],
        [
            81,
            2,
            "602.jpg",
            0
        ],
        [
            161,
            2,
            "604.jpg",
            0
        ],
        [
            241,
            2,
            "606.jpg",
            0
        ],
        [
            321,
            2,
            "608.jpg",
            0
        ],
        [
            401,
            2,
            "610.jpg",
            0
        ],
        [
            1,
            116,
            "612.jpg",
            0
        ],
        [
            81,
            116,
            "614.jpg",
            0
        ],
        [
            161,
            116,
            "616.jpg",
            0
        ],
        [
            241,
            116,
            "618.jpg",
            0
        ],
        [
            321,
            116,
            "620.jpg",
            0
        ],
        [
            401,
            116,
            "622.jpg",
            0
        ],
        [
            1,
            256,
            "624.jpg",
            0
        ],
        [
            81,
            256,
            "626.jpg",
            0
        ],
        [
            161,
            256,
            "628.jpg",
            0
        ],
        [
            241,
            256,
            "630.jpg",
            0
        ],
        [
            321,
            256,
            "632.jpg",
            0
        ],
        [
            401,
            256,
            "634.jpg",
            0
        ],
        [
            1,
            370,
            "636.jpg",
            0
        ],
        [
            81,
            370,
            "638.jpg",
            0
        ],
        [
            161,
            370,
            "640.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('卡选', 0)==3",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡32"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡33"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡34"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡35"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡36"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡37"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                }
            ],
            "false": [
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡42"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡43"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡44"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡45"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡46"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡47"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "600"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "5"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "602"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "604"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "606"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "2"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "608"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "610"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "5"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "612"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "614"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "616"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "618"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "620"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "2"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,4": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "622"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "2"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "624"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "626"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "5"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "628"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "2"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "630"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "5"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "632"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,9": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "634"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "5"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "0"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "636"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "638"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "1"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,12": [
            {
                "type": "setValue",
                "name": "flag:id",
                "value": "640"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==3",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡41', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡31",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡31', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡41",
                                "value": "flag:id"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:卡余",
                "value": "6"
            },
            {
                "type": "setValue",
                "name": "flag:角",
                "value": "4"
            },
            {
                "type": "setValue",
                "name": "flag:法",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:神",
                "value": "2"
            },
            "选择成功！该英雄可携带：\n${(flag:角)}张非英雄角色卡、${(flag:法)}张法宝卡、${(flag:神)}张神通卡",
            {
                "type": "changeFloor",
                "floorId": "m26",
                "loc": [
                    7,
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}