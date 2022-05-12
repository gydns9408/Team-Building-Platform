const AxisBottom = ({ xScale, innerHeight, tickFormat, textOffset }) => {
  return xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} />
      <text y={innerHeight + textOffset} style={{ textAnchor: "middle" }}>
        {tickValue}
      </text>
    </g>
  ));
};

const AxisLeft = ({ yScale, innerWidth, textOffset }) => {
  return yScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      <text
        x={-textOffset}
        key={tickValue}
        style={{ textAnchor: "end" }}
        dy=".32em"
      >
        {tickValue}
      </text>
    </g>
  ));
};

displayName: " Axis";
export default { AxisBottom, AxisLeft };
