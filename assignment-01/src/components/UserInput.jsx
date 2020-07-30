import React from 'react';

const UserOutput = (props) => {
    const inputStyle = {
        border: '1px solid red'
    }
    return (
        <div>
            <input
                type="text"
                style={inputStyle}
                onChange={props.changed}
                value={props.currName}
            />
        </div>
    )

}
export default UserOutput;



