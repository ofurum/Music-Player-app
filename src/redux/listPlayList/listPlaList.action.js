import {isPlaylist} from './listPlayList.type'

export const setPlaylist = (item) => ({
  type: isPlaylist.IS_PLAYLIST,
  payload: item,
});

export const setIsPlaylist = (IdentifyingPlaylist) => ({
  type: isPlaylist.IDENTIFYING_ALBUMS,
  payload: IdentifyingPlaylist,
});
