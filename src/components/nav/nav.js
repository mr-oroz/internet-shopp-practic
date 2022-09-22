import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../../services/services';
const Nav = () => {
    const [categories, setCategories] = useState([])
    
    const data = useCallback(async () => await services.getCategories(), [services.getCategories])

    useEffect(() => {
        data().then(res => setCategories(res.data))
    })

    let navigate = useNavigate()

    const toggleClick = async (title) => {
        navigate(`/product/${title}`)
    }
    return (
        <div className='nav-menu'>
            <h3>category products</h3>
            <ul>
                {
                    categories.map(elem => {
                        return <li
                            key={elem}
                            onClick={() => toggleClick(elem)}>
                            {elem}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Nav;
