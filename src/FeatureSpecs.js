import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureSpecs extends Component {
    render() {
        const specs = this.props.specs
        const state = this.props.state
        const USCurrencyFormat = this.props.USCurrencyFormat
        const handleFeatureUpdate = this.props.handleFeatureUpdate

        return (

            Object.keys(specs).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = specs[feature].map(item => {
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
                });
                return (
                    <fieldset className="feature" key={featureHash}>
                        <legend className="feature__name">
                            <h3>{feature}</h3>
                        </legend>
                        {options}
                    </fieldset>
                );
            })
        )

    }
}

export default FeatureSpecs;