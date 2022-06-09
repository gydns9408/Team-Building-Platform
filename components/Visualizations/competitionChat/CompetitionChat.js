import { Fragment, forwardRef, useEffect, useRef, useState } from "react";

import CompetitionBackgorund from "./CompetitionBackgorund.svg";
import * as d3 from "d3";
import styles from "../../../styles/jss/nextjs-material-kit/pages/image/chart";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);

const outSideRadius = 15;
const inSideRadius = 7.5;
const re = /^M(?<x>\d+.?\d)\s(?<y>\d+.?\d+)/i;

const pathTween = (path, previous, length) => {
  //   var length = path.node().getTotalLength(); // Get the length of the path
  var r = d3.interpolate(previous, length); //Set up interpolation from 0 to the path length
  return function (t) {
    var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
    d3.select(this) // Select the circle
      .attr("cx", point.x) // Set the cx
      .attr("cy", point.y); // Set the cy
  };
};

const SVGBackground = forwardRef((props, ref) => (
  <div id="CompetitionRoot" className={props.className} ref={ref}>
    <CompetitionBackgorund className={props.localClassName} />
  </div>
));
SVGBackground.displayName = "SVGBackground";

const CompetitionChat = ({ className, handle, ...rest }) => {
  const scale = useRef(0);
  const classes = useStyles();
  const svgRef = React.createRef();
  const [currentPoint, setCurrentPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current).select("svg");
      const mountainLine = svg.select("#mountainLine");
      const mountainPoints = svg.select("#mountainLine").attr("d");
      const startPoint = mountainPoints.match(re);

      const root = d3.select("#CompetitionRoot");
      const point = svg.append("g");

      // var tooltip2 = root
      //   .append("div")
      //   .style("position", "absolute")
      //   // .style("visibility", "hidden")
      //   .style("background-color", "white")
      //   .style("border", "solid")
      //   .style("border-width", "1px")
      //   .style("border-radius", "5px")
      //   .style("padding", "10px")
      //   .html(
      //     "<p>I'm a tooltip written in HTML</p><img src='https://github.com/holtzy/D3-graph-gallery/blob/master/img/section/ArcSmal.png?raw=true'></img><br>Fancy<br><span style='font-size: 40px;'>Isn't it?</span>"
      //   );

      // point
      //   .append("rect")
      //   .attr("x", startPoint.groups.x)
      //   .attr("y", startPoint.groups.y)
      //   .attr("width", 300)
      //   .attr("height", 2)
      //   .attr("fill", "#ef476f");

      // point
      //   .append("rect")
      //   .attr("x", parseInt(startPoint.groups.x) + 300)
      //   .attr("y", startPoint.groups.y)
      //   .attr("id", "tooltip")
      //   .attr("width", 160)
      //   .attr("height", 160)
      //   .attr("fill", "#ef476f");

      point
        .append("circle")
        .attr("r", outSideRadius)
        .attr("fill", "#ef476f")
        .attr("cx", startPoint.groups.x)
        .attr("cy", startPoint.groups.y)
        .attr("id", "userPoint");

      svg.on("wheel", (e) => {
        point
          .selectAll(function () {
            return this.childNodes;
          })
          .transition(function (d, i) {
            return i * 1000;
          })
          .delay(200)
          .duration(1000)
          .ease(d3.easeElastic)
          .tween("pathTween", () => {
            const previousScale = scale.current;
            scale.current += e.deltaY / 70;
            handle(parseInt(scale.current / 100));
            return pathTween(mountainLine, previousScale, scale.current);
          });

        // root
        //   .on("mouseover", function () {
        //     return tooltip2.style("visibility", "visible");
        //   })
        //   .on("mousemove", function (event) {
        //     console.log(event);
        //     return tooltip2
        //       .style("top", event.clientX + "px")
        //       .style("left", event.clientY + "px");
        //   })
        //   .on("mouseout", function () {
        //     // return tooltip2.style("visibility", "hidden");
        //   });
      });
    }
  }, [svgRef.current]);

  return (
    <Fragment>
      <SVGBackground
        className={className}
        localClassName={classes.border}
        onWheel={(e) => {}}
        ref={svgRef}
      />
    </Fragment>
  );
};

export default CompetitionChat;
