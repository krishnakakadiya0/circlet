import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            time : new Date()
        }
    }
    
    changeTime = () => {
        this.setState({
            time : new Date()
        })
    }

    componentDidMount = () => {
        this.setTime = setInterval(() => this.changeTime(), 1000);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.time !== this.state){
            console.log("State Chnaged");
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.setTime);
    }

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;