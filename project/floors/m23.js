main.floors.m23=
{
    "floorId": "m23",
    "title": "人族角色2",
    "name": "人族角色2",
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
            "404.jpg",
            0
        ],
        [
            81,
            2,
            "406.jpg",
            0
        ],
        [
            161,
            2,
            "408.jpg",
            0
        ],
        [
            241,
            2,
            "410.jpg",
            0
        ],
        [
            321,
            2,
            "412.jpg",
            0
        ],
        [
            401,
            2,
            "414.jpg",
            0
        ],
        [
            1,
            116,
            "416.jpg",
            0
        ],
        [
            81,
            116,
            "418.jpg",
            0
        ],
        [
            161,
            116,
            "420.jpg",
            0
        ],
        [
            241,
            116,
            "422.jpg",
            0
        ],
        [
            321,
            116,
            "424.jpg",
            0
        ],
        [
            401,
            116,
            "426.jpg",
            0
        ],
        [
            1,
            256,
            "428.jpg",
            0
        ],
        [
            81,
            256,
            "430.jpg",
            0
        ],
        [
            161,
            256,
            "432.jpg",
            0
        ],
        [
            241,
            256,
            "434.jpg",
            0
        ],
        [
            321,
            256,
            "436.jpg",
            0
        ],
        [
            401,
            256,
            "438.jpg",
            0
        ],
        [
            1,
            370,
            "440.jpg",
            0
        ],
        [
            81,
            370,
            "442.jpg",
            0
        ],
        [
            161,
            370,
            "500.jpg",
            0
        ],
        [
            241,
            370,
            "502.jpg",
            0
        ],
        [
            321,
            370,
            "504.jpg",
            0
        ],
        [
            401,
            370,
            "506.jpg",
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
                "condition": "core.getFlag('余404', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余404",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "404"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余404', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余406', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余406",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "406"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余406', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余408', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余408",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "408"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余408', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余410', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余410",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "410"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余410', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余412', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余412",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "412"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余412', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余414', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余414",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "414"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余414', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余416', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余416",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "416"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余416', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余418', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余418",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "418"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余418', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余420', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余420",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "420"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余420', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余422', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余422",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "422"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余422', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余424', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余424",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "424"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余424', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余426', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余426",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "426"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余426', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余428', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余428",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "428"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余428', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余430', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余430",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "430"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余430', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余432', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余432",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "432"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余432', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余434', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余434",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "434"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余434', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余436', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余436",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "436"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余436', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余438', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余438",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "438"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余438', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余440', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余440",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "440"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余440', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余442', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余442",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "442"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余442', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余500', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余500",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "500"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余500', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余502', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余502",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "502"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余502', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余504', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余504",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "504"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余504', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余506', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余506",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "506"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余506', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "m24",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "m22",
            "loc": [
                14,
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