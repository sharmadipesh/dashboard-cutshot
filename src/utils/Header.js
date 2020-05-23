import React, { Component } from 'react';
import Icon from 'utils/Icon';

class Header extends Component {
    render() {
        return (
            <div className="header-style-container d-flex">
                <div className="part-one d-flex align-items-center justify-content-center">
                    <Icon className="icon-progress" icon="ICON_HOME"/>
                </div>
                <div className="d-flex align-items-center justify-content-between part-two">
                    <div className="title-text">
                        Dashboard
                    </div>
                    <div className="select-width">
                        <select
                            name="Language"
                            className="form-control select-option"
                        >
                            <option value="English">English</option>
                        </select>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;
