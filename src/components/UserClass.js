import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name,"child constructor");

        this.state={
            count : 0,
            count1: 1
        }
    }

    componentDidMount(){
        console.log(this.props.name,"child componentDidMount");
    }

    render() {
        console.log(this.props.name,"child render");
        const { name, location } = this.props       //destructure
        const {count,count1}=this.state                    //destructure
        return (
            <div className="uclass">
                <h2>Class Component</h2>
                <h3>count : {count}</h3>
                <h3>count : {count1}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Count</button>
                <h2>name:  {name} {location}</h2>
                <h2>email:  prasad@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;