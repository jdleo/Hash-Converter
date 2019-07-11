import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner';
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

  //for github corner linking (change to your own url if you forked this)
  gitHubUrl() {
    return "https://github.com/jdleo/Hash-Converter"
  }

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
      <div className="Hash-div" key={"container_" + hash}>
        <header className="Hash-header" key={"header_" + hash}>
          {hash}
        </header>
        <div className="Hash-block" key={"block_" + hash}>
          <code className="Code-block">
            {this.supportedHash(txt, hash)}
          </code>
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
        <GithubCorner
          href={this.gitHubUrl()}
          bannerColor="#000"
          octoColor="#fff"
          size={80}
          direction="right" 
          svgStyle={{"mixBlendMode":"darken"}}
        />
      </div>
    )
  }

}

export default MainApp;