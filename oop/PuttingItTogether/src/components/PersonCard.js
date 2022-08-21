import React, { Component } from 'react'

export default class PersonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        age: this.props.age
    };
  }

  btnClick(e) {
    this.setState({ age: this.state.age + 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={(e) => this.btnClick(e)}>Birthday Button for {this.props.firstName + " " + this.props.lastName}</button>
      </div>
    )
  }
}
