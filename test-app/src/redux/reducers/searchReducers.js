import { ACTIVATE_SEARCH, DEACTIVATE_SEARCH } from "../types/searchTypes";

const initialState = {
    isActive: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_SEARCH:
            return {
                ...state, isActive:true
            }
        case DEACTIVATE_SEARCH:
            return {
                ...state, isActive:false
            }
        default:
            return state
    }
}
