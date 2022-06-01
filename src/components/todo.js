import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Todo = (props) => {
    const deleteHandler = () => {
        let resultArr = props.arrayOfTodos.filter(todoItem => {
            if (todoItem.key == props.todo.key) {

            } else {
                return todoItem;
            }
        })
        props.setArrayOfTodos(resultArr);
        console.log(resultArr);
    }

    return (

        <
        tr key = { props.todo.key } >
        <
        td > { props.todo.title } < /td> <
        td > { props.todo.description } < /td> <
        td > { props.todo.dueDate } < /td> <
        td onClick = { deleteHandler } > < DeleteIcon / > < /td> < /
        tr >



    )
}
export default Todo;