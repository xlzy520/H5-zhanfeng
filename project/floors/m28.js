main.floors.m28=
{
    "floorId": "m28",
    "title": "仙族角色3",
    "name": "仙族角色3",
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
            "900.jpg",
            0
        ],
        [
            81,
            2,
            "902.jpg",
            0
        ],
        [
            161,
            2,
            "904.jpg",
            0
        ],
        [
            241,
            2,
            "906.jpg",
            0
        ],
        [
            321,
            2,
            "908.jpg",
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
            "value": "28"
        }
    ],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余900', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余900",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "900"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余900', 0)==1",
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
                "condition": "core.getFlag('余902', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余902",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "902"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余902', 0)==1",
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
                "condition": "core.getFlag('余904', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余904",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "904"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余904', 0)==1",
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
                "condition": "core.getFlag('余906', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余906",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "906"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余906', 0)==1",
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
                "condition": "core.getFlag('余908', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余908",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "908"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余908', 0)==1",
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
            "floorId": "m27",
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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