import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Maybe I'll be changed</p>
        </div>

    )
}
export default userOutput;