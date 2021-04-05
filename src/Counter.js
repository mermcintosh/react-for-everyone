import React, { useState } from 'react';

export function Counter() {

    const [ count, setCount ] = useState(0);
    //this is how we get state to work in our react components
    //the 0 is the default state
    return (
        <div>
            <h3>{count}</h3>
            <button
            onClick={() => setCount(count + 1 )}
            >+</button>
        </div>
    )
}