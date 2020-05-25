main.floors.m27=
{
    "floorId": "m27",
    "title": "仙族角色2",
    "name": "仙族角色2",
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
            "804.jpg",
            0
        ],
        [
            81,
            2,
            "806.jpg",
            0
        ],
        [
            161,
            2,
            "808.jpg",
            0
        ],
        [
            241,
            2,
            "810.jpg",
            0
        ],
        [
            321,
            2,
            "812.jpg",
            0
        ],
        [
            401,
            2,
            "814.jpg",
            0
        ],
        [
            1,
            116,
            "816.jpg",
            0
        ],
        [
            81,
            116,
            "818.jpg",
            0
        ],
        [
            161,
            116,
            "820.jpg",
            0
        ],
        [
            241,
            116,
            "822.jpg",
            0
        ],
        [
            321,
            116,
            "824.jpg",
            0
        ],
        [
            401,
            116,
            "826.jpg",
            0
        ],
        [
            1,
            256,
            "828.jpg",
            0
        ],
        [
            81,
            256,
            "830.jpg",
            0
        ],
        [
            161,
            256,
            "832.jpg",
            0
        ],
        [
            241,
            256,
            "834.jpg",
            0
        ],
        [
            321,
            256,
            "836.jpg",
            0
        ],
        [
            401,
            256,
            "838.jpg",
            0
        ],
        [
            1,
            370,
            "840.jpg",
            0
        ],
        [
            81,
            370,
            "842.jpg",
            0
        ],
        [
            161,
            370,
            "844.jpg",
            0
        ],
        [
            241,
            370,
            "846.jpg",
            0
        ],
        [
            321,
            370,
            "848.jpg",
            0
        ],
        [
            401,
            370,
            "850.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余804', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余804",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "804"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余804', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余806', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余806",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "806"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余806', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余808', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余808",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "808"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余808', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余810', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余810",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "810"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余810', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余812', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余812",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "812"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余812', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余814', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余814",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "814"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余814', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余816', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余816",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "816"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余816', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余818', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余818",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "818"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余818', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余820', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余820",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "820"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余820', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余822', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余822",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "822"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余822', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余824', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余824",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "824"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余824', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余826', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余826",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "826"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余826', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余828', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余828",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "828"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余828', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余830', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余830",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "830"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余830', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余832', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余832",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "832"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余832', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余834', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余834",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "834"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余834', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余836', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余836",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "836"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余836', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余838', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余838",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "838"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余838', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余840', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余840",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "840"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余840', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余842', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余842",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "842"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余842', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余844', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余844",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "844"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余844', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余846', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余846",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "846"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余846', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余848', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余848",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "848"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余848', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余850', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余850",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "850"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余850', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "仙一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "仙二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "m26",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "m28",
            "loc": [
                0,
                7
            ]
        }
    },
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
    [ 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}