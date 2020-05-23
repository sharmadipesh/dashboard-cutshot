import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class TableChart extends Component {

    state={
        optionValue:[],
        xAxis:[]
    }

    componentDidMount = ()=>{
        const optionData=[],xAxis=[];
        for(let i=1;i<=7;i++){
            optionData.push(Math.floor(100 + Math.random() * 1000));
            xAxis.push(i);
        }
        this.setState({
            optionValue:optionData,
            xAxis
        })
    }

    render() {
        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.state.xAxis,
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
                data: this.state.optionValue,
                type: 'line',
                label:{show:false},
                symbol: 'none',
                lineStyle:{
                    color:'#186adb'
                },
                areaStyle: {
                    color:'#e8f0fa'
                }
            }]
        };
        return (
            <>
                <ReactEcharts option={option} style={{ width:'100%',height:"140px"}} opts={{renderer: 'svg'}}/>
            </>
        );
    }
}

export default TableChart;