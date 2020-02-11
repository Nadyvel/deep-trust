import React from 'react'
import './Emergency.css'

const Emergency = (props) => {
    return (
        <>
            <div className='emergency-container'>
            <div className='emergency-title-container'>
                <h1>In case of emergency call these numbers:</h1>
            </div>
            <div className='emergency-message-container'>
                <p>Ambulance: 144</p>
                <p>Police: 117</p>
                <p>24/7 hot-line: 0800 000 00 00 </p>
            </div>
            </div>
        </>
    )
}

export default Emergency;