import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import config from './support';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainOption: null,
      subOption: null,
      config: config
    }
  }

  selectMainOption(option) {
    this.setState({
      mainOption: option,
      subOption: null,
    })
  }

  selectSubOption(option) {
    this.setState({
      subOption: option
    })
  }

  mainOptions() {
    return this.state.config.map((list, index) => {
      return (
        <a
          style={{ 
            cursor: 'pointer', 
            backgroundColor: index === this.state.mainOption -1 && '#E3B23C'
          }}
          onClick={() => { this.selectMainOption(list.value) }}>
          {list.label}
        </a>)
    })
  }

  subOptions(mainOption) {
    return this.state.config.filter(list => list.value === mainOption).map(sublist => {
      return sublist.suboptions.map(optionsRow => {
        return (
          <ul style={{
            display: 'flex',
            justifyContent: 'space-around',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '100%'
          }}
          >
            {optionsRow.map((option) => (
              <li
                style={{
                  flex: '1',
                  padding: '.2em',
                  margin: '.1em',
                  cursor: 'pointer',
                  backgroundColor: option.value === this.state.subOption ? '#A39594' : '#EDEBD7',
                  border: '1px solid black',
                  borderRadius: '.2em',
                  textAlign: 'center'
                }}
                onClick={() => { this.selectSubOption(option.value) }}>
                {option.label}
              </li>))}
          </ul>
        )
      })
    })
  }

  render() {
    const { mainOption, subOption } = this.state
    return (
      <div className="App">
        <div className="mainOptions">
          {this.mainOptions(config)}
        </div>
        <div className="subOptions">
          {this.subOptions(mainOption)}
        </div>
        <div className="image">
          {mainOption && subOption && <img src={`./assets/${mainOption}${subOption}.jpg`} />}
        </div>
      </div>
    );
  }
}

export default App;
