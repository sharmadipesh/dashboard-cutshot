import React, { Component } from 'react';
// import Routes from 'config/Routes';
import { Route, Switch } from 'react-router-dom';
import Header from 'utils/Header';
import SidebarContainer from 'utils/SidebarContainer';
import Sidebar from 'react-sidebar';
import Dashboard from 'views/dashboard/Dashboard';

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
					open={this.state.isSidebarOpen}
                    onSetOpen={this.sidebarHandler}
                    docked={this.state.isSidebarOpen}
                    id="dd11"
					styles={{
                        root: {
                            boxShadow:'none'
                        },
						sidebar: {
							background: 'white',
                            width: window.innerWidth > 600 ? '19%' : '100vw',
                            height:'100%',
                            boxShadow:'none',
                            borderRight:'1px solid #dddddd'
						},
					}}
				>
                    <Header {...this.props}/>
                    <div className="main-app-container">
                        <Switch>
                            <Route  {...this.props} path={'/'} component={Dashboard} />
                        </Switch>
                    </div>
                </Sidebar>
            </div>
        );
    }
}

export default MainLayout;