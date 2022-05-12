// import { line } from "d3";
// export const Marks = ({
//   data,
//   xScale,
//   yScale,
//   xValue,
//   yValue,
//   radius,
//   yColorScale,
// }) => (
//   <g className="marks">
//     <path
//       d={line()
//         .x((d) => xScale(xValue(d)))
//         .y((d) => yScale(yValue(d)))
//         .curve(d3.curveCardinal.tension(0))(data)}
//       stroke="url(#svgGradient)"
//     />
//     {data.map((d) => (
//       <title>{xValue(d) + " : " + Math.round(yValue(d)) + "C"}</title>
//     ))}
//   </g>
// );
