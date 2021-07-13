let totalCost = 0;
const actions = {

    name: (element,name) =>
            element.appendChild(document.createTextNode(name)),
    
        
};

const keywords = Object.keys(actions);


const htmlTree = (props) => {
    const element = document.createElement("P");
    Object.keys(props).filter((key) => keywords.indexOf(key) !== -1)
    .forEach((key) => actions[key](element, props[key]));
    return element;
};

const buildElements = () => {
    document.querySelector("#buildHouse").appendChild(htmlTree(data));
};

document.addEventListener("DOMContentLoaded",buildElements);

