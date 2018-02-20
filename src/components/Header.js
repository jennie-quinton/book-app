import React, { Component } from 'react';
import { Icon } from 'react-fa';

export class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <Icon name="book" />
          &nbsp;Reading List
        </a>
      </nav>
    );
  }
}
