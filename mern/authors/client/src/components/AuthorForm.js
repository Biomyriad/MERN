import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from './Nav';

export default function AuthorForm() {

  const { id } = useParams();
  const [authorName, setAuthorName] = useState("");
  const [idNotFound, setIdNotFound] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((response) => {
          console.log(response.data);
          setAuthorName(response.data.name);
          setIdNotFound(false);
        })
        .catch((err) => {
          setIdNotFound(true);
          console.log(err);
        });
    }

  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (id) {
      axios.put(`http://localhost:8000/api/authors/${id}`, {
        name: authorName
      })
        .then((response) => {
          console.log(response);
          console.log(response.data);
          navigate("/");
        })
        .catch((err) => {
          console.log({message: err.response.data.message, errorObj: err})
          setErrors(err.response.data.error.errors);
        });
    } else {
      axios.post("http://localhost:8000/api/authors",
        {
          name: authorName
        })
        .then(response => {
          console.log(response);
          console.log(response.data);
          navigate('/');
        })
        .catch((err) => {
          console.log({message: err.response.data.message, errorObj: err})
          setErrors(err.response.data.error.errors);
        });
    }
  }

  return (
    <>
      <Nav />
      { !idNotFound ?
              <div className='ms-3'>
              { id ?
                <p className='mb-1' style={{ color: 'purple' }}>Edit this author:</p> :
                <p className='mb-1' style={{ color: 'purple' }}>Add new author:</p>                
              }
                <div className='border border-dark px-2 py-3' style={{ width: "300px" }}>
                  <form onSubmit={submitHandler}>
                    <label className='me-2' labelfor='authorName'>Name:</label>
                    <input id='authorName' placeholder='Leslie Jones' value={authorName} onChange={(e) => { setAuthorName(e.target.value) }} />
                    {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
                    <div className='d-flex justify-content-center mt-3'>
                      <button className='btn-primary rounded me-3' type='cancel' onClick={() => navigate("/")}>Cancel</button>
                      <button className='btn-primary rounded' type='submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            :
            <div className='ms-3'>
                <p className='mb-1' style={{ color: 'purple' }}>Author not found!</p>           
                <div className='border border-dark px-2 py-3' style={{ width: "300px" }}>
                  <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
                  <div className='d-flex justify-content-center mt-3'>
                      <button className='btn-primary rounded me-3' onClick={() => navigate("/")}>Cancel</button>
                      <button className='btn-primary rounded' onClick={() => navigate("/new")}>New Author</button>
                    </div>
                </div>
            </div>

      }

    </>
  )
}
