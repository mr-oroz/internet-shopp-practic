import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../services/services';
const Product = () => {
    let { product } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const data = async () => {
            await services.getCategoryProduct(product)
                .then(res => {
                    setData(res.data.products)
                })
        }
        data()
    }, [product])

    return (
        <div>
            {product}
            {
                data.map(elem =>{
                    return <p key={elem.id}>{elem.title}</p>
                })
            }
        </div>
    );
};

export default Product;