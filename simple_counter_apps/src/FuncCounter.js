import React, { useState } from 'react';

const FuncCounter = () => {
    const [count, setCount] = useState(0);
    const onClickRequest = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <label >Function Counter</label><p> {count}</p>
            <button onClick={onClickRequest}> Count</button>
        </div>
    );
}


export default FuncCounter; 