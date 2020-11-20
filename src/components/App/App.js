import React, { Component } from 'react';

import TodoHeader from '../TodoHeader/app-header';
import SearchForm from '../SearchForm/SearchForm';
import TodoStatusFilter from '../TodoStatusFilter/TodoStatusFilter';
import TodoList from '../TodoList/TodoList';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import Error from '../Error/Error';

import './App.scss';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { id: 1, label: 'Learn', completed: true, important: true },
            { id: 2, label: 'React todo list', completed: true, important: false },
            { id: 3, label: 'Learn JS', completed: false, important: true },
         ],
         term: '',
         filter: 'all',
         visibleError: false,
      };
      this.deleteItem = this.deleteItem.bind(this);
      this.addItem = this.addItem.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);
      this.onToggleCompleted = this.onToggleCompleted.bind(this);
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
      this.onFilterSelect = this.onFilterSelect.bind(this);
      this.showError = this.showError.bind(this);
      this.hideError = this.hideError.bind(this);
   }

   componentDidMount() {
      const savedTodos = JSON.parse(localStorage.getItem('data') || '[]');
      this.setState({ data: savedTodos });
   }

   componentDidUpdate() {
      localStorage.setItem('data', JSON.stringify(this.state.data));
   }

   deleteItem(id) {
      this.setState(({ data }) => {
         const index = data.findIndex((elem) => elem.id === id);

         const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
         return {
            data: newArr,
         };
      });
   }

   addItem(body) {
      if (body.trim()) {
         const newItem = {
            label: body,
            important: false,
            id: Date.now(),
         };
         this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
               data: newArr,
            };
         });
      } else {
         this.showError();
         setTimeout(this.hideError, 2500);
      }
   }

   showError() {
      this.setState(() => {
         return {
            visibleError: true,
         };
      });
   }

   hideError() {
      this.setState(() => {
         return {
            visibleError: false,
         };
      });
   }

   onToggleImportant(id) {
      this.setState(({ data }) => {
         const index = data.findIndex((elem) => elem.id === id);
         const old = data[index];
         const newItem = { ...old, important: !old.important };
         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
         return {
            data: newArr,
         };
      });
   }

   onToggleCompleted(id) {
      this.setState(({ data }) => {
         const index = data.findIndex((elem) => elem.id === id);
         const old = data[index];
         const newItem = { ...old, completed: !old.completed };
         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
         return {
            data: newArr,
         };
      });
   }

   filterTodo(items, filter) {
      switch (true) {
         case filter === 'completed':
            return items.filter((item) => item.completed === false);
         case filter === 'important':
            return items.filter((item) => item.important);
         default:
            return items;
      }
   }

   searchTodo(items, term) {
      if (term.length === 0) {
         return items;
      }
      return items.filter((item) => {
         return item.label.indexOf(term) > -1;
      });
   }

   onUpdateSearch(term) {
      this.setState({ term });
   }

   onFilterSelect(filter) {
      this.setState({ filter });
   }

   render() {
      const { data, term, filter, visibleError } = this.state;
      const important = data.filter((item) => item.important).length;
      const completed = data.filter((item) => item.completed).length;
      const allTodos = data.length;

      const visibleTodos = this.filterTodo(this.searchTodo(data, term), filter);
      return (
         <div className="app">
            <TodoHeader important={important} completed={completed} allTodos={allTodos} />

            <div className="searh-panel d-flex">
               <SearchForm onUpdateSearch={this.onUpdateSearch} />
               <TodoStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>
            <TodoList
               todos={visibleTodos}
               onDelete={this.deleteItem}
               onToggleImportant={this.onToggleImportant}
               onToggleCompleted={this.onToggleCompleted}
            />
            <AddTodoForm onAdd={this.addItem} />
            {visibleError === true && <Error />}
         </div>
      );
   }
}
