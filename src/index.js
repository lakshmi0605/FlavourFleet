import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import User from "./components/User";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import UserContext from "./utils/userContext";

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

// const JSXHeading = () => {
//     return (<h1>JSX Heading</h1>)
// }
// const Heading = <h1>JSX Heading</h1>;

const AppLayout = ()=>{
    const userDataInfo = useContext(UserContext).userData;
    const [userData, setUserData] = useState(userDataInfo);
    return(<div className=" flex flex-col min-h-screen">
        <UserContext.Provider value={{loggedInUser : userData, setUserData}}>
        <Provider store={appStore} >
            <Header />
            <Outlet />
            <Footer/>
        </Provider>
        </UserContext.Provider>
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,
        children : [
            {
                path: '/',
                element : <Body />,
            },
            {
                path: '/about',
                element : <About />,
            },
            {
                path: '/contact',
                element : <Contact />,
            },
            {
                path: '/user',
                element : <User />,
            },
            {
                path: '/restaurants/:resId',
                element : <RestaurantMenu />,
            },
            {
                path: '/cart',
                element : <Cart />,
            },
        ],
        errorElement : <Error />,
    },
    

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;


