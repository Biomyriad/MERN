import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate} from "react-router-dom";
import './AuthorsDisplay.css'
import axios from "axios";
import Nav from './Nav';

export default function AuthorsDisplay() {

  const [authors, setAuthors] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors`)
      .then((response) => {
        console.log(response.data);
        setAuthors(response.data.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
            if (fa < fb) return -1;
            if (fa > fb) return 1;
            return 0;
        }))
      })
      .catch((err) => {
        console.log({message: err.response.data.message, errorObj: err});
      });
  }, []);

  const deleteAuthor = (authorId) => {
    axios.delete("http://localhost:8000/api/authors/" + authorId)
    .then(res => {
      removeFromAuthorsList(authorId)
      console.log(res)
    })
    .catch(err => console.log({message: err.response.data.message, errorObj: err}))
  }

  const removeFromAuthorsList = authorId => {
    setAuthors(authors.filter(authors => authors._id !== authorId));
  }

  return (
    <>
      <Nav/>
      <div className='ms-3'>
        <p className='mb-1' style={{color: 'purple'}}>We have quotes by:</p>
        <table className="table border" style={{width: "450px"}}>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions available</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map((obj, index) =>
                <tr key={index}>
                  <td>{obj.name}</td>
                  <td> 
                    <button className='btn btn-primary rounded me-2' onClick={() => navigate('/edit/' + obj._id)}>Edit</button>
                    <button className='btn btn-primary rounded' onClick={() => deleteAuthor(obj._id)}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
