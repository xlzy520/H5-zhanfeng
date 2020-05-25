main.floors.m39=
{
    "floorId": "m39",
    "title": "鬼族角色2",
    "name": "鬼族角色2",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b62.jpg",
            0
        ],
        [
            1,
            2,
            "2004.jpg",
            0
        ],
        [
            81,
            2,
            "2006.jpg",
            0
        ],
        [
            161,
            2,
            "2008.jpg",
            0
        ],
        [
            241,
            2,
            "2010.jpg",
            0
        ],
        [
            321,
            2,
            "2012.jpg",
            0
        ],
        [
            401,
            2,
            "2014.jpg",
            0
        ],
        [
            1,
            116,
            "2016.jpg",
            0
        ],
        [
            81,
            116,
            "2018.jpg",
            0
        ],
        [
            161,
            116,
            "2020.jpg",
            0
        ],
        [
            241,
            116,
            "2100.jpg",
            0
        ],
        [
            321,
            116,
            "2102.jpg",
            0
        ],
        [
            401,
            116,
            "2104.jpg",
            0
        ],
        [
            1,
            256,
            "2106.jpg",
            0
        ],
        [
            81,
            256,
            "2108.jpg",
            0
        ],
        [
            161,
            256,
            "2110.jpg",
            0
        ],
        [
            241,
            256,
            "2112.jpg",
            0
        ],
        [
            321,
            256,
            "2114.jpg",
            0
        ],
        [
            401,
            256,
            "2116.jpg",
            0
        ],
        [
            1,
            370,
            "2118.jpg",
            0
        ],
        [
            81,
            370,
            "2120.jpg",
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
            "value": "39"
        }
    ],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2004', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2004",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2004"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2004', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2006', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2006",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2006"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2006', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2008', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2008",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2008"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2008', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2010', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2010",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2010"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2010', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2012', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2012",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2012"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2012', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余2014', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2014",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2014"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2014', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2016', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2016",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2016"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2016', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2018', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2018",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2018"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2018', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2020', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2020",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2020"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2020', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2100', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2100",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2100"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2100', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2102', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2102",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2102"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2102', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余2104', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2104",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2104"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2104', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2106', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2106",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2106"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2106', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2108', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2108",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2108"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2108', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2110', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2110",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2110"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2110', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2112', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2112",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2112"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2112', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2114', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2114",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2114"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2114', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余2116', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2116",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2116"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2116', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2118', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2118",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2118"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2118', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2120', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2120",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2120"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2120', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "鬼一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "鬼二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "m38",
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
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,104,  0,104,  0,  0,104,  0,104,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,104,  0,104,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}