import React, {Component} from 'react';



class App extends Component {

  state = {
    name: 'Sarra',
    photo: 'https://www.robohash.org/sarra2?set=set3',
    description: 'My name is Sara'
  }

  handleHaroldClick = () => {
    this.setState({
      name: 'Harold',
      photo: 'https://www.robohash.org/harold2?set=set3',
      description: 'I am a Designer'
    })
  }

  handleDanielClick = () => {
    this.setState({
      name: 'Daniel',
      photo: 'https://www.robohash.org/Danie?set=set3',
      description: 'I am a web developer'  })
  }

  handleSarraClick = () => {
    this.setState({
      name: 'Sarra',
      photo: 'https://www.robohash.org/sarra2?set=set3',
      description: 'My name is Sarra'
    })
  }

  render() {
    return (
      <div>
        <div style={{marginTop: 50, display: 'flex', justifyContent: 'center'}}>
        <button onClick={this.handleSarraClick}>Sarra</button>
        <button onClick={() => this.handleHaroldClick()}>Harold</button>
        <button onClick={() => this.handleDanielClick()}>Daniel</button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1>{this.state.name}</h1>
          <img src={this.state.photo} />
          <p>{this.state.description}</p>
        </div>
      </div>
    )
  }
}

export default App;
