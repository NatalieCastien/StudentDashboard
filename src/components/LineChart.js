import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryLegend,
} from "victory";
import ChartTheme from "../ChartTheme";

const LineChart = (props) => {
  return (
    <div>
      <VictoryChart theme={ChartTheme}>
        <VictoryLegend
          data={[
            {
              name: "Difficulty",
              symbol: { fill: "rgb(51, 77, 92)" },
            },
            { name: "Fun", symbol: { fill: "rgb(69, 178, 157)" } },
          ]}
        />

        <VictoryGroup offset={5}>
          {props.showDifficulty && (
            <VictoryLine
              labelComponent={<VictoryTooltip />}
              style={{ data: { stroke: "rgb(51, 77, 92)" } }}
              data={props.ratings}
              x="assignmentShort"
              y="difficultyScore"
            />
          )}
          {props.showFun && (
            <VictoryLine
              labelComponent={<VictoryTooltip />}
              style={{ data: { stroke: "rgb(69, 178, 157)" } }}
              data={props.ratings}
              x="assignmentShort"
              y="funScore"
            />
          )}
        </VictoryGroup>
        <VictoryAxis
          label="Assignment"
          style={{ tickLabels: { angle: -90 } }}
          tickFormat={props.ratings.map((score) => score.assignmentShort)}
        />
        <VictoryAxis dependentAxis domain={[0, 5.0]} label="Score" />
      </VictoryChart>

      <div className="checkboxes">
        <form>
          <label className="checkboxDiff">
            Show difficulty ratings
            <input
              name="showLineDifficulty"
              type="checkbox"
              checked={props.showDifficulty}
              onChange={props.handleChange}
            />
            <span></span>
          </label>

          <label className="checkboxFun">
            Show fun ratings
            <input
              name="showLineFun"
              type="checkbox"
              checked={props.showFun}
              onChange={props.handleChange}
            />
            <span></span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default LineChart;
