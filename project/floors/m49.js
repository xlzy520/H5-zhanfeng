main.floors.m49=
{
    "floorId": "m49",
    "title": "鬼族卡组",
    "name": "鬼族卡组",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        [
            0,
            0,
            "b62.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡91"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h1();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h1();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h1b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡92"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h2();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h2();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h2b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡93"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h3();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h3();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h3b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡94"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h4();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h4();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h4b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡95"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h5();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h5();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h5b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡96"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h6();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h6();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h6b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡97"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h7();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h7();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h7b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡101"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h8();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h8();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h8b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡102"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h9();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h9();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h9b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡103"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h10();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h10();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h10b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡104"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h11();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h11();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h11b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡105"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h12();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h12();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h12b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡106"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h13();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h13();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h13b();\n}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:卡107"
        },
        {
            "type": "if",
            "condition": "core.getFlag('id', 0)<=199||core.getFlag('id', 0)>=2200",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.h14();\n}"
                }
            ],
            "false": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.b();\n}"
                },
                {
                    "type": "if",
                    "condition": "core.getFlag('id', 0)==2*status:atk",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h14();\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.h14b();\n}"
                        }
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "0,7": [
            {
                "type": "choices",
                "text": "\t[商人,woman]这里是鬼族卡组，上面是卡组1，下面的是卡组2",
                "choices": [
                    {
                        "text": "查看人族卡组",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.t();\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "m45",
                                "loc": [
                                    1,
                                    7
                                ],
                                "time": 200
                            }
                        ]
                    },
                    {
                        "text": "查看仙族卡组",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.t();\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "m46",
                                "loc": [
                                    1,
                                    7
                                ],
                                "time": 200
                            }
                        ]
                    },
                    {
                        "text": "查看精族卡组",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.t();\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "m47",
                                "loc": [
                                    1,
                                    7
                                ],
                                "time": 200
                            }
                        ]
                    },
                    {
                        "text": "查看妖族卡组",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.t();\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "m48",
                                "loc": [
                                    1,
                                    7
                                ],
                                "time": 200
                            }
                        ]
                    },
                    {
                        "text": "查看鬼族卡组",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.t();\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "m49",
                                "loc": [
                                    1,
                                    7
                                ],
                                "time": 200
                            }
                        ]
                    },
                    {
                        "text": "回到大厅",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.t();\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "m1",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 200
                            }
                        ]
                    },
                    {
                        "text": "关闭选项",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [122,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
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