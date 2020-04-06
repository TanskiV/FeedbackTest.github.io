import React from "react";
import AngryFormCompany from "./angryForms/AngryFormCompany";
import AngryFormEmployee from "./angryForms/AngryFormEmployee";

class ClientAngry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: false,
            employee: false
        }
    }

    handleAngryCompany = () => {
        this.setState({
            company: true
        })

    };

    handleAngryEmployee = () => {
        this.setState({
            employee: true
        })

    };

    render() {
        if (this.state.company) {
            return (
                <AngryFormCompany/>
            )
        }
        if (this.state.employee) {
            return (
                <AngryFormEmployee/>
            )
        } else {
            return (
                <div>
                    <div>
                        <button onClick={this.handleAngryCompany} className='btn-danger'>Company</button>
                    </div>
                    <div>
                        <button onClick={this.handleAngryEmployee} className='btn-danger'>Employee</button>
                    </div>
                </div>
            );
        }
    }
}

export default ClientAngry;