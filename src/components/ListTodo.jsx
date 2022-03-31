import { Paper, Button } from "@mui/material";

function ListTodo(props) {
  const handleDelete = (idx) => {
    const newArr = [...props.listData];
    newArr.splice(idx, 1);
    // console.log(newArr);

    // console.log(newArr.splice(idx, 1));
    props.setter(newArr);
  };

  const handleUpdate = (idx, data) => {
    console.log(data);
    props.setUpdateItem(data);
    const newArr = [...props.listData];
    newArr.splice(idx, 1);
    // console.log(newArr);

    // console.log(newArr.splice(idx, 1));
    props.setter(newArr);
    props.setFlag(true);
  };
  return (
    <div className="paper_todo">
      <Paper className="list_todo" elevation={2}>
        <ul>
          {props.listData.map((data, idx) => {
            return (
              <li key={idx}>
                <div className="listItem">
                  <p>{data}</p>
                  <div>
                    <Button
                      color="secondary"
                      onClick={() => handleUpdate(idx, data)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(idx)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Paper>
    </div>
  );
}
export default ListTodo;
