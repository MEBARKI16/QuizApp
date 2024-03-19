import React, { useEffect, useState } from 'react'

const QuestionTimer = ({ timeOut, onTimeOut }) => {
    const [remainingTime, setRemainingTime] = useState(timeOut)
    useEffect(() => {
        console.log("timeOut")
        setTimeout(() => onTimeOut(), timeOut)
    }, [timeOut, onTimeOut])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prev => { return (prev - 200) })
            console.log(remainingTime)
        }, 200)
    }, [])
    return (
        <progress max={timeOut} value={remainingTime} id="question-time" />
    )
}

export default QuestionTimer