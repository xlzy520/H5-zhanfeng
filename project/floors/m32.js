main.floors.m32=
{
    "floorId": "m32",
    "title": "精族角色3",
    "name": "精族角色3",
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
            "1320.jpg",
            0
        ],
        [
            81,
            2,
            "1322.jpg",
            0
        ],
        [
            161,
            2,
            "1324.jpg",
            0
        ],
        [
            241,
            2,
            "1326.jpg",
            0
        ],
        [
            321,
            2,
            "1328.jpg",
            0
        ],
        [
            401,
            2,
            "1330.jpg",
            0
        ],
        [
            1,
            116,
            "1332.jpg",
            0
        ],
        [
            81,
            116,
            "1334.jpg",
            0
        ],
        [
            161,
            116,
            "1336.jpg",
            0
        ],
        [
            241,
            116,
            "1338.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setValue",
            "name": "flag:楼层",
            "value": "32"
        }
    ],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1320', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1320",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1320"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1320', 0)==1",
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
                "condition": "core.getFlag('余1322', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1322",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1322"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1322', 0)==1",
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
                "condition": "core.getFlag('余1324', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1324",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1324"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1324', 0)==1",
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
                "condition": "core.getFlag('余1326', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1326",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1326"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1326', 0)==1",
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
                "condition": "core.getFlag('余1328', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1328",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1328"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1328', 0)==1",
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
                "condition": "core.getFlag('余1330', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1330",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1330"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1330', 0)==1",
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
                "condition": "core.getFlag('余1332', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1332",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1332"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1332', 0)==1",
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
                "condition": "core.getFlag('余1334', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1334",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1334"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1334', 0)==1",
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
                "condition": "core.getFlag('余1336', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1336",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1336"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1336', 0)==1",
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
                "condition": "core.getFlag('余1338', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1338",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1338"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1338', 0)==1",
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
        "0,7": {
            "floorId": "m31",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "m40",
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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