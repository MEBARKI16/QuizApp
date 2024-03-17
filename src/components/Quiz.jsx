import React, { useState } from 'react';
import QUESTIONS from '../questions'

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const currentQuestion = reponses.length;
    const newTab = [...QUESTIONS[currentQuestion].answers];
    newTab.sort(() => Math.random() - 0.5);
    const HandleSelectAnswer = (answer) => {
        setReponses(prev => ([...prev, answer]))
    }
    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ul id="answers">
                    {newTab.map(qst => (
                        <li key={qst} className="answer">
                            <button onClick={() => { HandleSelectAnswer(qst) }}>{qst}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Quiz;