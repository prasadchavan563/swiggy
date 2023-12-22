import { useRouteError } from "react-router-dom"
const Error =()=>{
    const error =useRouteError()
    console.log("error",error);
    return(
        <div>
            <h1>{error.status} {error.statusText}</h1>
            <h3>{error.data}</h3>
        </div>
    )
}
export default Error;