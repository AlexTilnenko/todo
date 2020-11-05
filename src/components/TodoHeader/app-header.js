import React from 'react';

import './app-header.scss';

const AppHeader = ({ important, allTodos, completed }) => {
   return (
      <div className="app-header d-flex">
         <h1>Список задач</h1>
         <h2>
            {allTodos} заданий из них: важных {important}, выполненных {completed}
         </h2>
      </div>
   );
};
export default AppHeader;
