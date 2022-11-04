import React from 'react';

class Car extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            color:"rose gold",
            model:"FIAT 500e",
            velocity: 5000,
            owner: this.props.owner
        }
    }

    render() {

        return(
            <div>
                <p>Color: {this.state.color}</p>
                <p>Model: {this.state.model}</p>
                <p>Velocity: {this.state.velocity}</p>
                <p>Owner: {this.state.owner}</p>

            </div>
        )
        
    }
}

export default Car