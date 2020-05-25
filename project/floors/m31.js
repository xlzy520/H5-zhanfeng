main.floors.m31=
{
    "floorId": "m31",
    "title": "精族角色2",
    "name": "精族角色2",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "b42.jpg",
            0
        ],
        [
            1,
            2,
            "1204.jpg",
            0
        ],
        [
            81,
            2,
            "1206.jpg",
            0
        ],
        [
            161,
            2,
            "1208.jpg",
            0
        ],
        [
            241,
            2,
            "1210.jpg",
            0
        ],
        [
            321,
            2,
            "1212.jpg",
            0
        ],
        [
            401,
            2,
            "1214.jpg",
            0
        ],
        [
            1,
            116,
            "1216.jpg",
            0
        ],
        [
            81,
            116,
            "1218.jpg",
            0
        ],
        [
            161,
            116,
            "1220.jpg",
            0
        ],
        [
            241,
            116,
            "1222.jpg",
            0
        ],
        [
            321,
            116,
            "1224.jpg",
            0
        ],
        [
            401,
            116,
            "1226.jpg",
            0
        ],
        [
            1,
            256,
            "1228.jpg",
            0
        ],
        [
            81,
            256,
            "1230.jpg",
            0
        ],
        [
            161,
            256,
            "1300.jpg",
            0
        ],
        [
            241,
            256,
            "1302.jpg",
            0
        ],
        [
            321,
            256,
            "1304.jpg",
            0
        ],
        [
            401,
            256,
            "1306.jpg",
            0
        ],
        [
            1,
            370,
            "1308.jpg",
            0
        ],
        [
            81,
            370,
            "1310.jpg",
            0
        ],
        [
            161,
            370,
            "1312.jpg",
            0
        ],
        [
            241,
            370,
            "1314.jpg",
            0
        ],
        [
            321,
            370,
            "1316.jpg",
            0
        ],
        [
            401,
            370,
            "1318.jpg",
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
                "condition": "core.getFlag('余1204', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1204",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1204"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1204', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1206', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1206",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1206"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1206', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1208', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1208",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1208"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1208', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1210', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1210",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1210"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1210', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1212', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1212",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1212"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1212', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.getFlag('余1214', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1214",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1214"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1214', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1216', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1216",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1216"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1216', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1218', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1218",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1218"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1218', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1220', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1220",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1220"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1220', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1222', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1222",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1222"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1222', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1224', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1224",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1224"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1224', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "if",
                "condition": "core.getFlag('余1226', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1226",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1226"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1226', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1228', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1228",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1228"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1228', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1230', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1230",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1230"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1230', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1300', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1300",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1300"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1300', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1302', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1302",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1302"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1302', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1304', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1304",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1304"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1304', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "if",
                "condition": "core.getFlag('余1306', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1306",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1306"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1306', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1308', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1308",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1308"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1308', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1310', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1310",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1310"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1310', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1312', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1312",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1312"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1312', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1314', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1314",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1314"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1314', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1316', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1316",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1316"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1316', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "if",
                "condition": "core.getFlag('余1318', 0)==2",
                "true": [
                    "非中立最多选2张"
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:余1318",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:id",
                        "value": "1318"
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('余1318', 0)==1",
                        "true": [
                            {
                                "type": "insert",
                                "name": "精一"
                            }
                        ],
                        "false": [
                            {
                                "type": "insert",
                                "name": "精二"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "m32",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "m30",
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