import React, { useEffect, useState } from 'react'

const QuestionTimer = ({ timeOut, onTimeOut }) => {
    const [remainingTime, setRemainingTime] = useState(timeOut)
    useEffect(() => {
        const timeout = setTimeout(() => onTimeOut(), timeOut)
        return () => clearTimeout(timeout)
    }, [timeOut, onTimeOut])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prev => { return (prev - 200) })
        }, 200)
        return () => clearInterval(interval)
    }, [])
    return (
        <progress max={timeOut} value={remainingTime} id="question-time" />
    )
}

export default QuestionTimer