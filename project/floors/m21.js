main.floors.m21=
{
    "floorId": "m21",
    "title": "人族英雄",
    "name": "人族英雄",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b22.jpg",
            0
        ],
        [
            1,
            2,
            "200.jpg",
            0
        ],
        [
            81,
            2,
            "202.jpg",
            0
        ],
        [
            161,
            2,
            "204.jpg",
            0
        ],
        [
            241,
            2,
            "206.jpg",
            0
        ],
        [
            321,
            2,
            "208.jpg",
            0
        ],
        [
            401,
            2,
            "210.jpg",
            0
        ],
        [
            1,
            116,
            "212.jpg",
            0
        ],
        [
            81,
            116,
            "214.jpg",
            0
        ],
        [
            161,
            116,
            "216.jpg",
            0
        ],
        [
            241,
            116,
            "218.jpg",
            0
        ],
        [
            321,
            116,
            "220.jpg",
            0
        ],
        [
            401,
            116,
            "222.jpg",
            0
        ],
        [
            1,
            256,
            "224.jpg",
            0
        ],
        [
            81,
            256,
            "226.jpg",
            0
        ],
        [
            161,
            256,
            "228.jpg",
            0
        ],
        [
            241,
            256,
            "230.jpg",
            0
        ],
        [
            321,
            256,
            "232.jpg",
            0
        ],
        [
            401,
            256,
            "234.jpg",
            0
        ],
        [
            1,
            370,
            "236.jpg",
            0
        ],
        [
            81,
            370,
            "238.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('卡选', 0)==1",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡12"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡13"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡14"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡15"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡16"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡17"
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
                    "value": "flag:卡22"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡23"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡24"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡25"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡26"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.w();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:9",
                    "value": "flag:卡27"
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
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==208",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "209"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "208"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==208",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "209"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "208"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==200",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "201"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "200"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==200",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "201"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "200"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==202",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "203"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "202"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==202",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "203"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "202"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==204",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "205"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "204"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==204",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "205"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "204"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==206",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "207"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "206"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==206",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "207"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "206"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==210",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "211"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "210"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==210",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "211"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "210"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==212",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "213"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "212"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==212",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "213"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "212"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==214",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "215"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "214"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==214",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "215"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "214"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==216",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "217"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "216"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==216",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "217"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "216"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==218",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "219"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "218"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==218",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "219"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "218"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==220",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "221"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "220"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==220",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "221"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "220"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==222",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "223"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "222"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==222",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "223"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "222"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==224",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "225"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "224"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==224",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "225"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "224"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==226",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "227"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "226"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==226",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "227"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "226"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==228",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "229"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "228"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==228",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "229"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "228"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==230",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "231"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "230"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==230",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "231"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "230"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==232",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "233"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "232"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==232",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "233"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "232"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==234",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "235"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "234"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==234",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "235"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "234"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==236",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "237"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "236"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==236",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "237"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "236"
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
                "floorId": "m22",
                "loc": [
                    7,
                    7
                ],
                "time": 300
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('卡选', 0)==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡21', 0)==238",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "239"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡11",
                                "value": "238"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('卡11', 0)==238",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "239"
                            }
                        ],
                        "false": [
                            {
                                "type": "setValue",
                                "name": "flag:卡21",
                                "value": "238"
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
                "floorId": "m22",
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
    [  0,104,  0,104,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}