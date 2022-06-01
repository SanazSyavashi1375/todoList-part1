import React from "react";
import Button from "../styledComponents/button";
import Box from "../styledComponents/box";
import { TextField, Typography } from '@mui/material';
import { Container } from "@mui/system";
import TextareaAutosize from '@mui/material/TextareaAutosize';


const GetInformation = (props) => {

    const clickHandler = () => {
        if ((props.title.trim().length === 0) || (props.description.trim() === 0) || (props.dueDate.trim() === 0)) {
            alert('Please Fill all the required fileds!');

        } else if (props.title.trim().length < 3) {
            alert('the title is too short');
        } else if (props.description.trim().length < 15) {
            alert('the description is too short');
        } else if (props.description.trim().length > 60) {
            alert('the description is too long');
        } else {
            props.setArrayOfTodos(prev => [...prev, {
                "title": props.title,
                "dueDate": props.dueDate,
                "description": props.description,
                "key": Math.floor(Math.random() * 1000),
                "complated": "false"
            }]);
            removeInputs();
        }

    }
    const removeInputs = () => {
        props.setTitle('');
        props.setDescription('');
        props.setDueDate('');

    }

    return (

        <
        Box >
        <
        Typography variant = "h3" > Todo List < /Typography> <
        Typography variant = "p" > please Fill the blanks < /Typography>  <
        Container > {
            (props.title.trim().length == 0) ? < TextField id = "title"
            error label = "Title"
            variant = "outlined"
            sx = {
                { margin: '4%', width: '40%' }
            }
            value = { props.title }
            placeholder = 'Please Enter The Title'
            onChange = {
                (event) => props.setTitle(event.target.value)
            }
            required / >
            :
                <
                TextField id = "title"
            label = "Title"
            variant = "outlined"
            sx = {
                { margin: '4%', width: '40%' }
            }
            value = { props.title }
            placeholder = 'Please Enter The Title'
            onChange = {
                (event) => props.setTitle(event.target.value)
            }
            required / >
        }


        <
        input type = 'date'
        id = "dueDate"
        placeholder = "Date Of Due"
        value = { props.dueDate }
        placeholder = 'Due Date'
        onChange = {
            (event) => props.setDueDate(event.target.value)
        }
        style = {
            { margin: "3vw 4%", width: '40%', borderColor: props.dueDate.trim() == 0 ? 'red' : 'black' }
        }
        required / >

        <
        /Container>

        <
        TextareaAutosize error id = "description"
        label = "Description of due"
        variant = "outlined"
        style = {
            { width: '90%', hight: '200px', margin: '2vw', borderColor: props.description.trim() == 0 ? 'red' : 'black' }
        }
        value = { props.description }
        placeholder = 'Enter The Description'
        onChange = {
            (event) => props.setDescription(event.target.value)
        }
        required / >
        <
        Button onClick = { clickHandler } > Submit < /Button> < /
        Box >
    )
}
export default GetInformation;