import React, { Component } from 'react';
import classNames from 'classnames';

import './TodoStatusFilter.scss';

export default class TodoStatusFilter extends Component {
   constructor(props) {
      super(props);
      this.buttons = [
         { name: 'all', label: 'Все' },
         { name: 'important', label: 'Важные' },
         { name: 'completed', label: 'Не сделано' },
      ];
   }

   render() {
      return (
         <div className="btn-group">
            {this.buttons.map(({ name, label }) => {
               const { filter, onFilterSelect } = this.props;
               const active = filter === name;
               return (
                  <button
                     key={name}
                     className={classNames('btn', 'btn-filter', {
                        'btn-primary': active,
                        'btn-outline-secondary': !active,
                     })}
                     onClick={() => onFilterSelect(name)}
                  >
                     {label}
                  </button>
               );
            })}
         </div>
      );
   }
}
