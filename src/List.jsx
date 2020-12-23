import React from "react";
import "./styles.css";
import List from "@material-ui/core/List";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function List1(props) {
  const students = props.students;
  const onClick = props.onClick;
  const onChange = props.onChange;
  return (
    <div className="list">
      <input
        className="search"
        type="text"
        placeholder="search.."
        onChange={onChange}
      />
      <List component="nav" aria-label="main mailbox folders">
        <div className="studentList">
          {students.map((student, index) => (
            <ListItem button onClick={() => onClick(student)}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={student.name} />
            </ListItem>
          ))}
        </div>
      </List>
    </div>
  );
}
