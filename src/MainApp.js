import React from 'react';
import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      textValue: ""
    }
  }

  handleChange (e) {
    //get current text field value
    const txt = e.target.value;
  }

  render () {
    return (
      <div>
        <input 
          type="text"
          placeholder="Type here..."  
          onChange={(e) => {this.handleChange(e)}}
          className="Input-bar"
        />
      </div>
    )
  }

}

export default MainApp;