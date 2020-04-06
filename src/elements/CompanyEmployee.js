import React from "react";
import ClientHappy from "./happy/ClientHappy";
import ClientAngry from "./angry/ClientAngry";

class CompanyEmployee extends React.Component{


    render() {
        if (this.props.happy){
            return (
                <ClientHappy/>
            );
        }else {
            return (
                <ClientAngry/>
            );
        }

    }
}

export default CompanyEmployee;