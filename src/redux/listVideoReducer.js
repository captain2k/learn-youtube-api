import * as Types from './Constant'


const initialState = []


const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH:
            return [...action.payload]
        default:
            return state
    }
}


export default videoReducer;