import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Chart extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Time',
        data: this.generateDummyData()
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          animations: {
            enabled: false 
          },
          toolbar: {
            show: false 
          },
          zoom: {
            enabled: false 
          },
          sparkline: {
            enabled: true 
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth' 
        },
        xaxis: {
          type: 'numeric',
          min: 0,
          max: 100, 
          labels: {
            show: false 
          }
        },
        yaxis: {
          max: 1200, 
          min: 0,
          show: false 
        }
      }
    };
  }

  componentDidMount() {
    this.dataUpdateInterval = setInterval(() => {
      const newData = this.generateDummyData();
      this.setState(prevState => ({
        series: [{
          ...prevState.series[0],
          data: [...newData]
        }]
      }));
    }, 1500); 
  }

  componentWillUnmount() {
    clearInterval(this.dataUpdateInterval); 
  }

  generateDummyData() {
    const dataLength = 100;
    const newData = [];

    for (let i = 0; i < dataLength; i++) {
      newData.push({
        x: i * 4,
        y: Math.floor(Math.random() * 1000) 
      });
    }

    return newData;
}

  render() {
    return (
      <div id="chart-container" className="chart-container"> {/* Apply CSS class for chart container */}
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}

export default Chart;
