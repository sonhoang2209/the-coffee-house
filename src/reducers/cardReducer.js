const initialState = {
    card: []
};
  
export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CARD":
            const isIndExisted = state.cart?.findIndex(e => e?._id === action.data?._id)
            if(isIndExisted !== -1 ) {
                state.card(isIndExisted).quantify = state.card(isIndExisted).quantify + 1
                return {
                    card: [...state.card]
                }
            } else {
                return {
                    card: [...state.gifts, action.data]
                }
            }

        case "INCREASE_QUANTIFY":
            const isIndExistedQuantify = state.cart?.findIndex(e => e?._id === action.data?._id)
            state.card(isIndExistedQuantify).quantify = state.card(isIndExistedQuantify).quantify + 1
            return {
                card: [...state.card]
            }

        case "REDUCE_QUANTIFY":
            const isIndExistedQuantify = state.cart?.findIndex(e => e?._id === action.data?._id)
            state.card(isIndExistedQuantify).quantify = state.card(isIndExistedQuantify).quantify - 1
            return {
                card: [...state.card]
            }
        

        default:
            return state;
    }
}
