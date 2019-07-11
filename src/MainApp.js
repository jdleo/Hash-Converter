import React from 'react';
import './App.css';
const crypto = require('crypto');
const hashes = [
  "sha1",
  "sha256",
  "md5",
  "sha512",
  "rmd160",
  "sha224",
  "sha384"
];

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
    //set state in react
    this.setState({
      textValue: txt
    });
  }

  //helper method to check if a hash function is supported by crypto module
  supportedHash(txt, algo) {
    try {
      var hash = crypto.createHash(algo)
      return hash.update(txt, 'utf8').digest('hex');
    }

    catch (err) {
      return algo + " is not supported.";
    }
  }

  renderHashBlocks() {
    //get current text field value
    const txt = this.state.textValue;

    //map hash items
    const hashItems = hashes.map((hash) =>
      <div key={"container_" + hash}>
        <header key={"header_" + hash}>
          {hash}
        </header>
        <div key={"block_" + hash}>
          {this.supportedHash(txt, hash)}
        </div>
      </div>
    );

    return (<div>{hashItems}</div>);
  }

  render () {
    return (
      <div>
        <input 
          type="text"
          placeholder="Type string to be hashed..."  
          onChange={(e) => {this.handleChange(e)}}
          className="Input-bar"
        />
        {this.renderHashBlocks()}
      </div>
    )
  }

}

export default MainApp;