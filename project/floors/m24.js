main.floors.m24=
{
    "floorId": "m24",
    "title": "人族角色3",
    "name": "人族角色3",
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
            "508.jpg",
            0
        ],
        [
            81,
            2,
            "510.jpg",
            0
        ],
        [
            161,
            2,
            "512.jpg",
            0
        ],
        [
            241,
            2,
            "514.jpg",
            0
        ],
        [
            321,
            2,
            "516.jpg",
            0
        ],
        [
            401,
            2,
            "518.jpg",
            0
        ],
        [
            1,
            116,
            "520.jpg",
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
            "value": "24"
        }
    ],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余508', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余508",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "508"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余508', 0)==1",
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
                "condition": "core.getFlag('余510', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余510",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "510"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余510', 0)==1",
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
                "condition": "core.getFlag('余512', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余512",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "512"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余512', 0)==1",
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
                "condition": "core.getFlag('余514', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余514",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "514"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余514', 0)==1",
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
                "condition": "core.getFlag('余516', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余516",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "516"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余516', 0)==1",
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
                "condition": "core.getFlag('余518', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余518",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "518"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余518', 0)==1",
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
                "condition": "core.getFlag('余520', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余520",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "520"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余520', 0)==1",
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
        "0,7": {
            "floorId": "m23",
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
    [  0,104,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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