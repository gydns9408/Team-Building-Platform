import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import ReactDropdown from 'react-dropdown';
import {
  json,
  csv,
  scaleLinear,
  scaleTime,
  timeFormat,
  max,
  format,
  extent,
} from 'd3';
import { useFiles } from './usefiles';
import { useData } from './usedata';
import { AxisBottom, AxisLeft } from './axes';
import { Marks } from './marks';
import { Gradient } from './gradient';

const width = 960;
const dropdownHeight = 40;
const height = 500 - dropdownHeight;
const margin = {
  top: 20,
  right: 20,
  bottom: 60,
  left: 80,
};
const xAxisLabelOffset = 40;
const yAxisLabelOffset = 40;
const markRadius = 2;
const padding = 0.05;
const innerHeight =
  height - margin.top - margin.bottom;
const innerWidth =
  width - margin.left - margin.right;
const xTextOffset = 20;
const yTextOffset = 10;

const xAxisTickFormat = (tickValue) =>
  timeFormat('%a')(tickValue).substring(0, 1) +
  timeFormat(' %d/%m/%y')(tickValue);

const labelTickFormat = timeFormat('%a %d %B');

const getUrl = (value, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === value) {
      return array[i].url;
    }
  }
};

const getValue = (url, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].url === url) {
      return array[i].value;
    }
  }
};

const rollingSum = (data, windowSize) => {
  const summed = data.map(function (d, i) {
    const start = Math.max(0, i - windowSize);
    const end = i;
    var sum = {};

    for (var key in d) {
      if (d.hasOwnProperty(key)) {
        sum[key] =
          key != xVar
            ? d3.sum(
                data.slice(start, end),
                function (x) {
                  return x[key];
                }
              )
            : d[key];
      }
    }

    return sum;
  });
  return summed;
};

const initialRide =
  'https://raw.githubusercontent.com/vincerhodes/projectalgernon/main/json/2018_01_17_20_14_32.json';

const App = () => {
  // setup state for the current ride
  const [rideurl, setRideUrl] = useState(
    initialRide
  );

  const files = useFiles();
  const indoorRides = files
    ? files.IndoorRides
    : null;
  const data = useData(rideurl);

  if (!files || !data) {
    return <pre>Loading...</pre>;
  }

  const samples = data.RIDE.SAMPLES;

  // add rolling avg 3 samples
  const sampleWindow = 7;
  samples.map((d, i) => {
    const start = Math.max(0, i - sampleWindow);
    const end =
      i < sampleWindow - 1 ? sampleWindow - 1 : i;
    d['3sWATTS'] = Math.round(
      d3.mean(
        samples.slice(start, end),
        (x) => x.WATTS
      )
    );
  });

  const xValue = (d) => d.SECS / 60;
  const xAxisLabel = 'Mins';
  const xScale = scaleLinear()
    .domain(extent(samples, xValue))
    .range([0, innerWidth])
    .nice();

  const yValue = (d) => d['3sWATTS'];
  const yAxisLabel = 'Watts';
  const yScale = scaleLinear()
    .domain(extent(samples, yValue))
    .range([innerHeight, 0])
    .nice();

  const min = d3.min(samples, yValue);
  const max = d3.max(samples, yValue);
  const avg = max - (max - min) / 2;

  const yColorScale = d3
    .scaleLinear(samples)
    .domain([min, avg, max])
    .range(['blue', 'green', 'red']);

  return (
    <>
      <div className="dropdown">
        <span>Select ride:</span>
        <ReactDropdown
          options={indoorRides}
          value={getValue(rideurl, indoorRides)}
          onChange={({ value }) =>
            setRideUrl(getUrl(value, indoorRides))
          }
        />
      </div>
      <svg width={width} height={height}>
        <Gradient />
        <g
          transform={`translate(${margin.left},${margin.top})`}
        >
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            textOffset={xTextOffset}
          />
          <AxisLeft
            yScale={yScale}
            innerWidth={innerWidth}
            textOffset={yTextOffset}
          />
          <Marks
            data={samples}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            radius={markRadius}
            yColorScale={yColorScale}
          />
          <text
            className="axis-label"
            textAnchor="end"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
          >
            {xAxisLabel}
          </text>
          <text
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
            className="axis-label"
            textAnchor="middle"
          >
            {yAxisLabel}
          </text>
        </g>
      </svg>
    </>
  );
};

const rootElement = document.getElementById(
  'root'
);
ReactDOM.render(<App />, rootElement);


export default Chat;

