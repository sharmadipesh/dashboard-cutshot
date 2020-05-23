import React, { Component } from 'react';
import Card from 'utils/Card';
import ProgressItems from './ProgressItems';
import Constants from 'config/Constants';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Card className="mb-30">
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
                                <select className="form-control" name="months">
                                    {Constants.months.map((month,index)=><option key={index} value={month}>{month}</option>)}
                                </select>
                            </div>
                            <div className="">
                                <select className="form-control" name="years">
                                    {Constants.years.map((year,index)=><option key={index} value={year}>{year}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="plr-20 ptb-20">
                        Chart
                    </div>
                </Card>
                <div className="row mb-30">
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'realtime users'}
                            number={'56'}
                            progress={'+9.1%'}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'realtime users'}
                            number={'56'}
                            progress={'+9.1%'}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'realtime users'}
                            number={'56'}
                            progress={'+9.1%'}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProgressItems 
                            cardName={'realtime users'}
                            number={'56'}
                            progress={'+9.1%'}
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