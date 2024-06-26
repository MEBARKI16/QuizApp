import React, { useRef } from 'react'

export const Answers = ({ reponse, handleSelectAnswer, answerState, answers }) => {
    const newTab = useRef();
    if (!newTab.current) {
        newTab.current = [...answers];
        newTab.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {newTab.current.map((qst, index) => {
                const isSelected = reponse === qst;
                const style = isSelected ? answerState : "";
                return <li key={index} className="answer">
                    <button className={style} onClick={() => handleSelectAnswer(qst)} disabled={answerState != ''}>{qst}</button>
                </li>
            })}
        </ul>
    )
}
export default Answers;
