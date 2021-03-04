import React, {useEffect} from 'react';
import PlaylistDisplay from '../../components/PlaylistDisplay/PlaylistDisplay.component'
import './playlist.styles.scss';
import Card from '../../components/Card/card.component'
import { connect } from "react-redux";
import { setPlaylist } from "../../redux/listPlayList/listPlaList.action";
const PlayListPage = ({ match, playlist, setPlaylist, isPlaylist}) => {
//    console.log('Play',match , 'list',playlist.tracks.data)
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
        const errorMessage = new Error(error.message);
        console.log(errorMessage);
      }
    };

    getData();
  }, []);
  if(playlist === null) return playlist
  return (
    <div className="playlist">
      <h1>{playlist.description ? playlist.description : playlist.title}</h1>
      <div className="playlist-card">
        {playlist.tracks.data.map((track, index) => (
          <Card
            key={track.id}
            index={index}
            image={
              track.album ? track.album.cover_medium : playlist.cover_medium
            }
            title={track.title}
          />
        ))}
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