/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import { useState } from "react";

export default () => {

    const [showMenu, setShowMenu] = useState(false);

    const onChange = (e) => {
        setShowMenu(!showMenu);
    }
    
    return (
        <>
            <div onClick={onChange}>{showMenu ? 'Hide Menu' : 'Show Menu'}</div>
            {
                showMenu &&
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
            }
        </>
    );
}