import React, { Component } from 'react';
import FeatureOption from './FeatureOption';


class FeatureList extends Component {
    render() {
        return (
        Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <FeatureOption
                        features={this.props.features}
                        feature={feature}
                        USCurrencyFormat = {this.props.USCurrencyFormat}
                        state = {this.props.state}
                        handleFeatureUpdate = {this.props.handleFeatureUpdate}
                        />
                </fieldset>
            );
        })
        )
    }
}
export default FeatureList;