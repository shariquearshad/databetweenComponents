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
  const [student, setStudent] = React.useState({});
  const [filterValue, setFilterValue] = React.useState("");
  const handleClick = (student) => setStudent(student);
  const handleChange = (event) => {
    setFilterValue(event.target.value);
    setStudent({});
  };
  return (
    <div className="container">
      <List1
        students={studentList.filter((student) =>
          student.name
            .toLocaleLowerCase()
            .includes(filterValue.toLocaleLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <Details className="details" student={student} />
    </div>
  );
}
