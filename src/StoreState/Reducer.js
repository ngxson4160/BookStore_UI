import * as actionType from "./Constrains";

const initState = {
    authorId: "",
    rating: "",
    price: "",
};

function reducer(state, action) {
    switch (action.type) {
        case actionType.ADD_AUTHOR_ID:
            return {
                ...state,
                authorId:
                    state.authorId === "" ? state.authorId + action.payload : state.authorId + "," + action.payload,
            };
        case actionType.DELETE_AUTHOR_ID:
            let temp = state.authorId;
            if (temp.indexOf(action.payload) !== 0) {
                temp = temp.replace("," + action.payload, "");
            }
            if (temp.indexOf(action.payload) === 0 && temp.length === action.payload.length) {
                temp = temp.replace(action.payload, "");
            }
            if (temp.indexOf(action.payload) === 0 && temp.length > action.payload.length) {
                temp = temp.replace(action.payload + ",", "");
            }
            return {
                ...state,
                authorId: temp,
            };
        case actionType.ADD_RATING:
            if (state.rating === action.payload) {
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
                if (state.price === action.payload) {
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
