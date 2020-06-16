The major container of this application is Dashboard.js.
In this component, state management takes place and other manipulations of the data.

For this application, an external api was used to retreive random person data.
This data was received once, and posted to a firebase database.

The code for retreiving and posting this data is written below:

// ADD RANDOM PERSON DATA TO FIREBASE --- ONLY THE FIRST TIME!!
// addToFireBase = (student) => {
// const data = student;
// console.log(data);
// const request = {
// method: "POST",
// body: JSON.stringify(data),
// };
// console.log(request);
// fetch(
// "//url//",
// request
// )
// .then((response) => response.json())
// .then((data) => {
// console.log(data);
// })
// .catch((error) => console.log(error));
// };

// RETREIVE RANDOM PERSONDATA AND CALL API POST FUNCTION -- ONLY FIRST TIME!!
// firstSavePersonData = () => {
// this.setState({ isLoading: true });
// const men = ["Floris", "Hector", "Maurits", "Storm"];
// let newStudentArray = [];
// students.map((student) => {
// if (men.includes(student.name)) {
// fetch("https://randomuser.me/api/?gender=male")
// .then((response) => response.json())
// .then((data) => {
// const results = data.results[0];
// const personObject = {
// id: student.id,
// name: student.name,
// evaluations: student.evaluations,
// lastName: results.name.last,
// gender: results.gender,
// age: results.dob.age,
// email: results.email,
// phone: results.phone,
// photo: results.picture.medium,
// };
// this.addToFireBase(personObject);
// newStudentArray.push(personObject);
// })
// .catch((error) => console.log(error));
// } else {
// fetch("https://randomuser.me/api/?gender=female")
// .then((response) => response.json())
// .then((data) => {
// const results = data.results[0];
// const personObject = {
// id: student.id,
// name: student.name,
// evaluations: student.evaluations,
// lastName: results.name.last,
// gender: results.gender,
// age: results.dob.age,
// email: results.email,
// phone: results.phone,
// photo: results.picture.medium,
// };
// this.addToFireBase(personObject);
// newStudentArray.push(personObject);
// })
// .catch((error) => console.log(error));
// }
// });
// const studentData = newStudentArray;
// };
