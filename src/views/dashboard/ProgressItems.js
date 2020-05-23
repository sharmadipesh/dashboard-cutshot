import React, { Component } from 'react';
import Card from 'utils/Card';
import classnames from 'classnames';
import Icon from 'utils/Icon';
import LineChart from './LineChart';

class ProgressItems extends Component {

    state={
        optionValue:[],
        xAxis:[]
    }

    componentDidMount = ()=>{
        const optionData=[],xAxis=[];
        for(let i=1;i<=7;i++){
            optionData.push(Math.floor(1000 + Math.random() * 10000));
            xAxis.push(i);
        }
        this.setState({
            optionValue:optionData,
            xAxis
        })
    }

    render() {
        return (
            <>
                <Card className="card-style">
                    <div className="plr-20 ptb-15 d-flex flex-column align-items-center justify-content-center">
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
                    </div>
                    <div>
                        <LineChart {...this.props} optionValue={this.state.optionValue} xAxis={this.state.xAxis}/>
                    </div>
                </Card>
            </>
        );
    }
}

export default ProgressItems;