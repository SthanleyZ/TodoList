import React, { useState } from 'react';
import TodoForm from './TodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DeleteIcon from '@material-ui/icons/Delete';

export default function Todo({ todos, completeTodo, removeTodo, UpdateItem }) {
    // Hook para edição de item da lista, setando o id nulo e o valor vazio
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    // Atualização do valor do item
    const update = value => {
        UpdateItem(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    } 

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={update}>Outro</TodoForm>
    }
    


    //  Cria um array apartir dos itens adicionados no state e mostra os itens pelo index
    return todos.map((todo, index) => (
        // Chaves para identificar quais itens sofreram alterações, foram adicionados ou removidos.
        <ListItem key={todo.id}>
            <ListItemIcon onClick={() => completeTodo(index)}
            >
                <Checkbox key={todo.id}
                    checked={todo.isCompleted ? true : false}
                    edge="start"
                    tabIndex={index}
                    disableRipple
                />
            </ListItemIcon>
            {/* Adicionar item a lista */}
            <ListItemText className='Lista' key={todo.id}
                primary={todo.isCompleted ? todo.text + " (Finalizado)" : todo.text} />
                
            <ListItemSecondaryAction>

                {/* Botão Excluir */}
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon className='IconLi' onClick={() => removeTodo(todo.id)} />
                </IconButton>

                {/* Botão Editar */}
                <IconButton edge="end" aria-label="Edit">
                    <EditIcon className='IconLi'
                        onClick={() => setEdit({ id: todo.id, value: todo.text })} />
                </IconButton>

            </ListItemSecondaryAction>
        </ListItem>
    ));
};
