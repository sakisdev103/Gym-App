import React from 'react'
import { Link } from 'react-router-dom';

const WorkoutList = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`; 

    //Get items from local storage
    const getItems = JSON.parse(localStorage.getItem('workout'));
  return (
    <>
        <div className="workout-list">
            <Link to="/home" className='navigation'><i className="fa-solid fa-plus"></i></Link>
            <h3>{currentDate}</h3>
            {
                getItems !== null &&
                getItems.filter((item)=>{
                    if(item.date === currentDate){
                        return item;
                    }
                }).map((item, index)=>{
                    return(
                        <article key={index}>
                            <div className="card workout-card">
                                <h3>{item.exersice}</h3>
                                <div className="border"></div>
                                <div className="workout-info">
                                    <p></p>
                                    <p>{item.weight} kgs</p>
                                    <p>{item.reps} reps</p>
                                </div>
                            </div>
                        </article>
                    )
                })
            }

        </div>
    </>
  )
}

export default WorkoutList