import React, { Component } from 'react';
import Icon from 'utils/Icon';

class NotFound extends Component {
    render() {
        return (
            <div className="not-found-container d-flex flex-column align-items-center justify-content-center">
                <Icon className="not-found-icon" icon="ICON_NOT_FOUND"/>
            </div>
        );
    }
}

export default NotFound;