import React, {useContext} from 'react';
import { MyContext } from '../../context/my-context';

const CartItem = ({title, images, price, id}) => {
    const {deleteCart} = useContext(MyContext)
    return (
        <div className='product-item'>
            <img src={images[0]} alt="" />
            <p>{title}</p>
            <p>{price}$</p>
            <button onClick={() => deleteCart(id)}>delete item</button>
        </div>
    );
};

export default CartItem;