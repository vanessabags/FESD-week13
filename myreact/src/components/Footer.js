import React from 'react';

let date = new Date();

let singleUser = {
    name: 'Vanessa',
    time: date.toDateString()
}

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <p>Today: {singleUser.time}</p>
            </div>
        )
    }
}