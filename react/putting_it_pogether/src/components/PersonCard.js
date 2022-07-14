import { useState } from 'react';
import './PersonCard.css'

function PersonCard(props) {
    const {firstName, lastName, age, hairColor} = props
    const [personAge, setPersonAge] = useState(age);

    return (
        <div className="PersonCard">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setPersonAge(personAge + 1)}>
                Add Birthday
            </button>
        </div>
    );
}

export default PersonCard;
