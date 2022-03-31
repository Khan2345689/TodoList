import { TextField, Button } from "@mui/material";
import { useState } from "react";

function InputTodo(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setUpdateItem(e.target.value);
  };

  const handleClick = () => {
    props.setter((prev) => [props.updateItem, ...prev]);
    props.setUpdateItem("");
    props.setFlag(false);
    console.log(props.data);
    localStorage.setItem("mytodo", JSON.stringify(props.data));
  };

  return (
    <div className="todo_input">
      <TextField
        id="outlined-basic"
        label="Enter Task"
        variant="outlined"
        value={props.updateItem}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={handleClick}
        disabled={props.updateItem === ""}
      >
        {props.flag ? "UPDATE" : "ADD"}
      </Button>
    </div>
  );
}
export default InputTodo;
