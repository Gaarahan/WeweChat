import React from 'react';
import WeweChat from '../WeweChat/Wewechat'
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <WeweChat
              name={'gaarahan'}
          />
        </div>
    );
  }
}


export default App;
