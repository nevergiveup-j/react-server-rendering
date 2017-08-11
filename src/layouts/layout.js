import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
