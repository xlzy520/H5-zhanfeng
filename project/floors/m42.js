main.floors.m42=
{
    "floorId": "m42",
    "title": "中立法宝2",
    "name": "中立法宝2",
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
            "124.jpg",
            0
        ],
        [
            81,
            2,
            "125.jpg",
            0
        ],
        [
            161,
            2,
            "126.jpg",
            0
        ],
        [
            241,
            2,
            "0.jpg",
            0
        ],
        [
            321,
            2,
            "128.jpg",
            0
        ],
        [
            401,
            2,
            "0.jpg",
            0
        ],
        [
            1,
            116,
            "130.jpg",
            0
        ],
        [
            81,
            116,
            "131.jpg",
            0
        ],
        [
            161,
            116,
            "132.jpg",
            0
        ],
        [
            241,
            116,
            "133.jpg",
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
                "condition": "core.getFlag('余124', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余124",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "124"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余125', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余125",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "125"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余126', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余126",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "126"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "8,1": [
            "此卡目前尚未制作，后续可能会制作或者更换"
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余128', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余128",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "128"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "13,1": [
            "此卡目前尚未制作，后续可能会制作或者更换"
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余130', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余130",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "130"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余131', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余131",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "131"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余132', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余132",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "132"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余133', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余133",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "133"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "m41",
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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