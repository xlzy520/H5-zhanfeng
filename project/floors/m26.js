main.floors.m26=
{
    "floorId": "m26",
    "title": "仙族角色1",
    "name": "仙族角色1",
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
            "700.jpg",
            0
        ],
        [
            81,
            2,
            "702.jpg",
            0
        ],
        [
            161,
            2,
            "704.jpg",
            0
        ],
        [
            241,
            2,
            "706.jpg",
            0
        ],
        [
            321,
            2,
            "708.jpg",
            0
        ],
        [
            401,
            2,
            "710.jpg",
            0
        ],
        [
            1,
            116,
            "712.jpg",
            0
        ],
        [
            81,
            116,
            "714.jpg",
            0
        ],
        [
            161,
            116,
            "716.jpg",
            0
        ],
        [
            241,
            116,
            "718.jpg",
            0
        ],
        [
            321,
            116,
            "720.jpg",
            0
        ],
        [
            401,
            116,
            "722.jpg",
            0
        ],
        [
            1,
            256,
            "724.jpg",
            0
        ],
        [
            81,
            256,
            "726.jpg",
            0
        ],
        [
            161,
            256,
            "728.jpg",
            0
        ],
        [
            241,
            256,
            "730.jpg",
            0
        ],
        [
            321,
            256,
            "732.jpg",
            0
        ],
        [
            401,
            256,
            "734.jpg",
            0
        ],
        [
            1,
            370,
            "736.jpg",
            0
        ],
        [
            81,
            370,
            "738.jpg",
            0
        ],
        [
            161,
            370,
            "740.jpg",
            0
        ],
        [
            241,
            370,
            "742.jpg",
            0
        ],
        [
            321,
            370,
            "800.jpg",
            0
        ],
        [
            401,
            370,
            "802.jpg",
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
                "condition": "core.getFlag('余700', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余700",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "700"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余700', 0)==1",
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
                "condition": "core.getFlag('余702', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余702",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "702"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余702', 0)==1",
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
                "condition": "core.getFlag('余704', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余704",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "704"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余704', 0)==1",
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
                "condition": "core.getFlag('余706', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余706",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "706"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余706', 0)==1",
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
                "condition": "core.getFlag('余708', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余708",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "708"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余708', 0)==1",
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
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余710', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余710",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "710"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余710', 0)==1",
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
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余712', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余712",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "712"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余712', 0)==1",
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
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余714', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余714",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "714"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余714', 0)==1",
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
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余716', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余716",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "716"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余716', 0)==1",
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
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余718', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余718",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "718"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余718', 0)==1",
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
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余720', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余720",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "720"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余720', 0)==1",
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
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余722', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余722",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "722"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余722', 0)==1",
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
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余724', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余724",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "724"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余724', 0)==1",
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
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余726', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余726",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "726"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余726', 0)==1",
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
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余728', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余728",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "728"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余728', 0)==1",
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
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余730', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余730",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "730"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余730', 0)==1",
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
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余732', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余732",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "732"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余732', 0)==1",
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
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余734', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余734",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "734"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余734', 0)==1",
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
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余736', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余736",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "736"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余736', 0)==1",
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
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余738', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余738",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "738"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余738', 0)==1",
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
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余740', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余740",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "740"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余740', 0)==1",
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
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余742', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余742",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "742"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余742', 0)==1",
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
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余800', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余800",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "800"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余800', 0)==1",
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
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余802', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余802",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "802"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余802', 0)==1",
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
        "14,7": {
            "floorId": "m27",
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