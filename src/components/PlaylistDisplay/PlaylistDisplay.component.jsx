import React, {useEffect, useState}from 'react';
import {connect} from 'react-redux';
import {setPlaylist} from '../../redux/listPlayList/listPlaList.action'
import './PlaylistDisplay.styles.scss';


const PlaylistDisplay = ({match, playlist,setPlaylist}) => {
console.log("PlaylistDisplay", match);
    useEffect(() => {
       const getData = async () => {
           console.log('isFetching', 'playlistpage');
           try{
               const response = await fetch( 
                 `https://cors.bridged.cc/https://api.deezer.com/playlist/${match.params.id}`
               );
               const playlistData = await response.json()
               console.log('playlistDisplay', playlistData)
               setPlaylist(playlistData)

           }catch(error){
                 const errorMessage = new Error(error.message);
                 console.log(errorMessage);
           }
       }

       getData()
},[])
    return (
      <div className="Playlist-display">
        <h1>playlist</h1>
      </div>
    );
}

const mapStateToProps = (state) => ({
    playlist: state.recentlyReleased.playlist
})
const mapDispatchToProps = (dispatch) => ({
    setPlaylist: item => dispatch(setPlaylist(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDisplay);