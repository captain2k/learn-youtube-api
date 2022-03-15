import * as Types from './Constant';

export const search = (payload) => {
    return {
        type: Types.SEARCH,
        payload
    }
}

export const watchVideo = (payload) => {
    return {
        type: Types.WATCHVIDEO,
        payload
    }
}
