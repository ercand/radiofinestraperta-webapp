import React, { useState, useEffect, Children } from 'react'

const ClockUsingHooks : React.FC= (props) => {
    console.log("Children");
    console.log(props.children);
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        return () => clearInterval(tick)
    })
    return (
        <div className="clock">
            <h1>Hello! This is a function component clock.</h1>
            <h2>It is {time.toLocaleTimeString()}.</h2>
        </div>
    )
}

export default ClockUsingHooks