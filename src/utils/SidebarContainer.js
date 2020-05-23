import React, { Component } from 'react';

class SidebarContainer extends Component {
    componentDidMount = () => {
        let sidebarParentNode = document.getElementById('sidebar-style-container').parentNode;
        // sidebarParentNode.style.boxShadow='unset';
        sidebarParentNode.style.boxShadow='1px 0 1px 1px rgba(221, 221, 221, 0.1)';
    }
    render() {
        return (
            <div id="sidebar-style-container">
                SidebarContainer
            </div>
        );
    }
}

export default SidebarContainer;