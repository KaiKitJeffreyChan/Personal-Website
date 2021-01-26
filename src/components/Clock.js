import React, { useState, useEffect } from 'react'

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div style={{fontSize:"13px", color: "white"}}>
            {clockState}
        </div>
    )
}

export default Clock
