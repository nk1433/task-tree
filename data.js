const task = {
    name: 'buildHouse',
    cost: 10,
    tasks: [
        {
            name: 'purchase material',
            cost: 5,
            tasks: [
                {
                    name: 'purchase cement',
                    cost: 10,
                    tasks: [
                        {
                            name: "demo",
                            cost: 20,
                            tasks: [
                                {
                                    name: "test",
                                    cost: 5,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'purchase steel',
                    cost: 15,
                }
            ]
        },
        {
            name: 'invite people',
        }
    ],
}