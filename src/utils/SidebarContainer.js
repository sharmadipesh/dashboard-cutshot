import React, { Component } from 'react';
import Icon from 'utils/Icon';

class SidebarContainer extends Component {

    componentDidMount = () => {
        let sidebarParentNode = document.getElementById('sidebar-style-container').parentNode;
        // sidebarParentNode.style.boxShadow='1px 0 1px 1px rgba(221, 221, 221, 0.1)';
        sidebarParentNode.style.boxShadow='unset';
    }

    render() {
        return (
            <div id="sidebar-style-container">
                <div className="d-flex flex-column align-items-center justify-content-center border-bottom">
                    <div className="profile">
                        <img src="img/profile-1.jpg" alt="John Deo" className="profile-image"/>
                        <div className="setting-icon">
                            <Icon className="icon-progress" icon="ICON_SETTING"/>
                        </div>
                    </div>
                    <div className="user-name d-flex align-items-center">
                        <div>John Deo</div>
                        <div className="dot"></div>
                    </div>
                    <div className="designation">Developer</div>
                </div>
            </div>
        );
    }
}

export default SidebarContainer;