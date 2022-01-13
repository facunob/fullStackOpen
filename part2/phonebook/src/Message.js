import React from 'react';


const Message = ({ message }) => {
    return( 
        <div className={message.class}>
            {message.value}
        </div>
    );
}

export default Message;