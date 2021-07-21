const calculateCost = (task) => {
    let childCost = (task.cost || 0);
    task.tasks?.forEach((childTask) => {
        childCost += calculateCost(childTask);
    })
    return childCost;
}

const createElement = (tagName,content) => {
    const element = document.createElement(tagName);
    element.appendChild(document.createTextNode(content));
    return element;
}

const actions = {
    name: (element,task) => 
        element.children.push({tag: "span",text: task.name}),
    
    tasks: (element, task) => 
        element.children = element.children.concat(task.tasks.map((item) => parser(item))),
            
    cost: (element, task)  => {
        let totalCost = 0;
        totalCost += (task.cost || 0);
        task.tasks?.forEach((task) => 
            task.cost && (totalCost += calculateCost(task))
        );
        element.children.push({tag: "span",text: totalCost});
    }
};

const keywords = Object.keys(actions);

const parser = (task) => {
    // const element = document.createElement(task.tag);
    const element = {
        tag: "div",
        children: [
            // {
            //     tag: "span",
            //     text: "buildHouse",
            // },
            // {
            //     tag: "span",
            //     text: "40"
            // },
            
        ],
    }
    Object.keys(task).filter((key) => keywords.indexOf(key) !== -1)
    .forEach((key) => actions[key](element, task));
    return element;
};

let parsedData = task;

const buildElements = () => {
    document.querySelector("#buildHouse").appendChild(htmlTree(parser(parsedData)));
};

document.addEventListener("DOMContentLoaded",buildElements);

