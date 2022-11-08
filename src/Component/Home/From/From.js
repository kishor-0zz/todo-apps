import React, { useState } from 'react';

const From = ({ fromData }) => {

   const [data, setData] = useState({ title: "", desc: "" });

   const updateHandel = (event) => {
      const name = event.target.name;
      setData((oldData) => {
         return { ...oldData, [name]: event.target.value }
      })
   }



   const handelSumit = (event) => {
      event.preventDefault();
      fromData(data);
      setData({ title: "", desc: "" })
   }

   return (
      <div className='py-5'>
         <form onSubmit={handelSumit} >
            <div className="mb-3">
               <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
               <input onChange={updateHandel} value={data.title} type="text" className="form-control" id="title" name='title' required />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
               <textarea onChange={updateHandel} value={data.desc} className="form-control" name='desc' id="desc" rows="3" required></textarea>
            </div>
            <button type="submit">add to do</button>
         </form>
      </div>
   );
};

export default From;