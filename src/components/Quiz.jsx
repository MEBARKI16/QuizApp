import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions';
import completed from "../assets/quiz-complete.png";
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const [answerState, setAnswerState] = useState("")
    const currentQuestion = answerState === "" ? reponses.length : reponses.length - 1;
    const newTab = QUESTIONS[currentQuestion]?.answers
        ? [...QUESTIONS[currentQuestion].answers].sort(() => Math.random() - 0.5)
        : [];


    const handleSelectAnswer = useCallback((answer) => {
        setReponses(prev => ([...prev, answer]));
        setAnswerState("selected")
        setTimeout(() => {
            if (answer === QUESTIONS[currentQuestion].answers[0]) {
                setAnswerState("correct");
            }
            else { setAnswerState("wrong"); }
            setTimeout(() => {
                setAnswerState("")
            }, 2000);
        }, 1000)
        console.log(answerState)
    }, [currentQuestion]);
    const onTimeOut = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    const quizIsComplete = (reponses.length === QUESTIONS.length);
    console.log(quizIsComplete);

    return (
        <>
            {quizIsComplete ?
                <div id="summary">
                    <img src={completed} alt="Quiz Completed!" />
                    <h2>Quiz Completed!</h2>
                </div>
                :
                <div id="quiz">
                    <div id="question">
                        <QuestionTimer key={QUESTIONS[currentQuestion]?.text} timeOut={10000} onTimeOut={onTimeOut} />
                        <h2>{QUESTIONS[currentQuestion]?.text}</h2>
                        <ul id="answers">
                            {newTab.map((qst, index) => {
                                const isSelected = reponses[reponses.length - 1] === qst;
                                const style = isSelected ? answerState : "";
                                return <li key={index} className="answer">
                                    <button className={style} onClick={() => handleSelectAnswer(qst)}>{qst}</button>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
};

export default Quiz;
