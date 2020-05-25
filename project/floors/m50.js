main.floors.m50=
{
    "floorId": "m50",
    "title": "摸牌战1",
    "name": "摸牌战1",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        [
            0,
            0,
            "b42.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('新一轮', 0)==2",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:关卡",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "flag:需卡组",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "flag:卡组",
                    "value": "7*flag:需卡组"
                },
                {
                    "type": "setValue",
                    "name": "flag:敌方卡组",
                    "value": "7*flag:需卡组"
                },
                {
                    "type": "setValue",
                    "name": "status:experience",
                    "value": "5+flag:士气记"
                },
                {
                    "type": "if",
                    "condition": "core.getStatus('experience', 0)>=20",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "status:experience",
                            "value": "20"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "value": "20+2*flag:胜场"
                },
                {
                    "type": "insert",
                    "name": "摸牌库"
                },
                {
                    "type": "setValue",
                    "name": "flag:新一轮",
                    "value": "1"
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌1"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h31();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌2"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h15();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌3"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h16();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌4"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h17();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌5"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h18();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌6"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h19();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我1"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h33();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我2"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h34();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我3"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h35();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我4"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h36();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我5"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h37();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我6"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h39();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我7"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h40();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我8"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h41();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我9"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h42();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我10"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h43();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我11"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h44();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我12"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h20();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我13"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h21();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我14"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h22();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我15"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h23();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我16"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h24();\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "14,7": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.t();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "m51",
                "loc": [
                    0,
                    7
                ],
                "time": 300
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余1",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我1"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我1"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我1"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我1"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我1"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我1"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我1"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我2"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我2"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我2"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我2"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我2"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我2"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我2"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余3', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余3",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我3"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我3"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我3"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我3"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我3"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我3"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我3"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余4', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余4",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我4"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我4"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我4"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我4"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我4"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我4"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我4"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余5', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余5",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我5"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我5"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我5"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我5"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我5"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我5"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我5"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余6', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余6",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我6"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我6"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我6"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我6"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我6"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我6"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我6"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余7', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余7",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我7"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我7"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我7"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我7"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我7"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我7"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我7"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "0,7": [
            {
                "type": "choices",
                "text": "\t[老人,magician]要做什么呢？",
                "choices": [
                    {
                        "text": "重选",
                        "action": [
                            "成功重置已选的卡牌",
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
                        ]
                    },
                    {
                        "text": "投降，不挑战了",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[老人甲,magician]真的要离开吗？选择“是”则保持现有最高记录后回到大厅",
                                "choices": [
                                    {
                                        "text": "是",
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
                                            },
                                            {
                                                "type": "autoSave",
                                                "nohint": true
                                            }
                                        ]
                                    },
                                    {
                                        "text": "否",
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
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余8', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余8",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我8"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我8"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我8"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我8"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我8"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我8"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我8"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余9', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余9",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我9"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我9"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我9"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我9"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我9"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我9"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我9"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余10', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余10",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我10"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我10"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我10"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我10"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我10"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我10"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我10"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余11', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余11",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我11"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我11"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我11"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我11"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我11"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我11"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我11"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余12', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余12",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我12"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我12"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我12"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我12"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我12"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我12"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我12"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余13', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余13",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我13"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我13"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我13"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我13"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我13"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我13"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我13"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余14', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余14",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我14"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我14"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我14"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我14"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我14"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我14"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我14"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余15', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余15",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我15"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我15"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我15"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我15"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我15"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我15"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我15"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余16', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余16",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我16"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.z6();\n}"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('摸2', 0)==0",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:摸2",
                                        "value": "flag:我16"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.z5();\n}"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('摸3', 0)==0",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:摸3",
                                                "value": "flag:我16"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.plugin.z4();\n}"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('摸4', 0)==0",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:摸4",
                                                        "value": "flag:我16"
                                                    },
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\ncore.plugin.z3();\n}"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "core.getFlag('摸5', 0)==0",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:摸5",
                                                                "value": "flag:我16"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.plugin.z2();\n}"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.getFlag('摸6', 0)==0",
                                                                "true": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸6",
                                                                        "value": "flag:我16"
                                                                    },
                                                                    {
                                                                        "type": "function",
                                                                        "function": "function(){\ncore.plugin.z1();\n}"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "flag:摸7",
                                                                        "value": "flag:我16"
                                                                    },
                                                                    {
                                                                        "type": "insert",
                                                                        "name": "随机背景"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "0,6": [
            "敌方随机获得7张卡牌，显示在最上方（第7张在第二页），而我方可在随机的32张卡牌中选择7张组成卡组。\n玩家士气为上一场胜利后的剩余士气+5（初始为15，最高为20），敌方士气为20+2*胜场，失败则回到大厅，重新挑战则胜场变为胜场最高记录-5（最低为0）。\n当前胜场为${(flag:胜场)}，当前胜场记录为${(flag:胜场记录)}",
            "千万注意：开始挑战则直到失败前无法进行存档，读档、刷新或强退会因为不能存档而记录不了本次的胜场，若需存档离开可在老人处选择“投降，不挑战了”，这样相当于是下一场挑战失败而回到大厅,此时会进行自动存档"
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
    [  0,  0,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [128,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [125,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 92],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}