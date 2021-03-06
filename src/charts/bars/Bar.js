import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Small } from 'bw-axiom';
import classnames from 'classnames';
import './Bar.css';

export default class Bar extends Component {
  static propTypes = {
    color: PropTypes.oneOf([
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]).isRequired,
    minSize: PropTypes.string,
    percent: PropTypes.number.isRequired,
    showLabel: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    minSize: '1rem',
  };

  static contextTypes = {
    direction: PropTypes.string.isRequired,
  };

  render() {
    const { direction } = this.context;
    const { color, onClick, minSize, percent, showLabel, size, ...rest } = this.props;
    const isVertical = direction === 'up' || direction === 'down';
    const classes = classnames('ax-bars__bar', {
      'ax-bars__bar--center': size,
      'ax-bars__bar--clickable': onClick,
    });

    const rectClasses = classnames('ax-bars__bar-rect',
      `ax-bars__bar-rect--${color}`);

    const style = {
      height: isVertical && `${percent}%`,
      width: !isVertical && `${percent}%`,
    };

    const rectStyle = {
      height: !isVertical && size,
      minHeight: !isVertical && !size && minSize,
      width: isVertical && size,
      minWidth: isVertical && !size && minSize,
    };

    return (
      <Base { ...rest }
          className={ classes }
          onClick={ onClick }
          style={ style }>
        <div className={ rectClasses } style={ rectStyle } />

        { showLabel && (
          <div className="ax-bars__bar-label">
            <Small textColor="subtle">{ percent }%</Small>
          </div>
        ) }
      </Base>
    );
  }
}
