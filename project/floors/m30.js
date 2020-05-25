main.floors.m30=
{
    "floorId": "m30",
    "title": "精族角色1",
    "name": "精族角色1",
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
            "1100.jpg",
            0
        ],
        [
            81,
            2,
            "1102.jpg",
            0
        ],
        [
            161,
            2,
            "1104.jpg",
            0
        ],
        [
            241,
            2,
            "1106.jpg",
            0
        ],
        [
            321,
            2,
            "1108.jpg",
            0
        ],
        [
            401,
            2,
            "1110.jpg",
            0
        ],
        [
            1,
            116,
            "1112.jpg",
            0
        ],
        [
            81,
            116,
            "1114.jpg",
            0
        ],
        [
            161,
            116,
            "1116.jpg",
            0
        ],
        [
            241,
            116,
            "1118.jpg",
            0
        ],
        [
            321,
            116,
            "1120.jpg",
            0
        ],
        [
            401,
            116,
            "1122.jpg",
            0
        ],
        [
            1,
            256,
            "1124.jpg",
            0
        ],
        [
            81,
            256,
            "1126.jpg",
            0
        ],
        [
            161,
            256,
            "1128.jpg",
            0
        ],
        [
            241,
            256,
            "1130.jpg",
            0
        ],
        [
            321,
            256,
            "1132.jpg",
            0
        ],
        [
            401,
            256,
            "1134.jpg",
            0
        ],
        [
            1,
            370,
            "1136.jpg",
            0
        ],
        [
            81,
            370,
            "1138.jpg",
            0
        ],
        [
            161,
            370,
            "1140.jpg",
            0
        ],
        [
            241,
            370,
            "1142.jpg",
            0
        ],
        [
            321,
            370,
            "1200.jpg",
            0
        ],
        [
            401,
            370,
            "1202.jpg",
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
                "condition": "core.getFlag('余1100', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1100",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1100"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1100', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1102', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1102",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1102"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1102', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1104', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1104",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1104"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1104', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1106', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1106",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1106"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1106', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1108', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1108",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1108"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1108', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1110', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1110",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1110"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1110', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1112', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1112",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1112"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1112', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1114', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1114",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1114"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1114', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1116', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1116",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1116"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1116', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1118', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1118",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1118"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1118', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1120', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1120",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1120"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1120', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1122', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1122",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1122"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1122', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1124', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1124",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1124"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1124', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1126', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1126",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1126"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1126', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1128', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1128",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1128"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1128', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1130', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1130",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1130"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1130', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1132', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1132",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1132"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1132', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1134', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1134",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1134"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1134', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1136', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1136",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1136"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1136', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1138', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1138",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1138"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1138', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1140', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1140",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1140"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1140', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1142', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1142",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1142"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1142', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1200', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1200",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1200"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1200', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1202', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1202",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1202"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1202', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "m31",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12],
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