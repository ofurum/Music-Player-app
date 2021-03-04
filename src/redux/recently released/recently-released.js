import {RECENTLY_RELEASED_DATA} from './recently-released-types'
import {addPlaylist} from '../addPlaylist/addPlaylist.types';
import {isPlaylist} from '../listPlayList/listPlayList.type'
const INITIALIZE_STATE = {
    latestPlayList: null,
    addRealeases: null,
    playlist: null,
    isPlaylist: true,
}

const recentlyReducer = (state = INITIALIZE_STATE, action) =>{
    if(action.type === RECENTLY_RELEASED_DATA.TRACK_DATA){
        return {
          ...state,
          latestPlayList: action.payload
        };
    }
     if (action.type === addPlaylist.ADD_PLAYLIST) {
       return {
         ...state,
         addRealeases: action.payload,
       };
     }
     if(action.type === isPlaylist.IS_PLAYLIST){
         return {
             ...state,
             playlist: action.payload
         }
     }
    if(action.type === isPlaylist.IDENTIFYING_ALBUMS){
        return {
          ...state,
          isPlaylist: !state.isPlaylist,
        };
    }
    return state;
}

export default recentlyReducer;