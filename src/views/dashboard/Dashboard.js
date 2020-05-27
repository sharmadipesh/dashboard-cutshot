import React, { Component } from 'react';
import Card from 'utils/Card';
import ProgressItems from './ProgressItems';
import Constants from 'config/Constants';
import DailyVisitor from './DailyVisitor';
import VisitedPage from 'views/dummyData/tableData';
import Icon from 'utils/Icon';
import TableChart from './TableChart';
import SocialMedia from 'views/dummyData/socialMedia';

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
                <div className="row">
                    <div className="col-md-4 col-xl-3 mb-30">
                        <ProgressItems 
                            cardName={'realtime users'}
                            number={'56'}
                            progress={9.8}
                            lineColor={'#186adb'}
                            areaColor={'#e8f0fa'}
                        />
                    </div>
                    <div className="col-md-4 col-xl-3 mb-30">
                        <ProgressItems 
                            cardName={'Total Visits'}
                            number={'54,598'}
                            progress={-11.9}
                            lineColor={'#31ad43'}
                            areaColor={'#ebf6ed'}
                        />
                    </div>
                    <div className="col-md-4 col-xl-3 mb-30">
                        <ProgressItems 
                            cardName={'Bounce Rate'}
                            number={'73.67%'}
                            progress={12.2}
                            lineColor={'#7a6bf6'}
                            areaColor={'#efeffe'}
                        />
                    </div>
                    <div className="col-md-4 col-xl-3 mb-30">
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
                    <div className="col-lg-12 col-xl-8">
                        <Card className=" mb-30">
                            <div className="title-text plr-20 ptb-15">
                                Most Visited Pages
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">PAGE NAME</th>
                                        <th scope="col">VISITORS</th>
                                        <th scope="col">UNIQUE PAGE VISITS</th>
                                        <th scope="col">BOUNCE RATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {VisitedPage.map((value,index)=>
                                    <tr key={index}>
                                        <td className="d-flex align-items-center justify-content-between">
                                            <div className="page-name-style" title={value.pageName}>
                                                {value.pageName}
                                            </div>
                                            <Icon className="clickable icon-size-15" icon="ICON_EXPORT"/>
                                        </td>
                                        <td>{value.visitors}</td>
                                        <td>{value.uniquePageVisit}</td>
                                        <td className="d-flex">
                                            <div>{value.bounceRate}</div>
                                            <div className="table-chart-container">
                                                <div className="chart-position-set">
                                                    <TableChart {...this.props}/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                    {/* col-lg-12 col-xl-8 */}
                    <div className="col-lg-5 col-md-6 col-xl-4 ">
                        <Card className="mb-30">
                            <div className="title-text plr-20 ptb-15">
                                Social Media Traffic
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NETWORK</th>
                                        <th scope="col">VISITORS</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SocialMedia.map((value,index)=>
                                    <tr key={index} className="tr-height">
                                        <td>
                                            {value.network}
                                        </td>
                                        <td>{value.visitors}</td>
                                        <td className="" style={{width:'100%'}}>
                                            <div id="progressbar">
                                                <div style={{width:value.progressPercentage}}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;