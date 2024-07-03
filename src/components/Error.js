import { useRouteError } from "react-router-dom";
import error from "../images/Error.jpeg"


const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="m-4 p-4 text-center">
        <img className="mx-auto m-8 p-4" src={error} alt="Error-image"/>
        <h1 className="font-bold text-center text-2xl p-2">Oops!! Something happened!!!</h1>
        <h2 className="font-bold text-center text-xl ">An Error occured</h2>
    </div>)
}

export default Error;