








let demo = 0;
let childCost = 0;

const calculateCost = (task) => {
    console.log(task)
    childCost += (task.cost || 0);
    task.tasks?.forEach((task) =>  {
        childCost += task.cost;
        task.tasks?.forEach((task) => calculateCost(task));
    });
    return childCost;
}
    
const actions = {

    name: (element,task) =>
            element.appendChild(document.createTextNode(task.name)),
    
    tasks: (element, task) => 
        task.tasks.forEach((task) => element.appendChild(htmlTree(task))),
            
    cost: (element, task)  => {
        let totalCost = 0;
        totalCost += (task.cost || 0);
        console.log(totalCost)
        console.log(task.tasks)
        task.tasks?.forEach((task) => {
            if(task.cost) {
                // let demo = calculateCost(task);
                // console.log(demo)
                totalCost += calculateCost(task);
                childCost = 0;
                console.log("parent: ",totalCost,"childrenSum: ",demo,"total:",totalCost);
            }
        });
        element.textContent = totalCost;
    }
};

const keywords = Object.keys(actions);


const htmlTree = (props) => {
    const element = document.createElement("P");
    // childCost = 0;
    Object.keys(props).filter((key) => keywords.indexOf(key) !== -1)
    .forEach((key) => actions[key](element, props));
    return element;
};

const buildElements = () => {
    document.querySelector("#buildHouse").appendChild(htmlTree(task));
};

document.addEventListener("DOMContentLoaded",buildElements);

