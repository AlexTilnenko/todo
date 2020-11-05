import React from 'react';
import { Alert } from 'reactstrap';

import './Error.scss';

function Error() {
   return (
      <div className="error">
         <Alert color="danger">Введите текст задачи!!!</Alert>
      </div>
   );
}

export default Error;
