import React from 'react'
import { useParams } from "react-router"; 

const Home = (props) => {
  const { messageParam, textColorParam, bkGndColorParam } = useParams()
  let message = (typeof messageParam == 'undefined' ? "Welcome" : (isNaN(messageParam) ? "The word is: " + messageParam : "The number is: " + messageParam));
  let textColor = (typeof textColorParam == 'undefined' ? "Black" : textColorParam);
  let bkGndColor = (typeof bkGndColorParam == 'undefined' ? "white" : bkGndColorParam);

  return (
    <div>
      <h1 style={{ color: textColor, background: bkGndColor }}>{message}</h1>
    </div>
  );
}

export default Home