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
            element.appendChild(createElement("span",task.name)),
    
    tasks: (element, task) => 
        task.tasks.forEach((task) => element.appendChild(htmlTree(task))),
            
    cost: (element, task)  => {
        let totalCost = 0;
        totalCost += (task.cost || 0);
        task.tasks?.forEach((task) => 
            task.cost && (totalCost += calculateCost(task))
        );
        element.appendChild(createElement("span",totalCost));
    }
};

const keywords = Object.keys(actions);

const htmlTree = (props) => {
    const element = document.createElement(props.tag);
    Object.keys(props).filter((key) => keywords.indexOf(key) !== -1)
    .forEach((key) => actions[key](element, props));
    return element;
};

let parsedData = task;

const appendTag = (task) => {
    task.tag = "div";
    task.tasks?.forEach((item) => appendTag(item));
}

const buildElements = () => {
    appendTag(parsedData);
    document.querySelector("#buildHouse").appendChild(htmlTree(parsedData));
};

document.addEventListener("DOMContentLoaded",buildElements);

