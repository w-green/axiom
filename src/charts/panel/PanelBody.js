import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import classnames from 'classnames';

export default class PanelBody extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    horizontalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
  };

  render() {
    const { children, horizontalAlign, verticalAlign, ...rest } = this.props;
    const classes = classnames('ax-panel__body', {
      [`ax-panel__body--vertical-${verticalAlign}`]: verticalAlign,
      [`ax-panel__body--horizontal-${horizontalAlign}`]: horizontalAlign,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
