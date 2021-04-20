import React, {useEffect}from 'react';
import './directory.styles.scss';
import CardSection from '../../components/section/section.component'
import { connect } from "react-redux";
import {setLatestSongs} from '../../redux/recently released/recently-released.action';
import PlayList from '../../components/playlists/playlist.component';
import Browse from '../../components/Browse/Browse.component';
import Loading from '../../components/Load/Loader.component'

const Directory = ({ setLatestSongs, latestPlayList }) => {
  useEffect(() => {
    const musicData = async () => {
      console.log("fetching");
      try {
        const response = await fetch(
          "https://cors.bridged.cc/https://api.deezer.com/chart"
        );
        const data = await response.json();

        console.log("data", data);
        setLatestSongs(data);
        console.log("fetched");
      } catch (error) {
        const errorMessage = new Error(error.message);
        console.log(errorMessage);
      }
    };

    void musicData();
  }, []);
  //if (latestPlayList === null) return latestPlayList;
  return (
    <div className="directory">
      <div className="directory-hidden">
        <div className="directory-sections">
          {!latestPlayList ? (
            <Loading />
          ) : (
            <>
              <CardSection
                latestPlayList={latestPlayList.tracks.data}
                title="Released this week"
              />
              <PlayList
                ListOfPlayLists={latestPlayList.playlists.data}
                title="Feaured Playlists"
              />
              <Browse browse={latestPlayList.albums.data} title="Browse" />
            </>
          )}
          {/* <CardSection data={data.playlists} title="Feaured Playlists" />
            <CardSection data={data.albums} title="Browse" /> */}
          {/* <PlayBox musicData={tracks} /> */}
        </div>
      </div>
    </div>
  );
};

    const mapStateToProps = (state) => ({
      latestPlayList: state.recentlyReleased.latestPlayList,
    });

const mapDispatchToProps = (dispatch) => ({
  setLatestSongs: data => dispatch(setLatestSongs(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Directory);