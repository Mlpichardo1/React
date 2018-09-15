import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        // console.log(this.props);
        const { name, age, belt } = this.props; // example of destructering
        return(
            <div className="ninja">
                <div>Name: { this.props.name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        )
    }
}

export default Ninjas