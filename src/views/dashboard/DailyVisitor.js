import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class DailyVisitor extends Component {

    state={
        optionValue:[],
        xAxis:[]
    }

    getCurrencyIntoString = value => {
        let valueNo = Number(value);
        let currency = 0;
        if (valueNo > 0) {
             if (valueNo >= 1000) {
                currency = String(parseFloat(valueNo / 1000).toFixed(0)) + ' K';
            } else {
                currency = Math.round(valueNo).toLocaleString('en-IN');
            }
            return currency;
        } else if (valueNo < 0) {
            currency = 0;
            return currency;
        } else {
            return Number(valueNo);
        }
    };

    componentDidMount = ()=>{
        const optionData=[],xAxis=[];
        for(let i=1;i<=30;i++){
            optionData.push(Math.floor(1000 + Math.random() * 10000));
            xAxis.push(i);
        }
        this.setState({
            optionValue:optionData,
            xAxis
        })
    }

    render() {
        const Options = {
            color: ['#0d65d9'],
            tooltip:{
                show:true,
                backgroundColor :'#fff',
                textStyle:{
                    color:'',
                    fontFamily: 'Lato-Medium',
					fontSize: '14',
                },
                padding: [5, 10],
                extraCssText: 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);',
                formatter: function(params) {
					return (
						`<div class="chart-tooltip-name">${params.name}TH DECEMBER 2020</div>` +
                        `<div class="d-flex align-items-center justify-content-between">
                            <div class="chart-dot mr-2"></div>Visitors
                            <div>${params.value}</div>
                        </div>`
					);
				},
            },
            xAxis: {
                show:true,
                type: 'category',
                data: this.state.xAxis,
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e4e4e4',
                    }
                },
                axisLabel:{
                    show:true,
                    color:'#aaacb0',
                    fontSize:10,
                    fontWeight:'bold'
                },
                splitLine:{
                    show:false
                }
            },
            yAxis: {
                show:true,
                position:'right',
                type: 'value',
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:true,
                    color:'#aaacb0',
                    fontSize:10,
                    fontWeight:'bold',
                    formatter: value => {
                        let valueShow = this.getCurrencyIntoString(value);
                        return valueShow;
                    },
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#f7f7f7'
                    }
                }
            },
            series: [{
                barWidth: '45%',
                data: this.state.optionValue,
                type: 'bar'
            }]
        };

        return (
            <>
                <ReactEcharts option={Options} style={{ width:'100%',height:'350px'}} opts={{renderer: 'svg'}}/>
            </>
        );
    }
}

export default DailyVisitor;