import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Nav = () => {
    const [list] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ])
    let navigate = useNavigate()
    const toggleClick = (number) => {
        console.log(number)
        navigate(`/product/${number}`)
    }
    return (
        <div className='nav-menu'>
            <h3>category products</h3>
            <ul>
                {
                    list.map(elem => {
                        return <li onClick={() => toggleClick(elem)}>{elem}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Nav;
