import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import NavListItem from './NavListItem';
import './NavList.css';

export default class NavList extends Component {
  static propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isOpen: PropTypes.bool,
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const {
      className,
      items = [],
      isOpen = false,
      isActive = false,
      onItemClick,
    } = this.props;

    const classes = classnames(className,
      'dm-nav__list', {
        'dm-nav__list--open': isOpen || isActive,
      }
    );

    return (
      <ul className={ classes }>
        { items.map((item, index) =>
          <NavListItem item={ item } key={ index } onClick={ onItemClick } />
        ) }
      </ul>
    );
  }
}
