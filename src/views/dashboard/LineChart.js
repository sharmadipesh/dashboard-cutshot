import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class LineChart extends Component {
    render() {
        const option = {
            tooltip:{
                show:true,
                trigger:'axis',
                backgroundColor :'#fff',
                textStyle:{
                    color:'',
                    fontFamily: 'Lato-Medium',
					fontSize: '14',
                },
                extraCssText: 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);',
                formatter: function(params) {
					return (
                        `<div class="d-flex align-items-center justify-content-between">
                            <div>${params[0].value}</div>
                        </div>`
					);
				},
            },
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