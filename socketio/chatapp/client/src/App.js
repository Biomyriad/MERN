import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [socket] = useState(() => io(':8000'));
 
  useEffect(() => {
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true);
  }, []);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', msg => 
      setMessages(prevMessage => {
        return [msg, ... prevMessage];
      })
    );
  }, []);

  const [text, setText] = useState("");

  const sendMsg = (msg) => {
    socket.emit('chat message', msg);
  }

  return (
    <div className="App">
      <table className="table border" style={{width: "450px", height: "500px"}}>
        <thead>
          <tr>
            <th>CHAT MESSAGES</th>
          </tr>
        </thead>
        <tbody>
          {
            messages.map((obj, index) =>
              <tr key={index}>
                <td>{obj}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <input type='text' onChange={(e) => setText(e.target.value)}></input>
      <button className='btn btn-primary rounded' onClick={() => sendMsg(text)}>send</button>
    </div>
  );
}

export default App;
