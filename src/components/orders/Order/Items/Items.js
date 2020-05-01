import React from 'react';

const Items = (props) => {
    const items = props.items;
    return(
        <div>
            {Object.keys(items).map((key, index) => {
                    return(<p key={key + index}>{key} x{items[key]}</p>);})}
        </div>
    );
};

export default Items