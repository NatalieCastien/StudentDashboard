import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import StudentDetails from "./StudentDetails";

const StudentView = (props) => {
  const { id } = useParams();
  console.log(props.personalData);

  // Personal details
  const personObject = props.personalData.filter((student) => {
    return student.id == id;
  });
  const person = personObject[0];
  // const age = person.age;
  // const email = person.email;

  const studentObject = props.students.filter((student) => {
    return student.id == id;
  });
  // console.log(student);
  const student = studentObject[0];
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
        <span className="h1">Student: {student.name}</span>
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
        {props.isLoading ? (
          "Loading..."
        ) : (
          <div className="studentDetails">
            <div className="detailPicture">
              <img src={student.picture} />
            </div>
            <div className="detailText">
              <div>
                <p>
                  <b>Name:</b> {person.name} {person.lastName}
                </p>
                <p>
                  <b>Age:</b> {person.age}
                </p>
              </div>
              <div>
                <p>
                  <b>Email:</b> {person.email}
                </p>
                <p>
                  <b>Phone:</b> {person.phone}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default StudentView;
