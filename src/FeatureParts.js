import React, { Component } from 'react';
import FeatureSpecs from './FeatureSpecs'

class FeatureParts extends Component {
    render() {
        const features = this.props.features

        return (

            Object.keys(features).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                
                return (
                    <fieldset className="feature" key={featureHash}>
                        <legend className="feature__name">
                            <h3>{feature}</h3>
                        </legend>
                        <FeatureSpecs
                        feature = {feature}
                        state = {this.props.state}
                        features = {this.props.features}
                        USCurrencyFormat = {this.props.USCurrencyFormat}
                        handleFeatureUpdate = {this.props.handleFeatureUpdate} />
                    </fieldset>
                );
            })
        )

    }
}

export default FeatureParts;