main.floors.m22=
{
    "floorId": "m22",
    "title": "人族角色1",
    "name": "人族角色1",
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
            "300.jpg",
            0
        ],
        [
            81,
            2,
            "302.jpg",
            0
        ],
        [
            161,
            2,
            "304.jpg",
            0
        ],
        [
            241,
            2,
            "306.jpg",
            0
        ],
        [
            321,
            2,
            "308.jpg",
            0
        ],
        [
            401,
            2,
            "310.jpg",
            0
        ],
        [
            1,
            116,
            "312.jpg",
            0
        ],
        [
            81,
            116,
            "314.jpg",
            0
        ],
        [
            161,
            116,
            "316.jpg",
            0
        ],
        [
            241,
            116,
            "318.jpg",
            0
        ],
        [
            321,
            116,
            "320.jpg",
            0
        ],
        [
            401,
            116,
            "322.jpg",
            0
        ],
        [
            1,
            256,
            "324.jpg",
            0
        ],
        [
            81,
            256,
            "326.jpg",
            0
        ],
        [
            161,
            256,
            "328.jpg",
            0
        ],
        [
            241,
            256,
            "330.jpg",
            0
        ],
        [
            321,
            256,
            "332.jpg",
            0
        ],
        [
            401,
            256,
            "334.jpg",
            0
        ],
        [
            1,
            370,
            "336.jpg",
            0
        ],
        [
            81,
            370,
            "338.jpg",
            0
        ],
        [
            161,
            370,
            "340.jpg",
            0
        ],
        [
            241,
            370,
            "342.jpg",
            0
        ],
        [
            321,
            370,
            "400.jpg",
            0
        ],
        [
            401,
            370,
            "402.jpg",
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
                "condition": "core.getFlag('余300', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余300",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "300"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余300', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余302', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余302",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "302"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余302', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余304', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余304",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "304"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余304', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余306', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余306",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "306"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余306', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余308', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余308",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "308"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余308', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余310', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余310",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "310"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余310', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余312', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余312",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "312"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余312', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余314', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余314",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "314"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余314', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余316', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余316",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "316"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余316', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余318', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余318",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "318"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余318', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余320', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余320",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "320"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余320', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余322', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余322",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "322"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余322', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余324', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余324",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "324"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余324', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余326', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余326",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "326"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余326', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余328', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余328",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "328"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余328', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余330', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余330",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "330"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余330', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余332', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余332",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "332"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余332', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余334', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余334",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "334"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余334', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余336', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余336",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "336"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余336', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余338', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余338",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "338"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余338', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余340', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余340",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "340"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余340', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余342', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余342",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "342"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余342', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余400', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余400",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "400"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余400', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余402', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余402",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "402"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余402', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "人一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "人二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "m23",
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