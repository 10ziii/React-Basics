const reactElement = {
    type:'a',
    props: {
        href:"https://google.com",
        target:"_blank",
    },
    children:"visit Google"
};

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for(let prop in reactElement.props){
         domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");
customRender(reactElement,mainContainer)