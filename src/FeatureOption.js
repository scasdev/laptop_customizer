import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureOption extends Component {
    render() {
        const feature = this.props.feature
        const state = this.props.state
        const USCurrencyFormat = this.props.USCurrencyFormat
        const handleFeatureUpdate = this.props.handleFeatureUpdate

        return (
            this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (

                    <div key={itemHash} className="feature__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === state[feature].name}
                            onChange={e => handleFeatureUpdate(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                    </div>
                );
            })
        )
    }
}

export default FeatureOption;