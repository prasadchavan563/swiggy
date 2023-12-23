// import User from "./User";
// import UserClass from "./UserClass";
// const About = () => {
//     return (
//         <div className='menu'>
//             <h1>About Page</h1>
//             <h2>This is namaste react web series !!</h2>
//             <UserClass name={"Prasad Chavan (Class Component)"} location={"Pune"}/>
//             <User name={"Prasad Chavan (Function Component)"} location={"Pune"}/>
//         </div>
//     )
// }
// export default About;


import User from "./User";
import UserClass from "./UserClass";
import React from "react"

class About extends React.Component {

    constructor(props){                     //first called constructor
        super(props)
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render() {                                 //second called render
        console.log("Parent render");
        return (
            <div className='menu'>
                <h1>About Page</h1>
                <h2>This is namaste react web series !!</h2>
                <UserClass name={"Prasad Chavan (Class Component)"} location={"Pune"} />   
                <UserClass name={"MS Dhoni (Class Component)"} location={"IND"} />          
                        {/* here we see child component is called  then that component constructor will called then 
                        called render() while rendering child component if inside child component another
                        child of that component is called then called that component constructor then render
                        the componentDidMount() child component componentDidMount() called then
                        parent component componentDidMount() will called
                        componentDidMount() called only once the component mounting is done
                        successfully on we page    */}
                {/* <User name={"Prasad Chavan (Function Component)"} location={"Pune"} /> */}
                <h4>Finish!</h4>
            </div>
        ) 
    }
}
export default About;




// Parent constructor
// Parent render

// Prasad Chavan (Class Component) child constructor
// Prasad Chavan (Class Component) child render
// MS Dhoni (Class Component) child constructor
// MS Dhoni (Class Component) child render

//bacaue of called two child component react will batch this render component of those component
//not called componentDidMount first, first finish render then called componentDidMount
//first render phase happen then commit phase will happen
//this is happen bacause DOM manipulation is expensive task so first rendet then commit
//react batches all the children(render phase) then commit phase
// https://www.bing.com/images/search?view=detailV2&ccid=Fx00HQBd&id=5E6262C011FFF24B5DC023F112DEA75BB650BD82&thid=OIP.Fx00HQBd9Jg9ZmejeuGFNQHaDe&mediaurl=https%3a%2f%2fmiro.medium.com%2fmax%2f4560%2f1*EnuAy1kb9nOcFuIzM49Srw.png&exph=1070&expw=2280&q=react+lifecycle&simid=608025262160176208&FORM=IRPRST&ck=133C4A8B91C2C0180C8FAB898FA1A4D2&selectedIndex=8&itb=0&ajaxhist=0&ajaxserp=0

//now commit phase will happen
//DOM updated in single batch
// Prasad Chavan (Class Component) child componentDidMount
// MS Dhoni (Class Component) child componentDidMount
// Parent componentDidMount