import React, { Component } from 'react';
import './CoinFlip.css';

class CoinFlip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numHeads: 0,
      numTails: 0,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
    }
  }

  onClick(){
    let headsOrTails = Math.floor(Math.random() * 2) + 1;
    if(headsOrTails === 1) {
      this.setState({
        numHeads: this.state.numHeads + 1,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
      })
    } else {
      this.setState({
        numTails: this.state.numTails + 1,
        imgUrl: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
      })
    }
  }

  render() {
    return(
      <div className="CoinFlip">
        <h1 className="CoinFlip-header">React Coin Flip</h1>
        <div className="CoinFlip-img-container">
          <img className="CoinFlip-img" src={this.state.imgUrl}></img>
        </div>
        <button className="CoinFlip-btn" onClick={() => this.onClick()}>Flip Coin</button>
        <h5 className="CoinFlip-counter">Out of {this.state.numHeads + this.state.numTails} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</h5>
      </div>
    )
  }
}

export default CoinFlip;