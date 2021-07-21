const htmlTree = (props) => {
    const actions = {

        text: (element, text) => 
            element.appendChild(document.createTextNode(text)),
    
        events: (element, events) => 
            Object.keys(events).forEach((key) => element.addEventListener(key, events[key])),
    
        children: (element, children) => 
            children.forEach((child) => element.appendChild(htmlTree(child))),
    
        attr: (element, attr) => 
            Object.keys(attr).forEach((key) => element.setAttribute(key, attr[key])),
    };
    
    const keywords = Object.keys(actions)

    const element = document.createElement(props.tag);
    Object.keys(props).filter((key) => keywords.indexOf(key) !== -1)
        .forEach((keyword) => actions[keyword](element,props[keyword]));

    return element;
};