main.floors.m43=
{
    "floorId": "m43",
    "title": "中立神通1",
    "name": "中立神通1",
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
            "0.jpg",
            0
        ],
        [
            81,
            2,
            "2301.jpg",
            0
        ],
        [
            161,
            2,
            "2302.jpg",
            0
        ],
        [
            241,
            2,
            "2303.jpg",
            0
        ],
        [
            321,
            2,
            "2304.jpg",
            0
        ],
        [
            401,
            2,
            "2305.jpg",
            0
        ],
        [
            1,
            116,
            "2306.jpg",
            0
        ],
        [
            81,
            116,
            "2307.jpg",
            0
        ],
        [
            161,
            116,
            "2308.jpg",
            0
        ],
        [
            241,
            116,
            "2309.jpg",
            0
        ],
        [
            321,
            116,
            "2310.jpg",
            0
        ],
        [
            401,
            116,
            "2311.jpg",
            0
        ],
        [
            1,
            256,
            "2312.jpg",
            0
        ],
        [
            81,
            256,
            "2313.jpg",
            0
        ],
        [
            161,
            256,
            "2314.jpg",
            0
        ],
        [
            241,
            256,
            "2315.jpg",
            0
        ],
        [
            321,
            256,
            "2316.jpg",
            0
        ],
        [
            401,
            256,
            "2317.jpg",
            0
        ],
        [
            1,
            370,
            "2318.jpg",
            0
        ],
        [
            81,
            370,
            "2319.jpg",
            0
        ],
        [
            161,
            370,
            "2320.jpg",
            0
        ],
        [
            241,
            370,
            "2321.jpg",
            0
        ],
        [
            321,
            370,
            "2322.jpg",
            0
        ],
        [
            401,
            370,
            "2323.jpg",
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
            "此卡目前尚未制作，后续可能会制作或者更换"
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2301', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2301",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2301"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2302', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2302",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2302"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2303', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2303",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2303"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2304', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2304",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2304"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2305', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2305",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2305"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2306', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2306",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2306"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2307', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2307",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2307"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2308', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2308",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2308"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2309', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2309",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2309"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2310', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2310",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2310"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2311', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2311",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2311"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2312', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2312",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2312"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2313', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2313",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2313"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2314', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2314",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2314"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2315', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2315",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2315"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2316', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2316",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2316"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2317', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2317",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2317"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2318', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2318",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2318"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2319', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2319",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2319"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2320', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2320",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2320"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2321', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2321",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2321"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2322', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2322",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2322"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2323', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2323",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2323"
                    },
                    {
                        "type": "insert",
                        "name": "神选"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "m44",
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