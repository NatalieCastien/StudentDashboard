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
      personalData: [],
      funEvaluations: [],
      difficultyEvaluations: [],
      showFun: true,
      showDifficulty: true,
      showLineFun: true,
      showLineDifficulty: true,
      isLoading: true,
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
    this.createEvaluationArray(
      funEvaluationsArray,
      "fun",
      this.state.personalData
    );

    let difEvaluationsArray = [];
    this.createEvaluationArray(
      difEvaluationsArray,
      "dif",
      this.state.personalData
    );

    this.setState(() => {
      return {
        funEvaluations: funEvaluationsArray,
        difficultyEvaluations: difEvaluationsArray,
      };
    });
  };

  getPersonalData = async () => {
    this.setState({ isLoading: true });
    fetch("https://student-dashboard-ca2f2.firebaseio.com/students.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const result = Object.keys(data).map((key) => ({
          id: data[key].id,
          name: data[key].name,
          evaluations: data[key].evaluations,
          lastName: data[key].lastName,
          gender: data[key].gender,
          age: data[key].age,
          phone: data[key].phone,
          email: data[key].email,
          photo: data[key].photo,
        }));
        console.log(result);
        this.setState({ personalData: result });
        this.setState({ isLoading: false });
        this.createEvaluationData();
      })
      .catch((error) => console.log(error));
  };

  // ADD RANDOM PERSON DATA TO FIREBASE --- ONLY THE FIRST TIME!!
  // addToFireBase = (student) => {
  //   const data = student;
  //   console.log(data);
  //   const request = {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   };
  //   console.log(request);
  //   fetch(
  //     "https://student-dashboard-ca2f2.firebaseio.com/students.json",
  //     request
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // RETREIVE RANDOM PERSONDATA AND CALL API POST FUNCTION -- ONLY FIRST TIME!!
  // firstSavePersonData = () => {
  //   this.setState({ isLoading: true });
  //   const men = ["Floris", "Hector", "Maurits", "Storm"];
  //   let newStudentArray = [];
  //   students.map((student) => {
  //     if (men.includes(student.name)) {
  //       fetch("https://randomuser.me/api/?gender=male")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const results = data.results[0];
  //           const personObject = {
  //             id: student.id,
  //             name: student.name,
  //             evaluations: student.evaluations,
  //             lastName: results.name.last,
  //             gender: results.gender,
  //             age: results.dob.age,
  //             email: results.email,
  //             phone: results.phone,
  //             photo: results.picture.medium,
  //           };
  //           this.addToFireBase(personObject);
  //           newStudentArray.push(personObject);
  //         })
  //         .catch((error) => console.log(error));
  //     } else {
  //       fetch("https://randomuser.me/api/?gender=female")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const results = data.results[0];
  //           const personObject = {
  //             id: student.id,
  //             name: student.name,
  //             evaluations: student.evaluations,
  //             lastName: results.name.last,
  //             gender: results.gender,
  //             age: results.dob.age,
  //             email: results.email,
  //             phone: results.phone,
  //             photo: results.picture.medium,
  //           };
  //           this.addToFireBase(personObject);
  //           newStudentArray.push(personObject);
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   });
  //   const studentData = newStudentArray;
  // };

  componentDidMount() {
    // this.firstSavePersonData();
    // this.createEvaluationData();
    this.getPersonalData();
  }

  changeShowState = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    return (
      <Router>
        {this.state.isLoading == false && (
          <StudentOverview
            students={this.state.students}
            data={this.state.personalData}
          />
        )}
        <div className="dashboard">
          <Switch>
            <Route path="/" exact>
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
            {this.state.isLoading == false && (
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
                    personalData={this.state.personalData}
                    isLoading={this.state.isLoading}
                  />
                }
              />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
