import axios from "axios";

axios.defaults.baseURL='https://dummyjson.com/products';

const getCategories =  () => {
    return axios.get('/categories')
}

const getCategoryProduct = (product) => {
    return axios.get(`/category/${product}`)
}
const postOrderProduct = (products) => {
    const token = '5763617762:AAH9Jf5vUK25w6iZy_jfswvj4vxZAdYRcYo'
    const chat_id = '528774019'
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`
    return axios.post(api_url, {
        parse_mode: 'HTML',
        text: `<b>Новый Заказ</b>\n\nФИО: ${products.name}\n\товар: ${products.title}\n\телефон номер заказчика: ${products.phone}`,
        chat_id
    })
}
export const services = {
    getCategories,
    getCategoryProduct,
    postOrderProduct
}