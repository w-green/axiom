import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Panel.css';

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isInactive: PropTypes.bool,
    minimumHeight: PropTypes.string,
  };

  static defaultProps = {
    isInactive: false,
  };

  render() {
    const { children, isInactive, minimumHeight, ...rest } = this.props;
    const classes = classnames('ax-panel', {
      'ax-panel--inactive': isInactive,
    });

    return (
      <Base { ...rest } className={ classes } style={ { minHeight: minimumHeight } }>
        { children }
      </Base>
    );
  }
}
