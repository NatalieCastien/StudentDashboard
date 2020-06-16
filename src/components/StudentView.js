import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import BarChart from "./BarChart";
import StudentProfile from "./StudentProfile";

const StudentView = (props) => {
  const { id } = useParams();

  // Personal details
  const personObject = props.personalData.filter((student) => student.id == id);
  const person = personObject[0];

  // Basic information
  const studentObject = props.students.filter((student) => student.id == id);
  const student = studentObject[0];

  // Get the evaluations for this specific student
  const funRatings = props.funEvaluations.filter(
    (evaluation) => evaluation.studentId == id
  );
  const difficultyRatings = props.difficultyEvaluations.filter(
    (evaluation) => evaluation.studentId == id
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

  // List of the assignment names:
  const assignments = makeListOfAssignments(funRatings);

  const calculateAverage = (array, type) => {
    const totalScore = array.reduce((total, cur) => {
      const score = type == "fun" ? total + cur.fun : total + cur.difficulty;
      return score;
    }, 0);
    return totalScore / array.length;
  };

  const setData = () => {
    let data = [];
    assignments.map((assignment) => {
      const funFiltered = funRatings.filter(
        (evaluation) => evaluation.assignment == assignment.assignment
      );
      const difficultyFiltered = difficultyRatings.filter(
        (evaluation) => evaluation.assignment == assignment.assignment
      );
      const funAverage = calculateAverage(funFiltered, "fun");
      const diffAverage = calculateAverage(difficultyFiltered, "difficulty");
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

  // Make data ready for the graph
  const ratings = dataToUse.map((score) => ({
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
        <span className="h1">Student: {student.name}</span>
      </div>

      <div className="buttonHeader">
        {/* Togglebutton between bargraph and student profile */}
        {props.displayBarGraph ? (
          <button name="details" onClick={props.toggleDisplay}>
            Show profile
          </button>
        ) : (
          <button name="barStudent" onClick={props.toggleDisplay}>
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
          {props.isLoading ? (
            "Loading..."
          ) : (
            <StudentProfile student={student} person={person} />
          )}
        </div>
      )}
    </div>
  );
};
export default StudentView;
