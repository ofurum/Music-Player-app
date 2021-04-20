import React, {useEffect} from 'react';
//import PlaylistDisplay from '../../components/PlaylistDisplay/PlaylistDisplay.component'
import './playlist.styles.scss';
import Card from '../../components/Card/card.component'
import { connect } from "react-redux";
import { setPlaylist } from "../../redux/listPlayList/listPlaList.action";
import Loading from '../../components/Load/Loader.component'
const PlayListPage = ({ match, playlist, setPlaylist, isPlaylist}) => {

  useEffect(() => {
    const getData = async () => {
      console.log("isFetching", "playlistpage");
      try {
        const response = await fetch(
          `https://cors.bridged.cc/https://api.deezer.com/${isPlaylist ? "playlist": "album"}/${match.params.id}`
        );
        const playlistData = await response.json();
        console.log("playlistpage", playlistData);
        setPlaylist(playlistData);
      } catch (error) {
        return  new Error(error.message);
      }
    };

    getData();
  }, []);
//  if(playlist === null) return playlist
 if(!playlist || playlist.error){
   return <Loading />
 }
  return (
    <div className="playlist">
      <h1>{playlist?.title}</h1>
      <div className="playlist-card">
        {playlist?.tracks?.data?.map((track, index) =>{ 
          return (
            <Card
              key={track.id}
              image={
                track.album ? track.album.cover_medium : playlist.cover_medium
              }
              title={track.title}
              freshData={playlist}
              index={index}
            />
          );})}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  playlist: state.recentlyReleased.playlist,
  isPlaylist: state.recentlyReleased.isPlaylist
});
const mapDispatchToProps = (dispatch) => ({
    setPlaylist: item => dispatch(setPlaylist(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayListPage);