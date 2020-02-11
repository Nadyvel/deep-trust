import React, { useState } from 'react'
import './Calendar.css'

import CalendarReact from 'react-calendar'

const Calendar = (props) => {

    const [state, setState] = useState({
        value: new Date()
    })

    const onChange = value => setState({ value })

    // const { value } = state

    // const data = state.value.map((val) => {
    //     return val
    // })

    const data = state.value.toDateString().split(" ")
    console.log('state', data)

    return (
        <>
        <div className="booking-calendar-container">
            <div className="booking-calendar-wrapper" >
        <CalendarReact 
        onChange={onChange}
        value={state.value}
        onClickDay={console.log(state)}
        />

        <div className="bookingBox">
            <h3>{data[1]} {data[2]} {data[3]}</h3>
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
        </div>
        </>
    )
}

export default Calendar