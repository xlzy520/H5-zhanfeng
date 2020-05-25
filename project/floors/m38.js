main.floors.m38=
{
    "floorId": "m38",
    "title": "鬼族角色1",
    "name": "鬼族角色1",
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
            "1900.jpg",
            0
        ],
        [
            81,
            2,
            "1902.jpg",
            0
        ],
        [
            161,
            2,
            "1904.jpg",
            0
        ],
        [
            241,
            2,
            "1906.jpg",
            0
        ],
        [
            321,
            2,
            "1908.jpg",
            0
        ],
        [
            401,
            2,
            "1910.jpg",
            0
        ],
        [
            1,
            116,
            "1912.jpg",
            0
        ],
        [
            81,
            116,
            "1914.jpg",
            0
        ],
        [
            161,
            116,
            "1916.jpg",
            0
        ],
        [
            241,
            116,
            "1918.jpg",
            0
        ],
        [
            321,
            116,
            "1920.jpg",
            0
        ],
        [
            401,
            116,
            "1922.jpg",
            0
        ],
        [
            1,
            256,
            "1924.jpg",
            0
        ],
        [
            81,
            256,
            "1926.jpg",
            0
        ],
        [
            161,
            256,
            "1928.jpg",
            0
        ],
        [
            241,
            256,
            "1930.jpg",
            0
        ],
        [
            321,
            256,
            "1932.jpg",
            0
        ],
        [
            401,
            256,
            "1934.jpg",
            0
        ],
        [
            1,
            370,
            "1936.jpg",
            0
        ],
        [
            81,
            370,
            "1938.jpg",
            0
        ],
        [
            161,
            370,
            "1940.jpg",
            0
        ],
        [
            241,
            370,
            "1942.jpg",
            0
        ],
        [
            321,
            370,
            "2000.jpg",
            0
        ],
        [
            401,
            370,
            "2002.jpg",
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
                "condition": "core.getFlag('余1900', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1900",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1900"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1900', 0)==1",
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
                "condition": "core.getFlag('余1902', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1902",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1902"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1902', 0)==1",
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
                "condition": "core.getFlag('余1904', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1904",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1904"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1904', 0)==1",
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
                "condition": "core.getFlag('余1906', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1906",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1906"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1906', 0)==1",
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
                "condition": "core.getFlag('余1908', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1908",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1908"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1908', 0)==1",
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
                "condition": "core.getFlag('余1910', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1910",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1910"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1910', 0)==1",
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
                "condition": "core.getFlag('余1912', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1912",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1912"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1912', 0)==1",
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
                "condition": "core.getFlag('余1914', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1914",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1914"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1914', 0)==1",
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
                "condition": "core.getFlag('余1916', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1916",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1916"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1916', 0)==1",
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
                "condition": "core.getFlag('余1918', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1918",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1918"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1918', 0)==1",
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
                "condition": "core.getFlag('余1920', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1920",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1920"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1920', 0)==1",
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
                "condition": "core.getFlag('余1922', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1922",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1922"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1922', 0)==1",
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
                "condition": "core.getFlag('余1924', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1924",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1924"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1924', 0)==1",
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
                "condition": "core.getFlag('余1926', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1926",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1926"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1926', 0)==1",
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
                "condition": "core.getFlag('余1928', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1928",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1928"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1928', 0)==1",
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
                "condition": "core.getFlag('余1930', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1930",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1930"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1930', 0)==1",
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
                "condition": "core.getFlag('余1932', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1932",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1932"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1932', 0)==1",
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
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1940', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1940",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1940"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1940', 0)==1",
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
                "condition": "core.getFlag('余1934', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1934",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1934"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1934', 0)==1",
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
                "condition": "core.getFlag('余1936', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1936",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1936"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1936', 0)==1",
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
                "condition": "core.getFlag('余1938', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1938",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1938"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1938', 0)==1",
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
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1942', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1942",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1942"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1942', 0)==1",
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
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2000', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2000",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2000"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2000', 0)==1",
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
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余2002', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余2002",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "2002"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余2002', 0)==1",
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
        "14,7": {
            "floorId": "m39",
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