import React, { Component } from 'react';
import Total from './Total';
import SummaryItem from  './SummaryItem';

class SummaryList extends Component {
    render() {
        return (
            <section>
            <h2>Your cart</h2>
            <SummaryItem
              state = {this.props.state}
              USCurrencyFormat={this.props.USCurrencyFormat}              
            />
            <Total
              state={this.props.state}
              USCurrencyFormat={this.props.USCurrencyFormat}              
            />
        </section>
        )
    }
}

export default SummaryList;