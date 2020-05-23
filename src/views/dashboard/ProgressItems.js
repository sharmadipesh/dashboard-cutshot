import React, { Component } from 'react';
import Card from 'utils/Card';
import classnames from 'classnames';
import Icon from 'utils/Icon';

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
                    <div className="d-flex align-items-center">
                        <div className={classnames(
                            'mr-2',
                            this.props.progress > 0 ? 'progress-success': 'progress-neg'
                        )}>
                            {this.props.progress > 0 ? '+': ''}{this.props.progress}{'%'}
                        </div> 
                            {this.props.progress > 0 ? 
                            <Icon className="icon-progress-success" icon="ICON_UPWARD_GREEN"/>: 
                            <Icon className="icon-progress-fail" icon="ICON_DOWNWARD_GREEN"/>}
                            
                    </div>
                </Card>
            </>
        );
    }
}

export default ProgressItems;