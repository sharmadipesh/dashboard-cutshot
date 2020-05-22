import React from 'react';
import PropTypes from 'prop-types';

import Constants from 'config/Constants';

export default class Card extends React.Component {
  render() {
    const cardStyle = {
      boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      backgroundColor: Constants.white_color,
      borderRadius: this.props.borderRadius,
      minWidth: this.props.minWidth,
      pointerEvents: this.props.pointerEvents
    };

    return (
      <div className={this.props.className} style={cardStyle}>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  className: PropTypes.string,
  borderRadius: PropTypes.string,
  minWidth: PropTypes.string
};

Card.defaultProps = {
  className: '',
  borderRadius: '1px',
  minWidth: '',
  pointerEvents: 'auto'
};