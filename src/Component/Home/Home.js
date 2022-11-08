import React, { useState } from 'react';
import From from './From/From';
import Todo from './Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
   const [todo, setTodo] = useState([]);
   const fromData = (todo) => {
      setTodo((oldTodo) => {
         return [...oldTodo, { id: uuidv4(), todo }];
      })
   }
   console.log(todo);

   const removeHandel = (id) => {

      const exsist = todo.filter(s => s.id != id)
      alert("sure delete item")
      setTodo(exsist)
   }

   return (
      <div>
         <From fromData={fromData} ></From>
         <hr />
         <Todo todo={todo} removeHandel={removeHandel} ></Todo>
      </div>
   );
};

export default Home;