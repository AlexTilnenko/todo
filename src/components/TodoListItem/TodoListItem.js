import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
   render() {
      const {
         label,
         onDelete,
         onToggleImportant,
         onToggleCompleted,
         important,
         completed,
      } = this.props;

      return (
         <div
            className={classNames('app-list-item d-flex justify-content-between', {
               important: important,
               completed: completed,
            })}
         >
            <div className="d-flex justify-content-between">
               <i className=" fa fa-check"></i>
               <span className="app-list-item-label" onClick={onToggleCompleted}>
                  {label}
               </span>
            </div>
            <div className="d-flex justify-content-center aline-items-center">
               <button className="btn-star btn-sm" onClick={onToggleImportant}>
                  <i className="fa fa-star"></i>
               </button>
               <button className="btn-trash btn-sm" onClick={onDelete}>
                  <i className="fa fa-trash-o"></i>
               </button>
            </div>
         </div>
      );
   }
}
