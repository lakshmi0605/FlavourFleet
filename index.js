import React from "react";
import ReactDOM from "react-dom/client";
//without React
// const heading = document.createElement("h1");
// heading.innerText = "Heading";

// const root = document.getElementById("root");
// root.appendChild(heading);

// //Using React
// const heading = React.createElement("h1",{},"React create ele Heading");//
// console.log(heading);

// const headingWithAttributes = React.createElement("h1",{id:"Heading"},"React create ele Heading with attributes");//
// console.log(headingWithAttributes);

// //Nested elements
// const parent = React.createElement("div",{},
//     React.createElement("div",{},
//         React.createElement("divs",{},React.createElement("h1",{},"I am nested h1 ele"))));//

// //Sibling elements in nested way
// const parent1 = React.createElement("div",{},
//     [React.createElement("h1",{},"React create ele Heading"),React.createElement("h1",{id:"Heading"},"React create ele Heading with attributes")]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent1);
// // root.render(<h1>Element with tags in render</h1>); //Doesn't get rendered - parameter should be a react element

const JSXHeading = () => {
    return (<h1>JSX Heading</h1>)
}
const Heading = <h1>JSX Heading</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JSXHeading />);

