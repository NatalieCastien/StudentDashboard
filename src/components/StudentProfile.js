import React from "react";

const StudentProfile = (props) => {
  return (
    <div className="studentDetails">
      <div className="detailPicture">
        <img src={props.student.picture} />
      </div>
      <div className="detailText">
        <div>
          <p>
            <strong>Name:</strong> {props.person.name} {props.person.lastName}
          </p>
          <p>
            <strong>Age:</strong> {props.person.age}
          </p>
        </div>
        <div>
          <p>
            <strong>Email:</strong> {props.person.email}
          </p>
          <p>
            <strong>Phone:</strong> {props.person.phone}
          </p>
        </div>
      </div>
    </div>
  );
};
export default StudentProfile;
