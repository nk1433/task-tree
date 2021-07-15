const task = {
    cost: 10,
    name: 'buildHouse',
    tasks: [
        {
            cost: 5,
            name: 'purchase material',
            tasks: [
                {
                    cost: 10,
                    name: 'purchase cement',
                    tasks: [
                        {
                            cost: 20,
                            name: "demo",
                            tasks: [
                                {
                                    cost: 5,
                                    name: "test",
                                }
                            ]
                        }
                    ]
                },
                {
                    cost: 15,
                    name: 'purchase steel',
                }
            ]
        },
        {
            name: 'invite people',
        }
    ],
}