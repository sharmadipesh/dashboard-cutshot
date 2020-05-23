import React, { Component } from 'react';
import Card from 'utils/Card';

class ProgressItems extends Component {
    render() {
        return (
            <>
                <Card className="plr-20 ptb-15 d-flex flex-column align-items-center justify-content-center">
                    <div className="text-uppercase progress-sub-text pt-10">
                        {this.props.cardName}
                    </div>
                    <div className="progress-main-text ptb-10">
                        {this.props.number}
                    </div>
                    <div className="d-flex">
                        {this.props.progress}
                    </div>
                </Card>
            </>
        );
    }
}

export default ProgressItems;