main.floors.m34=
{
    "floorId": "m34",
    "title": "妖族角色1",
    "name": "妖族角色1",
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
            "1500.jpg",
            0
        ],
        [
            81,
            2,
            "1502.jpg",
            0
        ],
        [
            161,
            2,
            "1504.jpg",
            0
        ],
        [
            241,
            2,
            "1506.jpg",
            0
        ],
        [
            321,
            2,
            "1508.jpg",
            0
        ],
        [
            401,
            2,
            "1510.jpg",
            0
        ],
        [
            1,
            116,
            "1512.jpg",
            0
        ],
        [
            81,
            116,
            "1514.jpg",
            0
        ],
        [
            161,
            116,
            "1516.jpg",
            0
        ],
        [
            241,
            116,
            "1518.jpg",
            0
        ],
        [
            321,
            116,
            "1520.jpg",
            0
        ],
        [
            401,
            116,
            "1522.jpg",
            0
        ],
        [
            1,
            256,
            "1524.jpg",
            0
        ],
        [
            81,
            256,
            "1526.jpg",
            0
        ],
        [
            161,
            256,
            "1528.jpg",
            0
        ],
        [
            241,
            256,
            "1530.jpg",
            0
        ],
        [
            321,
            256,
            "1532.jpg",
            0
        ],
        [
            401,
            256,
            "1534.jpg",
            0
        ],
        [
            1,
            370,
            "1536.jpg",
            0
        ],
        [
            81,
            370,
            "1538.jpg",
            0
        ],
        [
            161,
            370,
            "1540.jpg",
            0
        ],
        [
            241,
            370,
            "1542.jpg",
            0
        ],
        [
            321,
            370,
            "1600.jpg",
            0
        ],
        [
            401,
            370,
            "1602.jpg",
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
                "condition": "core.getFlag('余1500', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1500",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1500"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1500', 0)==1",
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
                "condition": "core.getFlag('余1502', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1502",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1502"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1502', 0)==1",
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
                "condition": "core.getFlag('余1504', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1504",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1504"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1504', 0)==1",
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
                "condition": "core.getFlag('余1506', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1506",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1506"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1506', 0)==1",
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
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1508', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1508",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1508"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1508', 0)==1",
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
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1510', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1510",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1510"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1510', 0)==1",
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
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1512', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1512",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1512"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1512', 0)==1",
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
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1514', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1514",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1514"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1514', 0)==1",
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
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1516', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1516",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1516"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1516', 0)==1",
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
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1518', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1518",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1518"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1518', 0)==1",
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
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1520', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1520",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1520"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1520', 0)==1",
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
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1522', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1522",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1522"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1522', 0)==1",
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
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1524', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1524",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1524"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1524', 0)==1",
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
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1526', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1526",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1526"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1526', 0)==1",
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
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1528', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1528",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1528"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1528', 0)==1",
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
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1530', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1530",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1530"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1530', 0)==1",
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
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1532', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1532",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1532"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1532', 0)==1",
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
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1534', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1534",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1534"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1534', 0)==1",
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
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1536', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1536",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1536"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1536', 0)==1",
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
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1538', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1538",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1538"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1538', 0)==1",
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
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1540', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1540",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1540"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1540', 0)==1",
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
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1542', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1542",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1542"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1542', 0)==1",
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
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1600', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1600",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1600"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1600', 0)==1",
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
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1602', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1602",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1602"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1602', 0)==1",
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
        "14,7": {
            "floorId": "m35",
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