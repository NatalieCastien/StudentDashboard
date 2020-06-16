import React from "react";

class StudentDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      person: "",
    };
  }

  getData = () => {
    const personObject = this.props.person;
    // this.setState({ person: personObject });
    console.log(personObject);
    console.log(this.state.person);
  };

  componentDidMount() {
    const isLoading = this.props.isLoading;
    this.setState({ isLoading: isLoading });
    this.getData();
  }

  render() {
    return <div>Kutzooi</div>;
  }
}
export default StudentDetails;
