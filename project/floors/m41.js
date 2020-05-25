main.floors.m41=
{
    "floorId": "m41",
    "title": "中立法宝1",
    "name": "中立法宝1",
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
            "100.jpg",
            0
        ],
        [
            81,
            2,
            "101.jpg",
            0
        ],
        [
            161,
            2,
            "102.jpg",
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
            "104.jpg",
            0
        ],
        [
            401,
            2,
            "105.jpg",
            0
        ],
        [
            1,
            116,
            "106.jpg",
            0
        ],
        [
            81,
            116,
            "107.jpg",
            0
        ],
        [
            161,
            116,
            "108.jpg",
            0
        ],
        [
            241,
            116,
            "109.jpg",
            0
        ],
        [
            321,
            116,
            "110.jpg",
            0
        ],
        [
            401,
            116,
            "111.jpg",
            0
        ],
        [
            1,
            256,
            "112.jpg",
            0
        ],
        [
            81,
            256,
            "113.jpg",
            0
        ],
        [
            161,
            256,
            "114.jpg",
            0
        ],
        [
            241,
            256,
            "115.jpg",
            0
        ],
        [
            321,
            256,
            "116.jpg",
            0
        ],
        [
            401,
            256,
            "117.jpg",
            0
        ],
        [
            1,
            370,
            "118.jpg",
            0
        ],
        [
            81,
            370,
            "119.jpg",
            0
        ],
        [
            161,
            370,
            "120.jpg",
            0
        ],
        [
            241,
            370,
            "121.jpg",
            0
        ],
        [
            321,
            370,
            "122.jpg",
            0
        ],
        [
            401,
            370,
            "123.jpg",
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
                "condition": "core.getFlag('余100', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余100",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "100"
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
                "condition": "core.getFlag('余101', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余101",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "101"
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
                "condition": "core.getFlag('余102', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余102",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "102"
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
                "condition": "core.getFlag('余104', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余104",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "104"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余105', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余105",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "105"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余106', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余106",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "106"
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
                "condition": "core.getFlag('余107', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余107",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "107"
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
                "condition": "core.getFlag('余108', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余108",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "108"
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
                "condition": "core.getFlag('余109', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余109",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "109"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余110', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余110",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "110"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余111', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余111",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "111"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余112', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余112",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "112"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余113', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余113",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "113"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余114', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余114",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "114"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余115', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余115",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "115"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余116', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余116",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "116"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余117', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余117",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "117"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余118', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余118",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "118"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余119', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余119",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "119"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余120', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余120",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "120"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余121', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余121",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "121"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余122', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余122",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "122"
                    },
                    {
                        "type": "insert",
                        "name": "法选"
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余123', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余123",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "123"
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
        "14,7": {
            "floorId": "m42",
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