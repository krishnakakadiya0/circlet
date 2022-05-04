import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            city : "Surat"
        }
    }
    
    changeCity = () => {
        this.setState({
            city : "Kerla"
        })
    }

    render() {
        return (
            <>
                <div>City : {this.state.city}</div>
                <button onClick={() => this.changeCity()}>Change City</button>
            </>
        );
    }
}

export default City;