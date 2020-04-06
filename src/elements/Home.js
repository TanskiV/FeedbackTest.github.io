import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div>
                    <button type="button" className="btn btn-warning btn-circle btn-xl">:)</button>
                </div>
                <div>
                    <button type="button" className="btn btn-danger btn-circle btn-xl">:(</button>
                </div>
            </div>

        );
    }

}

export default Home;