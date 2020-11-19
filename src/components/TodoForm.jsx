import React, { useState } from 'react';
import './Todo.css'

import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';


export default function TodoForm(props) {

    // Cor do icone    
    const colorStyle = {
        color: props.color || '#444'
    }

    // Hook utiliando o value(input) para setar o state(setInputs). O state começa vazio.
    const [input, setInputs] = useState('')

    // Valor sendo escrito no Input
    const handleChange = e => {
        setInputs(e.target.value)
    }

    // Envia o valor com o texto do input e um ID aleaotorio
    const submit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInputs('')
    }

    return (
        <form className='todoForm' onSubmit={submit}>
            <FormControl>
                <InputLabel htmlFor="my-input">Qual tarefa iremos fazer hoje?</InputLabel>
                <Input className="Input" id="my-input" type="text"
                    placeholder="Tarefa"
                    value={input}
                    name="text"
                    className="tudoInput"
                    onChange={handleChange}
                />
            </FormControl>

            <IconButton onClick={submit} aria-label="add" size="small">
                <AddIcon style={colorStyle} fontSize="large" />
            </IconButton>

        </form>

    )
}