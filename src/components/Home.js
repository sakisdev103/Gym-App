import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';

const Home = () => {
  const [exercise, setExercise] = useState([]);

  //Fetching data from api (categories)
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://exerciseapi3.p.rapidapi.com/search/muscles/',
      headers: {
        'X-RapidAPI-Key': '68a34a971cmshb4dafbfa28498e2p1e4c0fjsn0f1c743cc3c2',
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setExercise(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <List exerciseList = {exercise}/>
    </>
  )
}

export default Home