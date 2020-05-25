main.floors.m51=
{
    "floorId": "m51",
    "title": "摸牌战2",
    "name": "摸牌战2",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        [
            0,
            0,
            "b52.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "core.getFlag('新一轮', 0)==1",
            "true": [
                {
                    "type": "insert",
                    "name": "摸牌库2"
                },
                {
                    "type": "setValue",
                    "name": "flag:新一轮",
                    "value": "0"
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:敌7"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h31();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我17"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h32();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我18"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h33();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我19"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h34();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我20"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h35();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我21"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h36();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我22"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h39();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我23"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h40();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我24"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h41();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我25"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h42();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我26"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h43();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我27"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h44();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我28"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h38();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我29"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h20();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我30"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h21();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我31"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h22();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:id",
            "value": "flag:我32"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.h23();\n}"
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
                "floorId": "m50",
                "loc": [
                    14,
                    7
                ],
                "time": 300
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余17', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余17",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我17"
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
                                        "value": "flag:我17"
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
                                                "value": "flag:我17"
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
                                                        "value": "flag:我17"
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
                                                                "value": "flag:我17"
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
                                                                        "value": "flag:我17"
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
                                                                        "value": "flag:我17"
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
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余18', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余18",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我18"
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
                                        "value": "flag:我18"
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
                                                "value": "flag:我18"
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
                                                        "value": "flag:我18"
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
                                                                "value": "flag:我18"
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
                                                                        "value": "flag:我18"
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
                                                                        "value": "flag:我18"
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
                "condition": "core.getFlag('余19', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余19",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我19"
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
                                        "value": "flag:我19"
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
                                                "value": "flag:我19"
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
                                                        "value": "flag:我19"
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
                                                                "value": "flag:我19"
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
                                                                        "value": "flag:我19"
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
                                                                        "value": "flag:我19"
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
                "condition": "core.getFlag('余20', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余20",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我20"
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
                                        "value": "flag:我20"
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
                                                "value": "flag:我20"
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
                                                        "value": "flag:我20"
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
                                                                "value": "flag:我20"
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
                                                                        "value": "flag:我20"
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
                                                                        "value": "flag:我20"
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
                "condition": "core.getFlag('余21', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余21",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我21"
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
                                        "value": "flag:我21"
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
                                                "value": "flag:我21"
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
                                                        "value": "flag:我21"
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
                                                                "value": "flag:我21"
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
                                                                        "value": "flag:我21"
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
                                                                        "value": "flag:我21"
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
                "condition": "core.getFlag('余22', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余22",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我22"
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
                                        "value": "flag:我22"
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
                                                "value": "flag:我22"
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
                                                        "value": "flag:我22"
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
                                                                "value": "flag:我22"
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
                                                                        "value": "flag:我22"
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
                                                                        "value": "flag:我22"
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
                "condition": "core.getFlag('余23', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余23",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我23"
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
                                        "value": "flag:我23"
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
                                                "value": "flag:我23"
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
                                                        "value": "flag:我23"
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
                                                                "value": "flag:我23"
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
                                                                        "value": "flag:我23"
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
                                                                        "value": "flag:我23"
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
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余24', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余24",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我24"
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
                                        "value": "flag:我24"
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
                                                "value": "flag:我24"
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
                                                        "value": "flag:我24"
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
                                                                "value": "flag:我24"
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
                                                                        "value": "flag:我24"
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
                                                                        "value": "flag:我24"
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
                "condition": "core.getFlag('余25', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余25",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我25"
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
                                        "value": "flag:我25"
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
                                                "value": "flag:我25"
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
                                                        "value": "flag:我25"
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
                                                                "value": "flag:我25"
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
                                                                        "value": "flag:我25"
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
                                                                        "value": "flag:我25"
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
                "condition": "core.getFlag('余26', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余26",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我26"
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
                                        "value": "flag:我26"
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
                                                "value": "flag:我26"
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
                                                        "value": "flag:我26"
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
                                                                "value": "flag:我26"
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
                                                                        "value": "flag:我26"
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
                                                                        "value": "flag:我26"
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
                "condition": "core.getFlag('余27', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余27",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我27"
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
                                        "value": "flag:我27"
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
                                                "value": "flag:我27"
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
                                                        "value": "flag:我27"
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
                                                                "value": "flag:我27"
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
                                                                        "value": "flag:我27"
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
                                                                        "value": "flag:我27"
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
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余28', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余28",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我28"
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
                                        "value": "flag:我28"
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
                                                "value": "flag:我28"
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
                                                        "value": "flag:我28"
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
                                                                "value": "flag:我28"
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
                                                                        "value": "flag:我28"
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
                                                                        "value": "flag:我28"
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
                "condition": "core.getFlag('余29', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余29",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我29"
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
                                        "value": "flag:我29"
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
                                                "value": "flag:我29"
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
                                                        "value": "flag:我29"
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
                                                                "value": "flag:我29"
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
                                                                        "value": "flag:我29"
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
                                                                        "value": "flag:我29"
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
                "condition": "core.getFlag('余30', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余30",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我30"
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
                                        "value": "flag:我30"
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
                                                "value": "flag:我30"
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
                                                        "value": "flag:我30"
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
                                                                "value": "flag:我30"
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
                                                                        "value": "flag:我30"
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
                                                                        "value": "flag:我30"
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
                "condition": "core.getFlag('余31', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余31",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我31"
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
                                        "value": "flag:我31"
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
                                                "value": "flag:我31"
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
                                                        "value": "flag:我31"
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
                                                                "value": "flag:我31"
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
                                                                        "value": "flag:我31"
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
                                                                        "value": "flag:我31"
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
                "condition": "core.getFlag('余32', 0)==1",
                "true": [
                    "已经选过了！"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余32",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('摸1', 0)==0",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:摸1",
                                "value": "flag:我32"
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
                                        "value": "flag:我32"
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
                                                "value": "flag:我32"
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
                                                        "value": "flag:我32"
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
                                                                "value": "flag:我32"
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
                                                                        "value": "flag:我32"
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
                                                                        "value": "flag:我32"
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}