import React, { Component } from 'react';
import FeatureParts from './FeatureParts';



class MainForm extends Component {

    render() {
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureParts
                features={this.props.features}
                USCurrencyFormat={this.props.USCurrencyFormat}
                state={this.props.state}
                handleFeatureUpdate={this.props.handleFeatureUpdate}
            />
        </form>
        )
    }
}
export default MainForm;