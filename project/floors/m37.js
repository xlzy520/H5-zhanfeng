main.floors.m37=
{
    "floorId": "m37",
    "title": "鬼族英雄",
    "name": "鬼族英雄",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b62.jpg",
            0
        ],
        [
            1,
            2,
            "1800.jpg",
            0
        ],
        [
            81,
            2,
            "1802.jpg",
            0
        ],
        [
            161,
            2,
            "1804.jpg",
            0
        ],
        [
            241,
            2,
            "1806.jpg",
            0
        ],
        [
            321,
            2,
            "1808.jpg",
            0
        ],
        [
            401,
            2,
            "1810.jpg",
            0
        ],
        [
            1,
            116,
            "1812.jpg",
            0
        ],
        [
            81,
            116,
            "1814.jpg",
            0
        ],
        [
            161,
            116,
            "1816.jpg",
            0
        ],
        [
            241,
            116,
            "1818.jpg",
            0
        ],
        [
            321,
            116,
            "1820.jpg",
            0
        ],
        [
            401,
            116,
            "1822.jpg",
            0
        ],
        [
            1,
            256,
            "1824.jpg",
            0
        ],
        [
            81,
            256,
            "1826.jpg",
            0
        ],
        [
            161,
            256,
            "1828.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('卡选', 0)==9",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡92"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡93"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡94"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡95"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡96"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡97"
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
                    "value": "flag:卡102"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡103"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡104"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡105"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡106"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡107"
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
                "value": "1800"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1802"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1804"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1806"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1808"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1810"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1812"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1814"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1816"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1818"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1820"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1822"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1824"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1826"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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
                "value": "1828"
            },
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==9",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡101', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡91",
                                "value": "flag:id"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡91', 0)==flag:id",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
                                "value": "1+flag:id"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡101",
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
                "floorId": "m38",
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