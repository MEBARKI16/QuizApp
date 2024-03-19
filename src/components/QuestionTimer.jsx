import React, { useEffect, useState } from 'react'

const QuestionTimer = ({ timeOut, onTimeOut }) => {
    const [remainingTime, setRemainingTime] = useState(timeOut)
    useEffect(() => {
        setTimeout(() => onTimeOut(), timeOut)
        return setRemainingTime(timeOut)
    }, [timeOut, onTimeOut])

    const x = useEffect(() => {
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