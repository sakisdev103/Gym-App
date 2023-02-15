import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Add = () => {
  //Get exersice from url
  const {id} = useParams(); 
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  //Get items from local storage
  const getItems = JSON.parse(localStorage.getItem('workout'));
  const [itemsToLocalStorage, setItemsToLocalStorage] = useState(getItems);
  //Today's date
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  //Setting up the object
  const [inputs, setInputs] = useState({
    exersice: '',
    weight: '',
    reps: '',
    date: currentDate
  })
  //Getting the values from inputs
  const handleChange = (e) =>{
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name] : value
    })
  }
  //Function to add object in the array
  const addExersice = (newExersice) =>{
    setItemsToLocalStorage([...itemsToLocalStorage , newExersice]);
  }
  //Function onSubmit
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!(inputs.exersice || inputs.weight || inputs.reps)){
      setIsError(true);
      setMessage('Please fill out all the fields.');
      setTimeout(()=>{
        setMessage('');
      },1500);
    }else{
      setIsError(false);
      const newExersice = {
        exersice: id,
        weight: inputs.weight,
        reps: parseFloat(inputs.reps),
        date: currentDate
      }
      addExersice(newExersice);
      setMessage('Successfully added');
      setTimeout(()=>{
        setMessage('');
        setInputs({
          weight: '',
          reps: ''
        })
      },1500)
    }
  } 
  
  useEffect(()=>{
    //Checking if items from storage are null
    if(itemsToLocalStorage === null){
      setItemsToLocalStorage([]);
    }else{
      localStorage.setItem('workout', JSON.stringify(itemsToLocalStorage));
    }
  },[itemsToLocalStorage])

  return (
    <>
        <div className="exersice-container">
          <div className="exersice-header">
            <h2>{id}</h2>
          </div>
          <div>
            <form className='add-form' onSubmit={handleSubmit}>
              <div>
                <input type="text" name='weight' onChange={handleChange} placeholder='Weight' value={inputs.weight}/>
                <input type="number" name='reps' onChange={handleChange} placeholder='Reps' value={inputs.reps}/>
              </div>
              <button type="submit">Save</button>
            </form>
            <p className={isError? `error` : `success`}>{message}</p>
          </div>
        </div>
    </>
  )
}

export default Add