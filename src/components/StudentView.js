import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const StudentView = (props) => {
  const { id } = useParams();

  const student = props.students.filter((student) => {
    return student.id == id;
  });
  const name = student[0].name;
  // const name = student.name;

  const funEvaluations = props.funEvaluations.filter(
    (ev) => ev.studentId == id
  );
  const difficultyEvaluations = props.difficultyEvaluations.filter(
    (ev) => ev.studentId == id
  );

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
        <span className="h1">Student: {name}</span>
      </div>
      <div className="graph">
        <BarChart
          ratings={ratings}
          showFun={props.showFun}
          showDifficulty={props.showDifficulty}
          handleChange={props.handleChange}
        />
      </div>

      {/* <div className="details">
        <LineChart
          ratings={ratings}
          showFun={props.showFun}
          showDifficulty={props.showDifficulty}
          handleChange={props.handleChange}
        />
      </div> */}
    </div>
  );
};
export default StudentView;
