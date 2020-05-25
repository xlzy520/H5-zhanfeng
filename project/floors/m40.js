main.floors.m40=
{
    "floorId": "m40",
    "title": "中立角色",
    "name": "中立角色",
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
            "2200.jpg",
            0
        ],
        [
            81,
            2,
            "2201.jpg",
            0
        ],
        [
            161,
            2,
            "2202.jpg",
            0
        ],
        [
            241,
            2,
            "2203.jpg",
            0
        ],
        [
            321,
            2,
            "2204.jpg",
            0
        ],
        [
            401,
            2,
            "2205.jpg",
            0
        ],
        [
            1,
            116,
            "2206.jpg",
            0
        ],
        [
            81,
            116,
            "2207.jpg",
            0
        ],
        [
            161,
            116,
            "2208.jpg",
            0
        ],
        [
            241,
            116,
            "2209.jpg",
            0
        ],
        [
            321,
            116,
            "2210.jpg",
            0
        ],
        [
            401,
            116,
            "2211.jpg",
            0
        ],
        [
            1,
            256,
            "2212.jpg",
            0
        ],
        [
            81,
            256,
            "2213.jpg",
            0
        ],
        [
            161,
            256,
            "2214.jpg",
            0
        ],
        [
            241,
            256,
            "2215.jpg",
            0
        ],
        [
            321,
            256,
            "2216.jpg",
            0
        ],
        [
            401,
            256,
            "2217.jpg",
            0
        ],
        [
            1,
            370,
            "2218.jpg",
            0
        ],
        [
            81,
            370,
            "2219.jpg",
            0
        ],
        [
            161,
            370,
            "2220.jpg",
            0
        ],
        [
            241,
            370,
            "2221.jpg",
            0
        ],
        [
            321,
            370,
            "2222.jpg",
            0
        ]
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,7": [
            {
                "type": "if",
                "condition": "core.getFlag('楼层', 0)==24",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "m24",
                        "loc": [
                            14,
                            7
                        ],
                        "time": 300
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('楼层', 0)==28",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "m28",
                        "loc": [
                            14,
                            7
                        ],
                        "time": 300
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('楼层', 0)==32",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "m32",
                        "loc": [
                            14,
                            7
                        ],
                        "time": 300
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('楼层', 0)==36",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "m36",
                        "loc": [
                            14,
                            7
                        ],
                        "time": 300
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('楼层', 0)==39",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "m39",
                        "loc": [
                            14,
                            7
                        ],
                        "time": 300
                    }
                ]
            }
        ],
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2200', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2200",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2200"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2201', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2201",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2201"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2202', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2202",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2202"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2203', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2203",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2203"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2204', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2204",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2204"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2205', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2205",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2205"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2206', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2206",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2206"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2207', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2207",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2207"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2208', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2208",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2208"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2209', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2209",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2209"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2210', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2210",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2210"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2211', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2211",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2211"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2212', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2212",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2212"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2213', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2213",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2213"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2214', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2214",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2214"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2215', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2215",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2215"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2216', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2216",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2216"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2217', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2217",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2217"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2218', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2218",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2218"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2219', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2219",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2219"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2220', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2220",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2220"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2221', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2221",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2221"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2222', 0)==1",
                "true": [
                    "中立最多选1张"
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:余2222",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2222"
                    },
                    {
                        "type": "insert",
                        "name": "中角"
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
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
    [103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}