import React, { Component } from 'react';
import Icon from 'utils/Icon';
import { NavLink } from 'react-router-dom';

class SidebarContainer extends Component {

    componentDidMount = () => {
        let sidebarParentNode = document.getElementById('sidebar-style-container').parentNode;
        // sidebarParentNode.style.boxShadow='1px 0 1px 1px rgba(221, 221, 221, 0.1)';
        sidebarParentNode.style.boxShadow='unset';
    }

    render() {
        const {pathname} = this.props.location;
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
                <div className="navlink-container">
                    <NavLink exact activeClassName="active-link" to='/' className="inactive-link d-flex align-items-center pb-15 mb-15 border-bottom">
                        <Icon className="icon-progress mr-3" icon={pathname === '/' ? 'ICON_DASHBOARD_ACTIVE' :'ICON_DASHBOARD_INACTIVE'}/>
                        <div>Dashboard</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-link" to='/calender' className="inactive-link d-flex align-items-center pb-15 mb-15 border-bottom">
                        <Icon className="icon-progress mr-3" icon={pathname === '/calender' ? 'ICON_CALENDER_ACTIVE' :'ICON_CALENDER_INACTIVE'}/>
                        <div>Calender</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-link" to='/inbox' className="inactive-link d-flex align-items-center pb-15 mb-15 border-bottom">
                        <Icon className="icon-progress mr-3" icon={pathname === '/inbox' ? 'ICON_INBOX_ACTIVE' :'ICON_INBOX_INACTIVE'}/>
                        <div>Inbox</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-link" to='/invoice' className="inactive-link d-flex align-items-center pb-15 mb-15 border-bottom">
                        <Icon className="icon-progress mr-3" icon={pathname === '/invoice' ? 'ICON_INVOICING_ACTIVE' :'ICON_INVOICING_INACTIVE'}/>
                        <div>Invoicing</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-link" to='/lab-experiment' className="inactive-link d-flex align-items-center pb-15 mb-15 border-bottom">
                        <Icon className="icon-progress mr-3" icon={pathname === '/lab-experiment' ? 'ICON_LAB_ACTIVE' :'ICON_LAB_INACTIVE'}/>
                        <div>Lab / Experimental</div>
                    </NavLink>
                    <div className="designation">
                        RECENTLY VIEWED
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-15">
                        <div className="visited-link clickable">
                            Overall Performance
                        </div>
                        <Icon className="icon-size-10" icon="ICON_RIGHT_ARROW"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-15">
                        <div className="visited-link clickable">
                            Invoice #940
                        </div>
                        <Icon className="icon-size-10" icon="ICON_RIGHT_ARROW"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between ">
                        <div className="visited-link clickable">
                            Customer: Minerva Viewer
                        </div>
                        <Icon className="icon-size-10" icon="ICON_RIGHT_ARROW"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarContainer;