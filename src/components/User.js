import { useState } from "react";

const User = ({ name, location }) => {

    const [count,setCount]=useState(0)
    const [count1]=useState(1)

    const updateStateVariable=()=>{
        setCount(count+1)
    }

    return (
        <div className="uclass">
            <h2>Function Component</h2>
            <h3>count : {count}</h3>
            <h3>count : {count1}</h3>
            <button onClick={updateStateVariable}>Click</button>
            <h2>name:  Prasad</h2>
            <h2>email:  prasad@gmail.com</h2>
            <h2>{name} {location}</h2>
        </div>
    )
}
export default User;