

const initialState = {
    loading :false ,
    data : [] ,
    error : ""
}
 const productReducer = (state = initialState , action) => {
    switch(action.type){
        case "SEND_REQUEST" :   
            return {
                ...state ,
                loading : true
            }
        case "GET_DATA_SUCCESS" :
            return {
                loading : false ,
                data : action.payload
            }
        case "GET_DATA_FAIL" :
            return {
                loading : false ,
                data : [] ,
                error : action.payload
            }
        default : return state
    }
}
export default productReducer