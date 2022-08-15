import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate} from "react-router-dom";
import './AuthorsDisplay.css'
import axios from "axios";
import Nav from './Nav';


export default function AuthorsDisplay() {

  const [authors, setAuthors] = useState([])
  const [listChanged, setListChanged] = useState(false);  // SOCKET.IO
  const navigate = useNavigate();

  useEffect(() => {
    setListChanged(false);  // SOCKET.IO
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
  }, [listChanged]);  // SOCKET.IO

  const deleteAuthor = (authorId) => {
    axios.delete("http://localhost:8000/api/authors/" + authorId)
    .then(res => {
      removeFromAuthorsList(authorId);
      socket.emit('updateAuthors', authorId); // SOCKET.IO
      console.log(res);
    })
    .catch(err => console.log({message: err.response.data.message, errorObj: err}))
  }

  const removeFromAuthorsList = authorId => {
    setAuthors(authors.filter(authors => authors._id !== authorId));
  }

  ///////////////////
  // SOCKET IO ///////////
  //////////////////////

  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true);
  }, []);

  useEffect(() => {
    socket.on('updateAuthors', authorId => {
        console.log("updateAuthors", authorId);
        setListChanged(true);
      }
    ); 
  }, []);

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
      <input></input>
    </>
  )
}
