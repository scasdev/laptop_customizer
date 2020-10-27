import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList';
import FEATURES from './FEATURES';
import Total from './Total'
import Summary from  './Summary'


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const features = FEATURES;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }


  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const state = this.state.selected

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList
              state={state}
              features={features}
              USCurrencyFormat={USCurrencyFormat}
              handleFeatureUpdate={(feature, newValue) => this.updateFeature(feature, newValue)}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary
              state = {state}
              USCurrencyFormat={USCurrencyFormat}              
            />
            <Total
              state={state}
              USCurrencyFormat={USCurrencyFormat}              
            />
          </section>
        </main>
      </div>
    );
  };
}
export default App;
