main.floors.m36=
{
    "floorId": "m36",
    "title": "妖族角色3",
    "name": "妖族角色3",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b52.jpg",
            0
        ],
        [
            1,
            2,
            "1708.jpg",
            0
        ],
        [
            81,
            2,
            "1710.jpg",
            0
        ],
        [
            161,
            2,
            "1712.jpg",
            0
        ],
        [
            241,
            2,
            "1714.jpg",
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
            "value": "36"
        }
    ],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1708', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1708",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1708"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1708', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "妖一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "妖二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1710', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1710",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1710"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1710', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "妖一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "妖二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1712', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1712",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1712"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1712', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "妖一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "妖二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1714', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1714",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1714"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1714', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "妖一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "妖二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "m35",
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,  0,  0,  0,  0],
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