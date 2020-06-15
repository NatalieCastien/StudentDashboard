import React from "react";
import students from "../database";
import MainView from "./MainView";
import StudentView from "./StudentView";
import StudentOverview from "./StudentOverview";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      students: students,
      funEvaluations: [],
      difficultyEvaluations: [],
      showFun: true,
      showDifficulty: true,
      showLineFun: true,
      showLineDifficulty: true,
    };
  }

  createEvaluationArray = (array, type, students) => {
    students.map((student) => {
      student.evaluations.forEach((evaluation) => {
        const shortAssigmentName = evaluation.assignment.slice(0, 6);
        type == "fun"
          ? array.push({
              studentId: student.id,
              short: shortAssigmentName,
              assignment: evaluation.assignment,
              fun: evaluation.fun,
            })
          : array.push({
              studentId: student.id,
              short: shortAssigmentName,
              assignment: evaluation.assignment,
              difficulty: evaluation.difficulty,
            });
      });
    });
  };

  createEvaluationData = () => {
    let funEvaluationsArray = [];
    this.createEvaluationArray(funEvaluationsArray, "fun", this.state.students);

    let difEvaluationsArray = [];
    this.createEvaluationArray(difEvaluationsArray, "dif", this.state.students);

    this.setState(() => {
      return {
        funEvaluations: funEvaluationsArray,
        difficultyEvaluations: difEvaluationsArray,
      };
    });
  };

  // getPersonData = () => {
  //   const men = ["Floris", "Hector", "Maurits", "Storm"];

  //   let newStudentArray = [];
  //   students.map((student) => {
  //     if (men.includes(student.name)) {
  //       fetch("https://randomuser.me/api/?gender=male")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // console.log(data.results[0]);
  //           const results = data.results[0];

  //           const personObject = {
  //             id: student.id,
  //             name: student.name,
  //             evaluations: student.evaluations,
  //             gender: results.gender,
  //             age: results.dob.age,
  //             email: results.email,
  //             phone: results.phone,
  //             picture: results.picture,
  //           };
  //           newStudentArray.push(personObject);
  //           console.log
  //         })
  //         .catch((error) => console.log(error));
  //     } else {
  //       fetch("https://randomuser.me/api/?gender=female")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // console.log(data.results[0]);
  //           const results = data.results[0];

  //           const personObject = {
  //             id: student.id,
  //             name: student.name,
  //             evaluations: student.evaluations,
  //             gender: results.gender,
  //             age: results.dob.age,
  //             email: results.email,
  //             phone: results.phone,
  //             picture: results.picture,
  //           };
  //           newStudentArray.push(personObject);
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   });
  //   this.setState({ students: newStudentArray });
  //   console.log(newStudentArray);
  //   // this.setState({ isLoading: false });getPersonData = () => {
  //   const men = ["Floris", "Hector", "Maurits", "Storm"];

  //   let newStudentArray = [];
  //   students.map((student) => {
  //     if (men.includes(student.name)) {
  //       fetch("https://randomuser.me/api/?gender=male")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // console.log(data.results[0]);
  //           const results = data.results[0];

  //           const personObject = {
  //             id: student.id,
  //             name: student.name,
  //             evaluations: student.evaluations,
  //             gender: results.gender,
  //             age: results.dob.age,
  //             email: results.email,
  //             phone: results.phone,
  //             picture: results.picture,
  //           };
  //           newStudentArray.push(personObject);
  //           console.log
  //         })
  //         .catch((error) => console.log(error));
  //     } else {
  //       fetch("https://randomuser.me/api/?gender=female")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // console.log(data.results[0]);
  //           const results = data.results[0];

  //           const personObject = {
  //             id: student.id,
  //             name: student.name,
  //             evaluations: student.evaluations,
  //             gender: results.gender,
  //             age: results.dob.age,
  //             email: results.email,
  //             phone: results.phone,
  //             picture: results.picture,
  //           };
  //           newStudentArray.push(personObject);
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   });
  //   this.setState({ students: newStudentArray });
  //   console.log(newStudentArray);
  //   // this.setState({ isLoading: false });
  //   this.createEvaluationData();
  // };
  //   this.createEvaluationData();
  // };

  componentDidMount() {
    this.createEvaluationData();
  }

  changeShowState = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    return (
      <Router>
        <StudentOverview students={this.state.students} />
        <div className="dashboard">
          <Switch>
            <Route
              path="/student/:id"
              children={
                <StudentView
                  showFun={this.state.showFun}
                  showDifficulty={this.state.showDifficulty}
                  funEvaluations={this.state.funEvaluations}
                  difficultyEvaluations={this.state.difficultyEvaluations}
                  handleChange={this.changeShowState}
                  students={this.state.students}
                />
              }
            />
            <Route path="/">
              <MainView
                showFun={this.state.showFun}
                showDifficulty={this.state.showDifficulty}
                showLineFun={this.state.showLineFun}
                showLineDifficulty={this.state.showLineDifficulty}
                funEvaluations={this.state.funEvaluations}
                difficultyEvaluations={this.state.difficultyEvaluations}
                handleChange={this.changeShowState}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
