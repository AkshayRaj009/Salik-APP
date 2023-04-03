const { HOMEDATA } = require("../../constants/constants");


const initialState = {
    homeData: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HOMEDATA:
            return {
                ...state,
                homeData: action.payload
            }
        default:
            return state;
    }
}

