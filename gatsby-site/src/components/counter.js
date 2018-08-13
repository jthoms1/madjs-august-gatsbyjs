import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.startCount || 0
    }
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.onClick.bind(this)}>Count Up!!</button>
      </div>
    )
  }
}


export default Counter;