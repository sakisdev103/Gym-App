import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import axios from 'axios';

const Exersice = () => {
  const {id} = useParams();
  const [category, setCategory] = useState([]);
  const [empty, setEmpty] = useState(false);

  //Fetching data from api (exersices)
  const fetchCategory = () =>{
    const options = {
      method: 'GET',
      url: 'https://exerciseapi3.p.rapidapi.com/search/',
      params: {primaryMuscle: id},
      headers: {
        'X-RapidAPI-Key': '68a34a971cmshb4dafbfa28498e2p1e4c0fjsn0f1c743cc3c2',
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setCategory(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(()=>{
    fetchCategory();
  },[])

  //Checking if there are not exersices
  setTimeout(()=>{
    if(category.length === 0){
      setEmpty(true);
    }
  }, 1000)
  return (
    <>
      {
        <div className='categories'>
          {
            category.map((category, index)=>{
              return(
                <div className="card" key={index}>
                  <h3>{category.Name}</h3>
                  <div className="add-exersice-container">
                    <Link to={`add/${category.Name}`} className='add-exersice'>Add</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
      {
        empty === true && 
        <div className="center">
          <h2>No exersices have been found.</h2>
        </div>
      }
    </>
  )
}

export default Exersice