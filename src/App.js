import React, {Component} from 'react';



class App extends Component {

  state = {
    name: 'Bassem',
    photo: 'https://www.robohash.org/bassem2?set=set3',
    description: 'My name is Bassem'
  }

  handleLotfiClick = () => {
    this.setState({
      name: 'Lotfi',
      photo: 'https://www.robohash.org/lotfi2?set=set3',
      description: 'I am a Designer'
    })
  }

  handleMohamedClick = () => {
    this.setState({
      name: 'Mohamed',
      photo: 'https://www.robohash.org/mohamed?set=set3',
      description: 'I am a web developer'  })
  }

  handleBassemClick = () => {
    this.setState({
      name: 'Bassem',
      photo: 'https://www.robohash.org/bassem?set=set3',
      description: 'My name is Bassem'
    })
  }

  render() {
    return (
      <div>
        <div style={{marginTop: 50, display: 'flex', justifyContent: 'center'}}>
        <button onClick={this.handleBassemClick}>Bassem</button>
        <button onClick={() => this.handleLotfiClick()}>Lotfi</button>
        <button onClick={() => this.handleMohamedClick()}>Mohamed</button>
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
