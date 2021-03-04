import {addPlaylist} from './addPlaylist.types';

export const addNewPlaylist = playlist => ({
    type: addPlaylist.ADD_PLAYLIST,
    payload: playlist
})