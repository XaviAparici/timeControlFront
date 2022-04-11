import React, { Component } from "react";
import loadable from "@loadable/component";

const Chart = loadable(() => import("react-apexcharts/src/react-apexcharts"));

class Grafica extends Component {

  constructor(props) {

    super(props);

    this.state = {
          
      series: [44, 55, 13, 33],
      options: {
        chart: {
          width: '100%',
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: '100%'
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      },
    
    
    };
  }

  render() {

    return (

      <div id="chart">

        <div id="chart-timeline">

          <Chart

           options={this.state.options}

            series={this.state.series}

             type="donut"

            height={350}

          />

        </div>

      </div>

    );

  }
}

export default Grafica;