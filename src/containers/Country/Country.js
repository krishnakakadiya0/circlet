import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country : "india"
        }
    }

    changeCountry = () => {
        this.setState({
            country : "UK"
        })
    }
    
    render() {
        return (
            <>
                <div>Country : {this.state.country}</div>
                <button onClick={() => this.changeCountry()}>Change Country</button>
            </>
        );
    }
}

export default Country;