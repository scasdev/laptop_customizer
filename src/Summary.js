import React, { Component } from 'react';

class Summary extends Component {
    render() {
        
        const USCurrencyFormat = this.props.USCurrencyFormat
        const state = this.props.state

        return (
            Object.keys(state).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = state[feature];

                return (
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                            {USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Summary;