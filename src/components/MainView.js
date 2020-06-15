import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
} from "victory";
import ChartTheme from "./ChartTheme";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const MainView = (props) => {
  const funEvaluations = props.funEvaluations;
  const difficultyEvaluations = props.difficultyEvaluations;

  const makeListOfAssignments = (array) => {
    let assignments = [];
    array.map((evaluation) => {
      const assignmentsLong = assignments.map((as) => as.assignment);
      assignmentsLong.includes(evaluation.assignment) == false &&
        assignments.push({
          assignment: evaluation.assignment,
          short: evaluation.short,
        });
    });
    return assignments;
  };
  const assignments = makeListOfAssignments(funEvaluations);
  // console.log(assignments);

  const calcAverage = (array, assignment, type) => {
    const totalScore = array.reduce((total, cur) => {
      const score = type == "fun" ? total + cur.fun : total + cur.difficulty;
      return score;
    }, 0);
    const average = totalScore / array.length;

    return average;
  };

  const setData = () => {
    let data = [];
    assignments.map((assignment) => {
      const FUNfiltered = funEvaluations.filter(
        (ev) => ev.assignment == assignment.assignment
      );
      const DIFFfiltered = difficultyEvaluations.filter(
        (ev) => ev.assignment == assignment.assignment
      );
      const funAverage = calcAverage(FUNfiltered, assignment, "fun");
      const diffAverage = calcAverage(DIFFfiltered, assignment, "difficulty");
      data.push({
        short: assignment.short,
        assignment: assignment.assignment,
        funScore: funAverage,
        difficultyScore: diffAverage,
      });
    });
    return data;
  };

  const dataToUse = setData();

  const ratings = dataToUse.map((score) => ({
    assignmentShort: score.short,
    assignment: score.assignment,
    difficultyScore: score.difficultyScore,
    funScore: score.funScore,
    label: `${score.assignment}, diff: ${score.difficultyScore.toFixed(
      1
    )}, fun: ${score.funScore.toFixed(1)}`,
  }));

  return (
    <div>
      <div className="graphHeader">
        <span className="h1">All evaluations</span>
      </div>
      <div className="graph">
        <BarChart
          ratings={ratings}
          showFun={props.showFun}
          showDifficulty={props.showDifficulty}
          handleChange={props.handleChange}
        />
      </div>
      <div className="details">
        <LineChart
          ratings={ratings}
          showFun={props.showLineFun}
          showDifficulty={props.showLineDifficulty}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
};
export default MainView;
