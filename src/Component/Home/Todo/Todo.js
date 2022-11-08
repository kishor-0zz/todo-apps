import React from 'react';
import TodoDetils from './TodoDetils';

const Todo = ({ todo, removeHandel }) => {
   return (
      <div className='text-center'>
         <h2 className='my-5'>add list</h2>
         {
            todo.map(adds => <TodoDetils adds={adds} key={adds.id} removeHandel={removeHandel} ></TodoDetils>)
         }
      </div>
   );
};

export default Todo;