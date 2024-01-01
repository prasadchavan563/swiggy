import User from "./User";
import UserClass from "./UserClass";
import React from "react"
import ClientContext from "../Utils/ClientContext";

class About extends React.Component {

    constructor(props){                     
        super(props)
        console.log("Parent constructor");

        this.state={
            userInfo:{
                login:"prasad",
                url:"pune"
            }
        }
    }

    async componentDidMount(){
        console.log("Parent componentDidMount");
        const data=await fetch("https://api.github.com/users/prasadchavan563")
        const json=await data.json()
        // const json   =JSON.stringify(jsons)
        console.log("json",json);
        this.setState({
            userInfo:json,
        })

        // componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("setInterval");
        },1000)
    }

    componentDidUpdate(){
        console.log("parent componentDidUpdated");
    }

    componentWillUnmount(){
        clearInterval(this.timer)                 //that is the reason we use to clear interval if not then we route another page then also its working
        console.log("parent componentWillUnmount");     //when route to the new page then called
    }

    render() {                               
        console.log("Parent render");
        const {login,url}=this.state.userInfo
        // console.log(login,url,"login,url");
        return (
            <div className='menu'>
                <h1>About Page</h1>
                <h2>This is namaste react web series !!</h2>
                <UserClass />     
                <p>{login}{url}</p>       
                <h4>Finish!</h4>
                <ClientContext.Consumer>
                    {({loggedInUser})=>(
                        <h1>{loggedInUser}</h1>
                    )}
                </ClientContext.Consumer>
            </div>
        ) 
    }
}
export default About;




/**
 * 
 * 
 * ---------MOUNTING---------
 * 
 * Constructor (dummy data default)
 * render (dummy)
 *      <HTML dummy>
 * componentDidMount
 *      <API call>
 *      <this.setState>  ->state variable is updated
 * 
 * 
 * 
 * --------UPDATING----------
 * render(API data)
 * <HTML API data>
 * componentDidUpdate
 * 
 * 
 */


//Intead of this we use useEffect now
// componentDidUpdate(prevProps, prevState) {
//     // Check if the count state has changed
//     if (prevState.count !== this.state.count) {
//       console.log('Count state has changed');
//     }

//     // Check if any specific prop has changed
//     if (prevProps.someProp !== this.props.someProp) {
//       console.log('Value of someProp has changed');
//     }
//   }