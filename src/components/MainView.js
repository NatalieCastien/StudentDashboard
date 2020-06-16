import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const MainView = (props) => {
  const funRatings = props.funEvaluations;
  const difficultyRatings = props.difficultyEvaluations;

  const makeListOfAssignments = (array) => {
    let assignments = [];
    array.map((evaluation) => {
      const assignmentsLong = assignments.map((as) => as.assignment);
      assignmentsLong.includes(evaluation.assignment) === false &&
        assignments.push({
          assignment: evaluation.assignment,
          short: evaluation.short,
        });
    });
    return assignments;
  };
  const assignments = makeListOfAssignments(funRatings);

  const calcAverage = (array, type) => {
    const totalScore = array.reduce((total, cur) => {
      const score = type === "fun" ? total + cur.fun : total + cur.difficulty;
      return score;
    }, 0);
    return totalScore / array.length;
  };

  const setData = () => {
    let data = [];
    assignments.map((assignment) => {
      const FUNfiltered = funRatings.filter(
        (evaluation) => evaluation.assignment === assignment.assignment
      );
      const DIFFfiltered = difficultyRatings.filter(
        (evaluation) => evaluation.assignment === assignment.assignment
      );
      const funAverage = calcAverage(FUNfiltered, "fun");
      const diffAverage = calcAverage(DIFFfiltered, "difficulty");

      data.push({
        short: assignment.short,
        assignment: assignment.assignment,
        funScore: funAverage,
        difficultyScore: diffAverage,
      });
    });
    return data;
  };

  const graphData = setData();

  const ratings = graphData.map((score) => ({
    assignmentShort: score.short,
    assignment: score.assignment,
    difficultyScore: score.difficultyScore,
    funScore: score.funScore,
    label: `${score.assignment}, difficulty: ${score.difficultyScore.toFixed(
      1
    )}, fun: ${score.funScore.toFixed(1)}`,
  }));

  return (
    <div>
      <div className="graphHeader">
        <span className="h1">All evaluations</span>
      </div>
      <div className="buttonHeader">
        {props.displayBarGraph ? (
          <button name="line" onClick={props.toggleDisplay}>
            Show linegraph
          </button>
        ) : (
          <button name="bar" onClick={props.toggleDisplay}>
            Show bargraph
          </button>
        )}
      </div>

      {props.displayBarGraph ? (
        <div className="graph">
          <BarChart
            ratings={ratings}
            showFun={props.showFun}
            showDifficulty={props.showDifficulty}
            handleChange={props.handleChange}
          />
        </div>
      ) : (
        <div className="details">
          <LineChart
            ratings={ratings}
            showFun={props.showLineFun}
            showDifficulty={props.showLineDifficulty}
            handleChange={props.handleChange}
          />
        </div>
      )}
    </div>
  );
};
export default MainView;
