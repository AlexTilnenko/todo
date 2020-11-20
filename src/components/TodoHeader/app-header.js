import React from 'react';

import './app-header.scss';

const AppHeader = ({ important, allTodos, completed }) => {
   const todoWords = ['задача', 'задачи', 'задач'];
   const declOfNum = (number, words) => {
      return words[
         number % 100 > 4 && number % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
      ];
   };

   const currentWord = declOfNum(allTodos, todoWords);

   return (
      <div className="app-header d-flex">
         <h1>Список задач</h1>
         <h2>
            {allTodos} {currentWord} из них: важных {important}, выполненных {completed}
         </h2>
      </div>
   );
};
export default AppHeader;
