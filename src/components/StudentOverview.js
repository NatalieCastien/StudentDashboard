import React from "react";
import { Link } from "react-router-dom";

const StudentOverview = (props) => {
  const students = props.students.map((student) => {
    const link = "/student/" + student.id;
    return (
      <div key={student.id}>
        <Link to={link}>
          <div className="linkBox">
            <img className="photo" src={student.picture} alt={student.name} />
            <p className="studentName">{student.name}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="sideNav">
      <Link to="/" className="linkAll">
        <button>Show All Ratings</button>
      </Link>
      <div className="sideNavList">{students}</div>
    </div>
  );
};

export default StudentOverview;
