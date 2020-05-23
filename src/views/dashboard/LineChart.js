import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class LineChart extends Component {
    render() {
        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.props.xAxis,
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:false
                },
                axisLabel:{
                    show:false
                },
                splitLine:{
                    show:false
                }
            },
            yAxis: {
                type: 'value',
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:false
                },
                axisLabel:{
                    show:false
                },
                splitLine:{
                    show:false
                }
            },
            series: [{
                data: this.props.optionValue,
                type: 'line',
                label:{show:false},
                symbol: 'none',
                lineStyle:{
                    color:this.props.lineColor
                },
                areaStyle: {
                    color:this.props.areaColor
                }
            }]
        };
        
        return (
            <>
                <div className="chart-style">
                    <ReactEcharts option={option} style={{ width:'100%',height:'170px'}} opts={{renderer: 'svg'}}/>
                </div>
            </>
        );
    }
}

export default LineChart;