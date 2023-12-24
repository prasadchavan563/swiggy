import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("child constructor");

        this.state={
        }
    }

    componentDidMount(){
        console.log("child componentDidMount");
    }

    render() {
        console.log("child render");
        return (
            <div className="uclass">
                <h2>Class Component</h2>
                <h2>name:  Prasad Chavan</h2>
                <h2>email:  prasad@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;