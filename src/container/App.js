import React, { Component } from 'react';
import 'styles/index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';
import Routes from 'config/Routes';
import MainLayout from 'container/MainLayout';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Router>
                    <ScrollToTop>
                        <Route path={Routes.Dashboard} component={MainLayout} />
                        <Route path={'/'} component={MainLayout} />
                    </ScrollToTop>
                </Router>
            </div>
        );
    }
}

export default App;

