import React, { Component } from 'react';
import Card from 'utils/Card';
import ProgressItems from './ProgressItems';
import Constants from 'config/Constants';
import DailyVisitor from './DailyVisitor';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Card className="mb-30 overflow-hidden">
                    <div className="border-bottom plr-20 ptb-15 d-flex align-items-center justify-content-between">
                        <div className="title-text">
                            Daily Visitors
                        </div>
                        <div className="d-flex">
                            {/* <select
                                name="months"
                                className="form-control select-option mr-2 "
                            >
                                {Constants.months.map((month,index)=><option key={index} value={month}>{month}</option>)}
                            </select>
                            <select
                                name="Years"
                                className="form-control select-option"
                            >
                                {Constants.years.map((year,index)=><option key={index} value={year}>{year}</option>)}
                            </select> */}
                            <div className="mr-2">
                                <select className="form-control font-size-14" name="months">
                                    {Constants.months.map((month,index)=><option key={index} value={month}>{month}</option>)}
                                </select>
                            </div>
                            <div className="">
                                <select className="form-control font-size-14" name="years">
                                    {Constants.years.map((year,index)=><option key={index} value={year}>{year}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="margin-lefts">
                        {/* Chart */}
                        <DailyVisitor {...this.props}/>
                    </div>
                </Card>
                <div className="row mb-30">
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'realtime users'}
                            number={'56'}
                            progress={9.8}
                            lineColor={'#186adb'}
                            areaColor={'#e8f0fa'}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'Total Visits'}
                            number={'54,598'}
                            progress={-11.9}
                            lineColor={'#31ad43'}
                            areaColor={'#ebf6ed'}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'Bounce Rate'}
                            number={'73.67%'}
                            progress={12.2}
                            lineColor={'#7a6bf6'}
                            areaColor={'#efeffe'}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'Visit Duration'}
                            number={'1m 4s'}
                            progress={19.6}
                            lineColor={'#fce293'}
                            areaColor={'#fefaef'}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Card className="mb-30">
                            <div className="title-text plr-20 ptb-15 border-bottom">
                                Most Visited Pages
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="mb-30">
                            <div className="title-text plr-20 ptb-15 border-bottom">
                                Social Media Traffic
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;