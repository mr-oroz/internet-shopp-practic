import React, { useContext, useState } from 'react';
import CartItem from '../../components/cart-item/cart-item';
import { MyContext } from '../../context/my-context';
import { services } from '../../services/services';
import Order from '../../components/order/order';
import { Button } from 'react-bootstrap';
const Cart = () => {
    const [modalShow, setModalShow] = useState(false);
    const { cart } = useContext(MyContext)
    const onOrder = () => {
        setModalShow(true)
    }
    return (
        <div>
            <h1>Cart</h1>
           <div className="product">
           {cart.map(elem => {
                return (<CartItem {...elem} />)
            })}
           </div>
            <Order show={modalShow}
                onHide={() => setModalShow(false)} />
            <button onClick={onOrder}>оформить товар</button>
        </div>
    );
};

export default Cart;