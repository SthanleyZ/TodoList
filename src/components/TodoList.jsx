import React, { useState } from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo';

import List from '@material-ui/core/List';

export default function TodoList() {

    // Hook utiliando o value(todos) para setar o state(setItem) como um array vazio..
    const [todos, setItem] = useState([]);

    // Adicionar Itens a lista de tarefas
    const addTodo = todo => {

        // Regex que verifica se o valor é vazio ou somente contem espaços
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        // Spreed operator(...todos) pega um array e adiciona novos elementos preservando os valores anteriores
        const newTodos = [...todos, todo]

        // Adiciono o novo item ao array setItem
        setItem(newTodos)


    }
    // const [todos, setItem] = useState([]);
    // Editar item da lista
    const UpdateItem = (itemId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setItem(itemAnterior => itemAnterior.map(item => (item.id === itemId ? newValue : item)))
    }

    // Remove itens da lista
    const removeTodo = id => {
        const removeItem = [...todos].filter(todo => todo.id !== id)

        setItem(removeItem)
    }


    const completeTodo = index => {
        const newTodos = [...todos];
        if (newTodos[index].isCompleted == true) {
            newTodos[index].isCompleted = false
        } else {
            newTodos[index].isCompleted = true
        }

        setItem(newTodos);
        console.log(index)
    }


    return (
        <div>
            <TodoForm onSubmit={addTodo}>
            </TodoForm>

            <List className='UlTodo'>
                <h3>Tarefas</h3>
                <Todo todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    UpdateItem={UpdateItem}
                >

                </Todo>
            </List>
        </div>
    );
}