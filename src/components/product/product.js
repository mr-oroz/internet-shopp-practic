import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../services/services';
import { MyContext } from '../../context/my-context';

const Product = () => {
    let { product } = useParams()
    // useEffect(() => {
    //     const data = async () => {
    //         await services.getCategoryProduct(product)
    //             .then(res => {
    //                 console.log(res)
    //                 setData(res.data.products)
    //             })
    //     }
    //     data()
    // }, [product])

    return (
        <>
            {/* <h1>{product} ({data.length})</h1> */}
            <div className='product'>
                {/* {
                    data.map(elem => {
                        return (
                            <div className='product-item'>
                                <img src={elem.images[0]} alt="" />
                                <p>{elem.price} $</p>
                                <button className='btn btn-outline-success'>add to cart</button>
                            </div>
                        )
                    })
                } */}

            </div>
        </>
    );
};

export default Product;