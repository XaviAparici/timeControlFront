import moment from 'moment';
import { useState, useEffect } from 'react';

const Time = () => {

    const [date, setdate] = useState(moment().format("MM/D/YYYY HH:mm:ss"))
    useEffect( () => {
        setInterval(() => {
            setdate(moment().format("MM/D/YYYY HH:mm:ss"))
        }, 1000);
    })

    return(
        <p>{date}</p>
    )
}

export default Time;