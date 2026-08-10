export { }

let arr = [1,
    2,
    3,
    [4, 5, 6],
    7,
    [8,
        [9, 10, 11,
            [12, 13, 14]
        ]
    ],
    [15, 16, 17, 18, 19,
        [20, 21, 22,
            [23, 24, 25,
                [26, 27, 29]
            ], 30, 31
        ], 32
    ], 33
]

function listFromArrays(list: any) {
    let step = 0
    for (let item of list) {
        if (!Array.isArray(item)) {
            console.log(item)
        } else {
            listFromArrays(item)
        }
        step++
    }

    return `${step} steps`
}


console.log(listFromArrays(arr))
