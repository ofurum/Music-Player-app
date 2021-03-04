import {RECENTLY_RELEASED_DATA} from './recently-released-types'

export const setLatestSongs = data => ({
    type: RECENTLY_RELEASED_DATA.TRACK_DATA,
    payload: data
})