import React, { Component } from 'react';
import Routes from 'config/Routes';
import { Route, Switch } from 'react-router-dom';
import Header from 'utils/Header';
import SidebarContainer from 'utils/SidebarContainer';
import Sidebar from 'react-sidebar';
import Dashboard from 'views/dashboard/Dashboard';
import Calender from 'views/calender/Calender';
import Inbox from 'views/inbox/Inbox';
import Invoice from 'views/invoice/Invoice';
import LabExperiment from 'views/lab/LabExperiment';

class MainLayout extends Component {
    state = {
		isSidebarOpen: true,
    };
    
    sidebarHandler = () => {
        this.setState({
            isSidebarOpen:!this.state.isSidebarOpen
        })
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="sidebar-new">
                    <SidebarContainer {...this.props}/>
                </div>
                <div className="main-app-container">
                    <Switch>
                        <Route exact  {...this.props} path={Routes.LandingPage} component={Dashboard} />
                        <Route  exact {...this.props} path={Routes.Calender} component={Calender} />
                        <Route  exact {...this.props} path={Routes.Inbox} component={Inbox} />
                        <Route  exact {...this.props} path={Routes.Invoice} component={Invoice} />
                        <Route  exact {...this.props} path={Routes.Lab_Experiment} component={LabExperiment} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainLayout;