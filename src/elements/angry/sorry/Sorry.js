import React from "react";
import Home from "../../Home";

class Sorry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toHome:false
        }
    }

    handleToHome = () =>{
        this.setState({
            toHome:true
        })
    }

    render() {
        if (!this.state.toHome){
            return (
                <div className='text-center'>
                    <h1>We are Sorry.</h1>
                    <h2>Hope to see you again!</h2>
                    <div className='text-center'>
                        <button onClick={this.handleToHome} className='align-items-center btn-primary'>Home</button>
                    </div>
                </div>
            )
        }else {
            return (
                <Home/>
            )
        }
    }
}

export default Sorry;
