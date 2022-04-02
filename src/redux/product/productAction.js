import axios from "axios"

const sendProductRequestAction = () => {
    return {
        type : "SEND_REQUEST"
    }
}
const getProductSuccessAction = (product) => {
    return {
        type : "GET_DATA_SUCCESS" ,
        payload : product
    }
}
const getProductFailAction = (error) => {
    return {
        type : "GET_DATA_FAIL" ,
        payload : error
    }
}

export const getProductsAction = () => {
    return (dispatch) => {
        dispatch(sendProductRequestAction());
        axios.get("https://fakestoreapi.com/products")
        .then(resp => {
            const products = resp.data ;
            console.log(products)
            dispatch(getProductSuccessAction(products))
        })
        .catch(error => {
            const message = error.message ;
            dispatch(getProductFailAction(message))
        })
    }
}