const addFirstItem = (item) => {
    return {
        type : "ADD_FIRST_ITEM" ,
        payload : item 
    }
}
const increaseItem = (item) => {
    return {
        type : "INCREASE_ITEM" ,
        payload : item 
    }
}
const decreaseItem = (item) => {
    return {
        type : "DECREASE_ITEM" ,
        payload : item 
    }
}
const removeItem = (item) => {
    return {
        type : "REMOVE_ITEM" ,
        payload : item 
    }
}
const clearCart = () => {
    return {
        type : "CLEAR_CARD" , 
    }
}
const checkoutCart = () => {
    return {
        type : "CHECKOUT" , 
    }
}
const clearCheckOut = () => {
    return {
        type : "CLEAR_CHECKOUT" , 
    }
}

export {addFirstItem , increaseItem ,decreaseItem , removeItem , clearCart , clearCheckOut , checkoutCart}