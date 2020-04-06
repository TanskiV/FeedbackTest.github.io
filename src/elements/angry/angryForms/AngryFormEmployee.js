import React from "react";
import Sorry from "../sorry/Sorry";

class AngryFormEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finish:false
        }
    }

    handleClickSubmit = () => {
        this.setState({
            finish:true
        })
    };

    render() {
        if (!this.state.finish){
            return (
                <div>
                    <h1 className='offset-5'>Why?</h1>
                    <form action={''}>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optradio"/>Option 4
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optradio"/>Option 5
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optradio"/>Option 6
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <textarea className="form-control" rows="2" id="comment"/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleClickSubmit}>Submit</button>
                    </form>
                </div>
            );
        }else {
            return (
                <Sorry/>
            )
        }

    }
}

export default AngryFormEmployee;