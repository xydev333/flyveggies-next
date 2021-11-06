import React, { Component } from 'react';
import { Chart } from "react-google-charts";

class LineChart extends Component {
    state = {
        data: [
            ["Month", "Sales", "Income"],
            ["15-Apr-2020", 0, 0]
        ],
        months: new Array(),
        options: {
            title: "Sales By Date",
            curveType: "function",
            legend: { position: "bottom" }
        }
    };

    componentDidMount(){
        let arr = [];
        this.props.data.map(a => {
            arr.push(a)
        });
        arr.map((b, i) => {
            let t = new Date(1970, 0, 1);
            let time = t.setSeconds(b.createdAt.seconds);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(time);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(time);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(time);
            let date = `${da}-${mo}-${ye}`;
            this.state.months.push(date);
            let data = [this.state.months[i], b.amount, b.amount - b.amount / 2 ];
            this.state.data.push(data);
            console.log(this.state.months[i]);
            console.log(i);
        });
    }

    render(){
        console.log(this.state.data)
        if (this.state.data){
            return (
                <div className="chart-box">
                    <Chart
                        chartType="LineChart"
                        data={this.state.data}
                        options={this.state.options}
                        width="100%"
                        height="500px"
                        legendToggle
                    />
                </div>
            )
        }
    }
}

export default LineChart;