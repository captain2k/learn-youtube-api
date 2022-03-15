import * as Types from './Constant'

const initialState = {}

const listVideoInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.WATCHVIDEO:
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default listVideoInfoReducer