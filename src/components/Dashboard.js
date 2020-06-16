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

      displayBarGraph: true,
      displayStudentBarGraph: true,

      isLoading: true,
    };
  }

  createEvaluationArray = (array, type, students) => {
    students.map((student) => {
      student.evaluations.forEach((evaluation) => {
        const shortAssigmentName = evaluation.assignment.slice(0, 6);
        type === "fun"
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
        this.setState({ personalData: result });
        this.setState({ isLoading: false });
        this.createEvaluationData();
      })
      .catch((error) => console.log(error));
  };

  changeShowState = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  // Toggle display between bargraph, linegraph and profile
  toggleDisplay = (event) => {
    const boxToDisplay = event.target.name;
    boxToDisplay === "line"
      ? this.setState({ displayBarGraph: false })
      : boxToDisplay === "bar"
      ? this.setState({ displayBarGraph: true })
      : boxToDisplay === "details"
      ? this.setState({ displayStudentBarGraph: false })
      : boxToDisplay === "barStudent" &&
        this.setState({ displayStudentBarGraph: true });
  };

  componentDidMount() {
    this.getPersonalData();
  }

  render() {
    return (
      <Router>
        {this.state.isLoading === false && (
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
                displayBarGraph={this.state.displayBarGraph}
                toggleDisplay={this.toggleDisplay}
              />
            </Route>
            {this.state.isLoading === false && (
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
                    displayBarGraph={this.state.displayStudentBarGraph}
                    toggleDisplay={this.toggleDisplay}
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
