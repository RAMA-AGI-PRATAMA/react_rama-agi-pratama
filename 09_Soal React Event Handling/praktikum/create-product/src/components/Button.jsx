import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Random Number:', randomNumber);
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleClick} className="btn btn-primary">Generate Random Number</button>
      </div>
    );
  }
}

export default Button;
