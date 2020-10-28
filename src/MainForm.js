import React, { Component } from 'react';
import FeatureSpecs from './FeatureSpecs';
import FeatureParts from './FeatureParts';



class MainForm extends Component {

    render() {
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureSpecs
                specs={this.props.specs}
                USCurrencyFormat={this.props.USCurrencyFormat}
                state={this.props.state}
                handleFeatureUpdate={this.props.handleFeatureUpdate}
            />

            <FeatureParts
                parts={this.props.parts}
                USCurrencyFormat={this.props.USCurrencyFormat}
                state={this.props.state}
                handleFeatureUpdate={this.props.handleFeatureUpdate}
            />
        </form>
        )
    }
}
export default MainForm;