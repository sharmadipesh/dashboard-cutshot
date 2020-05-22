import React, { Component } from 'react';
// import Routes from 'config/Routes';
// import { Route, Switch } from 'react-router-dom';
import Header from 'utils/Header';
import SidebarContainer from 'utils/SidebarContainer';
import Sidebar from 'react-sidebar';
import Dock from 'react-dock';

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
                <Dock 
                    position='left' 
                    isVisible={this.state.isSidebarOpen}
                    dimMode="none"
                    dockStyle={{width:'200px!important'}}
                    // size="250"
                    // defaultSize="250"
                    // size={250}
                >
                    <Header {...this.props}/>
                </Dock>
            </div>
        );
    }
}

export default MainLayout;