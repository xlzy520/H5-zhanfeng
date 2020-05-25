main.floors.m29=
{
    "floorId": "m29",
    "title": "精族英雄",
    "name": "精族英雄",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b42.jpg",
            0
        ],
        [
            1,
            2,
            "1000.jpg",
            0
        ],
        [
            81,
            2,
            "1002.jpg",
            0
        ],
        [
            161,
            2,
            "1004.jpg",
            0
        ],
        [
            241,
            2,
            "1006.jpg",
            0
        ],
        [
            321,
            2,
            "1008.jpg",
            0
        ],
        [
            401,
            2,
            "1010.jpg",
            0
        ],
        [
            1,
            116,
            "1012.jpg",
            0
        ],
        [
            81,
            116,
            "1014.jpg",
            0
        ],
        [
            161,
            116,
            "1016.jpg",
            0
        ],
        [
            241,
            116,
            "1018.jpg",
            0
        ],
        [
            321,
            116,
            "1020.jpg",
            0
        ],
        [
            401,
            116,
            "1022.jpg",
            0
        ],
        [
            1,
            256,
            "1024.jpg",
            0
        ],
        [
            81,
            256,
            "1026.jpg",
            0
        ],
        [
            161,
            256,
            "1028.jpg",
            0
        ],
        [
            241,
            256,
            "1030.jpg",
            0
        ],
        [
            321,
            256,
            "1032.jpg",
            0
        ],
        [
            401,
            256,
            "1034.jpg",
            0
        ],
        [
            1,
            370,
            "1036.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('卡选', 0)==5",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡52"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡53"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡54"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡55"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡56"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡57"
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
                    "value": "flag:卡62"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡63"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡64"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡65"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡66"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡67"
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
                "value": "1000"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1002"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1004"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1006"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1008"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1010"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1012"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1014"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1016"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1018"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1020"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1022"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1024"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1026"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1028"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1030"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1032"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1034"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
                "value": "1036"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==5",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡61', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡51",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡51', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡61",
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
                "floorId": "m30",
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
    [  0,104,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}