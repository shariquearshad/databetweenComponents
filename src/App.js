import React from "react";
import Details from "./Details";
import List1 from "./List";
import "./styles.css";

export default function App() {
  const studentList = [
    {
      name: "Sharique",
      id: 1,
      hobby: "travelling"
    },
    {
      name: "vinod",
      id: 2,
      hobby: "cricket"
    },
    {
      name: "Suraj",
      id: 3,
      hobby: "travelling"
    },
    {
      name: "ankit",
      id: 4,
      hobby: "travelling"
    },
    {
      name: "Neharika",
      id: 5,
      hobby: "travelling"
    },
    {
      name: "Tanwir",
      id: 6,
      hobby: "travelling"
    },
    {
      name: "Raju",
      id: 7,
      hobby: "travelling"
    },
    {
      name: "Raghav",
      id: 8,
      hobby: "travelling"
    },
    {
      name: "Ravi",
      id: 9,
      hobby: "travelling"
    }
  ];
  const [studentIndex, setStudentIndex] = React.useState(-1);
  const [students, setStudents] = React.useState(studentList);
  const handleClick = (index) => setStudentIndex(index);
  const handleChange = (event) => {
    const filterValue = event.target.value;
    const filteredStudent = studentList.filter((student) =>
      student.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setStudentIndex(-1);
    setStudents(filteredStudent);
  };
  return (
    <div className="container">
      <List1
        students={students}
        onClick={handleClick}
        onChange={handleChange}
      />
      {studentIndex !== -1 && (
        <Details className="details" student={students[studentIndex]} />
      )}
    </div>
  );
}
