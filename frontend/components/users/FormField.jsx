import React, { Component } from 'react';

export default class FormField extends Component {
  render() {
    const { className, children, ...other } = this.props;
    return (
      <div className={className}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, other);
        })}
      </div>
    );
  }
}
