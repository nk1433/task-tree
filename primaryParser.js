// const actions = {
//     name: (element,task) => {
//         element.children.push({ tag: "span", text:task.name })
//         console.log(element,task)
//     },
//     tasks: (element,task) => {
//         element.children = element.children.concat(task.tasks.map((item) => primaryParser(item)))
//     }
// }

// const keywords = Object.keys(actions);

// const primaryParser = (task) => {
//     const element = { tag: "div",children: [] };
//     Object.keys(task).filter((key) => keywords.indexOf(key) !== -1)
//     .forEach((key) => actions[key](element, task));
// }
// console.log(primaryParser({ name: "primaryParse",tasks:[{ name: "childTask" }]}));


let dict = Object.seal({
    name: "name.findName",
    email: "internet.email",
    details: {
        card: "helpers.createCard",
        demo: {
            age: "random.number",
            test: {
                name: "name.findName",
            },
        },
    },
    age: "random.number",
}
)
console.log(JSON.parse(JSON.stringify(dict)));

// const recursiveFunc = (obj,key) => {
//     if(typeof(obj[key]) === "function") {
//         return obj[key]
//     }
//     else{
//         return recursiceFunc(ob)
//     }
// }

const actions = {
    string: (data,key) => {
        let fakerFunction = faker;
        data[key].split(".").forEach((item) => {
            fakerFunction = fakerFunction[item]
        })
        data[key] = fakerFunction();
    },

    // string: (data,key) => {
    //     let fakerFunction = recursiveFunc(faker,key)
    // },

    object: (data,key) => 
        fakerParser(data[key])

}

const keywords = Object.keys(actions)

const fakerParser = (data) => 
    Object.keys(data).forEach((item) => actions[typeof(data[item])](data,item))

fakerParser(dict)

console.log(dict)




