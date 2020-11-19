import React from 'react';

import List from './components/TodoList';
import Card from './components/layout/Card'
import Bar from './components/layout/Bar'
import './App.css'

export default (props) => {
 
    return (
        <div className="App">
            <Bar>

            </Bar>
            <Card titulo="Adicione itens a sua lista de tarefas" className="Cards">

                <div className="todoApp">

                    <List></List>

                </div>

              

            </Card>
        </div>
    );
}