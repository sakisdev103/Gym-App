import React from 'react';
import { Link } from 'react-router-dom';

const List = ({exerciseList}) => {
  return (
    <>
      <div className='categories'>
        {
          exerciseList.map((exercise, index)=>{
            return(
              <div className="card exersice-card" key={index}>
                <Link to={`exersice/${exercise}`}>{exercise}</Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default List