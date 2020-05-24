import React, { Component } from 'react';
import NotFound from 'utils/NotFound';

class Invoice extends Component {
    render() {
        return (
            <div>
                <NotFound {...this.props}/> 
            </div>
        );
    }
}

export default Invoice;