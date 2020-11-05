import React from 'react';
import { ListGroup } from 'reactstrap';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.scss';

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleCompleted }) => {
   return (
      <ListGroup className="app-list">
         {todos.map(({ id, ...itemProps }) => {
            return (
               <li key={id} className="list-group-item">
                  <TodoListItem
                     {...itemProps}
                     onDelete={() => onDelete(id)}
                     onToggleImportant={() => onToggleImportant(id)}
                     onToggleCompleted={() => onToggleCompleted(id)}
                  />
               </li>
            );
         })}
      </ListGroup>
   );
};

export default TodoList;
