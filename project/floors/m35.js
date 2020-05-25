main.floors.m35=
{
    "floorId": "m35",
    "title": "妖族角色2",
    "name": "妖族角色2",
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
            "1604.jpg",
            0
        ],
        [
            81,
            2,
            "1606.jpg",
            0
        ],
        [
            161,
            2,
            "1608.jpg",
            0
        ],
        [
            241,
            2,
            "1610.jpg",
            0
        ],
        [
            321,
            2,
            "1612.jpg",
            0
        ],
        [
            401,
            2,
            "1614.jpg",
            0
        ],
        [
            1,
            116,
            "1616.jpg",
            0
        ],
        [
            81,
            116,
            "1618.jpg",
            0
        ],
        [
            161,
            116,
            "1620.jpg",
            0
        ],
        [
            241,
            116,
            "1622.jpg",
            0
        ],
        [
            321,
            116,
            "1624.jpg",
            0
        ],
        [
            401,
            116,
            "1626.jpg",
            0
        ],
        [
            1,
            256,
            "1628.jpg",
            0
        ],
        [
            81,
            256,
            "1630.jpg",
            0
        ],
        [
            161,
            256,
            "1632.jpg",
            0
        ],
        [
            241,
            256,
            "1634.jpg",
            0
        ],
        [
            321,
            256,
            "1636.jpg",
            0
        ],
        [
            401,
            256,
            "1638.jpg",
            0
        ],
        [
            1,
            370,
            "1640.jpg",
            0
        ],
        [
            81,
            370,
            "1642.jpg",
            0
        ],
        [
            161,
            370,
            "1700.jpg",
            0
        ],
        [
            241,
            370,
            "1702.jpg",
            0
        ],
        [
            321,
            370,
            "1704.jpg",
            0
        ],
        [
            401,
            370,
            "1706.jpg",
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
                "condition": "core.getFlag('余1604', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1604",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1604"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1604', 0)==1",
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
                "condition": "core.getFlag('余1606', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1606",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1606"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1606', 0)==1",
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
                "condition": "core.getFlag('余1608', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1608",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1608"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1608', 0)==1",
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
                "condition": "core.getFlag('余1610', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1610",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1610"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1610', 0)==1",
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
                "condition": "core.getFlag('余1612', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1612",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1612"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1612', 0)==1",
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
                "condition": "core.getFlag('余1614', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1614",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1614"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1614', 0)==1",
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
                "condition": "core.getFlag('余1616', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1616",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1616"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1616', 0)==1",
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
                "condition": "core.getFlag('余1618', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1618",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1618"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1618', 0)==1",
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
                "condition": "core.getFlag('余1620', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1620",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1620"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1620', 0)==1",
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
                "condition": "core.getFlag('余1622', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1622",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1622"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1622', 0)==1",
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
                "condition": "core.getFlag('余1624', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1624",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1624"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1624', 0)==1",
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
                "condition": "core.getFlag('余1626', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1626",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1626"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1626', 0)==1",
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
                "condition": "core.getFlag('余1628', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1628",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1628"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1628', 0)==1",
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
                "condition": "core.getFlag('余1630', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1630",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1630"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1630', 0)==1",
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
                "condition": "core.getFlag('余1632', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1632",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1632"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1632', 0)==1",
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
                "condition": "core.getFlag('余1634', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1634",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1634"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1634', 0)==1",
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
                "condition": "core.getFlag('余1636', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1636",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1636"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1636', 0)==1",
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
                "condition": "core.getFlag('余1638', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1638",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1638"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1638', 0)==1",
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
                "condition": "core.getFlag('余1640', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1640",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1640"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1640', 0)==1",
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
                "condition": "core.getFlag('余1642', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1642",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1642"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1642', 0)==1",
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
                "condition": "core.getFlag('余1700', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1700",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1700"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1700', 0)==1",
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
                "condition": "core.getFlag('余1702', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1702",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1702"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1702', 0)==1",
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
                "condition": "core.getFlag('余1704', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1704",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1704"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1704', 0)==1",
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
                "condition": "core.getFlag('余1706', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1706",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1706"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1706', 0)==1",
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
            "floorId": "m36",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "m34",
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12],
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