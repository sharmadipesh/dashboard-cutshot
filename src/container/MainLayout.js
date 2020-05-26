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
                <Sidebar
					sidebar={
						<SidebarContainer {...this.props} sidebarHandler={this.sidebarHandler} />
					}
                    // open={this.state.isSidebarOpen}
					open={ window.innerWidth >700 ? this.state.isSidebarOpen:!this.state.isSidebarOpen}
                    onSetOpen={this.sidebarHandler}
                    docked={ window.innerWidth >700 ? this.state.isSidebarOpen:!this.state.isSidebarOpen}
					styles={{
                        root: {
                            boxShadow:'none'
                        },
						sidebar: {
							background: 'white',
                            // width: window.innerWidth > 600 ? '19%' : '100vw',
                            // width: window.innerWidth > 600 ? '260px' : '100vw',
                            width:'260px',
                            height:'100%',
                            boxShadow:'none',
                            borderRight:'1px solid #dddddd'
						},
					}}
				>
                    <Header {...this.props}/>
                    <div className="main-app-container">
                        <Switch>
                            <Route exact  {...this.props} path={Routes.LandingPage} component={Dashboard} />
                            <Route  exact {...this.props} path={Routes.Calender} component={Calender} />
                            <Route  exact {...this.props} path={Routes.Inbox} component={Inbox} />
                            <Route  exact {...this.props} path={Routes.Invoice} component={Invoice} />
                            <Route  exact {...this.props} path={Routes.Lab_Experiment} component={LabExperiment} />
                        </Switch>
                    </div>
                </Sidebar>
            </div>
        );
    }
}

export default MainLayout;