import React from "react";
import CompanyEmployee from "./CompanyEmployee";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            happy: true
        }
    }

    handleClickHappy = () => {
        this.setState({
            click: true,
            happy: true
        })
    };

    handleClickAngry = () => {
        this.setState({
            click: true,
            happy: false
        })
    };

    render() {
        if (!this.state.click) {
            return (
                <div className='container-fluid'>
                    <div>
                        <button onClick={this.handleClickHappy} type="button"
                                className="btn btn-success btn-circle btn-xl">:)
                        </button>
                    </div>
                    <div>
                        <button onClick={this.handleClickAngry} type="button"
                                className="btn btn-danger btn-circle btn-xl">:(
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <CompanyEmployee happy={this.state.happy}/>
            )
        }

    }

}

export default Home;