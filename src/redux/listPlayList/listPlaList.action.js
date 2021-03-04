import {isPlaylist} from './listPlayList.type'

export const setPlaylist = (item) => ({
  type: isPlaylist.IS_PLAYLIST,
  payload: item,
});
