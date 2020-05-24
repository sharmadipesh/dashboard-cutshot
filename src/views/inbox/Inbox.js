import React, { Component } from 'react';
import NotFound from 'utils/NotFound';
class Inbox extends Component {
    render() {
        return (
            <div>
                <NotFound {...this.props}/> 
            </div>
        );
    }
}

export default Inbox;