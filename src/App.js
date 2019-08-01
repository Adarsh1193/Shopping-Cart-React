import React from 'react';
import './App.css';

import Subtotal from './components/Subtotal/Subtotal';

class App extends React.Component {

  state = {
    total: 100
  }

  render() {
    return (
      <div className="App">
        <Subtotal price={this.state.total.toFixed(2)}/>
        
      </div>
    );
  }
}

export default App;
