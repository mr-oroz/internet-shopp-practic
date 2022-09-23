import React, {useContext} from 'react';
import CartItem from '../../components/cart-item/cart-item';
import { MyContext } from '../../context/my-context';
import { services } from '../../services/services';
const Cart = () => {
    const {cart} = useContext(MyContext)
    const onOrder = async () => {
        await services.postOrderProduct({name: 'Jumabeko Oroz', title: 'iphone 9',  phone: '+996559210390'})
            .then(res => console.log(res))
    }
    return (
        <div>
            <h1>Cart</h1>
            {cart.map(elem => {
                return (<CartItem {...elem}/>)
            })}
            <button onClick={onOrder}>оформить товар</button>
        </div>
    );
};

export default Cart;