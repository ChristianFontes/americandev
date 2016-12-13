import React from 'react';
import Snabbt from 'react-snabbt';
 
class example extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
    this.animate = this.animate.bind(this);
  }
 
  animate() {
    this.setState({animate: true});
  }
 
  onComplete() {
    console.log( "Animation completed!" );
  }
 
  render() {
    const buttonStyles = {
      width: "200px",
      height: "40px",
      background: "#ddd",
      borderRadius: "5px"
    };
    const options = {
      fromRotation: [0, 0, -2*Math.PI],
      position: [0, 0, 0],
      easing: 'spring',
      springConstant: 0.2,
      springDeceleration: 0.90,
      springMass: 10,
    };
    return (
      <div>
        <Snabbt options={options} animate={this.state.animate} onComplete={this.onComplete}>
          <button style={buttonStyles} onClick={this.animate}>Button</button>
        </Snabbt>
      </div>
    );
  }
}
 
export default example;