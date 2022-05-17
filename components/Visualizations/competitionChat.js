import { Fragment, forwardRef, useEffect, useRef, useState } from "react";

import CompetitionBackgorund from "./CompetitionBackgorund.svg";
import * as d3 from "d3";

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
      .attr("cy", point.y) // Set the cy
      .attr("x", point.x) // Set the cx
      .attr("y", point.y); // Set the cy
  };
};

const SVGBackground = forwardRef((props, ref) => (
  <div ref={ref}>
    <CompetitionBackgorund />
  </div>
));

const competitionChat = (props) => {
  const scale = useRef(0);

  const svgRef = React.createRef();

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current).select("svg");
      const mountainLine = svg.select("#mountainLine");
      const mountainPoints = svg.select("#mountainLine").attr("d");
      const startPoint = mountainPoints.match(re);

      const point = svg.append("g");
      point
        .append("rect")
        .attr("x", startPoint.groups.x)
        .attr("y", startPoint.groups.y)
        .attr("width", 300)
        .attr("height", 2)
        .attr("fill", "#ef476f");

      point
        .append("circle")
        .attr("r", outSideRadius)
        .attr("fill", "#ef476f")
        .attr("cx", startPoint.groups.x)
        .attr("cy", startPoint.groups.y);
      point
        .append("circle")
        .attr("r", inSideRadius)
        .attr("fill", "#ffffff")
        .attr("cx", startPoint.groups.x)
        .attr("cy", startPoint.groups.y);

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
            scale.current += e.deltaY / 10;

            return pathTween(mountainLine, previousScale, scale.current);
          });
      });
    }
  }, [svgRef.current]);

  return (
    <Fragment>
      <SVGBackground onWheel={(e) => {}} ref={svgRef} />
    </Fragment>
  );
};

export default competitionChat;
/*
각 선 좌표에서 적절한 데이터를 출력해야한다.
그렇게 하기 위해서는 크게 두가지 방법이 있다.
각 선의 특정 부분을 나눠 각각의 객체로 만든다
그리고 그 객체에게 적절한 이벤트를 부여하여 팝업 및 검색을 구현한다.

두번째는 선택된 자표를 구하고 그것의 y 값을 구한다.
구해진 y값을 베이스를 하여 특정 인덱스를 검색한다.
*/
