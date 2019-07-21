import React, { Component } from 'react';

class Coin extends Component {

  render() {
    return(
      <div className="CoinFlip-img-container">
        <img className="CoinFlip-img" alt="coin" src={this.props.imgUrl}></img>
      </div>
    )
  }
}

export default Coin;