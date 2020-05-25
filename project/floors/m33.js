main.floors.m33=
{
    "floorId": "m33",
    "title": "妖族英雄",
    "name": "妖族英雄",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b52.jpg",
            0
        ],
        [
            1,
            2,
            "1400.jpg",
            0
        ],
        [
            81,
            2,
            "1402.jpg",
            0
        ],
        [
            161,
            2,
            "1404.jpg",
            0
        ],
        [
            241,
            2,
            "1406.jpg",
            0
        ],
        [
            321,
            2,
            "1408.jpg",
            0
        ],
        [
            401,
            2,
            "1410.jpg",
            0
        ],
        [
            1,
            116,
            "1412.jpg",
            0
        ],
        [
            81,
            116,
            "1414.jpg",
            0
        ],
        [
            161,
            116,
            "1416.jpg",
            0
        ],
        [
            241,
            116,
            "1418.jpg",
            0
        ],
        [
            321,
            116,
            "1420.jpg",
            0
        ],
        [
            401,
            116,
            "1422.jpg",
            0
        ],
        [
            1,
            256,
            "1424.jpg",
            0
        ],
        [
            81,
            256,
            "1426.jpg",
            0
        ],
        [
            161,
            256,
            "1428.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('卡选', 0)==7",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡72"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡73"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡74"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡75"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡76"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡77"
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
                    "value": "flag:卡82"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡83"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡84"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡85"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡86"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡87"
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
                "value": "1400"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1402"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1404"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1406"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1408"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1410"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1412"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1414"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1416"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1418"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1420"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1422"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1424"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1426"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
                "value": "1428"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==7",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡81', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡71",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡71', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡81",
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
                "floorId": "m34",
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
    [  0,104,  0,104,  0,  0,104,  0,  0,  0,  0,  0,  0,  0,  0],
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