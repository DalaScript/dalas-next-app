/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import { useState } from "react";

export default () => {

    const [text, setText] = useState('ნიკა');

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            {text && <h1>სალამი {text}!</h1>}
            <input 
                type="text" 
                value={text}
                onChange={onChange}
                placeholder="ჩაწერე შენი სახელი"
            />
        </>
    );
}