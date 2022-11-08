import React from 'react';

const TodoDetils = ({ adds, removeHandel }) => {
   const { id, todo } = adds;
   const { title, desc } = adds.todo;
   return (
      <div className=' m-auto d-flex justify-content-between mb-3 text-center bg-dark text-light p-4 mt-5 align-items-center' style={{ width: '500px' }}>
         <div>
            <h2>{title}</h2>
            <p>{desc}</p>
         </div>
         <div>
            <button onClick={() => removeHandel(id)} ><i class="fa-solid fa-trash"></i></button>
         </div>
      </div>
   );
};

export default TodoDetils;