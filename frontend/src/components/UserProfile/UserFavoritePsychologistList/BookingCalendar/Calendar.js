import React, { useState } from 'react'
import './Calendar.css'

import CalendarReact from 'react-calendar'

const Calendar = (props) => {

    const [state, setState] = useState({
        value: new Date(),
    })

    const [show, setShow] = useState(false);

    const onChange = value => setState({ value })

    const { value } = state

    const onClickDay = () => {
        setState({value})
    }

    return (
        <>
        <div className="booking-calendar-container">
        <CalendarReact 
        onChange={onChange}
        value={value}
        onClickDay={console.log(value)}
        />

        <div className="bookingBox">
            <div className="bookingChoices">
                <p>8:00 - 9:30</p> <button>Book now</button>
            </div>
            <div className="bookingChoices">
                <p>9:30 - 11:00</p> <button>Book now</button>
            </div>
            <div className="bookingChoices">
                <p>13:30 - 15:00</p> <button>Book now</button>
            </div>
            <div className="bookingChoices">
                <p>11:00 - 12:30</p> <button>Book now</button>
            </div>
            <div className="bookingChoices">
                <p>15:00 - 16:30</p> <button>Book now</button>
            </div>
            <div className="bookingChoices">
                <p>16:30 - 18:00</p> <button>Book now</button>
            </div>
            <div className="bookingChoices">
                <p>18:00 - 19:30</p> <button>Book now</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Calendar