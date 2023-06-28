import * as actionType from "./Constrains";

const initState = {
    authorId: "",
    rating: "",
    price: "",
};

function reducer(state, action) {
    switch (action.type) {
        case actionType.ADD_AUTHOR_ID:
            if(!action.payload){
                return {
                    ...state,
                    authorId: "",
                };
            }
            return {
                ...state,
                authorId: action.payload
            };
        case actionType.ADD_RATING:
            if (!action.payload) {
                return {
                    ...state,
                    rating: "",
                };
            } else {
                return {
                    ...state,
                    rating: action.payload,
                };
            }
            case actionType.ADD_PRICE:
                if (!action.payload) {
                    return {
                        ...state,
                        price: "",
                    };
                } else {
                    return {
                        ...state,
                        price: action.payload,
                    };
                }
        default:
            throw new Error("Invalid Actions");
    }
}

export { initState };
export default reducer;
