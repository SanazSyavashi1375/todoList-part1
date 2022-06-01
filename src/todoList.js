import React, { useState } from "react";
import GetInformation from "./layout/getInformation";
import TodoTable from "./layout/todoTable";
const TododList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [idNum, setIdNum] = useState(1);
    const [arrayOfTodos, setArrayOfTodos] = useState([]);

    return ( < >
        <
        GetInformation title = { title }
        description = { description }
        dueDate = { dueDate }
        setTitle = { setTitle }
        setDescription = { setDescription }
        setDueDate = { setDueDate }
        setArrayOfTodos = { setArrayOfTodos }
        arrayOfTodos = { arrayOfTodos }
        />  { <
        TodoTable arrayOfTodos = { arrayOfTodos }
        setArrayOfTodos = { setArrayOfTodos }
        setIdNum = { setIdNum }
        idNum = { idNum }
        />  
    }

    <
    />

)
}
export default TododList;