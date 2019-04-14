import React from 'react'
import Weather from './components/Weather';

import Input from './components/Input';

class App extends React.Component {

  render() {
    return (
      <div>
        <Weather/>
        
        <Input />

      </div>
    )
  }
}

export default App