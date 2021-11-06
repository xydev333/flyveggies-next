import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {ssr:false});

class ProductTrendsByMonth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 150, 180,]
            }],
            options: {
                chart: {
                height: 350,
                type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            },
        };
    }

    render() {
        return (
            <div className="chart-box">
                <div className="header">
                    <h3>Product Trends By Month</h3>
                </div>

                <Chart options={this.state.options} series={this.state.series} type="line" height={450} />
            </div>
        );
    }
}

export default ProductTrendsByMonth;