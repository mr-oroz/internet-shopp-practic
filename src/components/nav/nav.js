import React, { useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../../services/services';
import { MyContext } from '../../context/my-context';

const Nav = () => {
  const { categories, getCategoryState } = useContext(MyContext)
  useEffect(() => {
    const data = async () => {
      await services.getCategories()
        .then(res => {
          getCategoryState(res.data)
        })
    }
    data()
  })

  let navigate = useNavigate()

  const toggleClick = (title) => {
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
