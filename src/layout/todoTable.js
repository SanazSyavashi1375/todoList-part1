import React from 'react';
import Todo from '../components/todo';
import Box from '../styledComponents/box';
import Table from '../styledComponents/table';


const TodoTable = (props) => {
        return ( <Table>
                <thead>
                <tr>
                <th> title </th> <
                th > description </th> <
                th > due Date </th> <
                th > delete </th>   </tr > </thead>
                <tbody> {
                    props.arrayOfTodos.map(todo => < Todo setArrayOfTodos = { props.setArrayOfTodos }
                        arrayOfTodos = { props.arrayOfTodos }
                        todo = { todo }
                        />)}   </tbody> 
                        </Table>)
                    }
                    export default TodoTable;