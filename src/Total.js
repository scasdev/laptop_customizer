import React, { Component } from 'react';

class Total extends Component {
    render() {
        const USCurrencyFormat = this.props.USCurrencyFormat
        const state = this.props.state

        const total = Object.keys(state).reduce(
            (acc, curr) => acc + state[curr].cost, 0);

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        )
    }
}

export default Total;