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

type NestedArray<T> = T | NestedArray<T>[]; //recursive type definition

function flattenNestedArray<T>(list: NestedArray<T>[]): T[] {
    let flattenedArray: T[] = []
    for (let item of list) {
        if (!Array.isArray(item)) {
            flattenedArray.push(item)
            // console.log(item)
        } else {
            flattenedArray.push(...flattenNestedArray(item))
        }
    }

    return flattenedArray
}


console.log(flattenNestedArray(arr))
