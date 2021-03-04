import React, {useEffect} from 'react';
import PlaylistDisplay from '../../components/PlaylistDisplay/PlaylistDisplay.component'
import './playlist.styles.scss';
import { connect } from "react-redux";
import { setPlaylist } from "../../redux/listPlayList/listPlaList.action";
const PlayListPage = ({ match, playlist, setPlaylist }) => {
   console.log('Play',match )
//   useEffect(() => {
//     const getData = async () => {
//       console.log("isFetching", "playlistpage");
//       try {
//         const response = await fetch(
//           `https://cors.bridged.cc/https://api.deezer.com/playlist/${match.params.id}`
//         );
//         const playlistData = await response.json();
//         console.log("playlistpage", playlistData);
//         setPlaylist(playlistData);
//       } catch (error) {
//         const errorMessage = new Error(error.message);
//         console.log(errorMessage);
//       }
//     };

//     getData();
//   }, []);
  return (
    <div className="Playlist">
      {/* <h1>{playlistData.tit}</h1> */}
      <PlaylistDisplay />
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   playlist: state.recentlyReleased.playlist,
// });
// const mapDispatchToProps = (dispatch) => ({
//     setPlaylist: item => dispatch(setPlaylist(item))
// })

export default PlayListPage;